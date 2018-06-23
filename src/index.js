import { drawInitialGrid } from "./cachedBoard";
import { drawCoordinates, setupBoardWithPieces } from "./gameLogic";

function startApp() {
  drawInitialGrid();
  drawCoordinates();
  setupBoardWithPieces();
}

window.addEventListener("DOMContentLoaded", startApp, false);
