import { List, Map, fromJS } from "immutable";
import {
  DEBUG,
  NUMBER_OF_COLS,
  NUMBER_OF_ROWS,
  TRIANGLE_SIDE_LENGTH,
  TRIANGLE_HEIGHT,
  PLAYABLE_VERTICES,
  GAME_STATE_BOARD_CANVAS,
  GamePieceRecord,
  TZAAR,
  TOTT,
  TZARRA,
  NUMBER_OF_TOTTS,
  NUMBER_OF_TZARRAS,
  NUMBER_OF_TZAARS,
  PLAYER_ONE,
  PLAYER_TWO,
  TURN_PHASES
} from "./constants";
import { drawCachedBoard, drawInitialGrid } from "./cachedBoard";
import {
  drawCoordinate,
  drawCoordinates,
  drawGameBoardState,
  drawGamePiece,
  drawGamePieces,
  clearCanvas
} from "./renderHelpers";
import { getBoardCoordinatesFromPixelCoordinates } from "./gameBoardHelpers";

import {
  movingPiece,
  gameBoardState,
  setNewgameBoardState,
  setMovingPiece,
  nextPhase,
  currentTurn,
  turnPhase
} from "./gameState";

let PLAYER_ONE_PIECES = List();
let PLAYER_TWO_PIECES = List();

export function setupBoardWithPieces() {
  for (let i = 0; i < NUMBER_OF_TOTTS; i++) {
    PLAYER_ONE_PIECES = PLAYER_ONE_PIECES.push(
      new GamePieceRecord({ type: TOTT, ownedBy: "PLAYER_ONE" })
    );
    PLAYER_TWO_PIECES = PLAYER_TWO_PIECES.push(
      new GamePieceRecord({ type: TOTT, ownedBy: "PLAYER_TWO" })
    );
  }

  for (let i = 0; i < NUMBER_OF_TZARRAS; i++) {
    PLAYER_ONE_PIECES = PLAYER_ONE_PIECES.push(
      new GamePieceRecord({ type: TZARRA, ownedBy: "PLAYER_ONE" })
    );
    PLAYER_TWO_PIECES = PLAYER_TWO_PIECES.push(
      new GamePieceRecord({ type: TZARRA, ownedBy: "PLAYER_TWO" })
    );
  }

  for (let i = 0; i < NUMBER_OF_TZAARS; i++) {
    PLAYER_ONE_PIECES = PLAYER_ONE_PIECES.push(
      new GamePieceRecord({ type: TZAAR, ownedBy: "PLAYER_ONE" })
    );
    PLAYER_TWO_PIECES = PLAYER_TWO_PIECES.push(
      new GamePieceRecord({ type: TZAAR, ownedBy: "PLAYER_TWO" })
    );
  }

  const allGamePieces = PLAYER_ONE_PIECES.concat(PLAYER_TWO_PIECES);
  const shuffledPieces = allGamePieces.sortBy(Math.random);

  shuffledPieces.forEach((piece, index) => {
    setNewgameBoardState(gameBoardState.set(PLAYABLE_VERTICES[index], piece));
  });

  drawGameBoardState();
}

function handleClickPiece({ x, y }) {
  const key = getBoardCoordinatesFromPixelCoordinates(x, y);

  if (!gameBoardState.get(key)) {
    return;
  }

  if (gameBoardState.getIn([key, "ownedBy"]) !== currentTurn) {
    return;
  }

  setNewgameBoardState(gameBoardState.setIn([key, "isDragging"], true));

  setMovingPiece(key);
}

function handleMovePiece({ x, y }) {
  if (!movingPiece) {
    return;
  }
  clearCanvas();
  drawCachedBoard();
  drawGamePieces();
  drawCoordinates();
  drawGamePiece(gameBoardState.get(movingPiece), x, y);
}

function handleDropPiece({ x, y }) {
  if (!movingPiece) {
    return;
  }

  const toPiece = getBoardCoordinatesFromPixelCoordinates(x, y);
  setNewgameBoardState(
    gameBoardState.setIn([movingPiece, "isDragging"], false)
  );
  if (!gameBoardState.get(toPiece)) {
    setMovingPiece(null);
    clearCanvas();
    drawCachedBoard();
    drawGamePieces();
    drawCoordinates();
    return;
  }

  if (turnPhase === TURN_PHASES.CAPTURE) {
    const validCaptures = getValidCaptures(movingPiece);

    if (validCaptures.includes(toPiece)) {
      console.log("CAPTURED");
      const pieceToMove = gameBoardState.get(movingPiece);
      setNewgameBoardState(
        gameBoardState.set(movingPiece, false).set(toPiece, pieceToMove)
      );
      nextPhase();
    }
  }

  if (turnPhase === TURN_PHASES.STACK_OR_CAPTURE) {
    const validCaptures = getValidCaptures(movingPiece);
    const validStacks = getValidStacks(movingPiece);
    if (validCaptures.includes(toPiece)) {
      console.log("CAPTURED");
      const pieceToMove = gameBoardState.get(movingPiece);
      setNewgameBoardState(
        gameBoardState.set(movingPiece, false).set(toPiece, pieceToMove)
      );
      nextPhase();
    }
    if (validStacks.includes(toPiece)) {
      console.log("STACKED");
      const pieceToMove = gameBoardState.get(movingPiece);
      const pieceToReplace = gameBoardState.get(toPiece);

      setNewgameBoardState(
        gameBoardState
          .set(movingPiece, false)
          .set(toPiece, pieceToMove)
          .setIn(
            [toPiece, "stackSize"],
            pieceToMove.stackSize + pieceToReplace.stackSize
          )
      );
      nextPhase();
    }
  }

  setMovingPiece(null);
  clearCanvas();
  drawCachedBoard();
  drawGamePieces();
  drawCoordinates();

  const winner = getWinner(gameBoardState);

  if (Boolean(winner)) {
    alert(`${winner} won!`);
  }
  console.log(turnPhase);
  console.log(currentTurn);

  if (turnPhase === TURN_PHASES.CAPTURE && currentTurn === PLAYER_TWO) {
    const bestMove = getBestMove();
  }
}

export function initGame() {
  drawInitialGrid();
  drawCoordinates();
  setupBoardWithPieces();
}

function goWest(coordinate) {
  let [x, y] = coordinate.split(",");
  x = Number(x);
  y = Number(y);

  return `${x - 1},${y}`;
}

function goEast(coordinate) {
  let [x, y] = coordinate.split(",");

  x = Number(x);
  y = Number(y);

  return `${x + 1},${y}`;
}

function goNorthWest(coordinate) {
  let [x, y] = coordinate.split(",");

  x = Number(x);
  y = Number(y);

  return `${x},${y - 1}`;
}

function goNorthEast(coordinate) {
  let [x, y] = coordinate.split(",");
  x = Number(x);
  y = Number(y);

  return `${x + 1},${y - 1}`;
}

function goSouthWest(coordinate) {
  let [x, y] = coordinate.split(",");

  x = Number(x);
  y = Number(y);

  return `${x - 1},${y + 1}`;
}

function goSouthEast(coordinate) {
  let [x, y] = coordinate.split(",");
  x = Number(x);
  y = Number(y);

  return `${x},${y + 1}`;
}

function isPlayableSpace(coordinate) {
  return PLAYABLE_VERTICES.includes(coordinate);
}

function canCapture(fromCoordinate, toCoordinate) {
  const fromPiece = gameBoardState.get(fromCoordinate);
  const toPiece = gameBoardState.get(toCoordinate);

  return (
    fromPiece.ownedBy !== toPiece.ownedBy &&
    fromPiece.stackSize >= toPiece.stackSize
  );
}

function canStack(fromCoordinate, toCoordinate) {
  const fromPiece = gameBoardState.get(fromCoordinate);
  const toPiece = gameBoardState.get(toCoordinate);

  return fromPiece.ownedBy === toPiece.ownedBy;
}

function isValidEmptyCoordinate(coordinate) {
  return Boolean(
    PLAYABLE_VERTICES.includes(coordinate) && !gameBoardState.get(coordinate)
  );
}

const nextPiece = {
  w: goWest,
  e: goEast,
  nw: goNorthWest,
  ne: goNorthEast,
  sw: goSouthWest,
  se: goSouthEast
};

function getNextValidCapture(fromCoordinate, direction) {
  let nextMove;
  let coordinateToCheck = fromCoordinate;
  while (nextMove === undefined) {
    coordinateToCheck = nextPiece[direction](coordinateToCheck);

    // Not a space that we can play on
    if (!isPlayableSpace(coordinateToCheck)) {
      nextMove = false;
    }

    // This space is empty so we can continue
    else if (isValidEmptyCoordinate(coordinateToCheck)) {
      nextMove = undefined;
    }

    // First piece we encounter can't be captured
    else if (!canCapture(fromCoordinate, coordinateToCheck)) {
      nextMove = false;
    }
    // Finally a piece we can capture
    else {
      nextMove = coordinateToCheck;
    }
  }
  return nextMove;
}

function getNextValidStack(fromCoordinate, direction) {
  let nextMove;
  let coordinateToCheck = fromCoordinate;
  while (nextMove === undefined) {
    coordinateToCheck = nextPiece[direction](coordinateToCheck);

    // Not a space that we can play on
    if (!isPlayableSpace(coordinateToCheck)) {
      nextMove = false;
    }

    // This space is empty so we can continue
    else if (isValidEmptyCoordinate(coordinateToCheck)) {
      nextMove = undefined;
    }

    // First piece we encounter can't be captured
    else if (!canStack(fromCoordinate, coordinateToCheck)) {
      nextMove = false;
    }
    // Finally a piece we can capture
    else {
      nextMove = coordinateToCheck;
    }
  }
  return nextMove;
}

function getValidCaptures(fromCoordinate) {
  return List([
    getNextValidCapture(fromCoordinate, "w"),
    getNextValidCapture(fromCoordinate, "e"),
    getNextValidCapture(fromCoordinate, "nw"),
    getNextValidCapture(fromCoordinate, "ne"),
    getNextValidCapture(fromCoordinate, "sw"),
    getNextValidCapture(fromCoordinate, "se")
  ]).filter(isValidMove => isValidMove);
}

function getValidStacks(fromCoordinate) {
  return List([
    getNextValidStack(fromCoordinate, "w"),
    getNextValidStack(fromCoordinate, "e"),
    getNextValidStack(fromCoordinate, "nw"),
    getNextValidStack(fromCoordinate, "ne"),
    getNextValidStack(fromCoordinate, "sw"),
    getNextValidStack(fromCoordinate, "se")
  ]).filter(isValidMove => isValidMove);
}

function getPieceCounts(gameState) {
  return gameState.reduce(
    (piecesByPlayer, piece) => {
      if (!piece) {
        return piecesByPlayer;
      }
      const { ownedBy, type } = piece;
      return piecesByPlayer.updateIn([ownedBy, type], count => count + 1);
    },
    fromJS({
      [PLAYER_ONE]: {
        [TOTT]: 0,
        [TZARRA]: 0,
        [TZAAR]: 0
      },
      [PLAYER_TWO]: {
        [TOTT]: 0,
        [TZARRA]: 0,
        [TZAAR]: 0
      }
    })
  );
}

function getAllPlayerPieceCoordinates(gamestate, player) {
  return gameBoardState.filter(({ ownedBy }) => ownedBy === player).keySeq();
}

function getWinner(gameState) {
  const pieceCountsByPlayer = getPieceCounts(gameState);

  const playerOneLost =
    pieceCountsByPlayer.get(PLAYER_ONE).find(count => count === 0) === 0;
  const playerTwoLost =
    pieceCountsByPlayer.get(PLAYER_TWO).find(count => count === 0) === 0;

  if (playerOneLost) {
    return PLAYER_TWO;
  }
  if (playerTwoLost) {
    return PLAYER_ONE;
  }
}

function getBestMove() {
  const gameStatesToCheck = getAllPlayerPieceCoordinates(
    gameBoardState,
    PLAYER_TWO
  ).reduce((map, fromCoordinate) => {
    const validCaptures = getValidCaptures(fromCoordinate);

    const bestMove = validCaptures.reduce((score, toPiece) => {
      const pieceToMove = gameBoardState.get(fromCoordinate);
      const nextGameState = gameBoardState
        .set(toPiece, pieceToMove)
        .set(fromCoordinate, null);
      const minimaxResult = minimax(nextGameState, phase, PLAYER_TWO, 3);
      return minimaxResult;
    }, -Infinity);

    return map.set([fromCoordinate, nextMove], bestMove);
  }, Map());
}

function minimax(gameState, phase, turn, depth) {
  const winner = getWinner(gameState);
  if (winner === PLAYER_ONE) {
    return -Infinity;
  }
  if (winner === PLAYER_TWO) {
    return Infinity;
  }

  if (depth === 0) {
    return getGameStateScore(gameState, turn);
  }

  // maximizing player
  if (turn === PLAYER_TWO) {
    let bestValue = -Infinity;

    const gameStatesToCheck = getAllPlayerPieceCoordinates(
      gameState,
      PLAYER_TWO
    ).reduce((list, fromCoordinate) => {
      const pieceToMove = gameBoardState.get(fromCoordinate);
      const validCaptures = getValidCaptures(fromCoordinate).forEach(
        capturedPieceCoordinate => {
          const capturedPiece = gameBoardState.get(capturedPieceCoordinate);
          const nextGameState = gameBoardState
            .set(capturedPieceCoordinate, pieceToMove)
            .set(fromCoordinate, null);
          list = list.push(nextGameState);
        }
      );
      return list;
    }, List());
    console.log(gameStatesToCheck);

    gameStatesToCheck.forEach(nextGameState => {
      let maybeBetterValue = minimax(
        nextGameState,
        phase,
        PLAYER_ONE,
        depth - 1
      );
      bestValue = Math.max(maybeBetterValue, bestValue);
    });
    return bestValue;
  }

  // minimizing player
  if (turn === PLAYER_ONE) {
    let bestValue = Infinity;
    const gameStatesToCheck = getAllPlayerPieceCoordinates(
      gameState,
      PLAYER_ONE
    ).reduce((list, fromCoordinate) => {
      const pieceToMove = gameBoardState.get(fromCoordinate);
      const validCaptures = getValidCaptures(fromCoordinate).forEach(
        capturedPieceCoordinate => {
          const capturedPiece = gameBoardState.get(capturedPieceCoordinate);
          const nextGameState = gameBoardState
            .set(capturedPieceCoordinate, pieceToMove)
            .set(fromCoordinate, null);
          list = list.push(nextGameState);
        }
      );
      return list;
    }, List());
    console.log(gameStatesToCheck);
    gameStatesToCheck.forEach(nextGameState => {
      let maybeBetterValue = minimax(
        nextGameState,
        phase,
        PLAYER_TWO,
        depth - 1
      );
      bestValue = Math.min(maybeBetterValue, bestValue);
    });
  }
}

function getGameStateScore(gameState, turn) {
  const HIGHEST_SCORE =
    NUMBER_OF_TOTTS * 1 + NUMBER_OF_TZARRAS * 2 + NUMBER_OF_TZAARS * 3;
  const typeScores = {
    [TOTT]: 1,
    [TZARRA]: 2,
    [TZAAR]: 3
  };
  const pieceCounts = getPieceCounts(gameState);

  if (turn === PLAYER_ONE) {
    return (
      HIGHEST_SCORE -
      pieceCounts.get(PLAYER_ONE).reduce((playerScore, count, type) => {
        playerScore = playerScore + count * typeScores[type];
      }, 0)
    );
  }
  return (
    HIGHEST_SCORE -
    pieceCounts.get(PLAYER_TWO).reduce((playerScore, count, type) => {
      playerScore = playerScore + count * typeScores[type];
    }, 0)
  );
}

GAME_STATE_BOARD_CANVAS.addEventListener("mousedown", handleClickPiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mousemove", handleMovePiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mouseup", handleDropPiece);
