import { GameBoardState } from "./GameState";
import { Player } from "../types/types";
export declare function getHasAllThreePieceTypes(gameState: GameBoardState): 1 | 2 | undefined;
export declare function isAnyPieceCapturable(gameState: GameBoardState, player: Player): boolean;
export declare function canCaptureAnyPiece(gameState: GameBoardState, player: Player): boolean;
export declare function getWinner(gameState: GameBoardState, beforeTurnStart: boolean, turn: Player): "PLAYER_ONE" | "PLAYER_TWO" | undefined;
