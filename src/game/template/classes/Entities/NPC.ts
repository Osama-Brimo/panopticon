import { Talkable } from "../../interfaces/Ables/Talkable";

// NPC is always an AI assistant.
export class NPC implements Talkable {
    description: string;
    name: string;
    onTalk: () => {};

    constructor(name, description, onTalk) {
        this.name = name;
        this.description = description;
        this.onTalk = onTalk;
    }
}
