import { getContext } from "../../../../../../extensions";
import { gameLog } from "../../utils/utils";
import { loadGameState, saveGameState } from "../features/saveLoad";
import { $state } from "../template/instances/Game/State";

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
