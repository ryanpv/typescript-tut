// classes
class Invoice {
  // properties: types;
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  };

  // method
  format() {
    return `${ this.client } owes $${ this.amount } for ${ this.details }.`
  };
};

// instantiate the class
const invOne = new Invoice('Mario', 'Worked on mario game', 250);
const invTwo = new Invoice('Luigi', 'Worked on Luigi game', 300);
console.log("MARIO: ", invOne);
console.log("Luigi: ", invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne)

console.log("UPDATED INVOICES: ", invoices)

// Since class is public, we can alter the property values, but must keep the typing
// can use access modifiers to limit this