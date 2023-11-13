;
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me); // passed in the proper formatted interface
import { Invoice } from './classes/invoice.js'; // MUST IMPORT FROM JS FILE 
import { Payment } from './classes/payment.js';
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
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form");
console.log("HTML FORM: ", form.children);
// inputs using #id
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    // console.log(
    //   type.value,
    //   tofrom.value,
    //   details.value,
    //   amount.valueAsNumber // "valueAsNumber" to tell typescript you want a number instead of string
    // )
});
// Generics
// <T> can be anything. captures whatever item is passed in to the function
// extends keyword can specify the type to avoid random/unwanted value types
// can also type out the specific structure (ie. <T extends { name: string })
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 58 });
// let docTwo = addUID('hello')
console.log(docOne.age);
// with interfaces
// generics to help type flexibility to whatever isnt given a type
// using <T>, you must pass an argument, or error will shows
// interface Resource<T> { 
//   uid: number;
//   resourceName: string;
//   data: T;
// };
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: { name: 'ryan' }
// };
// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: 'shoppingList',
//   data: ['bread', 'milk', 'toilet roll']
// };
// console.log(docThree, docFour)
// ENUMS
// allows us to store a set of constants or keywords and associate them with a numeric value
// a constant represented by number 1
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docHunnid: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// };
// const docTwoHunnid: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.PERSON,
//   data: { name: 'yoshi' }
// };
