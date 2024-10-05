import { Talkable } from "../../interfaces/Ables";

// NPC is always an AI assistant.
export class NPC implements Talkable {
    id: string;
    description: string;
    name: string;
    on_talk: () => {};

    constructor(id:string, name: string, description: string, on_talk: () => {}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.on_talk = on_talk;
    }
}
