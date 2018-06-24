import { initGame } from "./gameLogic";

function startApp() {
  initGame();
}

window.addEventListener("DOMContentLoaded", startApp, false);
