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
