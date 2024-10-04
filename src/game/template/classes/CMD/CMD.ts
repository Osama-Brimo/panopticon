import { Able, Goable } from "../../interfaces/Ables";
import { Area } from "../Entities/Area";
import { NPC } from "../Entities/NPC";
import { Message, MessageStrategy, Role } from "../Game/Message";
import { State } from "../Game/State";
import { GameResponse } from "../ST/GameResponse";

enum CMDTypes {
  GO = "GO",
  INSPECT = "INSPECT",
  TALK = "TALK",
  USE = "USE",
  DO = "DO",
}

export class CMD {
  type: CMDTypes;
  target: Able;
  constructor(type: CMDTypes, target: Able) {
    this.type = type;
    this.target = target;
  }

  private handleGO(state: State) {
    // valid target?
    const area = this.target as Area;
    if (state.goables.includes(area)) {
      // Can you go?
      // Locked? refuse.
      if (area.is_locked) {
        const GR = new GameResponse();
        // TODO: shorthand func sendNarrator(...)
        const refusal = new Message(
          "Locked...",
          MessageStrategy.script,
          false,
          Role.system,
          null
        );
        GR.sendMessage(refusal);
        // Follow ups. Char comments, or use key prompt, or.. etc.
        // TODO: consider if we don't want a configuration at some point to let the player decide how this is handled.
        // e.g: should Char comment if the door was locked? Don't waste player's resources, let them decide.
      }
      // Godel? handle.
      // handleGodel();
      // ...Go!
    }
  }

  private handleTALK(state: State) {
    const talkable = this.target as NPC;
    if(state.talkables.includes(talkable)) {
        const GR = new GameResponse();
    }
  }

  execute(state: State) {
    switch (this.type) {
      case "GO":
        this.handleGO(state);
        break;
      case "TALK":
        this.handleTALK(state);
        break;
      case "INSPECT":
        //
        break;
      case "USE":
        //
        break;
      case "DO":
        //
        break;
      default:
      //
    }
  }
}
