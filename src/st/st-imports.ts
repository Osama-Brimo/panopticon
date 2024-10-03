import { _import } from "../utils/utils";

// script
const { event_types, eventSource } = await _import(
  ["event_types", "eventSource"],
  "../../../../../../script.js"
);

// utils
const { delay } = await _import(["delay"], "../../../../../utils.js");

// SlashCommand
const { executeSlashCommandsWithOptions } = await _import(
  ["executeSlashCommandsWithOptions"],
  "../../../../../slash-commands.js"
);
const { SlashCommand } = await _import(
  ["SlashCommand"],
  "../../../../../slash-commands/SlashCommand.js"
);
const { SlashCommandParser } = await _import(
  ["SlashCommandParser"],
  "../../../../../slash-commands/SlashCommandParser.js"
);
const { ARGUMENT_TYPE, SlashCommandArgument, SlashCommandNamedArgument } =
  await _import(
    ["ARGUMENT_TYPE", "SlashCommandArgument", "SlashCommandNamedArgument"],
    "../../../../../slash-commands/SlashCommandArgument.js"
  );
const { enumTypes, SlashCommandEnumValue } = await _import(
  ["enumTypes", "SlashCommandEnumValue"],
  "../../../../../slash-commands/SlashCommandEnumValue.js"
);

// extensions
const { getContext } = await _import(
  ["getContext"],
  "../../../../../extensions.js"
);

export {
  // extensions.js
  getContext,
  // script.js
  event_types,
  eventSource,
  // utils
  delay,
  // SlashCommand
  SlashCommand,
  SlashCommandParser,
  SlashCommandArgument,
  SlashCommandNamedArgument,
  SlashCommandEnumValue,
  enumTypes,
  ARGUMENT_TYPE,
  executeSlashCommandsWithOptions,
};
