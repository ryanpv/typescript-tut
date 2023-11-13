// Generics
// <T> can be anything. captures whatever item is passed in to the function
// extends keyword can specify the type to avoid random/unwanted value types
// can also type out the specific structure (ie. <T extends { name: string })
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 58 });
// let docTwo = addUID('hello')

console.log(docOne.age);

// with interfaces
// generics to help type flexibility to whatever isnt given a type
// using <T>, you must pass an argument, or error will shows
interface Resource<T> { 
  uid: number;
  resourceName: string;
  data: T;
};

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'ryan' }
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk', 'toilet roll']
};

console.log(docThree, docFour)