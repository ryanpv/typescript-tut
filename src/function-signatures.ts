// let greet: Function;

// function signature describes general structure of a function, what arguments it takes in, and what data it returns

// () => void // this signature says function takes no arguments and returns "void" aka undefined
// example 1
let greet: (a: string, b: string) => void; // this signature says the function structure will end up like this 

greet = (name: string, greeting: string) => {
  // output not returning anything, therefore "void" type return
  // typescript will infer that it returns "void" because nothing is returned
  console.log(`${ name } says ${ greeting }`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;

// will only return error if return value is not of type "number"
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo
  } else {
    return numOne - numTwo
  }
};

// example 3
let logDetails: (obj: { name: string, age: number }) => void;

// type alias
type person = { name: string, age: number };

logDetails = (ninja: person) => {
  console.log(`${ ninja.name } is ${ ninja.age } years old`);
};