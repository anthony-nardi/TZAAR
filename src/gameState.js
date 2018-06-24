import { List, Map } from "immutable";

export let movingPiece = null;
export let gamePiecesState = Map();

export function setNewGamePiecesState(newState) {
  gamePiecesState = newState;
}

export function setMovingPiece(coordinate) {
  movingPiece = coordinate;
}
