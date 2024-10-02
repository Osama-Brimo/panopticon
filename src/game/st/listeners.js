import { getContext } from "../../../../../../extensions.js";
import { gameLog } from "../../utils/utils.js";
import { loadGameState, saveGameState } from "../features/saveLoad.js";
import { $state } from "../template/instances/Game/State.js";

export function registerListeners() {
  const context = getContext();

  // Extension load
  gameLog('loaded');
  gameLog('Game State', $state);

  // e: chatLoaded
  context.eventSource.on("chatLoaded", async () => {
    gameLog('chatLoaded Fired');
  });
  // e: game-state-save
  context.eventSource.on("chatLoaded", async () => {
    gameLog('Request for game save')
    saveGameState($state);
  });
  // e: game-state-load
  context.eventSource.on("chatLoaded", async () => {
    gameLog('Request for game load')
    loadGameState();
  });
}
