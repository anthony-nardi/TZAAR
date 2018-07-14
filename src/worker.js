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

  const minimaxResult = minimax(
    immutableGameState,
    turn,
    depth,
    alpha,
    beta,
    true,
    workerId,
    maxWorkers
  );
  console.log(minimaxResult);
  self.postMessage(JSON.stringify(minimaxResult));
});
