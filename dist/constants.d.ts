import { ValidCoordinate } from "./types/types";
export declare const AI_ANIMATION_DURATION = 1000;
export declare const NUMBER_OF_TOTTS = 15;
export declare const NUMBER_OF_TZARRAS = 9;
export declare const NUMBER_OF_TZAARS = 6;
export declare const PLAYABLE_VERTICES: ValidCoordinate[];
export declare const CORNER_COORDINATES: readonly ["4,0", "8,0", "8,4", "4,8", "0,8", "0,4"];
export declare const EDGE_COORDINATES: readonly ["5,0", "6,0", "7,0", "8,1", "8,2", "8,3", "7,5", "6,6", "5,7", "3,8", "2,8", "1,8", "0,7", "0,6", "0,5", "1,3", "2,2", "3,1"];
export declare const EDGE_COORDINATES_AS_MAP: any;
export declare const CORNER_COORDINATES_AS_MAP: any;
export declare const PLAYABLE_VERTICES_AS_MAP: any;
export declare const TZAAR = "TZAAR";
export declare const TOTT = "TOTT";
export declare const TZARRA = "TZARRA";
export declare const PLAYER_ONE: "PLAYER_ONE";
export declare const PLAYER_TWO: "PLAYER_TWO";
export declare const CAPTURE: "CAPTURE";
export declare const STACK_OR_CAPTURE_OR_PASS: "STACK_OR_CAPTURE_OR_PASS";
export declare const TURN_PHASES: {
    CAPTURE: "CAPTURE";
    STACK_OR_CAPTURE_OR_PASS: "STACK_OR_CAPTURE_OR_PASS";
};
