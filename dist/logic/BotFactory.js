import { PLAYER_TWO, PLAYER_ONE } from "../constants";
import GameState from "./GameState";
import { getGameStatesToAnalyze } from "./availableMovesGenerator";
import * as minimaxer from "minimaxer";
import { hideLoadingSpinner } from "../rendering/domHelpers";
import EvaluationFactory from "./EvaluationFactory";
import { getWinner } from "./evaluationHelpers";
export function applyMoveToGameState(gamestate, move) {
    // dont render moving piece in the same spot...
    const updatedBoardGameState = GameState.getBoardGameStateCopy(gamestate);
    // Single move only
    if (move.slice(8, 10) !== "=>") {
        const firstFromCoordinate = move.slice(0, 3);
        const firstToCoordinate = move.slice(5, 9);
        const fromPiece = gamestate[firstFromCoordinate];
        updatedBoardGameState[firstFromCoordinate] = false;
        updatedBoardGameState[firstToCoordinate] = {
            isDragging: fromPiece.isDragging,
            ownedBy: fromPiece.ownedBy,
            stackSize: fromPiece.stackSize,
            type: fromPiece.type,
        };
        return updatedBoardGameState;
    }
    const firstFromCoordinate = move.slice(0, 3);
    const firstToCoordinate = move.slice(5, 8);
    const secondFromCoordinate = move.slice(10, 13);
    const secondToCoordinate = move.slice(15, 18);
    const firstFromPiece = gamestate[firstFromCoordinate];
    updatedBoardGameState[firstFromCoordinate] = false;
    updatedBoardGameState[firstToCoordinate] = {
        isDragging: firstFromPiece.isDragging,
        ownedBy: firstFromPiece.ownedBy,
        stackSize: firstFromPiece.stackSize,
        type: firstFromPiece.type,
    };
    const secondFromPiece = updatedBoardGameState[secondFromCoordinate];
    updatedBoardGameState[secondFromCoordinate] = false;
    const toPiece = updatedBoardGameState[secondToCoordinate];
    if (secondFromPiece.ownedBy === toPiece.ownedBy) {
        const updatedSecondFromPiece = {
            isDragging: secondFromPiece.isDragging,
            ownedBy: secondFromPiece.ownedBy,
            stackSize: secondFromPiece.stackSize + toPiece.stackSize,
            type: secondFromPiece.type,
        };
        updatedBoardGameState[secondToCoordinate] = updatedSecondFromPiece;
    }
    else {
        updatedBoardGameState[secondToCoordinate] = secondFromPiece;
    }
    return updatedBoardGameState;
}
export default class BotFactory {
    constructor(props = {
        VERSION: 1,
        CORNER_PENALTY_MULTIPLIER: 1,
        COUNT_SCORE_MULTIPLIER: 1,
        EDGE_PENALTY_MULTIPLIER: 1,
        LARGEST_STACK_BONUS_MULTIPLIER: 1,
        SCORE_FOR_STACKS_THREATENED_MULTIPLIER: 1,
        STACK_SIZE_SCORE_MULTIPLIER: 1,
        STACK_VALUE_BONUS_MULTIPLIER: 1,
    }) {
        this.evaluation = new EvaluationFactory(props);
        this.VERSION = props.VERSION;
        console.log(`Bot version: ${this.VERSION}`);
    }
    getScore(node) {
        return this.evaluation.getGameStateScore(node);
    }
    getOpts() {
        const opts = new minimaxer.NegamaxOpts();
        let depth = 1;
        if (GameState.getNumberOfTurnsIntoGame() > 1) {
            depth = 999;
        }
        if (GameState.getNumberOfTurnsIntoGame() < 5) {
            opts.timeout = 3000;
        }
        else {
            opts.timeout = 6000;
        }
        // TODO: optimal seems to be less performance (very slightly)
        // Probably best to play around with options at different points
        // in the game.
        opts.depth = depth;
        opts.method = 3;
        opts.presort = true;
        opts.pruning = 1;
        opts.sortMethod = 2;
        opts.genBased = true;
        opts.optimal = false;
        opts.pruneByPathLength = true;
        return opts;
    }
    getRootNode(allPossibleStatesAfterTurn) {
        const aim = 1;
        const data = { turn: GameState.getCurrentTurn(), winner: undefined };
        const move = null;
        const nodeType = 0;
        const root = new minimaxer.Node(nodeType, GameState.getGameBoardState(), move, data, aim, allPossibleStatesAfterTurn);
        return root;
    }
    firstCheckIfWinner() {
        const winner = getWinner(GameState.getGameBoardState(), true, GameState.getCurrentTurn());
        if (winner) {
            const message = GameState.getWinnerMessage(winner);
            console.log(message, `Number of turns into game: ${GameState.getNumberOfTurnsIntoGame()}`);
            const winnerElement = document.getElementById("winnerMessage");
            if (winnerElement && message) {
                winnerElement.innerHTML = message;
            }
            return true;
        }
    }
    moveAI(moveAiCallback) {
        const winner = this.firstCheckIfWinner();
        if (winner) {
            return;
        }
        const now = Date.now();
        const allPossibleStatesAfterTurn = getGameStatesToAnalyze(GameState.getGameBoardState(), GameState.getCurrentTurn());
        console.log(`All possible starting moves: ${allPossibleStatesAfterTurn.length} for ${GameState.getCurrentTurn()} on turn ${GameState.getNumberOfTurnsIntoGame()}`);
        const opts = this.getOpts();
        const root = this.getRootNode(allPossibleStatesAfterTurn);
        const tree = new minimaxer.Negamax(root, opts);
        // @ts-expect-error Figure out. TODO
        tree.CreateChildNode = this.createChildCallback.bind(this);
        tree.EvaluateNode = this.getScore.bind(this);
        tree.GetMoves = this.getMovesCallback.bind(this);
        const result = tree.evaluate();
        console.log(result);
        const elapsed = Date.now() - now;
        console.log("Took %d ms", elapsed);
        if (result.move) {
            GameState.playMove(result.move, moveAiCallback);
        }
        else {
            throw new Error("Somehow, a move was not selected.");
        }
        hideLoadingSpinner();
    }
    getMovesCallback(node) {
        const turn = node.data.turn === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
        return getGameStatesToAnalyze(node.gamestate, turn);
    }
    createChildCallback(node, move) {
        const gamestateToAnalyze = node.gamestate;
        let turn;
        if (node.type === 0) {
            turn = node.data.turn;
        }
        else {
            turn = node.parent.data.turn === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
        }
        const updatedBoardGameState = applyMoveToGameState(gamestateToAnalyze, move);
        const winner = getWinner(updatedBoardGameState, false, turn);
        const nodeType = winner ? 2 : 1;
        const childNode = new minimaxer.Node(nodeType, updatedBoardGameState, move, { turn, winner });
        return childNode;
    }
}
//# sourceMappingURL=BotFactory.js.map