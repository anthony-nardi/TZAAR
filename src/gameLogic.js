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
import { List, Map } from "immutable";
function getContext() {
  return GAME_STATE_BOARD_CANVAS.getContext("2d");
}

let movingPiece = null;

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

export function drawCoordinates() {
  PLAYABLE_VERTICES.map(drawCoordinate);
}

let PLAYER_ONE_PIECES = List();
let PLAYER_TWO_PIECES = List();

export let gamePiecesState = Map();

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
    gamePiecesState = gamePiecesState.set(PLAYABLE_VERTICES[index], piece);
  });

  drawGameBoardState();
}

export function drawGameBoardState() {
  drawCachedBoard();
  drawPieces();
  drawCoordinates();
}

function drawPiece(gamePiece, coordinate) {
  const context = getContext();
  const [x, y] = coordinate.split(",");

  const offsetXToCenter = window.innerWidth / 2 - 4 * TRIANGLE_SIDE_LENGTH;
  const offsetYToCenter = window.innerHeight / 2 - 4 * TRIANGLE_HEIGHT;

  const offsetX =
    x * TRIANGLE_SIDE_LENGTH - Math.max(4 - y, 0) * TRIANGLE_SIDE_LENGTH;

  const xPos =
    (Math.abs(4 - y) * TRIANGLE_SIDE_LENGTH) / 2 + offsetX + offsetXToCenter;

  const yPos = y * TRIANGLE_HEIGHT + offsetYToCenter;

  if (gamePiece.isDragging) {
    return;
  }

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
}

function drawDraggingPiece(gamePiece, xPos, yPos) {
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
}

export function drawPieces() {
  gamePiecesState.forEach(drawPiece);
}

function handleClickPiece({ x, y }) {
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
  const key = `${xCoord},${yCoord}`;

  if (!gamePiecesState.get(key)) {
    return;
  }

  gamePiecesState = gamePiecesState.setIn([key, "isDragging"], true);
  drawPiece(gamePiecesState.get(key), key);
  movingPiece = key;
}

function clearCanvas() {
  const context = getContext();
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function handleMovePiece({ x, y }) {
  if (!movingPiece) {
    return;
  }
  clearCanvas();
  drawCachedBoard();
  drawPieces();
  drawCoordinates();
  drawDraggingPiece(gamePiecesState.get(movingPiece), x, y);
}

function handleDropPiece() {
  movingPiece = null;
}

GAME_STATE_BOARD_CANVAS.addEventListener("mousedown", handleClickPiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mousemove", handleMovePiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mouseup", handleDropPiece);
