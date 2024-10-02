import { State } from "../../classes/Game/State.js";
import { Inventory } from "../../classes/Mechanics/Inventory.js";
import { Area_MansionExterior } from "../Area/MansionExterior.js";
import { Item_Camera } from "../Item/Camera.js";
import { $char } from "../NPC/Char.js";
import { $player } from "../Player/Player.js";
import { DID_FIRST_TUTORIAL } from "./Flags.js";

const startingArea = Area_MansionExterior;
const startingInventory = new Inventory([Item_Camera], 5);
const startingTime = "16:31"

export const $state = new State($player, $char, startingArea, startingInventory, 0, startingArea.inspectables, startingArea.goables, startingArea.doables, [$char], 0, startingTime, [DID_FIRST_TUTORIAL], []);