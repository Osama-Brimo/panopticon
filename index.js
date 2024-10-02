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
import { setvar, getvar } from "./src/utils/st.js";
// Extension
import { addCommandObjects } from "./src/st/slash-commands.js";
// Game
import { $state } from "./src/game/template/instances/Game/State.js";
import { registerListeners } from "./src/game/st/listeners.js";

addCommandObjects();

jQuery(async () => {
  registerListeners();
});

// Game | state > ST | CMD > Game | state > ST...
