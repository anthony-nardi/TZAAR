import { initGame } from "./gameLogic";

function startNewGame() {
  document.getElementById("gameMenu").classList.add("hidden");
  document.getElementById("gameStateBoard").classList.remove("hidden");
  initGame();
}

function showRules() {
  document.getElementById("gameMenu").classList.add("hidden");
  document.getElementById("rules").classList.remove("hidden");
}

function startApp() {
  document.getElementById("newGame").addEventListener("click", startNewGame);
  document.getElementById("showRules").addEventListener("click", showRules);
}
window.addEventListener("DOMContentLoaded", startApp, false);
