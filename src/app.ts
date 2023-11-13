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
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log('docs: ', docs)

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

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log("HTML FORM: ", form.children);

// inputs using #id
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end');

  // console.log(
  //   type.value,
  //   tofrom.value,
  //   details.value,
  //   amount.valueAsNumber // "valueAsNumber" to tell typescript you want a number instead of string
  // )
});


