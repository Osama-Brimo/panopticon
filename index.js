

import { extension_settings, getContext } from "../../../extensions.js";
import { characters, chat_metadata, event_types, eventSource, saveSettingsDebounced, selectCharacterById, setActiveCharacter, setActiveGroup, this_chid } from '../../../../script.js';
import { executeSlashCommandsWithOptions } from '../../../slash-commands.js';
import { SlashCommandParser } from '../../../slash-commands/SlashCommandParser.js';
import { SlashCommand } from '../../../slash-commands/SlashCommand.js';
import { ARGUMENT_TYPE, SlashCommandArgument, SlashCommandNamedArgument } from '../../../slash-commands/SlashCommandArgument.js';

import { delay } from '../../../utils.js';

import { setvar, getvar } from "./src/utils/st.js";
import { $state } from "./src/instances/Game/State.js";

const extensionName = "panopticon";

async function st_emitEvent (pipe) {
  console.log(pipe.event, 'event from st_emitEvent');
  // const context = getContext();
 await eventSource.emit(pipe.event);
}

SlashCommandParser.addCommandObject(SlashCommand.fromProps({
  name: 'emit',
  callback: st_emitEvent,
  aliases: ['e'],
  namedArgumentList: [
    SlashCommandNamedArgument.fromProps({
        name: 'event',
        description: 'Name of custom event',
        typeList: [ARGUMENT_TYPE.STRING],
        isRequired: true,
    }),
],
  helpString: 'Emit a custom event.',
}))

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



// Game | state > ST | CMD > Game | state > ST...