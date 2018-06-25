import {
  getBoardCoordinatesFromPixelCoordinates,
  getPixelCoordinatesFromBoardCoordinates
} from "./gameBoardHelpers";
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
  NUMBER_OF_TZAARS
} from "./constants";
import { drawCachedBoard } from "./cachedBoard";
import { movingPiece, gameBoardState } from "./gameState";

function getContext() {
  return GAME_STATE_BOARD_CANVAS.getContext("2d");
}

export function drawCoordinates() {
  if (!DEBUG) {
    return;
  }
  PLAYABLE_VERTICES.map(drawCoordinate);
}

export function drawCoordinate(coordinate) {
  const context = getContext();
  const [x, y] = coordinate.split(",");

  const offsetXToCenter = window.innerWidth / 2 - 4 * TRIANGLE_SIDE_LENGTH;
  const offsetYToCenter = window.innerHeight / 2 - 4 * TRIANGLE_HEIGHT;

  const offsetX =
    x * TRIANGLE_SIDE_LENGTH - Math.max(4 - y, 0) * TRIANGLE_SIDE_LENGTH;

  const xPos =
    (Math.abs(4 - y) * TRIANGLE_SIDE_LENGTH) / 2 + offsetX + offsetXToCenter;

  const yPos = y * TRIANGLE_HEIGHT + offsetYToCenter;
  context.fillStyle = "#fff";
  context.fillText(coordinate, xPos + 10, yPos + 10);
}

export function drawGameBoardState() {
  drawCachedBoard();
  drawGamePieces();
  drawCoordinates();
}

export function drawStaticGamePiece(gamePiece, coordinate) {
  const [xPos, yPos] = getPixelCoordinatesFromBoardCoordinates(
    coordinate
  ).split(",");

  if (gamePiece.isDragging || !gamePiece) {
    return;
  }

  drawGamePiece(gamePiece, xPos, yPos);
}

export function drawGamePiece(gamePiece, xPos, yPos) {
  const context = getContext();
  if (gamePiece.ownedBy === "PLAYER_ONE") {
    context.fillStyle = "#212121";
    context.beginPath();
    context.arc(xPos, yPos, TRIANGLE_HEIGHT / 3, 0, 2 * Math.PI);
    context.fill();
  } else {
    context.fillStyle = "#0D47A1";
    context.beginPath();
    context.arc(xPos, yPos, TRIANGLE_HEIGHT / 3, 0, 2 * Math.PI);
    context.fill();
  }

  if (gamePiece.type === TZAAR) {
    context.fillStyle = "#FDD835";
    context.beginPath();
    context.arc(xPos, yPos, TRIANGLE_HEIGHT / 6, 0, 2 * Math.PI);
    context.fill();
  } else if (gamePiece.type === TZARRA) {
    context.strokeStyle = "#FDD835";
    context.lineWidth = 3;
    context.beginPath();
    context.arc(xPos, yPos, TRIANGLE_HEIGHT / 5, 0, 2 * Math.PI);
    context.stroke();
  }

  if (gamePiece.stackSize) {
    context.font = "12px Verdana";
    context.fillStyle = gamePiece.type === TZAAR ? "#000" : "#fff";

    context.fillText(gamePiece.stackSize, +xPos - 4, +yPos + 4);
  }
}

export function drawGamePieces() {
  gameBoardState.forEach(drawStaticGamePiece);
}

export function clearCanvas() {
  const context = getContext();
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
}
