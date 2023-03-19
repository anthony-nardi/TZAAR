import { ValidCoordinate } from "../types/types";
import BotFactory from "../logic/BotFactory";
declare class GameHistory {
    private _game_id;
    private _local_storage_key;
    private _playback_sequence;
    private _playback_turn;
    private _player_one_bot;
    private _player_two_bot;
    setGameId(id: number | string): void;
    getGameId(): string | number;
    addFirstHumanMoveToCurrentGame(move: string): void;
    addSecondHumanMoveToCurrentGame(move: string): void;
    addAIMoveToCurrentGame(move: string): void;
    playback(moveSequence?: ValidCoordinate[], playerOneBot?: BotFactory, playerTwoBot?: BotFactory): void;
}
declare const _default: GameHistory;
export default _default;
