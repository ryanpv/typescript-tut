// TUPLES - a bit like arrays and can use array methods, BUT
// Once intialized, the type of each item is fixed at that location

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi']

// once a position has been defined with their type, it cannot be changed
let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = 25
tup[0] = 'ken'

let student: [string, number];
student = ['chun-li', 43262];

// cannot use spread operators, but can define the tuple in another variable and use that variable for the spread operator
// example:

let values: [string, string, number];
values = ['string1', 'string2', 12345]

const spreadVals = [...values]