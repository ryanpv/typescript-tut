// once initialized, type cannot be changed
let character = 'mario'
let age = 30;
let isBlackBelt = false;

// Type check for cleaner code & less errors in browser (catch error before compilation)
const circ = (diameter: number) => {
  return diameter * 5
};

console.log(circ(10));