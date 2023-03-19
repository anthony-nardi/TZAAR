import { GameBoardState } from "./GameState";
export default class EvaluationFactory {
    constructor(props: {
        CORNER_PENALTY_MULTIPLIER: number;
        COUNT_SCORE_MULTIPLIER: number;
        EDGE_PENALTY_MULTIPLIER: number;
        LARGEST_STACK_BONUS_MULTIPLIER: number;
        SCORE_FOR_STACKS_THREATENED_MULTIPLIER: number;
        STACK_SIZE_SCORE_MULTIPLIER: number;
        STACK_VALUE_BONUS_MULTIPLIER: number;
        VERSION: number;
    });
    CORNER_PENALTY_MULTIPLIER: number;
    COUNT_SCORE_MULTIPLIER: number;
    EDGE_PENALTY_MULTIPLIER: number;
    LARGEST_STACK_BONUS_MULTIPLIER: number;
    SCORE_FOR_STACKS_THREATENED_MULTIPLIER: number;
    STACK_SIZE_SCORE_MULTIPLIER: number;
    STACK_VALUE_BONUS_MULTIPLIER: number;
    VERSION: number;
    STACK_VALUE_BONUS: number;
    EDGE_PENALTY: number;
    CORNER_PENALTY: number;
    LARGEST_STACK_BONUS: number;
    getGameStateScore(node: any): number;
    private getTotalScore;
    private getScoreForStacks;
    getGameStateMetadata(gameState: GameBoardState): {
        PLAYER_ONE_TOTT_STACKS: number[];
        PLAYER_ONE_TZARRA_STACKS: number[];
        PLAYER_ONE_TZAAR_STACKS: number[];
        PLAYER_TWO_TOTT_STACKS: number[];
        PLAYER_TWO_TZARRA_STACKS: number[];
        PLAYER_TWO_TZAAR_STACKS: number[];
        player1StacksOnEdge: number[];
        player1StacksOnCorner: number[];
        player2StacksOnEdge: number[];
        player2StacksOnCorner: number[];
    };
}
