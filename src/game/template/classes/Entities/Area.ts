import { Doable, Goable, Inspectable } from "../../interfaces/Ables";
import { Item } from "./Item";
import { NPC } from "./NPC";

export enum GodelType {
  A = "A",
  B = "B",
}

export type ofGodelType = GodelType | null;

export type ofGodelCycle = number | null;

export class Area implements Goable {
  id: string;
  name: string;
  description: string;
  is_godel: boolean;
  godel_type: ofGodelType;
  godel_cycle_num: ofGodelCycle;
  is_locked: boolean;
  unlocked_by?: Item[];
  goables: Goable[];
  inspectables: Inspectable[];
  doables: Doable[];
  npcs: NPC[];
  on_go: () => {};
  on_exit: () => {};
  is_saferoom: boolean;
  should_be_goable?: boolean | (() => boolean);

  constructor(
    id: string,
    name: string,
    description: string,
    is_godel: boolean,
    godel_type: GodelType,
    godel_cycle_num: number,
    is_locked: boolean,
    unlocked_by: Item[],
    goables: Goable[],
    inspectables: Inspectable[],
    doables: Doable[],
    npcs: NPC[],
    on_go: () => {},
    on_exit: () => {},
    is_saferoom: boolean,
    should_be_goable?: () => boolean,
  ) {
    this.id = id;
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
    this.should_be_goable = should_be_goable ?? true;
  }
}
