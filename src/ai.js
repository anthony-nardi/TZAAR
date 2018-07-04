import { List, Map } from "immutable";
import {
  TZAAR,
  TOTT,
  TZARRA,
  NUMBER_OF_TOTTS,
  NUMBER_OF_TZARRAS,
  NUMBER_OF_TZAARS,
  PLAYER_ONE,
  PLAYER_TWO
} from "./constants";

import { currentTurn, numberOfTurnsIntoGame } from "./gameState";
import {
  getValidCaptures,
  getValidStacks,
  getInvertedValidCaptures
} from "./gameBoardHelpers";

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

export function getGameStateScore2(gameState) {
  const scoringMap = gameState.reduce((piecesByPlayer, piece) => {
    if (!piece) {
      return piecesByPlayer;
    }

    const { ownedBy, type, stackSize } = piece;
    return piecesByPlayer
      .updateIn([ownedBy, type, "count"], count => count + 1)
      .updateIn(
        [ownedBy, type, "stacksGreaterThanOne"],
        stacks => stacks + (Number(stackSize) - 1)
      );
  }, scoringMapRecord);

  let score = 0;

  scoringMap.get(PLAYER_ONE).forEach((data, pieceType) => {
    score =
      score -
      data.get("count") * typeScores[pieceType] -
      getScoreForStacks(data.get("count"), data.get("stacksGreaterThanOne"));
  });
  scoringMap.get(PLAYER_TWO).forEach((data, pieceType) => {
    score =
      score +
      data.get("count") * typeScores[pieceType] +
      getScoreForStacks(data.get("count"), data.get("stacksGreaterThanOne"));
  });
  return score;
}

// we value stacks depending on how many of that type are on the board
function getScoreForStacks(numberOfPieces, stackSize) {
  const MULTIPLIER = 15;

  return (MULTIPLIER - numberOfPieces) * stackSize;
}

export function minimax(gameState, turn, depth, alpha = 5, beta = Infinity) {
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
        minimax(nextGameState, PLAYER_ONE, depth - 1, alpha, beta),
        bestValue
      );
      alpha = Math.max(bestValue, alpha);
      if (alpha >= beta) {
        return false;
      }
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
        minimax(nextGameState, PLAYER_TWO, depth - 1, alpha, beta),
        bestValue
      );
      beta = Math.min(beta, bestValue);
      if (alpha >= beta) {
        return false;
      }
    });

    return bestValue;
  }
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

export function getWinner(gameState) {
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

export function getGameStatesToAnalyze(gameState, turn) {
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

export function getAllPlayerPieceCoordinates(gameState, player) {
  return gameState.filter(piece => piece && piece.ownedBy === player).keySeq();
}

export function getAllPlayerPieceCoordinatesByType(gameState, player, type) {
  return gameState
    .filter(piece => piece && piece.ownedBy === player && piece.type === type)
    .keySeq();
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
      if (!allPlayerPiecesAfterCapture.size) {
        console.log("halloo");
        debugger;
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

export function getPossibleMoveSequences(gameState, turn) {
  const allPlayerPieces = getAllPlayerPieceCoordinates(gameState, turn);

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
        turn
      );

      allPlayerPiecesAfterCapture.forEach(playerPieceCoordinateAfterCapture => {
        const validStacks = getValidStacks(
          playerPieceCoordinateAfterCapture,
          stateAfterCapture
        );

        const fromPiece = stateAfterCapture.get(
          playerPieceCoordinateAfterCapture
        );

        if (validStacks && validStacks.size) {
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
        } else {
          const validSecondTurnCaptures = getValidCaptures(
            playerPieceCoordinateAfterCapture,
            stateAfterCapture
          );
          if (validSecondTurnCaptures && validSecondTurnCaptures.size) {
            validSecondTurnCaptures.forEach(toCoordinate => {
              const nextGameState = stateAfterCapture
                .set(playerPieceCoordinateAfterCapture, null)
                .set(toCoordinate, fromPiece);
              const sequenceKey = `${fromToKey}=>${playerPieceCoordinateAfterCapture}->${toCoordinate}`;

              allGameStatesAfterMoveSeq = allGameStatesAfterMoveSeq.set(
                sequenceKey,
                nextGameState
              );
            });
          }
        }
      });
    });

    return allGameStatesAfterMoveSeq;
  }, Map());
}
