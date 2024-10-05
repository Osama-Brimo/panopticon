import { Usable } from "../../interfaces/Ables";

export class Item implements Usable {
    id: string;
    name: string;
    description: string;
    effect: string;
    on_use: () => null;
    item_comment: string;
    count: number;

    constructor(id: string, name: string, description: string, effect: string, on_use: () => null, item_comment: string, count: number = 0) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.effect = effect;
        this.on_use = on_use;
        this.item_comment = item_comment;
        this.count = count;
    }
}
