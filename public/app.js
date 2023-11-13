import { Invoice } from './classes/invoice.js';
// classes
// class Invoice {
//   // properties: types;
//   // readonly client: string; // readable, but cant be modified
//   // private details: string; // "private access modifier", wont be able to access it from outside from the class
//   // amount: number; 
//   // cleaner way to assign properties and types, but MUST have modifiers
//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number
//   ) {}
//   // method
//   format() {
//     return `${ this.client } owes $${ this.amount } for ${ this.details }.`
//   };
// };
// instantiate the class
const invOne = new Invoice('Mario', 'Worked on mario game', 250);
const invTwo = new Invoice('Luigi', 'Worked on Luigi game', 300);
console.log("MARIO: ", invOne);
console.log("Luigi: ", invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
