import { $state } from "./src/instances/Game/State.js";
import { characters, chat_metadata, event_types, eventSource, saveSettingsDebounced, selectCharacterById, setActiveCharacter, setActiveGroup, this_chid } from '../../../../script.js';
import { executeSlashCommandsWithOptions } from '../../../slash-commands.js';
import { delay } from '../../../utils.js';
import { setvar } from "./src/utils/st.js";

const extensionName = "panopticon";

// This function is called when the extension is loaded
jQuery(async () => {
  try {
    console.log(`[${extensionName}] loaded`);
    console.log(`[${extensionName}] Game State`, $state);
    let foo = setvar("anothertest", "a value");
    console.log('what foo returned panopticon', foo);

  } catch (error) {
    console.error('panopticon error', error);
  }
});
