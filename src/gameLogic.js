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
  clearCanvas,
  renderMovingPiece
} from "./renderHelpers";
import {
  getBoardCoordinatesFromPixelCoordinates,
  getPixelCoordinatesFromBoardCoordinates,
  isPlayableSpace,
  goWest,
  goEast,
  goNorthWest,
  goNorthEast,
  goSouthWest,
  goSouthEast,
  setupBoardWithPieces,
  canCapture,
  canStack,
  isValidEmptyCoordinate
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

function isCurrentPlayerPiece(boardCoordinate) {
  return (
    gameBoardState.get(boardCoordinate) &&
    gameBoardState.getIn([boardCoordinate, "ownedBy"]) === currentTurn
  );
}

function handleClickPiece({ x, y }) {
  const boardCoordinate = getBoardCoordinatesFromPixelCoordinates(x, y);

  if (!isCurrentPlayerPiece(boardCoordinate)) {
    return;
  }

  setNewgameBoardState(
    gameBoardState.setIn([boardCoordinate, "isDragging"], true)
  );
  setMovingPiece(boardCoordinate);
}

function handleMovePiece({ x, y }) {
  if (!movingPiece) {
    return;
  }
  drawGameBoardState();
  drawGamePiece(gameBoardState.get(movingPiece), x, y);
}

function handleDropPiece({ x, y }) {
  if (!movingPiece) {
    return;
  }
  const toPieceBoardCoordinates = getBoardCoordinatesFromPixelCoordinates(x, y);

  setNewgameBoardState(
    gameBoardState.setIn([movingPiece, "isDragging"], false)
  );

  if (!gameBoardState.get(toPieceBoardCoordinates)) {
    setMovingPiece(null);
    drawGameBoardState();
    return;
  }

  const validCaptures = getValidCaptures(movingPiece);
  const isValidCapture = validCaptures.includes(toPieceBoardCoordinates);
  const pieceToMove = gameBoardState.get(movingPiece);

  if (turnPhase === TURN_PHASES.CAPTURE && isValidCapture) {
    setNewgameBoardState(
      gameBoardState
        .set(movingPiece, false)
        .set(toPieceBoardCoordinates, pieceToMove)
    );
    checkGameStateAndStartNextTurn();
  } else if (turnPhase === TURN_PHASES.STACK_OR_CAPTURE) {
    const validStacks = getValidStacks(movingPiece);
    if (isValidCapture) {
      setNewgameBoardState(
        gameBoardState
          .set(movingPiece, false)
          .set(toPieceBoardCoordinates, pieceToMove)
      );
      checkGameStateAndStartNextTurn();
    }
    if (validStacks.includes(toPieceBoardCoordinates)) {
      const pieceToReplace = gameBoardState.get(toPieceBoardCoordinates);

      setNewgameBoardState(
        gameBoardState
          .set(movingPiece, false)
          .set(toPieceBoardCoordinates, pieceToMove)
          .setIn(
            [toPieceBoardCoordinates, "stackSize"],
            pieceToMove.stackSize + pieceToReplace.stackSize
          )
      );
      checkGameStateAndStartNextTurn();
    }
  }

  setMovingPiece(null);
  drawGameBoardState();

  if (turnPhase === TURN_PHASES.CAPTURE && currentTurn === PLAYER_TWO) {
    moveAI();
  }
}

function checkGameStateAndStartNextTurn() {
  nextPhase();

  const winner = getWinner(gameBoardState);

  if (Boolean(winner)) {
    alert(`${winner} won!`);
    return;
  }
}

function moveAI() {
  if (currentTurn !== PLAYER_TWO) {
    return;
  }

  let highestScore = -Infinity;
  let moveToMake = null;
  const bestMoves = getBestMove();

  if (!bestMoves && turnPhase === TURN_PHASES.STACK_OR_CAPTURE) {
    checkGameStateAndStartNextTurn();
    return;
  }

  const bestMove = bestMoves.forEach((val, key) => {
    if (val > highestScore) {
      moveToMake = key;
      highestScore = val;
    }
  });

  const [fromCoordinate, toCoordinate] = moveToMake.split("->");
  const fromPiece = gameBoardState.get(fromCoordinate);
  setNewgameBoardState(gameBoardState.set(fromCoordinate, false));

  const fromPixelCoodinate = getPixelCoordinatesFromBoardCoordinates(
    fromCoordinate
  );
  const toPixelCoordinate = getPixelCoordinatesFromBoardCoordinates(
    toCoordinate
  );

  DEBUG && console.log(`MOVING FROM ${fromCoordinate} TO ${toCoordinate}`);

  renderMovingPiece(
    fromPiece,
    fromPixelCoodinate,
    toPixelCoordinate,
    2000,
    Date.now(),
    () => {
      if (turnPhase === TURN_PHASES.STACK_OR_CAPTURE) {
        const toPiece = gameBoardState.get(toCoordinate);

        setNewgameBoardState(
          gameBoardState
            .set(toCoordinate, fromPiece)
            .setIn(
              [toCoordinate, "stackSize"],
              fromPiece.stackSize + toPiece.stackSize
            )
        );
      } else {
        setNewgameBoardState(gameBoardState.set(toCoordinate, fromPiece));
      }

      checkGameStateAndStartNextTurn();
      drawGameBoardState();

      if (
        turnPhase === TURN_PHASES.STACK_OR_CAPTURE &&
        currentTurn === PLAYER_TWO
      ) {
        moveAI();
      }
    }
  );
}

export function initGame() {
  drawInitialGrid();
  setupBoardWithPieces();
  drawGameBoardState();
  drawCoordinates();
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

function getPieces(gameState) {
  return gameState.reduce(
    (piecesByPlayer, piece) => {
      if (!piece) {
        return piecesByPlayer;
      }
      const { ownedBy, type } = piece;
      return piecesByPlayer.updateIn([ownedBy, type], pieces =>
        pieces.push(piece)
      );
    },
    fromJS({
      [PLAYER_ONE]: {
        [TOTT]: List(),
        [TZARRA]: List(),
        [TZAAR]: List()
      },
      [PLAYER_TWO]: {
        [TOTT]: List(),
        [TZARRA]: List(),
        [TZAAR]: List()
      }
    })
  );
}

function getAllPlayerPieceCoordinates(gamestate, player) {
  return gameBoardState.filter(({ ownedBy }) => ownedBy === player).keySeq();
}

function getWinner(gameState) {
  const pieceCountsByPlayer = getPieces(gameState);

  const playerOneLost =
    !pieceCountsByPlayer.getIn([PLAYER_ONE, TOTT]).size ||
    !pieceCountsByPlayer.getIn([PLAYER_ONE, TZARRA]).size ||
    !pieceCountsByPlayer.getIn([PLAYER_ONE, TZAAR]).size;

  const playerTwoLost =
    !pieceCountsByPlayer.getIn([PLAYER_TWO, TOTT]).size ||
    !pieceCountsByPlayer.getIn([PLAYER_TWO, TZARRA]).size ||
    !pieceCountsByPlayer.getIn([PLAYER_TWO, TZAAR]).size;

  if (playerOneLost) {
    return PLAYER_TWO;
  }
  if (playerTwoLost) {
    return PLAYER_ONE;
  }

  const possibleCaptures = getAllPlayerPieceCoordinates(
    gameState,
    currentTurn
  ).reduce((list, fromCoordinate) => {
    return list.concat(getValidCaptures(fromCoordinate));
  }, List());

  if (!possibleCaptures.size) {
    return currentTurn === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
  }
}

function getBestStack() {
  const allPlayerPieces = getAllPlayerPieceCoordinates(
    gameBoardState,
    PLAYER_TWO
  );
  DEBUG && console.log(`All player pieces: ${allPlayerPieces}`);
  return allPlayerPieces.reduce((map, fromCoordinate) => {
    const validStacks = getValidStacks(fromCoordinate);
    DEBUG && console.log(`evaluating stacks: ${validStacks.size}`);
    const bestMove = validStacks.reduce((scoresByMove, toCoordinate) => {
      const fromPiece = gameBoardState.get(fromCoordinate);
      const toPiece = gameBoardState.get(toCoordinate);
      const nextGameState = gameBoardState
        .set(fromCoordinate, null)
        .set(toCoordinate, fromPiece)
        .setIn(
          [toCoordinate, "stackSize"],
          fromPiece.stackSize + toPiece.stackSize
        );
      const minimaxResult = minimax(nextGameState, turnPhase, PLAYER_TWO, 0);
      return scoresByMove.set(
        `${fromCoordinate}->${toCoordinate}`,
        minimaxResult
      );
    }, Map());

    const sortedMoves = bestMove.sort().reverse();
    DEBUG && console.log(sortedMoves.toJS());
    const fromToKey = sortedMoves.keySeq().first();
    const score = sortedMoves.first();
    return map.set(fromToKey, score);
  }, Map());
}

function getBestCapture() {
  const allPlayerPieces = getAllPlayerPieceCoordinates(
    gameBoardState,
    PLAYER_TWO
  );

  return allPlayerPieces.reduce((map, fromCoordinate) => {
    const validCaptures = getValidCaptures(fromCoordinate);
    DEBUG && console.log(`evaluating captures: ${validCaptures.size}`);
    const bestMove = validCaptures.reduce((scoresByMove, toCoordinate) => {
      const fromPiece = gameBoardState.get(fromCoordinate);
      const nextGameState = gameBoardState
        .set(fromCoordinate, null)
        .set(toCoordinate, fromPiece);
      const minimaxResult = minimax(nextGameState, turnPhase, PLAYER_TWO, 0);
      return scoresByMove.set(
        `${fromCoordinate}->${toCoordinate}`,
        minimaxResult
      );
    }, Map());

    const sortedMoves = bestMove.sort().reverse();

    const fromToKey = sortedMoves.keySeq().first();
    const score = sortedMoves.first();
    return map.set(fromToKey, score);
  }, Map());
}

function getBestMove() {
  if (turnPhase === TURN_PHASES.CAPTURE) {
    return getBestCapture();
  }
  const bestStack = getBestStack().filter(move => move);

  if (bestStack && bestStack.size) {
    return bestStack;
  }
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
    DEBUG && console.log(`eval ${turn}`);
    return getGameStateScore(gameState, turn, phase);
  }
  debugger;
  // maximizing player
  if (turn === PLAYER_TWO) {
    let bestValue = -Infinity;

    const gameStatesToCheck = getAllPlayerPieceCoordinates(
      gameState,
      PLAYER_TWO
    ).reduce((list, fromCoordinate) => {
      const fromPiece = gameState.get(fromCoordinate);
      const validCaptures = getValidCaptures(fromCoordinate).forEach(
        toCoordinate => {
          const nextGameState = gameState
            .set(toCoordinate, fromPiece)
            .set(fromCoordinate, null);

          list = list.push(nextGameState);
        }
      );
      return list;
    }, List());

    DEBUG &&
      console.log(
        `depth: ${depth} - checking game states: ${gameStatesToCheck.size}`
      );

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
      const fromPiece = gameState.get(fromCoordinate);
      const validCaptures = getValidCaptures(fromCoordinate).forEach(
        toCoordinate => {
          const nextGameState = gameState
            .set(toCoordinate, fromPiece)
            .set(fromCoordinate, null);
          list = list.push(nextGameState);
        }
      );
      return list;
    }, List());

    gameStatesToCheck.forEach(nextGameState => {
      let maybeBetterValue = minimax(
        nextGameState,
        phase,
        PLAYER_TWO,
        depth - 1
      );
      bestValue = Math.min(maybeBetterValue, bestValue);
    });
    return bestValue;
  }
}

function getGameStateScore(gameState, turn) {
  const HIGHEST_SCORE_POSSIBLE = 90;
  const typeScores = {
    [TOTT]: 30 / NUMBER_OF_TOTTS,
    [TZARRA]: 30 / NUMBER_OF_TZARRAS,
    [TZAAR]: 30 / NUMBER_OF_TZAARS
  };
  const pieces = getPieces(gameState);

  let score = 0;

  if (turn === PLAYER_ONE) {
    score =
      HIGHEST_SCORE_POSSIBLE -
      pieces.get(PLAYER_TWO).reduce((playerScore, pieces, type) => {
        return playerScore + pieces.size * typeScores[type];
      }, 0) +
      getScoreForStacks(pieces, PLAYER_ONE);
  } else {
    score =
      HIGHEST_SCORE_POSSIBLE -
      pieces.get(PLAYER_ONE).reduce((playerScore, pieces, type) => {
        return playerScore + pieces.size * typeScores[type];
      }, 0) +
      getScoreForStacks(pieces, PLAYER_TWO);
  }

  return score;
}

// we value stacks depending on how many of that type are on the board
function getScoreForStacks(playerPieces, player) {
  const MULTIPLIER = 15;

  return playerPieces.get(player).reduce((total, pieces) => {
    const totalPieces = pieces.size;
    pieces.forEach(piece => {
      total = total + (MULTIPLIER - totalPieces) * piece.stackSize;
    });
    return total;
  }, 0);
}

GAME_STATE_BOARD_CANVAS.addEventListener("mousedown", handleClickPiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mousemove", handleMovePiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mouseup", handleDropPiece);
