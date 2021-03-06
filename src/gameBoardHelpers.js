import {
  TRIANGLE_SIDE_LENGTH,
  TRIANGLE_HEIGHT,
  PLAYABLE_VERTICES,
  GamePieceRecord,
  TZAAR,
  TOTT,
  TZARRA,
  NUMBER_OF_TOTTS,
  NUMBER_OF_TZARRAS,
  NUMBER_OF_TZAARS,
  PLAYER_TWO,
  PLAYER_ONE
} from "./constants";
import { List, Map } from "immutable";

export function getPixelCoordinatesFromBoardCoordinates(coordinate) {
  const [x, y] = coordinate.split(",");

  const offsetXToCenter = window.innerWidth / 2 - 4 * TRIANGLE_SIDE_LENGTH;
  const offsetYToCenter = window.innerHeight / 2 - 4 * TRIANGLE_HEIGHT;

  const offsetX =
    x * TRIANGLE_SIDE_LENGTH - Math.max(4 - y, 0) * TRIANGLE_SIDE_LENGTH;

  const xPos =
    (Math.abs(4 - y) * TRIANGLE_SIDE_LENGTH) / 2 + offsetX + offsetXToCenter;

  const yPos = y * TRIANGLE_HEIGHT + offsetYToCenter;
  return `${xPos},${yPos}`;
}

export function getBoardCoordinatesFromPixelCoordinates(x, y) {
  const offsetXToCenter =
    (window.innerWidth / 2 - 4 * TRIANGLE_SIDE_LENGTH) / TRIANGLE_SIDE_LENGTH;
  const offsetYToCenter =
    (window.innerHeight / 2 - 4 * TRIANGLE_HEIGHT) / TRIANGLE_HEIGHT;

  const yPos = y / TRIANGLE_HEIGHT - offsetYToCenter;

  const interimX = x / TRIANGLE_SIDE_LENGTH - offsetXToCenter;

  const offsetXBecauseY =
    (Math.abs(4 - yPos) * TRIANGLE_SIDE_LENGTH) / 2 / TRIANGLE_SIDE_LENGTH;

  const offsetXBecauseAnotherY = Math.max(4 - yPos, 0);

  const xPos = interimX - offsetXBecauseY + offsetXBecauseAnotherY;

  const xCoord = Math.round(xPos);
  const yCoord = Math.round(yPos);
  return `${xCoord},${yCoord}`;
}

export function goWest(coordinate) {
  let [x, y] = coordinate.split(",");
  x = Number(x);
  y = Number(y);

  return `${x - 1},${y}`;
}

export function goEast(coordinate) {
  let [x, y] = coordinate.split(",");

  x = Number(x);
  y = Number(y);

  return `${x + 1},${y}`;
}

export function goNorthWest(coordinate) {
  let [x, y] = coordinate.split(",");

  x = Number(x);
  y = Number(y);

  return `${x},${y - 1}`;
}

export function goNorthEast(coordinate) {
  let [x, y] = coordinate.split(",");
  x = Number(x);
  y = Number(y);

  return `${x + 1},${y - 1}`;
}

export function goSouthWest(coordinate) {
  let [x, y] = coordinate.split(",");

  x = Number(x);
  y = Number(y);

  return `${x - 1},${y + 1}`;
}

export function goSouthEast(coordinate) {
  let [x, y] = coordinate.split(",");
  x = Number(x);
  y = Number(y);

  return `${x},${y + 1}`;
}

export function isPlayableSpace(coordinate) {
  return PLAYABLE_VERTICES.includes(coordinate);
}

export function setupBoardWithPiecesNotRandom() {
  let piecesToDraw = Map({
    "4,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "5,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "6,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "7,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "8,0": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "8,1": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "8,2": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "8,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "8,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "7,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "6,6": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "5,7": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "4,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "3,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "2,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "1,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "0,8": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "0,7": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "0,6": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "0,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "0,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "1,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "2,2": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "3,1": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "4,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
    "5,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
    "6,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
    "7,1": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
    "7,2": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
    "7,3": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
    "7,4": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
    "6,5": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
    "5,6": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
    "4,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
    "3,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
    "2,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
    "1,7": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
    "1,6": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
    "1,5": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_ONE }),
    "1,4": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
    "2,3": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
    "3,2": new GamePieceRecord({ type: TZARRA, ownedBy: PLAYER_TWO }),
    "4,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
    "5,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
    "6,2": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
    "6,3": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
    "6,4": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
    "5,5": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
    "4,6": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
    "3,6": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
    "2,6": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
    "2,5": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_ONE }),
    "2,4": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
    "3,3": new GamePieceRecord({ type: TZAAR, ownedBy: PLAYER_TWO }),
    "4,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "5,3": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "5,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "4,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO }),
    "3,5": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_ONE }),
    "3,4": new GamePieceRecord({ type: TOTT, ownedBy: PLAYER_TWO })
  }).sortBy(Math.random);

  return piecesToDraw;
}

export function setupBoardWithPieces() {
  let piecesToDraw = Map();
  let PLAYER_ONE_PIECES = List();
  let PLAYER_TWO_PIECES = List();

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
    piecesToDraw = piecesToDraw.set(PLAYABLE_VERTICES[index], piece);
    // setNewgameBoardState(gameBoardState.set(PLAYABLE_VERTICES[index], piece));
  });
  return piecesToDraw.sortBy(Math.random);
}

export function canCapture(fromCoordinate, toCoordinate, gameState) {
  const fromPiece = gameState.get(fromCoordinate);
  const toPiece = gameState.get(toCoordinate);

  return (
    fromPiece.ownedBy !== toPiece.ownedBy &&
    fromPiece.stackSize >= toPiece.stackSize
  );
}

export function canStack(fromCoordinate, toCoordinate, gameState) {
  const fromPiece = gameState.get(fromCoordinate);
  const toPiece = gameState.get(toCoordinate);

  return fromPiece.ownedBy === toPiece.ownedBy;
}

export function isValidEmptyCoordinate(coordinate, gameState) {
  return Boolean(
    PLAYABLE_VERTICES.includes(coordinate) && !gameState.get(coordinate)
  );
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

export function getValidCaptures(fromCoordinate, gameState) {
  return List([
    getNextValidCapture(fromCoordinate, "w", gameState),
    getNextValidCapture(fromCoordinate, "e", gameState),
    getNextValidCapture(fromCoordinate, "nw", gameState),
    getNextValidCapture(fromCoordinate, "ne", gameState),
    getNextValidCapture(fromCoordinate, "sw", gameState),
    getNextValidCapture(fromCoordinate, "se", gameState)
  ]).filter(isValidMove => isValidMove);
}

export function getValidStacks(fromCoordinate, gameState) {
  return List([
    getNextValidStack(fromCoordinate, "w", gameState),
    getNextValidStack(fromCoordinate, "e", gameState),
    getNextValidStack(fromCoordinate, "nw", gameState),
    getNextValidStack(fromCoordinate, "ne", gameState),
    getNextValidStack(fromCoordinate, "sw", gameState),
    getNextValidStack(fromCoordinate, "se", gameState)
  ]).filter(isValidMove => isValidMove);
}
export function getInvertedValidCaptures(toCoordinate, gameState) {
  return List([
    getNextInvertedValidCapture(toCoordinate, "w", gameState),
    getNextInvertedValidCapture(toCoordinate, "e", gameState),
    getNextInvertedValidCapture(toCoordinate, "nw", gameState),
    getNextInvertedValidCapture(toCoordinate, "ne", gameState),
    getNextInvertedValidCapture(toCoordinate, "sw", gameState),
    getNextInvertedValidCapture(toCoordinate, "se", gameState)
  ]).filter(isValidMove => isValidMove);
}

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

export const nextPiece = {
  w: goWest,
  e: goEast,
  nw: goNorthWest,
  ne: goNorthEast,
  sw: goSouthWest,
  se: goSouthEast
};
