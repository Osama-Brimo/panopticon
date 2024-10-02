import { Talkable } from "../Ables/Talkable.js";

// NPC is always an AI assistant.
export class NPC extends Talkable {
    constructor(name, description, on_talk) {
        super(name, description, on_talk);
    }
}