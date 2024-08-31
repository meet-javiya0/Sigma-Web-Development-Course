async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    });
}

// immediately invoked function expression (IIFE)
(async function main() {
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})();

let x,
    y = [1, 2, 5, 5, 6];
console.log(x, y);

// Array de-structuring
let [m, n] = [5, 6, 7, 8, 9, 1, 3]; // This will only takes first values from array
console.log(m, n);

// ... is spread operator
let [p, q, ...rest] = [5, 6, 7, 8, 9, 1, 3];
console.log(p, q, rest);

let obj = {
    a: 1,
    b: 2,
    c: 3,
};
let { a, b } = obj;
console.log(a, b);

let { c, ...d } = obj;
console.log(c, d);

function sum(a, b, c) {
    return a + b + c;
}
let arr = [2, 7, 9];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr));

// to map index of item with the item of array
const obj2 = { ...arr };
console.log(obj2);

const a1 = "the",
    b1 = "no";
const c1 = { a1, b1 };
console.log(c1);

// hoisting:
console.log(a2);
var a2 = 5; // Gloabl scope compiler initialize this at the top of it's scope
console.log(b2);
let b2 = 6; // Local scope it throws the error