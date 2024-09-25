/*
let obj = {
    a: 1,
    b: "Karan"
};

console.log(obj)
// {a: 1, b: 'Karan'}
    // a:1
    // b:"Karan"
    // [[Prototype]] : Object

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;   // sets rabbit.[[Prototype]] = animal

// rabbit
// { jumps: true }
// jumps : true
// [[Prototype]] : Object
// eats : true
// [[Prototype]] : Object
// rabbit.eats
// true
*/


class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created...")
    }

    eats() {
        console.log("Kha raha hoon")
    }

    jumps(){
        console.log("Kood raha hoon")
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)  // parent constructor should be initialized before child constructor
        console.log("Object is created and he is a lion...")
    }

    eats() {
        super.eats()
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera");
console.log(l);



//l instanceof Animal
// true
// a instanceof Animal
// true