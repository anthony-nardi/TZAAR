import { PLAYER_ONE, PLAYER_TWO, TURN_PHASES, CAPTURE, STACK_OR_CAPTURE_OR_PASS } from "../constants";
import { Player, PlayerPieces, ValidCoordinate } from "../types/types";
export type PieceState = {
    isDragging: boolean;
    ownedBy: Player;
    stackSize: number;
    type: PlayerPieces;
};
export type GameBoardState = {
    [K in ValidCoordinate]: false | PieceState;
};
declare class GameState {
    private gameStarted;
    private isVeryFirstTurn;
    private currentTurn;
    private turnPhase;
    private numberOfTurnsIntoGame;
    private isFirstPlayerAI;
    private isSecondPlayerAI;
    private movingPiece;
    private gameBoardState;
    getHasGameStarted(): boolean;
    setHasGameStarted(): void;
    getMovingPiece(): ValidCoordinate | null;
    setMovingPiece(movingPiece: null | ValidCoordinate): void;
    getGameBoardState(): GameBoardState;
    setGameBoardState(gameBoardState: GameBoardState): void;
    getIsVeryFirstTurn(): boolean;
    setIsVeryFirstTurn(isVeryFirstTurn: boolean): void;
    getCurrentTurn(): Player;
    setCurrentTurn(currentTurn: Player): void;
    getTurnPhase(): "CAPTURE" | "STACK_OR_CAPTURE_OR_PASS";
    setTurnPhase(turnPhase: typeof CAPTURE | typeof STACK_OR_CAPTURE_OR_PASS): void;
    getNumberOfTurnsIntoGame(): number;
    setNumberOfTurnsIntoGame(numberOfTurnsIntoGame: number): void;
    getIsFirstPlayerAI(): boolean;
    setIsFirstPlayerAI(isFirstPlayerAI: boolean): void;
    getIsSecondPlayerAI(): boolean;
    setIsSecondPlayerAI(isSecondPlayerAI: boolean): void;
    getBoardGameStateCopy(gamestate: GameBoardState): GameBoardState;
    getWinnerMessage(winner: Player): string | undefined;
    nextPhase(): void;
    setInitialGameState(turn?: typeof PLAYER_ONE | typeof PLAYER_TWO, phase?: typeof TURN_PHASES.CAPTURE | typeof TURN_PHASES.STACK_OR_CAPTURE_OR_PASS, numberOfTurns?: number): void;
    private getShouldAIMakeNextMove;
    private playSingleMove;
    playMove(move: string, moveAiCallback: Function): void;
}
declare const _default: GameState;
export default _default;
