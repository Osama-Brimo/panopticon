import { registerSlashCommands } from './st/slash-commands';
// Game
import { registerListeners } from './game/st/listeners';
import { $state } from './game/template/instances/Game/State';
import { gameLog } from './utils/utils';

registerSlashCommands();

jQuery(async () => {
    try {
        registerListeners();
        gameLog("Gamestate:", $state);
    } catch (error) {
        console.error('[Panopticon] ERROR:', error);
    }
});

// Game | state > ST | CMD > Game | state > ST...
