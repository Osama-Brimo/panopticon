export class State {
    constructor(user, char, area, inventory, frozen_tear_count, inspectables, goables, doables, talkables, cycle, time, flags, event_queue) {
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
    }
}