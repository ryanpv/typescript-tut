"use strict";
// let greet: Function;
// function signature describes general structure of a function, what arguments it takes in, and what data it returns
// () => void // this signature says function takes no arguments and returns "void" aka undefined
// example 1
let greet; // this signature says the function structure will end up like this 
greet = (name, greeting) => {
    // output not returning anything, therefore "void" type return
    // typescript will infer that it returns "void" because nothing is returned
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
// will only return error if return value is not of type "number"
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
