"use strict";
// const anchor = document.querySelector('a');
// if we are ABSOLUTELY certain that whatever is passed in querySelector exists, we can add "!" to avoid error
// const anchor = document.querySelector('a')!;
// if (anchor) {
//   console.log("anchor", anchor.href)
// };
// const form = document.querySelector('form')!;
// if multiple forms, can use class instead
// type casting necessary because class/id can be attached to any element
const form = document.querySelector(".new-item-form");
console.log("HTML FORM: ", form.children);
// inputs using #id
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // "valueAsNumber" to tell typescript you want a number instead of string
    );
});
