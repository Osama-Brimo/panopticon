import { eventSource } from '@sillytavern-script';
import { SlashCommand } from '@sillytavern/slash-commands/SlashCommand';
import { SlashCommandArgument, ARGUMENT_TYPE, SlashCommandNamedArgument } from '@sillytavern/slash-commands/SlashCommandArgument';
import { SlashCommandEnumValue, enumTypes } from '@sillytavern/slash-commands/SlashCommandEnumValue';
import { SlashCommandParser } from '@sillytavern/slash-commands/SlashCommandParser';
import { CMDTypes, CMD } from '../game/template/classes/CMD/CMD';
import { $state } from '../game/template/instances/Game/State';
import { Able } from '../game/template/interfaces/Ables';

const cmd_types = {
  GO: "GO",
  INSPECT: "INSPECT",
  TALK: "TALK",
  USE: "USE",
  DO: "DO",
};

async function slash_emitEvent(pipe) {
  console.log(pipe, "event from slash_emitEvent");
  await eventSource.emit(pipe);
  return "";
}

async function slash_processCMD(pipe) {
  const { type, target } : {type: CMDTypes, target: Able} = pipe;

  console.log(`TYPE:`, type);
  console.log(`TARGET:`, target);
  await eventSource.emit("cmd-given");

  const newCmd = new CMD(type, target);
  $state.cmd_queue.push(newCmd);

  $state.update();

  return "";
}

async function slash_emitEvent_gameStateSave() {
  await eventSource.emit("game-state-save");
  return "";
}

async function slash_emitEvent_gameStateLoad() {
  await eventSource.emit("game-state-load");
  return "";
}

export function registerSlashCommands() {
  // > /emit
  SlashCommandParser.addCommandObject(
    SlashCommand.fromProps({
      name: "emit",
      callback: slash_emitEvent,
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
      callback: slash_processCMD,
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
      callback: slash_emitEvent_gameStateSave,
      aliases: ["game-save", "game-state-save"],
      helpString:
        "DEV: Shorthand to emit game-state-save event, which requests to save current game state into localStorage.",
    })
  );

  // > /@load
  SlashCommandParser.addCommandObject(
    SlashCommand.fromProps({
      name: "@load",
      callback: slash_emitEvent_gameStateLoad,
      aliases: ["game-load", "game-state-load"],
      helpString:
        "DEV: Shorthand to emit game-state-load event, which requests to load current game state from localStorage.",
    })
  );
}
