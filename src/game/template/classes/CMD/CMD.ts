import { sendNarratorMessage } from "@sillytavern/slash-commands";
import { Able, Goable } from "../../interfaces/Ables";
import { Area } from "../Entities/Area";
import { NPC } from "../Entities/NPC";
import { Message, MessageStrategy, Role } from "../Game/Message";
import { State } from "../Game/State";
import { GameResponse } from "../ST/GameResponse";

export enum CMDTypes {
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

  private async handleGO(state: State) {
    // valid target?
    const area = this.target as Area;
    if (state.goables.includes(area)) {
      // Can you go?
      // Locked? refuse.
      if (area.is_locked) {
        const GR = new GameResponse();
        // TODO: shorthand func sendNarrator(...);
        await sendNarratorMessage(null, "hello.");
        const refusal = new Message(
          "Locked...",
          MessageStrategy.script,
          false,
          Role.system,
        );
        GR.sendMessage(refusal);
        // Follow ups. Char comments, or use key prompt, or.. etc.
        // TODO: consider if we don't want a configuration at some point to let the player decide how this is handled.
        // e.g: should Char comment if the door was locked? Don't waste player's resources, let them decide.
      }
      // Godel? handle.
      // handleGodel();

      // ...Go!
      // We need to update current area in state + new goables.
      // consider case where we have a hidden door only in goables after inspection/puzzle. Still needs to be in goables, but must be conditional. Every Area should have a way to know if it should show up at the moment. Flag check?
    }
  }

  // private async handleTALK(state: State) {
  //   const talkable = this.target as NPC;
  //   if(state.talkables.includes(talkable)) {
  //       const GR = new GameResponse();
  //   }
  // }

  public async execute(state: State) {
    switch (this.type) {
      case CMDTypes.GO:
        await this.handleGO(state);
        break;
      case CMDTypes.TALK:
        // await this.handleTALK(state);
        break;
      case CMDTypes.INSPECT:
        //
        break;
      case CMDTypes.USE:
        //
        break;
      case CMDTypes.DO:
        //
        break;
      default:
      //
    }
  }
}
