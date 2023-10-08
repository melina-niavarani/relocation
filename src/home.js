import { increase } from "./counter.js";

console.log('hello world')
setTimeout(() => {
    console.log('executed')
}, 5000);


document.querySelector("button").addEventListener('click', increase)
const a = document.querySelector("a")
console.log(a.textContent)
