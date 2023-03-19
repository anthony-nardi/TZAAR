import { GameBoardState } from "./GameState";
import { Player, PlayerPieces, ValidCoordinate } from "../types/types";
export declare function getGameStatesToAnalyze(gameState: GameBoardState, turn: Player): string[];
export declare function getEarlyGameMoveSequences(gameState: any, turn: Player, type: PlayerPieces): string[];
export declare function getAllPlayerPieceCoordinates(gameState: GameBoardState, player: Player): ValidCoordinate[];
export declare function getAllPlayerPieceCoordinatesByType(gameState: GameBoardState, player: Player, type: PlayerPieces, stackSize?: number): ValidCoordinate[];
export declare function getPossibleMoveSequences(gameState: GameBoardState, turn: Player): string[];
