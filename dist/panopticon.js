/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const slash_commands_1 = __webpack_require__(/*! ./src/st/slash-commands */ "./src/st/slash-commands.ts");
// Game
const listeners_1 = __webpack_require__(/*! ./src/game/st/listeners */ "./src/game/st/listeners.ts");
(0, slash_commands_1.registerSlashCommands)();
jQuery(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, listeners_1.registerListeners)();
    }
    catch (error) {
        console.error('[Panopticon] ERROR:', error);
    }
}));
// Game | state > ST | CMD > Game | state > ST...


/***/ }),

/***/ "./src/game/features/saveLoad.ts":
/*!***************************************!*\
  !*** ./src/game/features/saveLoad.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.saveGameState = saveGameState;
exports.loadGameState = loadGameState;
const utils_1 = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
function saveGameState(state) {
    const serializedState = JSON.stringify(state);
    (0, utils_1.gameLog)('saveGameState', serializedState);
    localStorage.setItem('panopticon_gameState', serializedState);
}
function loadGameState() {
    const serializedState = localStorage.getItem('panopticon_gameState');
    (0, utils_1.gameLog)('loadGameState', serializedState);
    return serializedState ? JSON.parse(serializedState) : null;
}


/***/ }),

/***/ "./src/game/st/listeners.ts":
/*!**********************************!*\
  !*** ./src/game/st/listeners.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerListeners = registerListeners;
const extensions_1 = __webpack_require__(/*! ../../../../../../extensions */ "../../../extensions.js");
const utils_1 = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
const saveLoad_1 = __webpack_require__(/*! ../features/saveLoad */ "./src/game/features/saveLoad.ts");
const State_1 = __webpack_require__(/*! ../template/instances/Game/State */ "./src/game/template/instances/Game/State.ts");
function registerListeners() {
    const context = (0, extensions_1.getContext)();
    // Extension load
    (0, utils_1.gameLog)('loaded');
    (0, utils_1.gameLog)('Game State', State_1.$state);
    // e: chatLoaded
    context.eventSource.on('chatLoaded', () => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.gameLog)('chatLoaded Fired');
    }));
    // e: game-state-save
    context.eventSource.on('game-state-save', () => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.gameLog)('Request for game save');
        (0, saveLoad_1.saveGameState)(State_1.$state);
    }));
    // e: game-state-load
    context.eventSource.on('game-state-load', () => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.gameLog)('Request for game load');
        (0, saveLoad_1.loadGameState)();
    }));
}


/***/ }),

/***/ "./src/game/template/classes/Entities/Area.ts":
/*!****************************************************!*\
  !*** ./src/game/template/classes/Entities/Area.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Area = void 0;
const Goable_1 = __webpack_require__(/*! ../../interfaces/Ables/Goable */ "./src/game/template/interfaces/Ables/Goable.ts");
class Area extends Goable_1.Goable {
    constructor(name, is_godel, godel_type, godel_cycle_num, is_locked, unlocked_by, goables, inspectables, doables, npcs, on_enter, on_exit, is_saferoom) {
        super(name, is_godel, godel_type, godel_cycle_num, is_locked, unlocked_by, goables, inspectables, doables, npcs, on_enter, on_exit);
        this.is_saferoom = is_saferoom;
    }
}
exports.Area = Area;


/***/ }),

/***/ "./src/game/template/classes/Entities/Item.ts":
/*!****************************************************!*\
  !*** ./src/game/template/classes/Entities/Item.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Item = void 0;
const Usable_js_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../interfaces/Ables/Usable.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
class Item extends Usable_js_1.Usable {
    constructor(name, description, effect, on_use, kangaeru_comment, count = 0) {
        super(name, description, effect, on_use);
        this.kangaeru_comment = kangaeru_comment;
        this.count = count;
    }
}
exports.Item = Item;


/***/ }),

/***/ "./src/game/template/classes/Entities/NPC.ts":
/*!***************************************************!*\
  !*** ./src/game/template/classes/Entities/NPC.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NPC = void 0;
// NPC is always an AI assistant.
class NPC {
    constructor(name, description, onTalk) {
        this.name = name;
        this.description = description;
        this.onTalk = onTalk;
    }
}
exports.NPC = NPC;


/***/ }),

/***/ "./src/game/template/classes/Entities/Player.ts":
/*!******************************************************!*\
  !*** ./src/game/template/classes/Entities/Player.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const Human_js_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../Participants/Human.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
class Player extends Human_js_1.Human {
    constructor(name) {
        super(name);
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/game/template/classes/Game/Event.ts":
/*!*************************************************!*\
  !*** ./src/game/template/classes/Game/Event.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Event = void 0;
class Event {
    constructor(name, description, on_event) {
        this.name = name;
        this.description = description;
        this.on_event = on_event;
    }
}
exports.Event = Event;


/***/ }),

/***/ "./src/game/template/classes/Game/Flag.ts":
/*!************************************************!*\
  !*** ./src/game/template/classes/Game/Flag.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Flag = void 0;
class Flag {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
exports.Flag = Flag;


/***/ }),

/***/ "./src/game/template/classes/Game/State.ts":
/*!*************************************************!*\
  !*** ./src/game/template/classes/Game/State.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.State = void 0;
class State {
    constructor(user, char, area, inventory, frozen_tear_count, inspectables, goables, doables, talkables, cycle, time, flags, event_queue, cmd_queue) {
        this.user = user;
        this.char = char;
        this.area = area;
        this.inventory = inventory;
        this.frozen_tear_count = frozen_tear_count;
        this.inspectables = inspectables;
        this.goables = goables;
        this.doables = doables;
        this.talkables = talkables;
        this.cycle = cycle;
        this.time = time;
        this.flags = flags;
        this.event_queue = event_queue;
        this.cmd_queue = cmd_queue;
    }
    processCmdQueue() {
        this.cmd_queue.forEach((CMD) => {
            let { type, target } = CMD;
        });
    }
}
exports.State = State;


/***/ }),

/***/ "./src/game/template/classes/Mechanics/Inventory.ts":
/*!**********************************************************!*\
  !*** ./src/game/template/classes/Mechanics/Inventory.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Inventory = void 0;
class Inventory {
    constructor(items, size) {
        this.items = items;
        this.size = size;
    }
}
exports.Inventory = Inventory;


/***/ }),

/***/ "./src/game/template/instances/Area/Foyer.ts":
/*!***************************************************!*\
  !*** ./src/game/template/instances/Area/Foyer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Area_Foyer = void 0;
const Area_1 = __webpack_require__(/*! ../../classes/Entities/Area */ "./src/game/template/classes/Entities/Area.ts");
const Events_1 = __webpack_require__(/*! ../Game/Events */ "./src/game/template/instances/Game/Events.ts");
exports.Area_Foyer = new Area_1.Area("Foyer", false, null, null, false, null, [], [], [], [], [Events_1.Event_EnterMansion], null, false);


/***/ }),

/***/ "./src/game/template/instances/Area/MansionExterior.ts":
/*!*************************************************************!*\
  !*** ./src/game/template/instances/Area/MansionExterior.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Area_MansionExterior = void 0;
const Area_1 = __webpack_require__(/*! ../../classes/Entities/Area */ "./src/game/template/classes/Entities/Area.ts");
const Foyer_1 = __webpack_require__(/*! ./Foyer */ "./src/game/template/instances/Area/Foyer.ts");
exports.Area_MansionExterior = new Area_1.Area("Mansion Exterior", false, null, null, false, null, [Foyer_1.Area_Foyer], [], [], [], null, null, false);


/***/ }),

/***/ "./src/game/template/instances/Game/Events.ts":
/*!****************************************************!*\
  !*** ./src/game/template/instances/Game/Events.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Event_EnterMansion = void 0;
const Event_1 = __webpack_require__(/*! ../../classes/Game/Event */ "./src/game/template/classes/Game/Event.ts");
exports.Event_EnterMansion = new Event_1.Event("Enter Mansion", "You enter the mansion.", () => { });


/***/ }),

/***/ "./src/game/template/instances/Game/Flags.ts":
/*!***************************************************!*\
  !*** ./src/game/template/instances/Game/Flags.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DID_FIRST_TUTORIAL = void 0;
const Flag_1 = __webpack_require__(/*! ../../classes/Game/Flag */ "./src/game/template/classes/Game/Flag.ts");
exports.DID_FIRST_TUTORIAL = new Flag_1.Flag("FIRST_TUTORIAL", false);


/***/ }),

/***/ "./src/game/template/instances/Game/State.ts":
/*!***************************************************!*\
  !*** ./src/game/template/instances/Game/State.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$state = void 0;
const State_1 = __webpack_require__(/*! ../../classes/Game/State */ "./src/game/template/classes/Game/State.ts");
const Inventory_1 = __webpack_require__(/*! ../../classes/Mechanics/Inventory */ "./src/game/template/classes/Mechanics/Inventory.ts");
const MansionExterior_1 = __webpack_require__(/*! ../Area/MansionExterior */ "./src/game/template/instances/Area/MansionExterior.ts");
const Camera_1 = __webpack_require__(/*! ../Item/Camera */ "./src/game/template/instances/Item/Camera.ts");
const Char_1 = __webpack_require__(/*! ../NPC/Char */ "./src/game/template/instances/NPC/Char.ts");
const Player_1 = __webpack_require__(/*! ../Player/Player */ "./src/game/template/instances/Player/Player.ts");
const Flags_1 = __webpack_require__(/*! ./Flags */ "./src/game/template/instances/Game/Flags.ts");
const startingArea = MansionExterior_1.Area_MansionExterior;
const startingInventory = new Inventory_1.Inventory([Camera_1.Item_Camera], 5);
const startingTime = "16:31";
exports.$state = new State_1.State(Player_1.$player, Char_1.$char, startingArea, startingInventory, 0, startingArea.inspectables, startingArea.goables, startingArea.doables, [Char_1.$char], 0, startingTime, [Flags_1.DID_FIRST_TUTORIAL], [], []);


/***/ }),

/***/ "./src/game/template/instances/Item/Camera.ts":
/*!****************************************************!*\
  !*** ./src/game/template/instances/Item/Camera.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Item_Camera = void 0;
const Item_1 = __webpack_require__(/*! ../../classes/Entities/Item */ "./src/game/template/classes/Entities/Item.ts");
exports.Item_Camera = new Item_1.Item("Camera", "A regular camera.", "It's a camera.", () => { }, "You take a picture.", 1);


/***/ }),

/***/ "./src/game/template/instances/NPC/Char.ts":
/*!*************************************************!*\
  !*** ./src/game/template/instances/NPC/Char.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$char = void 0;
const NPC_1 = __webpack_require__(/*! ../../classes/Entities/NPC */ "./src/game/template/classes/Entities/NPC.ts");
exports.$char = new NPC_1.NPC("char's name from ST", "char is... something.", () => { console.log("you talked to char."); });


/***/ }),

/***/ "./src/game/template/instances/Player/Player.ts":
/*!******************************************************!*\
  !*** ./src/game/template/instances/Player/Player.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$player = void 0;
const Player_1 = __webpack_require__(/*! ../../classes/Entities/Player */ "./src/game/template/classes/Entities/Player.ts");
exports.$player = new Player_1.Player("st {{user}}");


/***/ }),

/***/ "./src/game/template/interfaces/Ables/Goable.ts":
/*!******************************************************!*\
  !*** ./src/game/template/interfaces/Ables/Goable.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Goable = void 0;
class Goable {
    constructor(name, is_godel, godel_type, godel_cycle_num, is_locked, unlocked_by, goables, inspectables, doables, npcs, on_enter, on_exit) {
        this.name = name;
        this.is_godel = is_godel;
        this.godel_type = godel_type;
        this.godel_cycle_num = godel_cycle_num;
        this.is_locked = is_locked;
        this.unlocked_by = unlocked_by;
        this.goables = goables;
        this.inspectables = inspectables;
        this.doables = doables;
        this.npcs = npcs;
        this.on_enter = on_enter;
        this.on_exit = on_exit;
    }
}
exports.Goable = Goable;


/***/ }),

/***/ "./src/st/slash-commands.ts":
/*!**********************************!*\
  !*** ./src/st/slash-commands.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerSlashCommands = registerSlashCommands;
const SlashCommandParser_1 = __webpack_require__(/*! ../../../../../slash-commands/SlashCommandParser */ "../../../slash-commands/SlashCommandParser.js");
const SlashCommand_1 = __webpack_require__(/*! ../../../../../slash-commands/SlashCommand */ "../../../slash-commands/SlashCommand.js");
const SlashCommandArgument_1 = __webpack_require__(/*! ../../../../../slash-commands/SlashCommandArgument */ "../../../slash-commands/SlashCommandArgument.js");
const script_1 = __webpack_require__(/*! ../../../../../../script */ "../../../../script.js");
const SlashCommandEnumValue_1 = __webpack_require__(/*! ../../../../../slash-commands/SlashCommandEnumValue */ "../../../slash-commands/SlashCommandEnumValue.js");
const cmd_types = {
    GO: "GO",
    INSPECT: "INSPECT",
    TALK: "TALK",
    USE: "USE",
    DO: "DO",
};
function slash_emitEvent(pipe) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(pipe, "event from slash_emitEvent");
        yield script_1.eventSource.emit(pipe);
        return "";
    });
}
function slash_processCMD(pipe) {
    return __awaiter(this, void 0, void 0, function* () {
        const { type, target } = pipe;
        console.log(`TYPE:`, type);
        console.log(`TARGET:`, target);
        return "";
    });
}
function slash_emitEvent_gameStateSave() {
    return __awaiter(this, void 0, void 0, function* () {
        yield script_1.eventSource.emit("game-state-save");
        return "";
    });
}
function slash_emitEvent_gameStateLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield script_1.eventSource.emit("game-state-load");
        return "";
    });
}
function registerSlashCommands() {
    // > /emit
    SlashCommandParser_1.SlashCommandParser.addCommandObject(SlashCommand_1.SlashCommand.fromProps({
        name: "emit",
        callback: slash_emitEvent,
        aliases: ["e", "event", "emit-event"],
        unnamedArgumentList: [
            SlashCommandArgument_1.SlashCommandArgument.fromProps({
                description: "Name of custom event",
                typeList: [SlashCommandArgument_1.ARGUMENT_TYPE.STRING],
                isRequired: true,
            }),
        ],
        helpString: "Emit a custom event.",
    }));
    // > /@cmd
    SlashCommandParser_1.SlashCommandParser.addCommandObject(SlashCommand_1.SlashCommand.fromProps({
        name: "@cmd",
        callback: slash_processCMD,
        aliases: ["game-cmd"],
        namedArgumentList: [
            SlashCommandArgument_1.SlashCommandNamedArgument.fromProps({
                name: "type",
                description: "Type of command",
                typeList: [SlashCommandArgument_1.ARGUMENT_TYPE.STRING],
                enumList: [
                    new SlashCommandEnumValue_1.SlashCommandEnumValue(cmd_types.GO, cmd_types.GO, SlashCommandEnumValue_1.enumTypes.enum),
                    new SlashCommandEnumValue_1.SlashCommandEnumValue(cmd_types.INSPECT, cmd_types.INSPECT, SlashCommandEnumValue_1.enumTypes.enum),
                    new SlashCommandEnumValue_1.SlashCommandEnumValue(cmd_types.TALK, cmd_types.TALK, SlashCommandEnumValue_1.enumTypes.enum),
                    new SlashCommandEnumValue_1.SlashCommandEnumValue(cmd_types.USE, cmd_types.USE, SlashCommandEnumValue_1.enumTypes.enum),
                    new SlashCommandEnumValue_1.SlashCommandEnumValue(cmd_types.DO, cmd_types.DO, SlashCommandEnumValue_1.enumTypes.enum),
                ],
                isRequired: true,
            }),
            SlashCommandArgument_1.SlashCommandNamedArgument.fromProps({
                name: "target",
                description: "Unique identifier indicating what the command is targeting.",
                typeList: [SlashCommandArgument_1.ARGUMENT_TYPE.STRING],
                isRequired: true,
            }),
        ],
        helpString: "Send a request for a game command.",
    }));
    // > /@save
    SlashCommandParser_1.SlashCommandParser.addCommandObject(SlashCommand_1.SlashCommand.fromProps({
        name: "@save",
        callback: slash_emitEvent_gameStateSave,
        aliases: ["game-save", "game-state-save"],
        helpString: "DEV: Shorthand to emit game-state-save event, which requests to save current game state into localStorage.",
    }));
    // > /@load
    SlashCommandParser_1.SlashCommandParser.addCommandObject(SlashCommand_1.SlashCommand.fromProps({
        name: "@load",
        callback: slash_emitEvent_gameStateLoad,
        aliases: ["game-load", "game-state-load"],
        helpString: "DEV: Shorthand to emit game-state-load event, which requests to load current game state from localStorage.",
    }));
}


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gameLog = gameLog;
const extensionName = 'Panopticon';
function gameLog(label, ...args) {
    console.log(`[${extensionName}] ${label}`, ...args);
}


/***/ }),

/***/ "../../../../script.js":
/*!*****************************!*\
  !*** ../../../../script.js ***!
  \*****************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> import { humanizedDateTime, favsToHotswap, getMessageTimeStamp, dragElement, isMobile, initRossMods, shouldSendOnEnter, addSafariPatch } from './scripts/RossAscends-mods.js';\n| import { userStatsHandler, statMesProcess, initStats } from './scripts/stats.js';\n| import {");

/***/ }),

/***/ "../../../extensions.js":
/*!******************************!*\
  !*** ../../../extensions.js ***!
  \******************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> import { eventSource, event_types, saveSettings, saveSettingsDebounced, getRequestHeaders, animation_duration } from '../script.js';\n| import { showLoader } from './loader.js';\n| import { POPUP_RESULT, POPUP_TYPE, Popup, callGenericPopup } from './popup.js';");

/***/ }),

/***/ "../../../slash-commands/SlashCommand.js":
/*!***********************************************!*\
  !*** ../../../slash-commands/SlashCommand.js ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> import { SlashCommandAbortController } from './SlashCommandAbortController.js';\n| import { SlashCommandArgument, SlashCommandNamedArgument } from './SlashCommandArgument.js';\n| import { SlashCommandClosure } from './SlashCommandClosure.js';");

/***/ }),

/***/ "../../../slash-commands/SlashCommandArgument.js":
/*!*******************************************************!*\
  !*** ../../../slash-commands/SlashCommandArgument.js ***!
  \*******************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> import { SlashCommandClosure } from './SlashCommandClosure.js';\n| import { commonEnumProviders } from './SlashCommandCommonEnumsProvider.js';\n| import { SlashCommandEnumValue } from './SlashCommandEnumValue.js';");

/***/ }),

/***/ "../../../slash-commands/SlashCommandEnumValue.js":
/*!********************************************************!*\
  !*** ../../../slash-commands/SlashCommandEnumValue.js ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> import { SlashCommandExecutor } from './SlashCommandExecutor.js';\n| import { SlashCommandScope } from './SlashCommandScope.js';\n| ");

/***/ }),

/***/ "../../../slash-commands/SlashCommandParser.js":
/*!*****************************************************!*\
  !*** ../../../slash-commands/SlashCommandParser.js ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> import { power_user } from '../power-user.js';\n| import { isTrueBoolean, uuidv4 } from '../utils.js';\n| import { SlashCommand } from './SlashCommand.js';");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	var __webpack_exports_export__ = __webpack_exports__["default"];
/******/ 	for(var i in __webpack_exports_export__) __webpack_export_target__[i] = __webpack_exports_export__[i];
/******/ 	if(__webpack_exports_export__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;