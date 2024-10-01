// game classes

{/* <game>
<game_premise>
PROTAGS are trapped in a mansion where time and space are distorted. The mansion exists in a repeating time loop, with each death/save creating a new timeline. The protagonists encounter doppelgangers who are actually themselves from different cycles. As they progress, they inadvertently become either allies and enemies to their past and future selves. Actions taken to advance in one cycle may hinder or help other iterations. 

Genres: Horror, Mystery, Psychological, Visual Novel
</game_premise> */}

{/* <game_rules>
<paradox name="Gödel Door">
- ABOUT: These doors lead to either a PAST or FUTURE version of `current_area`, from past or future timeline cycles.
- TYPES:
  - Type A: Leads to PAST version of `current_area`
  - Type B: Leads to FUTURE version of `current_area`
- RULES:
  1. Door will have a number n on it indicating how far in future/past cycle is [0-infinity] along with Type letter
  2. Door does NOT contain whatever it says, instead it's an EXACT copy of `current_area`, barring entry into the actual room
  3. Room will be in the exact state it was in (Type A) or will be (Type B) from cycle n
  4. Past/Future Doppelgangers can arrive via these doors, depending on the type
  5. If PROTAGS enter a FUTURE door, they will spawn as PAST Doppelgangers during their next cycle
  6. PROTAGS can enter PAST doors with no impact in current or future
  7. PROTAGS can travel backwards or forwards in time by using a succession of doors
  8. Frozen Tear shatters when used on door. It can:
     - QUANTIZE: turning door back into a regular room and cutting off contact with Past/Future selves.
     - DECOHERE: turn door into Type A or B with cycle n-1.
     - TUNE: change door cycle number to any n.
</paradox>
<paradox name="Doppelgangers">
- ABOUT: Doppelgangers are copies of PROTAGS from either future or past timelines within the story.
- TYPES:
  - Type A: From a PAST timeline
  - Type B: From a FUTURE timeline
- RULES:
  1. If Type A touches PROTAGS, PROTAGS will die (but PAST version of themselves receives a Frozen Tear)
  2. If PROTAGS touch Type B, they will receive an Frozen Tear (but kill a FUTURE version of themselves)
</paradox>
<paradox name="Time">
Time within the mansion is always frozen.
</paradox>
</game_rules> */}

class Player {
    constructor(name, inventory) {
        this.name = name;
        this.inventory = inventory;
    }
}

class NPC {
    constructor(name, description, on_talk) {
        this.name = name;
        this.description = description;
        this.on_talk = on_talk;
    }
}

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

class Area extends Goable {
    constructor(name, is_godel, godel_type, godel_cycle_num, is_locked, unlocked_by, goables, inspectables, doables, npcs, on_enter, on_exit, is_saferoom) {
        super(name, is_godel, godel_type, godel_cycle_num, is_locked, unlocked_by, goables, inspectables, doables, npcs, on_enter, on_exit);
        this.is_saferoom = is_saferoom;
    }
}

class Inspectable {
    constructor(name, description, on_inspect) {
        this.name = name;
        this.description = description;
        this.on_inspect = on_inspect;
    }
}

class Doable {
    constructor(name, description, on_do) {
        this.name = name;
        this.description = description;
        this.on_do = on_do;
    }
}

class Usable {
    constructor(name, description, effect, on_use) {
        this.name = name;
        this.description = description;
        this.effect = effect;
        this.on_use = on_use;
    }
}

class Item extends Usable {
    constructor(name, description, effect, on_use, kangaeru_comment, in_possession, item_type) {
        super(name, description, effect, on_use);
        this.kangaeru_comment = kangaeru_comment;
        this.in_possession = in_possession;
    }
    set_in_possession(in_possession) {
        this.in_possession = in_possession;
    }
}

class Inventory {
    constructor(items, size) {
        this.items = items;
        this.size = size;
    }
    add(item) {
        if (this.items.length < this.size) {
            this.items.push(item);
            item.set_in_possession(true);
        }
    }
    remove(item) {
        this.items = this.items.filter(i => i !== item);
        item.set_in_possession(false);
    }
}

// game flags
class Flag {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

// game state

class State {
    constructor(flags, inventory, current_area, current_cycle, current_time, frozen_tear_count, current_goables, current_inspectables, current_doables, current_npcs, current_player, event_queue) {
        this.flags = flags;
        this.inventory = inventory;
        this.current_area = current_area;
        this.current_cycle = current_cycle;
        this.current_time = current_time;
        this.frozen_tear_count = frozen_tear_count;
        this.current_goables = current_goables;
        this.current_inspectables = current_inspectables;
        this.current_doables = current_doables;
        this.current_npcs = current_npcs;
        this.current_player = current_player;
    }

    set_current_area(area) {
        this.current_area = area;
    }

    set_current_cycle(cycle) {
        this.current_cycle = cycle;
    }

    set_current_time(time) {
        this.current_time = time;
    }

    set_frozen_tear_count(count) {
        this.frozen_tear_count = count;
    }

    set_current_goables(goables) {
        this.current_goables = goables;
    }   

    set_current_inspectables(inspectables) {
        this.current_inspectables = inspectables;
    }

    set_current_doables(doables) {
        this.current_doables = doables;
    }       

    set_current_npcs(npcs) {
        this.current_npcs = npcs;
    }

    set_current_player(player) {
        this.current_player = player;
    }   

    set_flags(flags) {
        this.flags = flags;
    }

    set_event_queue(event_queue) {
        this.event_queue = event_queue;
    }
}

class Event {
    constructor(name, description, on_event) {
        this.name = name;
        this.description = description;
        this.on_event = on_event;
    }
}

class Cycle {
    constructor(number) {
        this.number = number;
    }
}

const $cycle = new Cycle(0);

const Event_Enter_Mansion = new Event("Enter Mansion", "You enter the mansion.", () => {});

const Item_Camera = new Item("Camera", "A regular camera.", "It's a camera.", () => {}, "You take a picture.", 1, "Key Item");

const $inventory = new Inventory([Item_Camera], 6);

const Area_Mansion_Entrance = new Area("Mansion Entrance", false, null, null, false, null, [Area_Foyer], [], [], [], null, null, false);
const Area_Foyer = new Area("Foyer", false, null, null, false, null, [], [], [], [], [Event_Enter_Mansion], null, false);

const DID_FIRST_TUTORIAL = new Flag("FIRST_TUTORIAL", false);
const all_flags = [DID_FIRST_TUTORIAL];

const $player = new Player("Name from ST");
const $sidekick = new NPC("char name from ST");

const $state = new State(all_flags, $inventory, Area_Mansion_Entrance, $cycle, "16:32", 0, Area_Mansion_Entrance.goables, [], [], [], $player, [$sidekick]);

export { $state };