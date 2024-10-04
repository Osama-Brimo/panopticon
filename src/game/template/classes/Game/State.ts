import { User } from "../../../../../../../../../../src/users";
import { Doable, Goable, Inspectable, Talkable } from "../../interfaces/Ables";
import { CMD } from "../CMD/CMD";
import { Area } from "../Entities/Area";
import { NPC } from "../Entities/NPC";
import { Player } from "../Entities/Player";
import { Cycle } from "../Mechanics/Cycle";
import { Inventory } from "../Mechanics/Inventory";
import { GameEvent } from "./Event";
import { Flag } from "./Flag";

export class State {
  user: Player;
  char: NPC;
  area: Area;
  inventory: Inventory;
  frozen_tear_count: number;
  inspectables: Inspectable[];
  goables: Goable[];
  doables: Doable[];
  talkables: Talkable[];
  cycle: Cycle;
  time: string;
  flags: Flag[];
  event_queue: GameEvent[];
  cmd_queue: CMD[];
  constructor(
    user: Player,
    char: NPC,
    area: Area,
    inventory: Inventory,
    frozen_tear_count: number,
    inspectables: Inspectable[],
    goables: Goable[],
    doables: Doable[],
    talkables: Talkable[],
    cycle: Cycle,
    time: string,
    flags: Flag[],
    event_queue: GameEvent[],
    cmd_queue: CMD[]
  ) {
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
    this.processCmdQueue();
    // this.processEventQueue();
  }
}
