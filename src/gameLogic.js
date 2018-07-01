import { List, Map } from "immutable";
import {
  DEBUG,
  GAME_STATE_BOARD_CANVAS,
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
import { drawInitialGrid } from "./cachedBoard";
import {
  drawCoordinates,
  drawGameBoardState,
  drawGamePiece,
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
  turnPhase,
  numberOfTurnsIntoGame
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

  const validCaptures = getValidCaptures(movingPiece, gameBoardState);
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
    const validStacks = getValidStacks(movingPiece, gameBoardState);
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
    setTimeout(() => moveAI(), 1);
    // window.requestAnimationFrame(moveAI);
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

  const bestMove = getBestMove2(gameBoardState, PLAYER_TWO);

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

const nextPiece = {
  w: goWest,
  e: goEast,
  nw: goNorthWest,
  ne: goNorthEast,
  sw: goSouthWest,
  se: goSouthEast
};

function getNextInvertedValidCapture(toCoordinate, direction, gameState) {
  let nextMove;
  let coordinateToCheck = toCoordinate;
  while (nextMove === undefined) {
    coordinateToCheck = nextPiece[direction](coordinateToCheck);

    // Not a space that we can play on
    if (!isPlayableSpace(coordinateToCheck)) {
      nextMove = false;
    }

    // This space is empty so we can continue
    else if (isValidEmptyCoordinate(coordinateToCheck, gameState)) {
      nextMove = undefined;
    }

    // First piece we encounter can't be captured
    else if (!canCapture(coordinateToCheck, toCoordinate, gameState)) {
      nextMove = false;
    }
    // Finally a piece we can capture
    else {
      nextMove = coordinateToCheck;
    }
  }
  return nextMove;
}

function getNextValidCapture(fromCoordinate, direction, gameState) {
  let nextMove;
  let coordinateToCheck = fromCoordinate;
  while (nextMove === undefined) {
    coordinateToCheck = nextPiece[direction](coordinateToCheck);

    // Not a space that we can play on
    if (!isPlayableSpace(coordinateToCheck)) {
      nextMove = false;
    }

    // This space is empty so we can continue
    else if (isValidEmptyCoordinate(coordinateToCheck, gameState)) {
      nextMove = undefined;
    }

    // First piece we encounter can't be captured
    else if (!canCapture(fromCoordinate, coordinateToCheck, gameState)) {
      nextMove = false;
    }
    // Finally a piece we can capture
    else {
      nextMove = coordinateToCheck;
    }
  }
  return nextMove;
}

function getNextValidStack(fromCoordinate, direction, gameState) {
  let nextMove;
  let coordinateToCheck = fromCoordinate;
  while (nextMove === undefined) {
    coordinateToCheck = nextPiece[direction](coordinateToCheck);

    // Not a space that we can play on
    if (!isPlayableSpace(coordinateToCheck)) {
      nextMove = false;
    }

    // This space is empty so we can continue
    else if (isValidEmptyCoordinate(coordinateToCheck, gameState)) {
      nextMove = undefined;
    }

    // First piece we encounter can't be captured
    else if (!canStack(fromCoordinate, coordinateToCheck, gameState)) {
      nextMove = false;
    }
    // Finally a piece we can capture
    else {
      nextMove = coordinateToCheck;
    }
  }
  return nextMove;
}

function getValidCaptures(fromCoordinate, gameState) {
  return List([
    getNextValidCapture(fromCoordinate, "w", gameState),
    getNextValidCapture(fromCoordinate, "e", gameState),
    getNextValidCapture(fromCoordinate, "nw", gameState),
    getNextValidCapture(fromCoordinate, "ne", gameState),
    getNextValidCapture(fromCoordinate, "sw", gameState),
    getNextValidCapture(fromCoordinate, "se", gameState)
  ]).filter(isValidMove => isValidMove);
}

function getValidStacks(fromCoordinate, gameState) {
  return List([
    getNextValidStack(fromCoordinate, "w", gameState),
    getNextValidStack(fromCoordinate, "e", gameState),
    getNextValidStack(fromCoordinate, "nw", gameState),
    getNextValidStack(fromCoordinate, "ne", gameState),
    getNextValidStack(fromCoordinate, "sw", gameState),
    getNextValidStack(fromCoordinate, "se", gameState)
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
    Map({
      [PLAYER_ONE]: Map({
        [TOTT]: List(),
        [TZARRA]: List(),
        [TZAAR]: List()
      }),
      [PLAYER_TWO]: Map({
        [TOTT]: List(),
        [TZARRA]: List(),
        [TZAAR]: List()
      })
    })
  );
}

function getAllPlayerPieceCoordinates(gameState, player) {
  return gameState.filter(piece => piece && piece.ownedBy === player).keySeq();
}

function getAllPlayerPieceCoordinatesByType(gameState, player, type) {
  return gameState
    .filter(piece => piece && piece.ownedBy === player && piece.type === type)
    .keySeq();
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
    return list.concat(getValidCaptures(fromCoordinate, gameState));
  }, List());

  if (!possibleCaptures.size) {
    return currentTurn === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
  }
}

function getGameStatesToAnalyze(gameState, turn) {
  const EARLY_GAME = numberOfTurnsIntoGame < 10;

  let allPossibleStatesAfterTurn = EARLY_GAME
    ? getEarlyGamePossibleMoveSequences(gameState, TZAAR, turn)
    : getPossibleMoveSequences(gameState, turn);

  if (!allPossibleStatesAfterTurn.size && EARLY_GAME) {
    allPossibleStatesAfterTurn = getEarlyGamePossibleMoveSequences(
      gameState,
      TZARRA,
      turn
    );
  }

  if (!allPossibleStatesAfterTurn.size && EARLY_GAME) {
    allPossibleStatesAfterTurn = getEarlyGamePossibleMoveSequences(
      gameState,
      TOTT,
      turn
    );
  }

  return allPossibleStatesAfterTurn;
}

function getBestMove2(gameState, turn) {
  console.time("all game states");

  const allPossibleStatesAfterTurn = getGameStatesToAnalyze(gameState, turn);

  let depth = 0;

  if (allPossibleStatesAfterTurn.size < 20) {
    depth = 2;
  }

  if (allPossibleStatesAfterTurn.size < 80) {
    depth = 1;
  }

  console.log(`DEPTH : ${depth}`);
  console.timeEnd("all game states");
  console.log(`ALL POSSIBLE GAME STATES: ${allPossibleStatesAfterTurn.size}`);

  console.time("get scores");

  // For every move AI makes, give minimax the state and let player one make its move...
  const scoresByMoveSeq = allPossibleStatesAfterTurn.reduce(
    (scoreMap, gameStateToCheck, moveSeq) => {
      scoreMap = scoreMap.set(
        moveSeq,
        minimax2(gameStateToCheck, PLAYER_ONE, depth)
      );

      return scoreMap;
    },
    Map()
  );

  console.timeEnd("get scores");
  debugger;
  const bestMove = scoresByMoveSeq.sort().reverse();
  const movesToMake = bestMove.keySeq().first();
  return movesToMake;
}

function getInvertedValidCaptures(toCoordinate, gameState) {
  return List([
    getNextInvertedValidCapture(toCoordinate, "w", gameState),
    getNextInvertedValidCapture(toCoordinate, "e", gameState),
    getNextInvertedValidCapture(toCoordinate, "nw", gameState),
    getNextInvertedValidCapture(toCoordinate, "ne", gameState),
    getNextInvertedValidCapture(toCoordinate, "sw", gameState),
    getNextInvertedValidCapture(toCoordinate, "se", gameState)
  ]).filter(isValidMove => isValidMove);
}

function getEarlyGamePossibleMoveSequences(gameState, PIECE_TYPE, turn) {
  const playerPiecesToCapture = turn === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;

  // get opponents most valuable pieces to capture.
  const allPlayerPieces = getAllPlayerPieceCoordinatesByType(
    gameState,
    playerPiecesToCapture,
    PIECE_TYPE
  );

  return allPlayerPieces.reduce((allGameStatesAfterMoveSeq, toCoordinate) => {
    const validCaptures = getInvertedValidCaptures(toCoordinate, gameState);

    // For every piece, get all possible captures
    // for each and put the resulting game state into a list.
    const allCaptureStates = validCaptures.reduce(
      (statesAfterCapture, fromCoordinate) => {
        const fromPiece = gameState.get(fromCoordinate);
        const nextGameState = gameState
          .set(fromCoordinate, null)
          .set(toCoordinate, fromPiece);
        return statesAfterCapture.set(
          `${fromCoordinate}->${toCoordinate}`,
          nextGameState
        );
      },
      Map()
    );

    // For every game state resulting from the above process,
    // get all player pieces and return all game states
    // for every valid stack you can make
    allCaptureStates.forEach((stateAfterCapture, fromToKey) => {
      let allPlayerPiecesAfterCapture = getAllPlayerPieceCoordinatesByType(
        stateAfterCapture,
        turn,
        TZAAR
      );

      if (!allPlayerPiecesAfterCapture.size) {
        allPlayerPiecesAfterCapture = getAllPlayerPieceCoordinatesByType(
          stateAfterCapture,
          turn,
          TZARRA
        );
      }
      if (!allPlayerPiecesAfterCapture.size) {
        allPlayerPiecesAfterCapture = getAllPlayerPieceCoordinatesByType(
          stateAfterCapture,
          turn,
          TOTT
        );
      }

      allPlayerPiecesAfterCapture.forEach(playerPieceCoordinateAfterCapture => {
        const validStacks = getValidStacks(
          playerPieceCoordinateAfterCapture,
          stateAfterCapture
        );

        const fromPiece = stateAfterCapture.get(
          playerPieceCoordinateAfterCapture
        );
        validStacks.forEach(toCoordinate => {
          const toPiece = stateAfterCapture.get(toCoordinate);

          const gameStateAfterMoveSeq = stateAfterCapture
            .set(playerPieceCoordinateAfterCapture, null)
            .set(toCoordinate, fromPiece)
            .setIn(
              [toCoordinate, "stackSize"],
              fromPiece.stackSize + toPiece.stackSize
            );

          const sequenceKey = `${fromToKey}=>${playerPieceCoordinateAfterCapture}->${toCoordinate}`;

          allGameStatesAfterMoveSeq = allGameStatesAfterMoveSeq.set(
            sequenceKey,
            gameStateAfterMoveSeq
          );
        });
      });
    });

    return allGameStatesAfterMoveSeq;
  }, Map());
}

function getPossibleMoveSequences(gameState) {
  const allPlayerPieces = getAllPlayerPieceCoordinates(gameState, PLAYER_TWO);

  return allPlayerPieces.reduce((allGameStatesAfterMoveSeq, fromCoordinate) => {
    const validCaptures = getValidCaptures(fromCoordinate, gameState);

    // For every piece, get all possible captures
    // for each and put the resulting game state into a list.
    const allCaptureStates = validCaptures.reduce(
      (statesAfterCapture, toCoordinate) => {
        const fromPiece = gameState.get(fromCoordinate);
        const nextGameState = gameState
          .set(fromCoordinate, null)
          .set(toCoordinate, fromPiece);
        return statesAfterCapture.set(
          `${fromCoordinate}->${toCoordinate}`,
          nextGameState
        );
      },
      Map()
    );

    // For every game state resulting from the above process,
    // get all player pieces and return all game states
    // for every valid stack you can make
    allCaptureStates.forEach((stateAfterCapture, fromToKey) => {
      const allPlayerPiecesAfterCapture = getAllPlayerPieceCoordinates(
        stateAfterCapture,
        PLAYER_TWO
      );

      allPlayerPiecesAfterCapture.forEach(playerPieceCoordinateAfterCapture => {
        const validStacks = getValidStacks(
          playerPieceCoordinateAfterCapture,
          stateAfterCapture
        );

        const fromPiece = stateAfterCapture.get(
          playerPieceCoordinateAfterCapture
        );
        validStacks.forEach(toCoordinate => {
          const toPiece = stateAfterCapture.get(toCoordinate);

          const gameStateAfterMoveSeq = stateAfterCapture
            .set(playerPieceCoordinateAfterCapture, null)
            .set(toCoordinate, fromPiece)
            .setIn(
              [toCoordinate, "stackSize"],
              fromPiece.stackSize + toPiece.stackSize
            );

          const sequenceKey = `${fromToKey}=>${playerPieceCoordinateAfterCapture}->${toCoordinate}`;

          allGameStatesAfterMoveSeq = allGameStatesAfterMoveSeq.set(
            sequenceKey,
            gameStateAfterMoveSeq
          );
        });
      });
    });

    return allGameStatesAfterMoveSeq;
  }, Map());
}

function minimax2(gameState, turn, depth) {
  const winner = getWinner(gameState);
  if (winner === PLAYER_ONE) {
    return -Infinity;
  }
  if (winner === PLAYER_TWO) {
    return Infinity;
  }

  if (depth === 0) {
    return getGameStateScore2(gameState);
  }

  // maximizing player
  if (turn === PLAYER_TWO) {
    let bestValue = -Infinity;

    // choose max score after player one makes his move
    const gameStatesToAnalyze = getGameStatesToAnalyze(gameState, PLAYER_TWO);
    gameStatesToAnalyze.forEach(nextGameState => {
      bestValue = Math.max(
        minimax2(nextGameState, PLAYER_ONE, depth - 1),
        bestValue
      );
    });

    return bestValue;
  }

  // minimizing player
  if (turn === PLAYER_ONE) {
    let bestValue = Infinity;

    // choose lowest score after player two makes move
    const gameStatesToAnalyze = getGameStatesToAnalyze(gameState, PLAYER_ONE);

    gameStatesToAnalyze.forEach(nextGameState => {
      bestValue = Math.min(
        minimax2(nextGameState, PLAYER_TWO, depth - 1),
        bestValue
      );
    });

    return bestValue;
  }
}

const typeScores = {
  [TOTT]: 30 / NUMBER_OF_TOTTS,
  [TZARRA]: 30 / NUMBER_OF_TZARRAS,
  [TZAAR]: 30 / NUMBER_OF_TZAARS
};

const scoringMapRecord = Map({
  [PLAYER_ONE]: Map({
    [TOTT]: Map({
      count: 0,
      stacksGreaterThanOne: 0
    }),
    [TZARRA]: Map({
      count: 0,
      stacksGreaterThanOne: 0
    }),
    [TZAAR]: Map({
      count: 0,
      stacksGreaterThanOne: 0
    })
  }),
  [PLAYER_TWO]: Map({
    [TOTT]: Map({
      count: 0,
      stacksGreaterThanOne: 0
    }),
    [TZARRA]: Map({
      count: 0,
      stacksGreaterThanOne: 0
    }),
    [TZAAR]: Map({
      count: 0,
      stacksGreaterThanOne: 0
    })
  })
});

function getGameStateScore2(gameState) {
  const scoringMap = gameState.reduce((piecesByPlayer, piece) => {
    if (!piece) {
      return piecesByPlayer;
    }
    const { ownedBy, type, stackSize } = piece;
    return piecesByPlayer
      .updateIn([ownedBy, type, "count"], count => count + 1)
      .updateIn(
        [ownedBy, type, "stacksGreaterThanOne"],
        stacks => (stacks + Number(stackSize) === 1 ? 0 : 1)
      );
  }, scoringMapRecord);

  let score = 0;

  scoringMap.get(PLAYER_ONE).forEach((data, pieceType) => {
    score =
      score -
      data.get("count") * typeScores[pieceType] -
      data.get("stacksGreaterThanOne") * typeScores[pieceType];
  });
  scoringMap.get(PLAYER_TWO).forEach((data, pieceType) => {
    score =
      score +
      data.get("count") * typeScores[pieceType] +
      data.get("stacksGreaterThanOne") * typeScores[pieceType];
  });
  return score;
}

export function initGame() {
  drawInitialGrid();
  setupBoardWithPieces();
  drawGameBoardState();
  drawCoordinates();
}

GAME_STATE_BOARD_CANVAS.addEventListener("mousedown", handleClickPiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mousemove", handleMovePiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mouseup", handleDropPiece);
