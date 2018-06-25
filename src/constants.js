import { Record } from "immutable";

export const DEBUG = false;
export const NUMBER_OF_ROWS = 8;
export const NUMBER_OF_COLS = 8;
export const TRIANGLE_SIDE_LENGTH = window.innerHeight / (NUMBER_OF_COLS + 2.5);
export const TRIANGLE_HEIGHT = TRIANGLE_SIDE_LENGTH * (Math.sqrt(3) / 2);
export const CACHED_CANVAS = document.createElement("canvas");
export const GAME_STATE_BOARD_CANVAS = document.getElementById(
  "gameStateBoard"
);

export const NUMBER_OF_TOTTS = 15;
export const NUMBER_OF_TZARRAS = 9;
export const NUMBER_OF_TZAARS = 6;
export const PLAYABLE_VERTICES = [
  "4,0",
  "5,0",
  "6,0",
  "7,0",
  "8,0",
  "3,1",
  "4,1",
  "5,1",
  "6,1",
  "7,1",
  "8,1",
  "2,2",
  "3,2",
  "4,2",
  "5,2",
  "6,2",
  "7,2",
  "8,2",
  "1,3",
  "2,3",
  "3,3",
  "4,3",
  "5,3",
  "6,3",
  "7,3",
  "8,3",
  "0,4",
  "1,4",
  "2,4",
  "3,4",
  "5,4",
  "6,4",
  "7,4",
  "8,4",
  "0,5",
  "1,5",
  "2,5",
  "3,5",
  "4,5",
  "5,5",
  "6,5",
  "7,5",
  "0,6",
  "1,6",
  "2,6",
  "3,6",
  "4,6",
  "5,6",
  "6,6",
  "0,7",
  "1,7",
  "2,7",
  "3,7",
  "4,7",
  "5,7",
  "0,8",
  "1,8",
  "2,8",
  "3,8",
  "4,8"
];

export const TZAAR = "TZAAR";
export const TOTT = "TOTT";
export const TZARRA = "TZARRA";

export const GamePieceRecord = Record({
  ownedBy: "",
  type: "",
  stackSize: 1,
  isDragging: false
});

export const PLAYER_ONE = "PLAYER_ONE";
export const PLAYER_TWO = "PLAYER_TWO";
export const TURN_PHASES = {
  CAPTURE: "CAPTURE",
  STACK_OR_CAPTURE: "STACK_OR_CAPTURE"
};
