// Classes
class Character {
  name?: string;
  stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  attack(): void {
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
  protected name?: string;
  readonly stregth: number;
  private skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.stregth} points`);
  }
}

// Character: superclass: PAI ⬇️
// Magician: subclass: FILHO ⬆️

class Magician extends Character {
  magicPoints: number;
  constructor(
    name: string,
    stregth: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, stregth, skill);
    this.magicPoints = magicPoints;
  }
}

const p3 = new Magician("Mago Negro", 90, 100, 150);
console.log(p3);
