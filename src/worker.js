import { minimax } from "./ai2";
import { fromJS } from "immutable";

// Respond to message from parent thread
self.addEventListener("message", event => {
  const {
    gameState,
    turn,
    depth,
    alpha,
    beta,
    workerId,
    maxWorkers
  } = JSON.parse(event.data);

  const immutableGameState = fromJS(gameState);
  const startTime = Date.now();
  const minimaxResult = minimax(
    immutableGameState,
    turn,
    depth,
    undefined,
    undefined,
    true,
    workerId,
    maxWorkers
  );
  console.log(Date.now() - startTime);
  self.postMessage(JSON.stringify(minimaxResult));
});
