//You'll likely need to import extension_settings, getContext, and loadExtensionSettings from extensions.js
import { extension_settings, getContext, loadExtensionSettings } from "../../../extensions.js";

import { saveSettingsDebounced, callPopup, chat_metadata, executeSlashCommands } from "../../../../script.js";

import {$state} from './index';

const extensionName = "Panopticon";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;
const extensionSettings = extension_settings[extensionName];
const defaultSettings = {};


// This function is called when the extension is loaded
jQuery(async () => {
  console.log(`[${extensionName}] loaded`);
  console.log(`[${extensionName}] Game State`, $state);
});
