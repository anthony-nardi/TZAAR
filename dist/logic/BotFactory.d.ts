import EvaluationFactory from "./EvaluationFactory";
export declare function applyMoveToGameState(gamestate: any, move: string): import("./GameState").GameBoardState;
export default class BotFactory {
    constructor(props?: {
        CORNER_PENALTY_MULTIPLIER: number;
        COUNT_SCORE_MULTIPLIER: number;
        EDGE_PENALTY_MULTIPLIER: number;
        LARGEST_STACK_BONUS_MULTIPLIER: number;
        SCORE_FOR_STACKS_THREATENED_MULTIPLIER: number;
        STACK_SIZE_SCORE_MULTIPLIER: number;
        STACK_VALUE_BONUS_MULTIPLIER: number;
        VERSION: number;
    });
    private VERSION;
    evaluation: EvaluationFactory;
    private getScore;
    private getOpts;
    private getRootNode;
    private firstCheckIfWinner;
    moveAI(moveAiCallback: Function): void;
    private getMovesCallback;
    private createChildCallback;
}
