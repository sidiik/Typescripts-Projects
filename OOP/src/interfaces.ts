interface Person {
  readonly name: string;
  age: number;
  greet(phrase: string): void;
}

class PersonTwo implements Person {
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let personOne: Person = {
  name: 'sidiq',
  age: 19,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

const person = new PersonTwo('sidiq', 19);

person.greet('Hi there i am');
