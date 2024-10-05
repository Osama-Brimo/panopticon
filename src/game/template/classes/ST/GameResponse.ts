// Type: type of message

import { Message } from "../Game/Message";
import { Generate } from "@sillytavern-script";
import { sendMessageAs } from "@sillytavern/slash-commands";
import { st_sendMessage } from "../../../../util/st";
import { gameLog } from "../../../../util/utils";

// Any response
export class GameResponse {
  // constructor() {}
  public sendMessage(message: Message) {
    // Send a message if one is provided
    const sent = st_sendMessage(message);
    gameLog("GameResponse", sent);
  }
  // Trigger a message generation with optional input
  public async generate(text: string) {
    await Generate("");
  }
}
