import { Talkable } from "../../interfaces/Ables";

// NPC is always an AI assistant.
export class NPC implements Talkable {
    description: string;
    name: string;
    on_talk: () => {};

    constructor(name: string, description: string, on_talk: () => {}) {
        this.name = name;
        this.description = description;
        this.on_talk = on_talk;
    }
}
