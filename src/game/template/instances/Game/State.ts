import { State } from "../../classes/Game/State";
import { Inventory } from "../../classes/Mechanics/Inventory";
import { Area_MansionExterior } from "../Area/MansionExterior";
import { Item_Camera } from "../Item/Camera";
import { $char } from "../NPC/Char";
import { $player } from "../Player/Player";
import { DID_FIRST_TUTORIAL } from "./Flags";

const startingArea = Area_MansionExterior;
const startingInventory = new Inventory([Item_Camera], 5);
const startingTime = "16:31";

export const $state = new State(
  $player,
  $char,
  startingArea,
  startingInventory,
  0,
  startingArea.inspectables,
  startingArea.goables,
  startingArea.doables,
  [$char],
  0,
  startingTime,
  [DID_FIRST_TUTORIAL],
  [],
  []
);
