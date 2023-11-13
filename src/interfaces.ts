// interface to enforce a certain structure for a class/object
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
};

const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount: number): number {
    console.log(`I spent ${ amount }`)
    return amount;
  }
};

const greetPerson = (person: IsPerson) => { // can only pass in object that matches the interface
  console.log('hello ', person.name)
};

greetPerson(me) // passed in the proper formatted interface