export class GameEvent {
    name: string;
    description: string;
    on_event: () => {};

    constructor(name: string, description: string, on_event: () => {}) {
        this.name = name;
        this.description = description;
        this.on_event = on_event;
    }
}
