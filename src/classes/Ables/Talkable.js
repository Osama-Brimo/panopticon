import { Assistant } from "../ST/Assistant.js";

export class Talkable extends Assistant {
    constructor(name, description, on_talk) {
        super(model);
        this.name = name;
        this.description = description;
        this.on_talk = on_talk;
    }
}