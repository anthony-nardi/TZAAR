import { getBoardCoordinatesFromPixelCoordinates } from "../logic/gameBoardHelpers";

export function getPixelCoordinatesFromTouchInteraction(event: any) {
  const x = event.changedTouches[0].clientX;
  const y = event.changedTouches[0].clientY;
  return [x, y];
}

export function getPixelCoordinatesFromMouseInteraction(event: any) {
  const x = event.clientX;
  const y = event.clientY;
  return [x, y];
}

export function getPixelCoordinatesFromUserInteraction(event: any) {
  if (
    event.type === "touchstart" ||
    event.type === "touchmove" ||
    event.type === "touchend"
  ) {
    return getPixelCoordinatesFromTouchInteraction(event);
  }

  return getPixelCoordinatesFromMouseInteraction(event);
}

export function getBoardCoordinatesFromUserInteraction(event: any) {
  const [x, y] = getPixelCoordinatesFromUserInteraction(event);
  return getBoardCoordinatesFromPixelCoordinates(x, y);
}
