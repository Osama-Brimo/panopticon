export class Inspectable {
    constructor(name, description, on_inspect) {
        this.name = name;
        this.description = description;
        this.on_inspect = on_inspect;
    }
}
