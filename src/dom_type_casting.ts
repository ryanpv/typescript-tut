// const anchor = document.querySelector('a');
// if we are ABSOLUTELY certain that whatever is passed in querySelector exists, we can add "!" to avoid error
// const anchor = document.querySelector('a')!;

// if (anchor) {
//   console.log("anchor", anchor.href)
// };

// const form = document.querySelector('form')!;

// if multiple forms, can use class instead
// type casting necessary because class/id can be attached to any element
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log("HTML FORM: ", form.children);

// inputs using #id
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber // "valueAsNumber" to tell typescript you want a number instead of string
  )
});