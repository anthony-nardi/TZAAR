import { Map } from "immutable";
import {
  DEBUG,
  GAME_STATE_BOARD_CANVAS,
  PLAYER_ONE,
  PLAYER_TWO,
  TURN_PHASES
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
import { getGameStatesToAnalyze, minimax, getWinner } from "./ai";

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
  const toPieceBoardCoordinates = getBoardCoordinatesFromPixelCoordinates(x, y);

  setNewgameBoardState(
    gameBoardState.setIn([movingPiece, "isDragging"], false)
  );

  if (!gameBoardState.get(toPieceBoardCoordinates)) {
    setMovingPiece(null);
    drawGameBoardState();
    return;
  }

  const validCaptures = getValidCaptures(movingPiece, gameBoardState);
  const validStacks = getValidStacks(movingPiece, gameBoardState);
  const isValidCapture = validCaptures.includes(toPieceBoardCoordinates);
  const isValidStack = validStacks.includes(toPieceBoardCoordinates);

  if (turnPhase === TURN_PHASES.CAPTURE && isValidCapture) {
    capturePiece(movingPiece, toPieceBoardCoordinates);
  } else if (turnPhase === TURN_PHASES.STACK_OR_CAPTURE) {
    if (isValidCapture) {
      capturePiece(movingPiece, toPieceBoardCoordinates);
    }
    if (isValidStack) {
      stackPiece(movingPiece, toPieceBoardCoordinates);
    }
  }

  setMovingPiece(null);
  drawGameBoardState();

  if (turnPhase === TURN_PHASES.CAPTURE && currentTurn === PLAYER_TWO) {
    document.getElementById("loadingSpinner").classList.remove("hidden");
    setTimeout(() => moveAI(), 1);
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

  let depth = 0;

  if (allPossibleStatesAfterTurn.size < 20) {
    depth = 2;
  }

  if (allPossibleStatesAfterTurn.size < 150) {
    depth = 1;
  }

  DEBUG && console.timeEnd("all game states");
  DEBUG &&
    console.log(
      `ALL POSSIBLE GAME STATES AT DEPTH 0: ${allPossibleStatesAfterTurn.size}`
    );

  DEBUG && console.time("get scores");

  // For every move AI makes, give minimax the state and let player one make its move...
  const scoresByMoveSeq = allPossibleStatesAfterTurn.reduce(
    (scoreMap, gameStateToCheck, moveSeq) => {
      scoreMap = scoreMap.set(
        moveSeq,
        minimax(gameStateToCheck, PLAYER_ONE, depth)
      );

      return scoreMap;
    },
    Map()
  );

  DEBUG && console.timeEnd("get scores");

  const bestMove = scoresByMoveSeq.sort().reverse();
  const movesToMake = bestMove.keySeq().first();

  document.getElementById("loadingSpinner").classList.add("hidden");
  return movesToMake;
}

export function initGame() {
  const piecesToSetup = setupBoardWithPieces();
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
