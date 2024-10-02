import { Talkable } from "../../interfaces/Ables/Talkable";
import { NPC } from "./NPC";

// NPC is always an AI assistant.
export class Doppelganger extends NPC implements Talkable {
    constructor(name, description, onTalk) {
        super(name, description, onTalk);
    }
}

// Human
    // Player - The human as a player
    // UserChar - The character itself [implements Talkable]

// Assistant
    // NPC - Any NPC [implements Talkable]
        // Char - An actual NPC (of this time/space)
        // Doppelganger - A ghost of an NPC (from another cycle)
    // System - AI system ops
    // Gamemaster - Prompt ops (Gamemaster)
