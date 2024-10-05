import { NPC } from "../../classes/Entities/NPC";

export const $char = new NPC("char", "char's name from ST", "char is... something.", () => { console.log("you talked to char."); return null });
