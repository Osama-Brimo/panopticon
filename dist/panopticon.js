import * as __WEBPACK_EXTERNAL_MODULE__extensions_js_e625da88__ from "../../../../extensions.js";
import * as __WEBPACK_EXTERNAL_MODULE__script_js_c57e49fe__ from "../../../../script.js";
import * as __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommand_js_1b0d5616__ from "../../../../slash-commands/SlashCommand.js";
import * as __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandArgument_js_a42b9371__ from "../../../../slash-commands/SlashCommandArgument.js";
import * as __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandEnumValue_js_20f1c506__ from "../../../../slash-commands/SlashCommandEnumValue.js";
import * as __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandParser_js_42c8b851__ from "../../../../slash-commands/SlashCommandParser.js";
/******/ var __webpack_modules__ = ({

/***/ "./src/game/features/saveLoad.ts":
/*!***************************************!*\
  !*** ./src/game/features/saveLoad.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadGameState: () => (/* binding */ loadGameState),
/* harmony export */   saveGameState: () => (/* binding */ saveGameState)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");

function saveGameState(state) {
    const serializedState = JSON.stringify(state);
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.gameLog)('saveGameState', serializedState);
    localStorage.setItem('panopticon_gameState', serializedState);
}
function loadGameState() {
    const serializedState = localStorage.getItem('panopticon_gameState');
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.gameLog)('loadGameState', serializedState);
    return serializedState ? JSON.parse(serializedState) : null;
}


/***/ }),

/***/ "./src/game/st/listeners.ts":
/*!**********************************!*\
  !*** ./src/game/st/listeners.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerListeners: () => (/* binding */ registerListeners)
/* harmony export */ });
/* harmony import */ var _sillytavern_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sillytavern/extensions */ "@sillytavern/extensions");
/* harmony import */ var _template_instances_Game_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/instances/Game/State */ "./src/game/template/instances/Game/State.ts");
/* harmony import */ var _features_saveLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/saveLoad */ "./src/game/features/saveLoad.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function registerListeners() {
    const context = (0,_sillytavern_extensions__WEBPACK_IMPORTED_MODULE_0__.getContext)();
    // Extension load
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.gameLog)('loaded');
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.gameLog)('Game State', _template_instances_Game_State__WEBPACK_IMPORTED_MODULE_1__.$state);
    // e: chatLoaded
    context.eventSource.on('chatLoaded', () => __awaiter(this, void 0, void 0, function* () {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.gameLog)('chatLoaded Fired');
    }));
    // e: game-state-save
    context.eventSource.on('game-state-save', () => __awaiter(this, void 0, void 0, function* () {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.gameLog)('Request for game save');
        (0,_features_saveLoad__WEBPACK_IMPORTED_MODULE_2__.saveGameState)(_template_instances_Game_State__WEBPACK_IMPORTED_MODULE_1__.$state);
    }));
    // e: game-state-load
    context.eventSource.on('game-state-load', () => __awaiter(this, void 0, void 0, function* () {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.gameLog)('Request for game load');
        (0,_features_saveLoad__WEBPACK_IMPORTED_MODULE_2__.loadGameState)();
    }));
}


/***/ }),

/***/ "./src/game/template/classes/Entities/Area.ts":
/*!****************************************************!*\
  !*** ./src/game/template/classes/Entities/Area.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Area: () => (/* binding */ Area)
/* harmony export */ });
var GodelType;
(function (GodelType) {
    GodelType["A"] = "A";
    GodelType["B"] = "B";
})(GodelType || (GodelType = {}));
class Area {
    constructor(name, description, is_godel, godel_type, godel_cycle_num, is_locked, unlocked_by, goables, inspectables, doables, npcs, on_go, on_exit, is_saferoom) {
        this.name = name;
        this.description = description;
        this.is_godel = is_godel;
        this.godel_type = godel_type;
        this.godel_cycle_num = godel_cycle_num;
        this.is_locked = is_locked;
        this.unlocked_by = unlocked_by;
        this.goables = goables;
        this.inspectables = inspectables;
        this.doables = doables;
        this.npcs = npcs;
        this.on_go = on_go;
        this.on_exit = on_exit;
        this.is_saferoom = is_saferoom;
    }
}
// const Foyer = new Area(
//   "Foyer",
//   "The Foyer.",
//   false,
//   null,
//   null,
//   false,
//   [],
//   [],
//   [],
//   [],
//   [],
//   null,
//   null,
//   false,
// );


/***/ }),

/***/ "./src/game/template/classes/Entities/Item.ts":
/*!****************************************************!*\
  !*** ./src/game/template/classes/Entities/Item.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item)
/* harmony export */ });
class Item {
    constructor(name, description, effect, on_use, item_comment, count = 0) {
        this.name = name;
        this.description = description;
        this.effect = effect;
        this.on_use = on_use;
        this.item_comment = item_comment;
        this.count = count;
    }
}


/***/ }),

/***/ "./src/game/template/classes/Entities/NPC.ts":
/*!***************************************************!*\
  !*** ./src/game/template/classes/Entities/NPC.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NPC: () => (/* binding */ NPC)
/* harmony export */ });
// NPC is always an AI assistant.
class NPC {
    constructor(name, description, on_talk) {
        this.name = name;
        this.description = description;
        this.on_talk = on_talk;
    }
}


/***/ }),

/***/ "./src/game/template/classes/Entities/Player.ts":
/*!******************************************************!*\
  !*** ./src/game/template/classes/Entities/Player.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Participants_Human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Participants/Human */ "./src/game/template/classes/Participants/Human.ts");

class Player extends _Participants_Human__WEBPACK_IMPORTED_MODULE_0__.Human {
    constructor(name) {
        super(name);
    }
}


/***/ }),

/***/ "./src/game/template/classes/Game/Flag.ts":
/*!************************************************!*\
  !*** ./src/game/template/classes/Game/Flag.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Flag: () => (/* binding */ Flag)
/* harmony export */ });
class Flag {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}


/***/ }),

/***/ "./src/game/template/classes/Game/State.ts":
/*!*************************************************!*\
  !*** ./src/game/template/classes/Game/State.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
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
        this.cmd_queue.forEach((Cmd) => {
            Cmd.execute(this);
        });
    }
    update() {
        // If theres CMDs; process
        // If theres GameEvents; process
        this.processCmdQueue();
        // this.processEventQueue();
    }
}


/***/ }),

/***/ "./src/game/template/classes/Mechanics/Cycle.ts":
/*!******************************************************!*\
  !*** ./src/game/template/classes/Mechanics/Cycle.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cycle: () => (/* binding */ Cycle)
/* harmony export */ });
// A timeline or cycle, containing its event, number, etc.
class Cycle {
    constructor(number) {
        this.number = number;
    }
}


/***/ }),

/***/ "./src/game/template/classes/Mechanics/Inventory.ts":
/*!**********************************************************!*\
  !*** ./src/game/template/classes/Mechanics/Inventory.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Inventory: () => (/* binding */ Inventory)
/* harmony export */ });
class Inventory {
    constructor(items, size) {
        this.items = items;
        this.size = size;
    }
}


/***/ }),

/***/ "./src/game/template/classes/Participants/Human.ts":
/*!*********************************************************!*\
  !*** ./src/game/template/classes/Participants/Human.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Human: () => (/* binding */ Human)
/* harmony export */ });
// Represents the human player
class Human {
    constructor(name) {
        this.name = name;
    }
}


/***/ }),

/***/ "./src/game/template/instances/Area/Foyer.ts":
/*!***************************************************!*\
  !*** ./src/game/template/instances/Area/Foyer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Area_Foyer: () => (/* binding */ Area_Foyer)
/* harmony export */ });
/* harmony import */ var _classes_Entities_Area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Entities/Area */ "./src/game/template/classes/Entities/Area.ts");

const Area_Foyer = new _classes_Entities_Area__WEBPACK_IMPORTED_MODULE_0__.Area("Foyer", "The Foyer.", false, null, null, false, [], [], [], [], [], null, null, false);


/***/ }),

/***/ "./src/game/template/instances/Game/Flags.ts":
/*!***************************************************!*\
  !*** ./src/game/template/instances/Game/Flags.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DID_FIRST_TUTORIAL: () => (/* binding */ DID_FIRST_TUTORIAL)
/* harmony export */ });
/* harmony import */ var _classes_Game_Flag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Game/Flag */ "./src/game/template/classes/Game/Flag.ts");

const DID_FIRST_TUTORIAL = new _classes_Game_Flag__WEBPACK_IMPORTED_MODULE_0__.Flag("FIRST_TUTORIAL", false);


/***/ }),

/***/ "./src/game/template/instances/Game/State.ts":
/*!***************************************************!*\
  !*** ./src/game/template/instances/Game/State.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $state: () => (/* binding */ $state)
/* harmony export */ });
/* harmony import */ var _classes_Game_State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Game/State */ "./src/game/template/classes/Game/State.ts");
/* harmony import */ var _classes_Mechanics_Cycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Mechanics/Cycle */ "./src/game/template/classes/Mechanics/Cycle.ts");
/* harmony import */ var _classes_Mechanics_Inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/Mechanics/Inventory */ "./src/game/template/classes/Mechanics/Inventory.ts");
/* harmony import */ var _Area_Foyer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Area/Foyer */ "./src/game/template/instances/Area/Foyer.ts");
/* harmony import */ var _Item_Camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Item/Camera */ "./src/game/template/instances/Item/Camera.ts");
/* harmony import */ var _NPC_Char__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NPC/Char */ "./src/game/template/instances/NPC/Char.ts");
/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Player/Player */ "./src/game/template/instances/Player/Player.ts");
/* harmony import */ var _Flags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Flags */ "./src/game/template/instances/Game/Flags.ts");








const startingArea = _Area_Foyer__WEBPACK_IMPORTED_MODULE_3__.Area_Foyer;
const startingInventory = new _classes_Mechanics_Inventory__WEBPACK_IMPORTED_MODULE_2__.Inventory([_Item_Camera__WEBPACK_IMPORTED_MODULE_4__.Item_Camera], 5);
const startingTime = "16:31";
const startingCycle = new _classes_Mechanics_Cycle__WEBPACK_IMPORTED_MODULE_1__.Cycle(0);
const $state = new _classes_Game_State__WEBPACK_IMPORTED_MODULE_0__.State(_Player_Player__WEBPACK_IMPORTED_MODULE_6__.$player, _NPC_Char__WEBPACK_IMPORTED_MODULE_5__.$char, startingArea, startingInventory, 0, startingArea.inspectables, startingArea.goables, startingArea.doables, [_NPC_Char__WEBPACK_IMPORTED_MODULE_5__.$char], startingCycle, startingTime, [_Flags__WEBPACK_IMPORTED_MODULE_7__.DID_FIRST_TUTORIAL], [], []);


/***/ }),

/***/ "./src/game/template/instances/Item/Camera.ts":
/*!****************************************************!*\
  !*** ./src/game/template/instances/Item/Camera.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item_Camera: () => (/* binding */ Item_Camera)
/* harmony export */ });
/* harmony import */ var _classes_Entities_Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Entities/Item */ "./src/game/template/classes/Entities/Item.ts");

const Item_Camera = new _classes_Entities_Item__WEBPACK_IMPORTED_MODULE_0__.Item("Camera", "A regular camera.", "It's a camera.", () => null, "You take a picture.", 1);


/***/ }),

/***/ "./src/game/template/instances/NPC/Char.ts":
/*!*************************************************!*\
  !*** ./src/game/template/instances/NPC/Char.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $char: () => (/* binding */ $char)
/* harmony export */ });
/* harmony import */ var _classes_Entities_NPC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Entities/NPC */ "./src/game/template/classes/Entities/NPC.ts");

const $char = new _classes_Entities_NPC__WEBPACK_IMPORTED_MODULE_0__.NPC("char's name from ST", "char is... something.", () => { console.log("you talked to char."); return null; });


/***/ }),

/***/ "./src/game/template/instances/Player/Player.ts":
/*!******************************************************!*\
  !*** ./src/game/template/instances/Player/Player.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $player: () => (/* binding */ $player)
/* harmony export */ });
/* harmony import */ var _classes_Entities_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Entities/Player */ "./src/game/template/classes/Entities/Player.ts");

const $player = new _classes_Entities_Player__WEBPACK_IMPORTED_MODULE_0__.Player("st {{user}}");


/***/ }),

/***/ "./src/st/slash-commands.ts":
/*!**********************************!*\
  !*** ./src/st/slash-commands.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerSlashCommands: () => (/* binding */ registerSlashCommands)
/* harmony export */ });
/* harmony import */ var _sillytavern_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sillytavern/script */ "@sillytavern/script");
/* harmony import */ var _sillytavern_slash_commands_SlashCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sillytavern/slash-commands/SlashCommand */ "@sillytavern/slash-commands/SlashCommand");
/* harmony import */ var _sillytavern_slash_commands_SlashCommandArgument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sillytavern/slash-commands/SlashCommandArgument */ "@sillytavern/slash-commands/SlashCommandArgument");
/* harmony import */ var _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sillytavern/slash-commands/SlashCommandEnumValue */ "@sillytavern/slash-commands/SlashCommandEnumValue");
/* harmony import */ var _sillytavern_slash_commands_SlashCommandParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sillytavern/slash-commands/SlashCommandParser */ "@sillytavern/slash-commands/SlashCommandParser");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





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
        yield _sillytavern_script__WEBPACK_IMPORTED_MODULE_0__.eventSource.emit(pipe);
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
        yield _sillytavern_script__WEBPACK_IMPORTED_MODULE_0__.eventSource.emit("game-state-save");
        return "";
    });
}
function slash_emitEvent_gameStateLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield _sillytavern_script__WEBPACK_IMPORTED_MODULE_0__.eventSource.emit("game-state-load");
        return "";
    });
}
function registerSlashCommands() {
    // > /emit
    _sillytavern_slash_commands_SlashCommandParser__WEBPACK_IMPORTED_MODULE_4__.SlashCommandParser.addCommandObject(_sillytavern_slash_commands_SlashCommand__WEBPACK_IMPORTED_MODULE_1__.SlashCommand.fromProps({
        name: "emit",
        callback: slash_emitEvent,
        aliases: ["e", "event", "emit-event"],
        unnamedArgumentList: [
            _sillytavern_slash_commands_SlashCommandArgument__WEBPACK_IMPORTED_MODULE_2__.SlashCommandArgument.fromProps({
                description: "Name of custom event",
                typeList: [_sillytavern_slash_commands_SlashCommandArgument__WEBPACK_IMPORTED_MODULE_2__.ARGUMENT_TYPE.STRING],
                isRequired: true,
            }),
        ],
        helpString: "Emit a custom event.",
    }));
    // > /@cmd
    _sillytavern_slash_commands_SlashCommandParser__WEBPACK_IMPORTED_MODULE_4__.SlashCommandParser.addCommandObject(_sillytavern_slash_commands_SlashCommand__WEBPACK_IMPORTED_MODULE_1__.SlashCommand.fromProps({
        name: "@cmd",
        callback: slash_processCMD,
        aliases: ["game-cmd"],
        namedArgumentList: [
            _sillytavern_slash_commands_SlashCommandArgument__WEBPACK_IMPORTED_MODULE_2__.SlashCommandNamedArgument.fromProps({
                name: "type",
                description: "Type of command",
                typeList: [_sillytavern_slash_commands_SlashCommandArgument__WEBPACK_IMPORTED_MODULE_2__.ARGUMENT_TYPE.STRING],
                enumList: [
                    new _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.SlashCommandEnumValue(cmd_types.GO, cmd_types.GO, _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.enumTypes.enum),
                    new _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.SlashCommandEnumValue(cmd_types.INSPECT, cmd_types.INSPECT, _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.enumTypes.enum),
                    new _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.SlashCommandEnumValue(cmd_types.TALK, cmd_types.TALK, _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.enumTypes.enum),
                    new _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.SlashCommandEnumValue(cmd_types.USE, cmd_types.USE, _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.enumTypes.enum),
                    new _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.SlashCommandEnumValue(cmd_types.DO, cmd_types.DO, _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_3__.enumTypes.enum),
                ],
                isRequired: true,
            }),
            _sillytavern_slash_commands_SlashCommandArgument__WEBPACK_IMPORTED_MODULE_2__.SlashCommandNamedArgument.fromProps({
                name: "target",
                description: "Unique identifier indicating what the command is targeting.",
                typeList: [_sillytavern_slash_commands_SlashCommandArgument__WEBPACK_IMPORTED_MODULE_2__.ARGUMENT_TYPE.STRING],
                isRequired: true,
            }),
        ],
        helpString: "Send a request for a game command.",
    }));
    // > /@save
    _sillytavern_slash_commands_SlashCommandParser__WEBPACK_IMPORTED_MODULE_4__.SlashCommandParser.addCommandObject(_sillytavern_slash_commands_SlashCommand__WEBPACK_IMPORTED_MODULE_1__.SlashCommand.fromProps({
        name: "@save",
        callback: slash_emitEvent_gameStateSave,
        aliases: ["game-save", "game-state-save"],
        helpString: "DEV: Shorthand to emit game-state-save event, which requests to save current game state into localStorage.",
    }));
    // > /@load
    _sillytavern_slash_commands_SlashCommandParser__WEBPACK_IMPORTED_MODULE_4__.SlashCommandParser.addCommandObject(_sillytavern_slash_commands_SlashCommand__WEBPACK_IMPORTED_MODULE_1__.SlashCommand.fromProps({
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameLog: () => (/* binding */ gameLog)
/* harmony export */ });
const extensionName = "Panopticon";
function gameLog(label, ...args) {
    console.log(`[${extensionName}] ${label}`, ...args);
}
;


/***/ }),

/***/ "@sillytavern/extensions":
/*!********************************************!*\
  !*** external "../../../../extensions.js" ***!
  \********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__extensions_js_e625da88__;

/***/ }),

/***/ "@sillytavern/script":
/*!****************************************!*\
  !*** external "../../../../script.js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__script_js_c57e49fe__;

/***/ }),

/***/ "@sillytavern/slash-commands/SlashCommand":
/*!*************************************************************!*\
  !*** external "../../../../slash-commands/SlashCommand.js" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommand_js_1b0d5616__;

/***/ }),

/***/ "@sillytavern/slash-commands/SlashCommandArgument":
/*!*********************************************************************!*\
  !*** external "../../../../slash-commands/SlashCommandArgument.js" ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandArgument_js_a42b9371__;

/***/ }),

/***/ "@sillytavern/slash-commands/SlashCommandEnumValue":
/*!**********************************************************************!*\
  !*** external "../../../../slash-commands/SlashCommandEnumValue.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandEnumValue_js_20f1c506__;

/***/ }),

/***/ "@sillytavern/slash-commands/SlashCommandParser":
/*!*******************************************************************!*\
  !*** external "../../../../slash-commands/SlashCommandParser.js" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandParser_js_42c8b851__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_st_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/st/listeners */ "./src/game/st/listeners.ts");
/* harmony import */ var _game_template_instances_Game_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/template/instances/Game/State */ "./src/game/template/instances/Game/State.ts");
/* harmony import */ var _st_slash_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st/slash-commands */ "./src/st/slash-commands.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




(0,_st_slash_commands__WEBPACK_IMPORTED_MODULE_2__.registerSlashCommands)();
jQuery(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0,_game_st_listeners__WEBPACK_IMPORTED_MODULE_0__.registerListeners)();
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.gameLog)("Gamestate:", _game_template_instances_Game_State__WEBPACK_IMPORTED_MODULE_1__.$state);
    }
    catch (error) {
        console.error('[Panopticon] ERROR:', error);
    }
}));
// Game | state > ST | CMD > Game | state > ST...

})();


//# sourceMappingURL=panopticon.js.map