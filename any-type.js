// declare variable as "any" type
var age = 25;
age = true;
console.log("age bool: ", age);
age = "hello";
console.log("age string: ", age);
// add any type to array
var mixed = [];
mixed.push(5);
mixed.push(false);
mixed.push("mario");
// add "any" type to obj property value
var ninja;
ninja = { name: 'yoshi', age: 100 };
console.log("ninja: ", ninja);
