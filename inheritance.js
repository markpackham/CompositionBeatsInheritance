// With Inheritance you describe what an object is rather than what it can do
// This will be a big problem if we get a Monster than CAN both FLY & SWIM
// then our only options would be to add fly() & swim() as empty methods in
// the Monster class then override them in the subclasses

class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attacked`);
  }

  walk() {
    console.log(`${this.name} walked`);
  }
}

class FlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} flew`);
  }
}

class SwimmingMonster extends Monster {
  swim() {
    console.log(`${this.name} swam`);
  }
}

// you can only extend/inherit from 1 parent so can't have
// FlyingSwimmingMonster extends FlyingMonster AND SwimmingMonster

const bear = new Monster("bear");
bear.walk();
bear.attack();

const eagle = new FlyingMonster("eagle");
eagle.walk();
eagle.attack();
eagle.fly();

const shark = new SwimmingMonster("shark");
shark.swim();
shark.attack();
