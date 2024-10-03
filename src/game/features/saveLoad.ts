import { gameLog } from "../../utils/utils";
import { State } from "../template/classes/Game/State";

export function saveGameState(state: State) {
    const serializedState = JSON.stringify(state);
    gameLog('saveGameState', serializedState);
    localStorage.setItem('panopticon_gameState', serializedState);
}

export function loadGameState() {
    const serializedState = localStorage.getItem('panopticon_gameState');
    gameLog('loadGameState', serializedState);
    return serializedState ? JSON.parse(serializedState) : null;
}
