"use strict";
// // explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// isLoggedIn = true;
// // arrays
// // usually best to initialize with a value such as empty arr to be able to use arr methods
// // "string[]" only tells us that in the future it should be an arr of strings
// let ninjas: string[] = [];
// // union types - declaring mixed types
// let mixed: (string|number)[] = [];
// mixed.push("hello")
// mixed.push(30);;
// // mixed.push(true) Error because no boolean inferred
// let uid: string|number;
// uid = 123;
// uid = "stringId";
// // objects
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 30 };
// // ninjaOne = [] // allowed because arr is type of obj
// let ninjaTwo: {
//   name: string,
//   age: number,
//   beltColor: string
// };
// ninjaTwo = {
//   name: 'mario',
//   age: 20,
//   beltColor: "black",
//   // skills: 'back flip'
// }
