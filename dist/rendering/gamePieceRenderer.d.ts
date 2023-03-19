export declare const NUMBER_OF_ROWS = 8;
export declare const NUMBER_OF_COLS = 8;
export declare const promiseArray: Promise<unknown>[];
declare class GamePieceRenderer {
    init(): void;
    TRIANGLE_SIDE_LENGTH: null | number;
    GAME_PIECE_RADIUS: null | number;
    TRIANGLE_HEIGHT: null | number;
    PLAYER_ONE_TOTT: HTMLCanvasElement;
    PLAYER_ONE_TZARRA: HTMLCanvasElement;
    PLAYER_ONE_TZAAR: HTMLCanvasElement;
    PLAYER_TWO_TOTT: HTMLCanvasElement;
    PLAYER_TWO_TZARRA: HTMLCanvasElement;
    PLAYER_TWO_TZAAR: HTMLCanvasElement;
    circleRadius: null | number;
    smallerCircleRadius: null | number;
    CANVAS_SIDE_LENGTH: null | number;
    CANVAS_STYLE_LENGTH: null | string;
    CENTER_COLOR: string;
    PLAYER_ONE_COLOR_BG: string;
    PLAYER_TWO_COLOR_BG: string;
    drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, ctx: CanvasRenderingContext2D, centerColor: string): void;
    drawGamePiece(gamePiece: any, canvas: HTMLCanvasElement): void;
}
declare const _default: GamePieceRenderer;
export default _default;
