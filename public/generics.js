"use strict";
// Generics
// <T> can be anything. captures whatever item is passed in to the function
// extends keyword can specify the type to avoid random/unwanted value types
// can also type out the specific structure (ie. <T extends { name: string })
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 58 });
// let docTwo = addUID('hello')
console.log(docOne.age);
;
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'ryan' }
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
};
console.log(docThree, docFour);
