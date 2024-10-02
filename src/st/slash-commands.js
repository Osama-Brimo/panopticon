import { SlashCommandParser } from "../../../../../slash-commands/SlashCommandParser.js";
import { SlashCommand } from "../../../../../slash-commands/SlashCommand.js";
import {
  ARGUMENT_TYPE,
  SlashCommandArgument,
  SlashCommandNamedArgument,
} from "../../../../../slash-commands/SlashCommandArgument.js";
import {
  SlashCommandEnumValue,
  enumTypes,
} from "../../../slash-commands/SlashCommandEnumValue.js";
import { delay } from "../../../../../utils.js";

const cmd_types = {
  GO: "GO",
  INSPECT: "INSPECT",
  TALK: "TALK",
  USE: "USE",
  DO: "DO",
};

async function st_emitEvent(pipe) {
  console.log(pipe.event, "event from st_emitEvent");
  await eventSource.emit(pipe.event);
}

async function st_processCMD(type, target) {
  console.log(`TYPE:`, type);
  console.log(`TARGET:`, target);
  console.log("game-cmd delayed!");
  return "YOOOO!!!!!";
}

async function st_emitEvent_gameStateSave() {
  await eventSource.emit('game-state-save');
}

async function st_emitEvent_gameStateLoad() {
  await eventSource.emit('game-state-load');
}

export function addCommandObjects() {
  // > /emit
  SlashCommandParser.addCommandObject(
    SlashCommand.fromProps({
      name: "emit",
      callback: st_emitEvent,
      aliases: ["e", "event", "emit-event"],
      unnamedArgumentList: [
        SlashCommandArgument.fromProps({
          description: "Name of custom event",
          typeList: [ARGUMENT_TYPE.STRING],
          isRequired: true,
        }),
      ],
      helpString: "Emit a custom event.",
    })
  );

  // > /@cmd
  SlashCommandParser.addCommandObject(
    SlashCommand.fromProps({
      name: "@cmd",
      callback: st_processCMD,
      aliases: ["game-cmd"],
      namedArgumentList: [
        SlashCommandNamedArgument.fromProps({
          name: "type",
          description: "Type of command",
          typeList: [ARGUMENT_TYPE.STRING],
          enumList: [
            new SlashCommandEnumValue(
              cmd_types.GO,
              cmd_types.GO,
              enumTypes.enum
            ),
            new SlashCommandEnumValue(
              cmd_types.INSPECT,
              cmd_types.INSPECT,
              enumTypes.enum
            ),
            new SlashCommandEnumValue(
              cmd_types.TALK,
              cmd_types.TALK,
              enumTypes.enum
            ),
            new SlashCommandEnumValue(
              cmd_types.USE,
              cmd_types.USE,
              enumTypes.enum
            ),
            new SlashCommandEnumValue(
              cmd_types.DO,
              cmd_types.DO,
              enumTypes.enum
            ),
          ],
          isRequired: true,
        }),
        SlashCommandNamedArgument.fromProps({
          name: "target",
          description:
            "Unique identifier indicating what the command is targeting.",
          typeList: [ARGUMENT_TYPE.STRING],
          isRequired: true,
        }),
      ],
      helpString: "Send a request for a game command.",
    })
  );

  // > /@save
  SlashCommandParser.addCommandObject(
    SlashCommand.fromProps({
      name: "@save",
      callback: st_emitEvent_gameStateSave,
      aliases: ["game-save", "game-state-save"],
      helpString: "DEV: Emit game-state-save event, which requests to save current game state into localStorage",
    })
  );

  // > /@load 
  SlashCommandParser.addCommandObject(
    SlashCommand.fromProps({
      name: "@load",
      callback: st_emitEvent_gameStateLoad,
      aliases: ["game-load", "game-state-load"],
      helpString: "DEV: Emit game-state-load event, which requests to load current game state from localStorage",
    })
  );
}
