import { State } from "../../classes/Game/State";
import { Cycle } from "../../classes/Mechanics/Cycle";
import { Inventory } from "../../classes/Mechanics/Inventory";
import { Area_Foyer } from "../Area/Foyer";
import { Item_Camera } from "../Item/Camera";
import { $char } from "../NPC/Char";
import { $player } from "../Player/Player";
import { DID_FIRST_TUTORIAL } from "./Flags";


const startingArea = Area_Foyer;
const startingInventory = new Inventory([Item_Camera], 5);
const startingTime = "16:31";
const startingCycle = new Cycle(0);

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
  startingCycle,
  startingTime,
  [DID_FIRST_TUTORIAL],
  [],
  []
);
