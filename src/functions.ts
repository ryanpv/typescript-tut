let greet: Function;

greet = () => {
  console.log("hello world")
};

const add = (a: number, b: number) => {
  console.log(a + b)
};

// must pass in ALL parameters, unless using "optional" parameter (ie. c?: number|string)
// can use default value instead of optional (ie. c: number|string = 10)
// required parameters should always be first and optional at the end to not get them mixed up/ avoid issues
add(5, 10);

const minus = (a: number, b: number) => {
  return a + b;
};

// "void" value means the function is not returning any value
// "undefined" in JS