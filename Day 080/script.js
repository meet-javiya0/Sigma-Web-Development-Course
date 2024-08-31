class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object was created!!");
    }
    eats() {
        console.log("Kha raha hun");
    }
    jumps() {
        console.log("Kood raha hun");
    }
}
let a = new Animal("Bunny");
console.log(a);

class Lion extends Animal {
    constructor(name) {
        super();
        this.name = name;
        console.log("I am lios's constructor");
    }
    eats() {
        console.log("Lion kha raha he");
    }
    jumps() {
        console.log("Lion kood raha he");
    }
}
let l = new Lion("King");
console.log(l);

class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}
let u = new User("Jenish");
console.log(u.name);
let e = new User("");

console.log(l instanceof Lion);
console.log(l instanceof Animal);
console.log(a instanceof Lion);