import { gameLog } from "../../utils/utils";
import { loadGameState, saveGameState } from "../features/saveLoad";
import { $state } from "../template/instances/Game/State";

const extensionName = "panopticon";

export function registerListeners() {
  const context = getContext();
  
  // Extension load 
  console.log(`[${extensionName}] loaded`);
  console.log(`[${extensionName}] Game State`, $state);

  // e: chatLoaded
  context.eventSource.on("chatLoaded", async () => {
    console.log(`[${extensionName}] chatLoaded fired`);
  });
  // e: game-state-save
  context.eventSource.on("chatLoaded", async () => {
    console.log(`[${extensionName}] Request for game save`);
    saveGameState($state);
  });
  // e: game-state-load
  context.eventSource.on("chatLoaded", async () => {
    console.log(`[${extensionName}] Request for game save`);
    loadGameState($state);
  });
}
