import Person from "./06_class(Exporting).js";

const harish = new Person("Harish S", 27);
harish.work("Amazon");
harish.gang("Alpha", "Beta");

// The Static methods are not dependent on the Newly created object but the class itself.

console.log(Person.add(2, 5));

// Prototype
console.log(harish.status(true));

// We can still extend this Person Class even more using the "extends" keyword.

class son extends Person {
  constructor(name, age, father, mother) {
    super(name, age);
    this.father = father;
    this.mother = mother;
  }
  aboutParents = (years) => {
    return `My father name is ${this.father} and my mother name is ${this.mother}. They have been married for ${years} years for now.`;
  };
}

const bruce = new son("Bruce Wayne", 18, "Wayne", "Martha");
bruce.work("Bruce Enterprise");
bruce.gang("Superman", "WW");

console.log(son.add(3, 6));

console.log(bruce.aboutParents(25));
