import { sendMessageAsUser } from "@sillytavern/script";
import {
  executeSlashCommandsWithOptions,
  sendMessageAs,
  sendNarratorMessage,
} from "@sillytavern/slash-commands";
import { Message, Role } from "src/game/template/classes/Game/Message";

export function st_setvar(
  key: string,
  value: string,
  scope_local = true,
  parserOptions = {}
) {
  return executeSlashCommandsWithOptions(
    `/set${scope_local ? "" : "global"}var key="${key}" ${value}`,
    parserOptions
  );
}

export function st_getvar(
  key: string,
  index: string,
  scope_local = true,
  parserOptions = {}
) {
  return executeSlashCommandsWithOptions(
    `/get${scope_local ? "" : "global"}var key="${key}"`,
    parserOptions
  );
}

// async function st_sendSystemMessage(
//   text: string,
//   compact = false,
//   hidden = false
// ) {
//   return await executeSlashCommandsWithOptions(
//     `/sys compact=${compact} ${text}`,
//     {}
//   );
// }

export async function st_sendMessage(message: Message) {
  const { text, hidden, role, strategy, instruction } = message;
  switch (message.role) {
    case Role.system:
      return await sendNarratorMessage({ compact: true }, text);
      break;
    case Role.user:
      //   return await sendMessageAsUser(text, null, null, false);
      break;
    case Role.assistant:
      //   return await sendMessageAs(null, text);
      break;
    default:
      break;
  }
}
