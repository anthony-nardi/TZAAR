import { Map } from "immutable";
import {
  DEBUG,
  GAME_STATE_BOARD_CANVAS,
  PLAYER_ONE,
  PLAYER_TWO,
  TURN_PHASES,
  TOTT,
  TZARRA,
  TZAAR,
  GamePieceRecord
} from "./constants";
import { drawInitialGrid } from "./cachedBoard";
import {
  drawCoordinates,
  drawGameBoardState,
  drawGamePiece,
  renderMovingPiece,
  renderInitializingBoard
} from "./renderHelpers";
import {
  getBoardCoordinatesFromPixelCoordinates,
  getPixelCoordinatesFromBoardCoordinates,
  setupBoardWithPieces,
  setupBoardWithPiecesNotRandom,
  getValidCaptures,
  getValidStacks
} from "./gameBoardHelpers";
import {
  movingPiece,
  gameBoardState,
  setNewgameBoardState,
  setMovingPiece,
  nextPhase,
  currentTurn,
  turnPhase
} from "./gameState";
import {
  getGameStatesToAnalyze,
  minimax,
  getWinner,
  getGameStateScore
} from "./ai";

function getPixelCoordinatesFromUserInteraction(event) {
  const x = event.x || event.offsetX || event.changedTouches[0].clientX;
  const y = event.y || event.offsetY || event.changedTouches[0].clientY;
  return [x, y];
}

function isCurrentPlayerPiece(boardCoordinate) {
  return gameBoardState.getIn([boardCoordinate, "ownedBy"]) === currentTurn;
}

function handleClickPiece(event) {
  const [x, y] = getPixelCoordinatesFromUserInteraction(event);
  const boardCoordinate = getBoardCoordinatesFromPixelCoordinates(x, y);

  if (!isCurrentPlayerPiece(boardCoordinate)) {
    return;
  }

  if (currentTurn === PLAYER_TWO) {
    return;
  }

  setNewgameBoardState(
    gameBoardState.setIn([boardCoordinate, "isDragging"], true)
  );
  setMovingPiece(boardCoordinate);
}

function handleMovePiece(event) {
  const [x, y] = getPixelCoordinatesFromUserInteraction(event);
  if (!movingPiece) {
    return;
  }
  drawGameBoardState();
  drawGamePiece(gameBoardState.get(movingPiece), x, y);
}

function handleDropPiece(event) {
  if (!movingPiece) {
    return;
  }

  const [x, y] = getPixelCoordinatesFromUserInteraction(event);
  const toCoordinates = getBoardCoordinatesFromPixelCoordinates(x, y);

  setNewgameBoardState(
    gameBoardState.setIn([movingPiece, "isDragging"], false)
  );

  if (!gameBoardState.get(toCoordinates)) {
    setMovingPiece(null);
    drawGameBoardState();
    return;
  }

  const validCaptures = getValidCaptures(movingPiece, gameBoardState);
  const validStacks = getValidStacks(movingPiece, gameBoardState);
  const isValidCapture = validCaptures.includes(toCoordinates);
  const isValidStack = validStacks.includes(toCoordinates);

  if (turnPhase === TURN_PHASES.CAPTURE && isValidCapture) {
    capturePiece(movingPiece, toCoordinates);
  } else if (turnPhase === TURN_PHASES.STACK_OR_CAPTURE) {
    if (isValidCapture) {
      capturePiece(movingPiece, toCoordinates);
    }
    if (isValidStack) {
      stackPiece(movingPiece, toCoordinates);
    }
  }

  setMovingPiece(null);
  drawGameBoardState();

  if (turnPhase === TURN_PHASES.CAPTURE && currentTurn === PLAYER_TWO) {
    document.getElementById("loadingSpinner").classList.remove("hidden");
    setTimeout(() => moveAI(), 50);
  }
}

function capturePiece(fromCoordinates, toCoordinates) {
  const fromPiece = gameBoardState.get(fromCoordinates);
  setNewgameBoardState(
    gameBoardState.set(fromCoordinates, false).set(toCoordinates, fromPiece)
  );
  checkGameStateAndStartNextTurn();
}

function stackPiece(fromCoordinates, toCoordinates) {
  const fromPiece = gameBoardState.get(fromCoordinates);
  const toPiece = gameBoardState.get(toCoordinates);

  setNewgameBoardState(
    gameBoardState
      .set(fromCoordinates, false)
      .set(toCoordinates, fromPiece)
      .setIn(
        [toCoordinates, "stackSize"],
        fromPiece.stackSize + toPiece.stackSize
      )
  );
  checkGameStateAndStartNextTurn();
}

function checkGameStateAndStartNextTurn() {
  nextPhase();

  const winner = getWinner(gameBoardState);
  let message = winner === PLAYER_TWO ? "You lost." : "You won!";
  if (winner) {
    alert(`${message}`);
  }
}

function moveAI() {
  if (currentTurn !== PLAYER_TWO) {
    return;
  }

  const bestMove = getBestMove(gameBoardState, PLAYER_TWO);

  if (!bestMove && turnPhase === TURN_PHASES.STACK_OR_CAPTURE) {
    checkGameStateAndStartNextTurn();
    return;
  }

  const [firstMove, secondMove] = bestMove.split("=>");
  const [firstFromCoordinate, firstToCoordinate] = firstMove.split("->");
  const [secondFromCoordinate, secondToCoordinate] = secondMove.split("->");
  const fromPiece = gameBoardState.get(firstFromCoordinate);

  // dont render moving piece in the same spot...
  setNewgameBoardState(gameBoardState.set(firstFromCoordinate, false));
  const fromFirstPixelCoodinate = getPixelCoordinatesFromBoardCoordinates(
    firstFromCoordinate
  );
  const toFirstPixelCoordinate = getPixelCoordinatesFromBoardCoordinates(
    firstToCoordinate
  );

  const fromSecondPixelCoodinate = getPixelCoordinatesFromBoardCoordinates(
    secondFromCoordinate
  );
  const toSecondPixelCoordinate = getPixelCoordinatesFromBoardCoordinates(
    secondToCoordinate
  );

  DEBUG &&
    console.log(`MOVING FROM ${firstFromCoordinate} TO ${firstToCoordinate}`);

  renderMovingPiece(
    fromPiece,
    fromFirstPixelCoodinate,
    toFirstPixelCoordinate,
    2000,
    Date.now(),
    () => {
      setNewgameBoardState(gameBoardState.set(firstToCoordinate, fromPiece));
      checkGameStateAndStartNextTurn();
      drawGameBoardState();

      const secondFromPiece = gameBoardState.get(secondFromCoordinate);
      setNewgameBoardState(gameBoardState.set(secondFromCoordinate, false));

      DEBUG &&
        console.log(
          `MOVING FROM ${secondFromCoordinate} TO ${secondToCoordinate}`
        );

      renderMovingPiece(
        secondFromPiece,
        fromSecondPixelCoodinate,
        toSecondPixelCoordinate,
        2000,
        Date.now(),
        () => {
          const toPiece = gameBoardState.get(secondToCoordinate);

          setNewgameBoardState(
            gameBoardState
              .set(secondToCoordinate, secondFromPiece)
              .setIn(
                [secondToCoordinate, "stackSize"],
                secondFromPiece.stackSize + toPiece.stackSize
              )
          );
          checkGameStateAndStartNextTurn();
          drawGameBoardState();
        }
      );
    }
  );
}

function getBestMove(gameState, turn) {
  DEBUG && console.time("all game states");

  const allPossibleStatesAfterTurn = getGameStatesToAnalyze(gameState, turn);

  let depth = 1;

  if (allPossibleStatesAfterTurn.size < 500) {
    depth = 2;
  }

  if (allPossibleStatesAfterTurn.size < 150) {
    depth = 3;
  }

  if (allPossibleStatesAfterTurn.size < 20) {
    depth = 4;
  }

  DEBUG && console.timeEnd("all game states");
  DEBUG &&
    console.log(
      `ALL POSSIBLE GAME STATES AT DEPTH ${depth}: ${
        allPossibleStatesAfterTurn.size
      }`
    );

  DEBUG && console.time("get scores");

  // For every move AI makes, give minimax the state and let player one make its move...
  const bestMove = minimax(gameState, PLAYER_TWO, depth)[1];
  DEBUG && console.timeEnd("get scores");

  document.getElementById("loadingSpinner").classList.add("hidden");
  return bestMove;
}

export function initGame(SETUP_STYLE) {
  const piecesToSetup =
    SETUP_STYLE !== "RANDOM"
      ? setupBoardWithPiecesNotRandom()
      : setupBoardWithPieces();
  drawInitialGrid();
  renderInitializingBoard(piecesToSetup, () => {
    drawGameBoardState();
    drawCoordinates();
  });
}

const isMobile = "ontouchstart" in document.documentElement;
const mouseUpEvent = isMobile ? "touchend" : "mouseup";
const mouseDownEvent = isMobile ? "touchstart" : "mousedown";
const mouseMoveEvent = isMobile ? "touchmove" : "mousemove";

GAME_STATE_BOARD_CANVAS.addEventListener(mouseDownEvent, handleClickPiece);
GAME_STATE_BOARD_CANVAS.addEventListener(mouseMoveEvent, handleMovePiece);
GAME_STATE_BOARD_CANVAS.addEventListener(mouseUpEvent, handleDropPiece);

// window.testMinimax = function() {
//   const setupToTest = setupBoardWithPiecesNotRandom();

//   let gameState = gameBoardState;

//   setupToTest.forEach((piece, boardCoordinate) => {
//     gameState = gameState.set(boardCoordinate, piece);
//   });

//   const startingMoves = getGameStatesToAnalyze(gameState, PLAYER_TWO);
//   console.log(`starting moves to check : ${startingMoves.size}`);
//   // console.time(`${allMovesToCheck.size} depth 1`);

//   // allMovesToCheck.map(gameStateToCheck => {
//   //   return minimax(gameStateToCheck, PLAYER_ONE, 1);
//   // });
//   // console.timeEnd(`${allMovesToCheck.size} depth 1`);

//   window.minimaxIterations = 0;

//   const minimaxResult = minimax(gameState, PLAYER_TWO, 2);

//   console.log(`TOTAL ITERATIONS ${window.minimaxIterations}`);
// };

// testMinimax();

// window.getGameStateScore = getGameStateScore;

// window.testScoring = function() {
//   const STARTING = Map({
//     // OUTER RING
//     "4,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "5,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "6,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "7,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "8,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,1": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,2": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "7,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "6,6": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "5,7": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "4,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "3,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "2,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "1,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "0,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,7": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,6": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "1,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "2,2": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "3,1": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     // OUTER RING - 1
//     "4,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "5,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "6,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "7,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "7,2": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "7,3": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "7,4": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "6,5": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "5,6": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "4,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "3,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "2,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "1,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "1,6": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "1,5": null,
//     "1,4": null,
//     "2,3": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "3,2": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     // OUTER RING - 2
//     "4,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "5,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "6,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "6,3": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "6,4": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "5,5": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "4,6": null,
//     "3,6": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "2,6": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "2,5": null,
//     "2,4": new GamePieceRecord({
//       type: TZARRA,
//       ownedBy: PLAYER_ONE,
//       stackSize: 2
//     }),
//     "3,3": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     // INNER RING
//     "4,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "5,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "5,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "4,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "3,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "3,4": new GamePieceRecord({
//       type: TZAAR,
//       ownedBy: PLAYER_TWO,
//       stackSize: 2
//     })
//   });

//   const CATPURE_STACK = Map({
//     // OUTER RING
//     "5,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "4,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "6,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "7,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "8,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,1": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,2": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "7,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "6,6": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "5,7": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "4,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "3,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "2,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "1,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "0,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,7": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,6": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "1,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "2,2": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "3,1": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     // OUTER RING - 1
//     "4,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "5,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "6,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "7,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "7,2": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "7,3": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "7,4": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "6,5": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "5,6": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "4,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "3,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "2,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "1,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "1,6": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "1,5": null,
//     "1,4": null,
//     "2,3": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "3,2": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     // OUTER RING - 2
//     "4,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "5,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "6,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "6,3": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "6,4": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "5,5": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "4,6": null,
//     "3,6": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "2,6": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "2,5": null,
//     "2,4": new GamePieceRecord({
//       type: TZAAR,
//       ownedBy: PLAYER_TWO,
//       stackSize: 2
//     }),
//     "3,3": null,
//     // INNER RING
//     "4,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "5,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "5,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "4,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "3,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "3,4": null
//   });
//   const CAPTURE_TZAAR = Map({
//     // OUTER RING
//     "4,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "5,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "6,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "7,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "8,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,1": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,2": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "8,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "7,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "6,6": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "5,7": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "4,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "3,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "2,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "1,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "0,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,7": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,6": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "0,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "1,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "2,2": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "3,1": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     // OUTER RING - 1
//     "4,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "5,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "6,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "7,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "7,2": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "7,3": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "7,4": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "6,5": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "5,6": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "4,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "3,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "2,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "1,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "1,6": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
//     "1,5": null,
//     "1,4": null,
//     "2,3": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     "3,2": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
//     // OUTER RING - 2
//     "4,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "5,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "6,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "6,3": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "6,4": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
//     "5,5": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "4,6": null,
//     "3,6": null,
//     "2,6": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
//     "2,5": null,
//     "2,4": new GamePieceRecord({
//       type: TZARRA,
//       ownedBy: PLAYER_ONE,
//       stackSize: 2
//     }),
//     "3,3": null,
//     // INNER RING
//     "4,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "5,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "5,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "4,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
//     "3,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
//     "3,4": new GamePieceRecord({
//       type: TZAAR,
//       ownedBy: PLAYER_TWO,
//       stackSize: 2
//     })
//   });
//   getGameStateScore(CATPURE_STACK);
//   debugger;
//   getGameStateScore(CAPTURE_TZAAR);
//   debugger;
// };

// testScoring();
