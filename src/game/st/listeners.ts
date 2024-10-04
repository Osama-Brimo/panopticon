import { getContext } from "@sillytavern/extensions";
import { $state } from "../template/instances/Game/State";
import { loadGameState, saveGameState } from "../features/saveLoad";
import { gameLog } from "../../utils/utils";


export function registerListeners() {
    const context = getContext();

    // Extension load
    gameLog('loaded');
    gameLog('Game State', $state);

    // e: chatLoaded
    context.eventSource.on('chatLoaded', async () => {
        gameLog('chatLoaded Fired');
    });
    // e: game-state-save
    context.eventSource.on('game-state-save', async() => {
        gameLog('Request for game save');
        saveGameState($state);
    });
    // e: game-state-load
    context.eventSource.on('game-state-load', async () => {
        gameLog('Request for game load');
        loadGameState();
    });
}
