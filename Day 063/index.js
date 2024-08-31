console.log("Array in JavaScript");

let arr = [1, 2, 4, 5, 7];
console.log(arr);

// Length of an array
console.log(arr.length);

// typeof an array
console.log(typeof arr);

// Accessing the elements of an array
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[5]); // undefined

// Modifying the elements of an array
arr[0] = 10;
console.log(arr);

// Adding elements to the end of an array
arr.push(6);
console.log(arr);
arr.push(3, 1); // Adding multiple elements
console.log(arr);
arr.push("Hello"); // Adding elements of different types
console.log(arr);

// Removing elements from end of an array
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

// Adding elements to the beginning of an array
arr.unshift(0);
console.log(arr);
arr.unshift(-1, -2); // Adding multiple elements
console.log(arr);
arr.unshift("World"); // Adding elements of different types
console.log(arr);

// Removing elements from the beginning of an array
arr.shift();
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

// Iterating over an array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// deleting elements from an array
delete arr[0];
console.log(arr);

// Array methods
let arr2 = [7, 8, 9];
console.log(arr.concat(arr2));
console.log(arr.join(", "));
console.log(arr.slice(1, 3));
console.log(arr.indexOf(10));
console.log(arr.includes(3));
console.log(arr.reverse());
console.log(arr.sort()); // Sorts the array in lexicographical order
console.log(arr.map((x) => x * 2));
console.log(arr.filter((x) => x % 2 === 0));
console.log(arr.reduce((acc, x) => acc + x, 0));
console.log(arr.every((x) => x > 0));
console.log(arr.some((x) => x < 0));
console.log(arr.find((x) => x > 2)); // Returns the first element that satisfies the condition
console.log(arr.findIndex((x) => x > 2)); // Returns the index of the first element that satisfies the condition
console.log(arr.fill(0)); // Fills the array with the given value
console.log(arr.splice(1, 2)); // Removes elements from the array and returns them
console.log(arr.splice(1, 0, 2, 3, 4)); // Adds elements to the array at the specified index
console.log(arr.toString());

// loops:
arr = [1, 2, 3, 4, 5];

// for loop
console.log("for loop");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for-in loop
console.log("for-in loop");
let obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

// for-of loop
console.log("for-of loop");
for (let x of arr) {
    console.log(x);
}

// forEach loop
console.log("forEach loop");
arr.forEach((value, index, array) => {
    console.log(value, index, array);
});

// while loop
console.log("while loop");
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// do-while loop
console.log("do-while loop");
i = 0;
do {
    console.log(arr[i]);
    i++;
} while (i < arr.length);

// map method in array
console.log("map method in array");
let arr3 = arr.map((x) => x * 2);
console.log(arr3);

// filter method in array
console.log("filter method in array");
let arr4 = arr.filter((x) => x % 2 === 0);
console.log(arr4);

// reduce method in array
console.log("reduce method in array");
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum);

// every method in array
console.log("every method in array");
let isPositive = arr.every((x) => x > 0);
console.log(isPositive);

// some method in array
console.log("some method in array");
let isNegative = arr.some((x) => x < 0);
console.log(isNegative);

// find method in array
console.log("find method in array");
let found = arr.find((x) => x > 2);
console.log(found);

// findIndex method in array
console.log("findIndex method in array");
let foundIndex = arr.findIndex((x) => x > 2);
console.log(foundIndex);

// fill method in array
console.log("fill method in array");
let arr5 = arr.fill(0);
console.log(arr5);

// array destructuring
console.log("array destructuring");
let [a, b, c] = arr;
console.log(a, b, c);

// spread operator
console.log("spread operator");
let arr6 = [0, ...arr, 6];
console.log(arr6);

// rest operator
console.log("rest operator");
let [d, ...rest] = arr;
console.log(d, rest);

// Array.from method
console.log("Array.from method");
let arr7 = Array.from("Hello");
console.log(arr7);