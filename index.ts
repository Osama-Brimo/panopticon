import { registerSlashCommands } from './src/st/slash-commands';
// Game
import { registerListeners } from './src/game/st/listeners';

registerSlashCommands();

jQuery(async () => {
    try {
        registerListeners();
    } catch (error) {
        console.error('[Panopticon] ERROR:', error);
    }
});

// Game | state > ST | CMD > Game | state > ST...
