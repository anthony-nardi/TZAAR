import {
  DEBUG,
  GAME_STATE_BOARD_CANVAS,
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
  if (!movingPiece) {
    return;
  }

  const [x, y] = getPixelCoordinatesFromUserInteraction(event);
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
    } else if (isValidStack) {
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

window.getWinner = getWinner;
window.gameBoardState = gameBoardState;

function checkGameStateAndStartNextTurn() {
  nextPhase();

  const winner = getWinner(gameBoardState);
  let message = winner === PLAYER_TWO ? "You lost." : "You won!";
  if (winner) {
    alert(`${message}`);
    location.reload();
  }
}

function moveAI() {
  if (currentTurn !== PLAYER_TWO) {
    return;
  }

  const bestMove = getBestMove(gameBoardState, PLAYER_TWO);

  // Single move only
  if (bestMove.indexOf("=>") === -1) {
    const [firstFromCoordinate, firstToCoordinate] = bestMove.split("->");
    const fromPiece = gameBoardState.get(firstFromCoordinate);
    setNewgameBoardState(gameBoardState.set(firstFromCoordinate, false));
    const fromFirstPixelCoodinate = getPixelCoordinatesFromBoardCoordinates(
      firstFromCoordinate
    );
    const toFirstPixelCoordinate = getPixelCoordinatesFromBoardCoordinates(
      firstToCoordinate
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
        checkGameStateAndStartNextTurn();
        drawGameBoardState();
      }
    );
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

      nextPhase();

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

          if (secondFromPiece.ownedBy === toPiece.ownedBy) {
            setNewgameBoardState(
              gameBoardState
                .set(secondToCoordinate, secondFromPiece)
                .setIn(
                  [secondToCoordinate, "stackSize"],
                  secondFromPiece.stackSize + toPiece.stackSize
                )
            );
          } else {
            setNewgameBoardState(
              gameBoardState.set(secondToCoordinate, secondFromPiece)
            );
          }

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

  const minimaxResult = minimax(gameState, PLAYER_TWO, depth);

  const bestMove = minimaxResult[1];
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
