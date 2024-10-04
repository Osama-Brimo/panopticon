// High level representation of any ST message relative to the game
// Message can be any actual piece of the VN: a dialogue, an inspection result, an action scene, the outcome of using an item etc.
// All text in the game is contained in some sub-set of Message.
// text: Some piece of text provided as input. We might do various things with it: output it verbatim, give it as part of a prompt injection, or create a caged response, etc.
// strategy: [script, assistant, caged]
// Script: Verbatim. A piece of the games script shown to the user with no generation involved.
// Assistant: Generate a response based on x
// Caged: Given X, generate a variation or adehere to some goal in a generated response (e.g: "The key is old": char specifically talks about this, generate a summary, evaluate a puzzle). Similar to assistant, but with a specific output in mind.
// Hidden: Whether to hide from AI and consider part of chat history. default false.
// Role: ST role: assistant, user, system
// Instruction: A piece of text used for some ai instruction

// GameRequest ... [game logic] > State > Brain ... Message ... GameResponse

export enum MessageStrategy {
  script = "script",
  assistant = "assistant",
  cage = "cage",
}

export enum Role {
  user = "user",
  assistant = "assistant",
  system = "system",
}

export class Message {
  text: string;
  strategy: MessageStrategy;
  hidden: boolean;
  role: Role;
  instruction?: string;
  constructor(
    text: string,
    strategy = MessageStrategy.script,
    hidden = false,
    role = Role.system,
    instruction?: string,
  ) {
    this.text = text;
    this.strategy = strategy;
    this.hidden = hidden;
    this.role = role;
    this.instruction = instruction;
  }
}
