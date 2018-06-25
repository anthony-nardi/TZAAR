import { initGame } from "./gameLogic";

function startNewGame() {
  document.getElementById("gameMenu").classList.add("hidden");
  document.getElementById("gameStateBoard").classList.remove("hidden");
  document.getElementById("gameState").classList.remove("hidden");
  initGame();
}

function backToGameMenu() {
  document.getElementById("gameMenu").classList.remove("hidden");
  document.getElementById("rules").classList.add("hidden");
}

function showRules() {
  document.getElementById("gameMenu").classList.add("hidden");
  document.getElementById("rules").classList.remove("hidden");
}

function startApp() {
  document.getElementById("newGame").addEventListener("click", startNewGame);
  document.getElementById("showRules").addEventListener("click", showRules);
  document
    .getElementById("backToGameMenu")
    .addEventListener("click", backToGameMenu);
}
window.addEventListener("DOMContentLoaded", startApp, false);
