import { getPixelCoordinatesFromBoardCoordinates } from "./gameBoardHelpers";
import {
  DEBUG,
  TRIANGLE_SIDE_LENGTH,
  TRIANGLE_HEIGHT,
  PLAYABLE_VERTICES,
  GAME_STATE_BOARD_CANVAS,
  TZAAR,
  TZARRA
} from "./constants";
import { drawCachedBoard } from "./cachedBoard";
import { gameBoardState, setNewgameBoardState } from "./gameState";
import { List } from "immutable";

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
  context.font = '.5rem Helvetica'
  context.fillStyle = "#39ff14";
  context.fillText(coordinate, xPos + 10, yPos + 10);
}

export function drawGameBoardState() {
  clearCanvas();
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
    context.arc(xPos, yPos, TRIANGLE_HEIGHT / 2.5, 0, 2 * Math.PI);
    context.fill();
  } else {
    context.fillStyle = "#0D47A1";
    context.beginPath();
    context.arc(xPos, yPos, TRIANGLE_HEIGHT / 2.5, 0, 2 * Math.PI);
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
    context.font = "1.15rem Helvetica";
    context.fillStyle = gamePiece.type === TZAAR ? "#000" : "#fff";

    context.fillText(gamePiece.stackSize, +xPos - 6, +yPos + 6);
  }
}

export function drawGamePieces() {
  gameBoardState.forEach(drawStaticGamePiece);
}

export function clearCanvas() {
  const context = getContext();
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function timeFunction(t) {
  return --t * t * t + 1;
}

export function renderInitializingBoard(piecesToDraw, callback) {
  let index = 0;
  let piecesToRenderList = List();
  piecesToDraw.forEach((piece, coordinate) => {
    const to = getPixelCoordinatesFromBoardCoordinates(coordinate);
    const from = `${window.innerWidth / 2},${window.innerHeight / 2}`;

    piecesToRenderList = piecesToRenderList.push({
      piece,
      from,
      to,
      delay: index * 25
    });

    index = index + 1;
  });

  renderMovingPieces(piecesToRenderList, 500, Date.now(), () => {
    let index = 0;
    piecesToDraw.forEach((piece, coordinate) => {
      setNewgameBoardState(gameBoardState.set(coordinate, piece));
      index = index + 1;
    });
    callback();
  });
}

function renderMovingPieces(piecesToRenderList, duration, startTime, callback) {
  const now = Date.now();

  const timePassedInMilliSec = now - startTime;

  if (timePassedInMilliSec > duration + piecesToRenderList.last().delay) {
    callback();
    return;
  }

  clearCanvas();
  drawCachedBoard();

  piecesToRenderList.forEach(({ piece, from, to, delay }) => {
    const timePassed = Math.min(
      Math.max((now - startTime - delay) / duration, 0),
      1
    );

    const [fromX, fromY] = from.split(",");
    const [toX, toY] = to.split(",");

    const distance = Math.sqrt(
      Math.pow(fromX - toX, 2) + Math.pow(fromY - toY, 2)
    );

    const currentDistance = (timeFunction(timePassed) * distance) / distance;

    const renderX = (1 - currentDistance) * fromX + currentDistance * toX;
    const renderY = (1 - currentDistance) * fromY + currentDistance * toY;

    drawGamePiece(piece, renderX, renderY);
  });

  window.requestAnimationFrame(() => {
    renderMovingPieces(piecesToRenderList, duration, startTime, callback);
  });
}

export function renderMovingPiece(
  piece,
  from,
  to,
  duration,
  startTime,
  callback
) {
  const now = Date.now();

  const timePassedInMilliSec = now - startTime;

  if (timePassedInMilliSec > duration) {
    callback();
    return;
  }

  const timePassed = Math.min(Math.max((now - startTime) / duration, 0), 1);

  const [fromX, fromY] = from.split(",");
  const [toX, toY] = to.split(",");

  const distance = Math.sqrt(
    Math.pow(fromX - toX, 2) + Math.pow(fromY - toY, 2)
  );

  const currentDistance = (timeFunction(timePassed) * distance) / distance;

  const renderX = (1 - currentDistance) * fromX + currentDistance * toX;
  const renderY = (1 - currentDistance) * fromY + currentDistance * toY;

  clearCanvas();
  drawCachedBoard();
  drawGamePieces();
  drawGamePiece(piece, renderX, renderY);

  window.requestAnimationFrame(() => {
    renderMovingPiece(piece, from, to, duration, startTime, callback);
  });
}
