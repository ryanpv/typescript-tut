"use strict";
// // once initialized, type cannot be changed
// let character = 'mario'
// let age = 30;
// let isBlackBelt = false;
// // Type check for cleaner code & less errors in browser (catch error before compilation)
// const circ = (diameter: number) => {
//   return diameter * 5
// };
// console.log(circ(10));
// // Types in declared array cannot be changed
// // Even with 'let' statements, the value must match data types if we are redeclaring the variable
// let names = ['luigi', 'mario', 'yoshi']; // only strings
// names.push('toad');
// // names.push(3) Error will show
// let mixed = ['ken', 4, 'chun-li', 8, 9]; // mixed, but only strings and numbers
// mixed.push("goku")
// mixed.push(100000)
// // mixed.push({ "obj": "objVal" }) Error 
// // Once we declare an object, we cannot add new properties to it, but can redeclare with new values
// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 30
// }
// // ninja.newProperty = "new propertyVal"  Error will show
