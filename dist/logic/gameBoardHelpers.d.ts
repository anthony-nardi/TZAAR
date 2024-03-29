import { ValidCoordinate } from "../types/types";
import { GameBoardState } from "./GameState";
export declare function getPixelCoordinatesFromBoardCoordinates(coordinate: ValidCoordinate): string;
export declare function getBoardCoordinatesFromPixelCoordinates(x: number, y: number): ValidCoordinate;
export declare function goWest(coordinate: ValidCoordinate): ValidCoordinate;
export declare function goEast(coordinate: ValidCoordinate): ValidCoordinate;
export declare function goNorthWest(coordinate: ValidCoordinate): ValidCoordinate;
export declare function goNorthEast(coordinate: ValidCoordinate): ValidCoordinate;
export declare function goSouthWest(coordinate: ValidCoordinate): ValidCoordinate;
export declare function goSouthEast(coordinate: ValidCoordinate): ValidCoordinate;
export declare function isPlayableSpace(coordinate: ValidCoordinate): any;
export declare function setupSymmetricalBoard(): {
    "7,5": any;
    "6,6": any;
    "5,7": any;
    "4,3": any;
    "3,4": any;
    "0,4": any;
    "0,5": any;
    "0,6": any;
    "0,7": any;
    "0,8": any;
    "1,3": any;
    "1,4": any;
    "1,5": any;
    "1,6": any;
    "1,7": any;
    "1,8": any;
    "2,2": any;
    "2,3": any;
    "2,4": any;
    "2,5": any;
    "2,6": any;
    "2,7": any;
    "2,8": any;
    "3,1": any;
    "3,2": any;
    "3,3": any;
    "3,5": any;
    "3,6": any;
    "3,7": any;
    "3,8": any;
    "4,0": any;
    "4,1": any;
    "4,2": any;
    "4,5": any;
    "4,6": any;
    "4,7": any;
    "4,8": any;
    "5,0": any;
    "5,1": any;
    "5,2": any;
    "5,3": any;
    "5,4": any;
    "5,5": any;
    "5,6": any;
    "6,0": any;
    "6,1": any;
    "6,2": any;
    "6,3": any;
    "6,4": any;
    "6,5": any;
    "7,0": any;
    "7,1": any;
    "7,2": any;
    "7,3": any;
    "7,4": any;
    "8,0": any;
    "8,1": any;
    "8,2": any;
    "8,3": any;
    "8,4": any;
};
export declare function canCapture(fromCoordinate: ValidCoordinate, toCoordinate: ValidCoordinate, gameState: GameBoardState): boolean;
export declare function canStack(fromCoordinate: ValidCoordinate, toCoordinate: ValidCoordinate, gameState: GameBoardState): boolean;
export declare function isValidEmptyCoordinate(coordinate: ValidCoordinate, gameState: GameBoardState): boolean;
export declare function getValidStacksAndCaptures(fromCoordinate: ValidCoordinate, gameState: GameBoardState): ValidCoordinate[];
export declare function getValidCaptures(fromCoordinate: ValidCoordinate, gameState: GameBoardState): ValidCoordinate[];
export declare function getAnyCapture(fromCoordinate: ValidCoordinate, gameState: GameBoardState): false | ValidCoordinate;
export declare function getValidStacks(fromCoordinate: ValidCoordinate, gameState: GameBoardState): ValidCoordinate[];
export declare function getAnyInvertedValidCaptures(toCoordinate: ValidCoordinate, gameState: GameBoardState): false | ValidCoordinate;
export declare function getInvertedValidCaptures(toCoordinate: ValidCoordinate, gameState: GameBoardState): ValidCoordinate[];
export declare const nextPiece: {
    w: (coordinate: ValidCoordinate) => any;
    e: (coordinate: ValidCoordinate) => any;
    nw: (coordinate: ValidCoordinate) => any;
    ne: (coordinate: ValidCoordinate) => any;
    sw: (coordinate: ValidCoordinate) => any;
    se: (coordinate: ValidCoordinate) => any;
};
