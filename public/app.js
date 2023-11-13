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
export {};
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
