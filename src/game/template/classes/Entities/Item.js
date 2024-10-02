import { Usable } from '../Ables/Usable.js';

export class Item extends Usable {
    constructor(name, description, effect, on_use, kangaeru_comment, count=0) {
        super(name, description, effect, on_use);
        this.kangaeru_comment = kangaeru_comment;
        this.count = count;
        }
}