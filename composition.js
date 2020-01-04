// Composition, what something can DO rather than what is IS
// cleaner code than using Inheritance with endless classes
// learned from https://www.youtube.com/watch?v=nnwD5Lwwqdo

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

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`)
  };
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`)
  };
}

function attackerAndWalker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`)
  };
}

// notice we tell it what "name" is here
function swimmingMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster)
  };
}

function flyingSwimmingMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
    ...flyer(monster)
  };
}

const obj = swimmer({ name: "Karken" });
obj.swim();

// we don't need to do "name: 'Nessy'"
// since we defined name : name in the function
const obj2 = swimmingMonsterCreator("Nessy");
obj2.swim();
obj2.attack();

const obj3 = flyingSwimmingMonsterCreator("Cthulhu");
obj3.swim();
obj3.fly();
obj3.attack();
obj3.walk();
