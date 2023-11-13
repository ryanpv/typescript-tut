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

import { Invoice } from './classes/invoice.js'; // MUST IMPORT FROM JS FILE 

// instantiate the class
// const invOne = new Invoice('Mario', 'Worked on mario game', 250);
// const invTwo = new Invoice('Luigi', 'Worked on Luigi game', 300);
// console.log("MARIO: ", invOne);
// console.log("Luigi: ", invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });