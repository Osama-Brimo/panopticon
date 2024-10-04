// Type: type of message

import { st_sendMessage } from "src/utils/st";
import { Message } from "../Game/Message";
import { gameLog } from "src/utils/utils";
import { Generate } from "@sillytavern/script";
import { sendMessageAs } from "@sillytavern/slash-commands";

// Any response
export class GameResponse {
    constructor() {}
    public sendMessage(message: Message) {
        if(!message) throw new Error("No message provided.");
        // Send a message if one is provided
        const sent = st_sendMessage(message);
        gameLog('GameResponse', sent);
    }
    // Trigger a message generation with optional input
    public generate(text: string) {
        Generate(null);
    }
}
