"use strict";
// Classes
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character("kuririn", 10, 98);
/**
 * Data modifiers
 * public
 * private
 * protected
 */
class Character2 {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
// Character: superclass: PAI ⬇️
// Magician: subclass: FILHO ⬆️
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p3 = new Magician("Mago Negro", 90, 100, 150);
console.log(p3);
