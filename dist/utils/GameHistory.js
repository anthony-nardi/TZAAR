import { PLAYER_TWO, PLAYER_ONE } from "../constants";
import GameState from "../logic/GameState";
class GameHistory {
    constructor() {
        this._game_id = 0;
        this._local_storage_key = "tzaar_games";
        this._playback_sequence = [];
        this._playback_turn = PLAYER_ONE;
        this._player_one_bot = null;
        this._player_two_bot = null;
    }
    setGameId(id) {
        this._game_id = id;
        let existingGames;
        const tzaarGames = localStorage.getItem(this._local_storage_key);
        if (tzaarGames) {
            existingGames = JSON.parse(tzaarGames);
        }
        else {
            existingGames = {};
        }
        const gameIds = Object.keys(existingGames);
        for (let i = 0; i < gameIds.length; i++) {
            if (existingGames[gameIds[i]].length === 0) {
                delete existingGames[gameIds[i]];
            }
        }
        existingGames[this._game_id] = [];
        localStorage.setItem(this._local_storage_key, JSON.stringify(existingGames));
    }
    getGameId() {
        return this._game_id;
    }
    addFirstHumanMoveToCurrentGame(move) {
        const tzaarGames = localStorage.getItem(this._local_storage_key);
        if (tzaarGames) {
            let existingGames = JSON.parse(tzaarGames);
            if (!existingGames || !existingGames[this._game_id]) {
                throw new Error("Game doesnt exist");
            }
            existingGames[this._game_id].push(move);
            localStorage.setItem(this._local_storage_key, JSON.stringify(existingGames));
        }
    }
    addSecondHumanMoveToCurrentGame(move) {
        const tzaarGames = localStorage.getItem(this._local_storage_key);
        if (tzaarGames) {
            let existingGames = JSON.parse(tzaarGames);
            if (!existingGames || !existingGames[this._game_id]) {
                throw new Error("Game doesnt exist");
            }
            const moveToAddTo = existingGames[this._game_id].pop();
            existingGames[this._game_id].push(`${moveToAddTo}=>${move}`);
            localStorage.setItem(this._local_storage_key, JSON.stringify(existingGames));
        }
    }
    addAIMoveToCurrentGame(move) {
        const tzaarGames = localStorage.getItem(this._local_storage_key);
        if (tzaarGames) {
            let existingGames = JSON.parse(tzaarGames);
            if (!existingGames || !existingGames[this._game_id]) {
                throw new Error("Game doesnt exist");
            }
            existingGames[this._game_id].push(move);
            localStorage.setItem(this._local_storage_key, JSON.stringify(existingGames));
        }
    }
    playback(moveSequence, playerOneBot, playerTwoBot) {
        if (moveSequence) {
            this._playback_sequence = moveSequence;
        }
        if (playerOneBot) {
            this._player_one_bot = playerOneBot;
        }
        if (playerTwoBot) {
            this._player_two_bot = playerTwoBot;
        }
        const nextMove = this._playback_sequence.shift();
        if (!this._player_one_bot || !this._player_two_bot) {
            throw new Error("Attempting to playback without bots set up.");
        }
        GameState.playMove(nextMove, this.playback);
        if (this._playback_turn === PLAYER_ONE) {
            // this._player_one_bot.moveAI(this.playback);
            this._playback_turn = PLAYER_TWO;
        }
        else {
            // this._player_two_bot.moveAI(this.playback);
            this._playback_turn = PLAYER_ONE;
        }
    }
}
export default new GameHistory();
//# sourceMappingURL=GameHistory.js.map