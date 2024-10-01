export class Goable {
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