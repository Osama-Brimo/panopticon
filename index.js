import { $state } from "./src/instances/Game/State.js";
import { characters, chat_metadata, event_types, eventSource, saveSettingsDebounced, selectCharacterById, setActiveCharacter, setActiveGroup, this_chid } from '../../../../script.js';
import { executeSlashCommandsWithOptions } from '../../../slash-commands.js';

const extensionName = "panopticon";


executeSlashCommandsWithOptions(`/setvar key="foobartest_a" ${$state.area.name}`); 


// This function is called when the extension is loaded
jQuery(async () => {
  try {
    console.log(`[${extensionName}] loaded`);
    console.log(`[${extensionName}] Game State`, $state);
    executeSlashCommandsWithOptions(`/setvar key="foobartest_b" ${$state.area.name}`); 
  } catch (error) {
    console.error('panopticon error', error);
  }

  executeSlashCommandsWithOptions(`/setvar key="foobartest_c" ${$state.area.name}`);
  
  executeSlashCommandsWithOptions(`/setglobalvar key="foobartest_d" ${$state.area.name}`); 

});
