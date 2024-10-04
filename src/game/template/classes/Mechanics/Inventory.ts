import { Item } from "../Entities/Item";

export class Inventory {
    items: Item[];
    size: number;
    constructor(items: Item[], size: number) {
        this.items = items;
        this.size = size;
    }
}
