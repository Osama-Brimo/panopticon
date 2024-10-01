

import { extension_settings, getContext } from "../../../extensions.js";
import { characters, chat_metadata, event_types, eventSource, saveSettingsDebounced, selectCharacterById, setActiveCharacter, setActiveGroup, this_chid } from '../../../../script.js';
import { executeSlashCommandsWithOptions } from '../../../slash-commands.js';
import { delay } from '../../../utils.js';

import { setvar } from "./src/utils/st.js";
import { $state } from "./src/instances/Game/State.js";

const extensionName = "panopticon";

// This function is called when the extension is loaded
jQuery(async () => {
  const context = getContext();
  try {
    context.eventSource.on(context.event_types.CHAT_CHANGED, async () => {
      console.log('panopticon chat changed triggered...')
      let foo = await setvar("anothertest", "a value");
      console.log('what foo returned panopticon', foo);
    });
    console.log(`[${extensionName}] loaded`);
    console.log(`[${extensionName}] Game State`, $state);

  } catch (error) {
    console.error('panopticon error', error);
  }
});
