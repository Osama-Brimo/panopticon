import { NPC } from "../../classes/Entities/NPC";

export const NPC_Kangaeru = new NPC("kangaeru", "Kangaeru", "The showrunner", () => {
  console.log("...you spoke to Kangaeru.");
  return null;
});
