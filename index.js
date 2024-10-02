// ST
import { extension_settings, getContext } from "../../../extensions.js";
import {
  characters,
  chat_metadata,
  event_types,
  eventSource,
  saveSettingsDebounced,
  selectCharacterById,
  setActiveCharacter,
  setActiveGroup,
  this_chid,
} from "../../../../script.js";
// Utils
// Extension
import { addCommandObjects } from "./src/st/slash-commands.js";
// Game
import { registerListeners } from "./src/game/st/listeners.js";
import { gameLog } from "src/utils/utils.js";

addCommandObjects();

jQuery(async () => {
  try {
    registerListeners();
  } catch (error) {
    console.error(`[Panopticon] ERROR:`, error);
  }
});

// Game | state > ST | CMD > Game | state > ST...
