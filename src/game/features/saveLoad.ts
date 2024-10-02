import { gameLog } from "../../utils/utils";

export function saveGameState(state) {
    const serializedState = JSON.stringify(state);
    gameLog('saveGameState', serializedState);
    localStorage.setItem('panopticon_gameState', serializedState);
}

export function loadGameState() {
    const serializedState = localStorage.getItem('panopticon_gameState');
    gameLog('loadGameState', serializedState);
    return serializedState ? JSON.parse(serializedState) : null;
}
