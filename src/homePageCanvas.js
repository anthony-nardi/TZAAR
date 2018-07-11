import {
  NUMBER_OF_COLS,
  NUMBER_OF_ROWS,
  HOME_PAGE_CANVAS,
  PIXEL_RATIO,
  GamePieceRecord,
  PLAYER_ONE,
  PLAYER_TWO,
  TZAAR,
  TZARRA,
  TOTT
} from "./constants";
import {
    PLAYER_ONE_TOTT,
    PLAYER_ONE_TZAAR,
    PLAYER_ONE_TZARRA,
    PLAYER_TWO_TOTT,
    PLAYER_TWO_TZAAR,
    PLAYER_TWO_TZARRA,
    GAME_PIECE_RADIUS,
    CANVAS_SIDE_LENGTH
  } from "./gamePieceRenderer";

const useWindowHeight = window.innerWidth > window.innerHeight;
const extraSpace = useWindowHeight ? 2.5 : 2;
const windowInnerHeightDeviceRatio = window.innerHeight;
const windowInnerWidthDeviceRatio = window.innerWidth;
export const TRIANGLE_SIDE_LENGTH =
  (useWindowHeight
    ? windowInnerHeightDeviceRatio
    : windowInnerWidthDeviceRatio) /
  (NUMBER_OF_COLS + extraSpace) * 2;
export const TRIANGLE_HEIGHT = TRIANGLE_SIDE_LENGTH * (Math.sqrt(3) / 2);

const COORDS_TO_NOT_RENDER = [
  "0,0",
  "0,1",
  "1,0",
  "2,0",
  "3,0",
  "1,1",
  "2,1",
  "0,2",
  "1,2",
  "0,3",
  "7,5",
  "7,6",
  "6,7",
  "6,6",
  "5,7",
  "6,7",
  "4,3",
  "3,4",
  "4,4",
  "7,7"
];

const OFFSET_X = 0;

const grid = getInitialGridState();

function initCanvas() {
  HOME_PAGE_CANVAS.width = window.innerWidth * PIXEL_RATIO;
  HOME_PAGE_CANVAS.height = window.innerHeight * PIXEL_RATIO;
  HOME_PAGE_CANVAS.style.width = `${window.innerWidth}px`;
  HOME_PAGE_CANVAS.style.height = `${window.innerHeight}px`;

  HOME_PAGE_CANVAS.getContext("2d").setTransform(
    PIXEL_RATIO,
    0,
    0,
    PIXEL_RATIO,
    0,
    0
  );
  HOME_PAGE_CANVAS.getContext('2d').filter = 'blur(6px)'
  HOME_PAGE_CANVAS.getContext('2d').shadowColor = 'black';
  HOME_PAGE_CANVAS.getContext('2d').shadowBlur = 5
}

function getContext() {
  return HOME_PAGE_CANVAS.getContext("2d");
}

function getInitialGridState() {
  const vertices = [];

  for (let colIndex = 0; colIndex < NUMBER_OF_COLS; colIndex++) {
    for (let rowIndex = 0; rowIndex < NUMBER_OF_ROWS; rowIndex++) {
      vertices.push(`${colIndex},${rowIndex}`);
    }
  }

  return vertices;
}

function getImageData() {
  const context = getContext();
  return context.getImageData(
    OFFSET_X * PIXEL_RATIO,
    0,
    PIXEL_RATIO * window.innerWidth,
    PIXEL_RATIO * window.innerHeight
  );
}

export function drawCachedBoard() {
  const context = HOME_PAGE_CANVAS.getContext("2d");
  const imageData = getImageData();

  context.putImageData(
    imageData,
    (window.innerWidth / 2 - 4 * TRIANGLE_SIDE_LENGTH) * PIXEL_RATIO,
    (window.innerHeight / 2 - 4 * TRIANGLE_HEIGHT) * PIXEL_RATIO
  );
}
export function drawGamePiece(gamePiece, xPos, yPos) {
    const context = getContext();
    if (gamePiece.ownedBy === "PLAYER_ONE") {
      context.fillStyle = "#212121";
      context.beginPath();
      context.arc(xPos, yPos, TRIANGLE_HEIGHT / 2.5, 0, 2 * Math.PI);
      context.fill();
    } else {
      context.fillStyle = "#1E88E5";
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
  

  }
  export function getPixelCoordinatesFromBoardCoordinates(coordinate) {
    const [x, y] = coordinate.split(",");
  
    // const offsetXToCenter = window.innerWidth / 2 - 4 * TRIANGLE_SIDE_LENGTH;
    // const offsetYToCenter = window.innerHeight / 2 - 4 * TRIANGLE_HEIGHT;
  
    const offsetX =
      x * TRIANGLE_SIDE_LENGTH - Math.max(4 - y, 0) * TRIANGLE_SIDE_LENGTH;
  
    const xPos =
      (Math.abs(4 - y) * TRIANGLE_SIDE_LENGTH) / 2 + offsetX ;
  
    const yPos = y * TRIANGLE_HEIGHT ;
    return `${xPos},${yPos}`;
  }
export function drawInitialGrid() {
  initCanvas();
  grid.map(renderTriangleFromVertex);
  renderHexagonBorder();
  renderInnerHexagonBorder();

  const [xPos1, yPos1] = getPixelCoordinatesFromBoardCoordinates(
    '4,0'
  ).split(",");
  const [xPos2, yPos2] = getPixelCoordinatesFromBoardCoordinates(
    '4,3'
  ).split(",");
  const [xPos3, yPos3] = getPixelCoordinatesFromBoardCoordinates(
    '3,4'
  ).split(",");
  const [xPos4, yPos4] = getPixelCoordinatesFromBoardCoordinates(
    '0,6'
  ).split(",");
  const [xPos5, yPos5] = getPixelCoordinatesFromBoardCoordinates(
    '5,2'
  ).split(",");



  drawGamePiece(new GamePieceRecord({ownedBy: PLAYER_TWO, type: TZAAR}), xPos1, yPos1)
  drawGamePiece(new GamePieceRecord({ownedBy: PLAYER_ONE, type: TZARRA}), xPos2, yPos2)
  drawGamePiece(new GamePieceRecord({ownedBy: PLAYER_TWO, type: TOTT}), xPos3, yPos3)
  drawGamePiece(new GamePieceRecord({ownedBy: PLAYER_TWO, type: TOTT}), xPos4, yPos4)
  drawGamePiece(new GamePieceRecord({ownedBy: PLAYER_ONE, type: TZAAR}), xPos5, yPos5)

}

function renderTriangleFromVertex(coordinate) {
  const context = getContext();

  if (COORDS_TO_NOT_RENDER.includes(coordinate)) {
    return;
  }
  const [x, y] = coordinate.split(",");

  const offsetX = (y * TRIANGLE_SIDE_LENGTH) / 2 - TRIANGLE_SIDE_LENGTH * 2;
  const startX = x * TRIANGLE_SIDE_LENGTH + offsetX;
  const startY = y * TRIANGLE_HEIGHT;

  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(startX + TRIANGLE_SIDE_LENGTH, startY);
  context.lineTo(startX + TRIANGLE_SIDE_LENGTH / 2, startY + TRIANGLE_HEIGHT);
  context.lineTo(startX, startY);
  context.closePath();
  context.lineWidth = 1;
  context.strokeStyle = "#666666";
  context.stroke();
}

function renderHexagonBorder() {
  const context = getContext();

  const x1 = 2 * TRIANGLE_SIDE_LENGTH + OFFSET_X;
  const y1 = 0;

  const x2 = 0 * TRIANGLE_SIDE_LENGTH + OFFSET_X;
  const y2 = 4 * TRIANGLE_HEIGHT;

  const x3 = 2 * TRIANGLE_SIDE_LENGTH + OFFSET_X;
  const y3 = 8 * TRIANGLE_HEIGHT;

  const x4 = 6 * TRIANGLE_SIDE_LENGTH + OFFSET_X;
  const y4 = 8 * TRIANGLE_HEIGHT;

  const x5 = 8 * TRIANGLE_SIDE_LENGTH + OFFSET_X;
  const y5 = 4 * TRIANGLE_HEIGHT;

  const x6 = 6 * TRIANGLE_SIDE_LENGTH + OFFSET_X;
  const y6 = 0;

  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.lineTo(x4, y4);
  context.lineTo(x5, y5);
  context.lineTo(x6, y6);

  context.closePath();
  context.lineWidth = 2;
  context.strokeStyle = "#666666";
  context.stroke();
}

function renderInnerHexagonBorder() {
  const context = getContext();

  const x1 = 4 * TRIANGLE_SIDE_LENGTH - TRIANGLE_SIDE_LENGTH / 2 + OFFSET_X;
  const y1 = 3 * TRIANGLE_HEIGHT;

  const x2 = 3 * TRIANGLE_SIDE_LENGTH + OFFSET_X;
  const y2 = 4 * TRIANGLE_HEIGHT;

  const x3 = 3 * TRIANGLE_SIDE_LENGTH + TRIANGLE_SIDE_LENGTH / 2 + OFFSET_X;
  const y3 = 5 * TRIANGLE_HEIGHT;

  const x4 = 5 * TRIANGLE_SIDE_LENGTH - TRIANGLE_SIDE_LENGTH / 2 + OFFSET_X;
  const y4 = 5 * TRIANGLE_HEIGHT;

  const x5 = 5 * TRIANGLE_SIDE_LENGTH + OFFSET_X;
  const y5 = 4 * TRIANGLE_HEIGHT;

  const x6 = 5 * TRIANGLE_SIDE_LENGTH - TRIANGLE_SIDE_LENGTH / 2 + OFFSET_X;
  const y6 = 3 * TRIANGLE_HEIGHT;

  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.lineTo(x4, y4);
  context.lineTo(x5, y5);
  context.lineTo(x6, y6);

  context.closePath();
  context.lineWidth = 2;
  context.strokeStyle = "#666666";
  context.stroke();
}

function renderSquareBorder() {
  const context = getContext();
  context.strokeRect(
    OFFSET_X,
    0,
    8 * TRIANGLE_SIDE_LENGTH,
    8 * TRIANGLE_HEIGHT
  );
}


