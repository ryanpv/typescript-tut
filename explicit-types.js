// explicit types
var character;
var age;
var isLoggedIn;
isLoggedIn = true;
// arrays
// usually best to initialize with a value such as empty arr to be able to use arr methods
// "string[]" only tells us that in the future it should be an arr of strings
var ninjas = [];
// union types - declaring mixed types
var mixed = [];
mixed.push("hello");
mixed.push(30);
;
// mixed.push(true) Error because no boolean inferred
var uid;
uid = 123;
uid = "stringId";
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = [] // allowed because arr is type of obj
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: "black",
    // skills: 'back flip'
};
