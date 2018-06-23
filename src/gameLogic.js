import {
  DEBUG,
  NUMBER_OF_COLS,
  NUMBER_OF_ROWS,
  TRIANGLE_SIDE_LENGTH,
  TRIANGLE_HEIGHT,
  PLAYABLE_VERTICES,
  GAME_STATE_BOARD_CANVAS
} from "./constants";

function getContext() {
  return GAME_STATE_BOARD_CANVAS.getContext("2d");
}

export function drawCoordinate(coordinate) {
  const context = getContext();
  const [x, y] = coordinate.split(",");

  const offsetX =
    x * TRIANGLE_SIDE_LENGTH - Math.max(4 - y, 0) * TRIANGLE_SIDE_LENGTH;

  const xPos = (Math.abs(4 - y) * TRIANGLE_SIDE_LENGTH) / 2 + offsetX;

  const yPos = y * TRIANGLE_HEIGHT;
  context.fillText(coordinate, xPos + 10, yPos + 10);
}

export function drawCoordinates() {
  PLAYABLE_VERTICES.map(drawCoordinate);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PLAYER_ONE_PIECES = [
  "tott1",
  "tott2",
  "tott3",
  "tott4",
  "tott5",
  "tott6",
  "tott7",
  "tott8",
  "tott9",
  "tott10",
  "tott11",
  "tott12",
  "tott13",
  "tott14",
  "tott15",
  "tzarra1",
  "tzarra2",
  "tzarra3",
  "tzarra4",
  "tzarra5",
  "tzarra6",
  "tzarra7",
  "tzarra8",
  "tzarra9",
  "tzaar1",
  "tzaar2",
  "tzaar3",
  "tzaar4",
  "tzaar5",
  "tzaar6"
];

const PLAYER_TWO_PIECES = [
  "tott1",
  "tott2",
  "tott3",
  "tott4",
  "tott5",
  "tott6",
  "tott7",
  "tott8",
  "tott9",
  "tott10",
  "tott11",
  "tott12",
  "tott13",
  "tott14",
  "tott15",
  "tzarra1",
  "tzarra2",
  "tzarra3",
  "tzarra4",
  "tzarra5",
  "tzarra6",
  "tzarra7",
  "tzarra8",
  "tzarra9",
  "tzaar1",
  "tzaar2",
  "tzaar3",
  "tzaar4",
  "tzaar5",
  "tzaar6"
];

export const gamePiecesState = {
  ...PLAYABLE_VERTICES
};

export function setupBoardWithPieces() {
  const allGamePieces = PLAYER_ONE_PIECES.concat(PLAYER_TWO_PIECES);
  const shuffledPieces = shuffle(allGamePieces);
  shuffledPieces.forEach((piece, index) => {
    gamePiecesState[PLAYABLE_VERTICES[index]] = piece;
  });
  console.log(gamePiecesState);
}
