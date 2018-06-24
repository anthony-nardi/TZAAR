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
import { drawCachedBoard, drawInitialGrid } from "./cachedBoard";
import {
  drawCoordinate,
  drawCoordinates,
  drawGameBoardState,
  drawGamePiece,
  drawGamePieces,
  clearCanvas
} from "./renderHelpers";
import { getBoardCoordinatesFromPixelCoordinates } from "./gameBoardHelpers";
import { List, Map } from "immutable";
import {
  movingPiece,
  gamePiecesState,
  setNewGamePiecesState,
  setMovingPiece
} from "./gameState";

let PLAYER_ONE_PIECES = List();
let PLAYER_TWO_PIECES = List();

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
    setNewGamePiecesState(gamePiecesState.set(PLAYABLE_VERTICES[index], piece));
  });

  drawGameBoardState();
}

function handleClickPiece({ x, y }) {
  const key = getBoardCoordinatesFromPixelCoordinates(x, y);

  if (!gamePiecesState.get(key)) {
    return;
  }

  setNewGamePiecesState(gamePiecesState.setIn([key, "isDragging"], true));

  setMovingPiece(key);
}

function handleMovePiece({ x, y }) {
  if (!movingPiece) {
    return;
  }
  clearCanvas();
  drawCachedBoard();
  drawGamePieces();
  drawCoordinates();
  drawGamePiece(gamePiecesState.get(movingPiece), x, y);
}

function handleDropPiece() {
  setMovingPiece(null);
}

export function initGame() {
  drawInitialGrid();
  drawCoordinates();
  setupBoardWithPieces();
}

GAME_STATE_BOARD_CANVAS.addEventListener("mousedown", handleClickPiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mousemove", handleMovePiece);
GAME_STATE_BOARD_CANVAS.addEventListener("mouseup", handleDropPiece);
