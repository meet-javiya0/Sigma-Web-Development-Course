console.log("I am learning JavaScript");

let age = 4;
let grace = 2;

if (age >= 18) {
    console.log("You can drive!");
} else {
    console.log("You can not drive!");
}

// Arithmetic operators:
console.log("Addition:", age + grace);
console.log("Subtraction:", age - grace);
console.log("Multiplication:", age * grace);
console.log("Division:", age / grace);
console.log("Modulo:", age % grace);
console.log("Exponentiation:", age ** grace);
// post  increment or decrement
console.log("Increment:", age++);
console.log("Decrement:", age--);
// pre increment or decrement
console.log("Increment:", ++age);
console.log("Decrement:", --age);

// Assignment operators:
console.log("Equal to:", age = grace);
console.log("Plus equal to:", age += grace);
console.log("Minus equal to:", age -= grace);
console.log("Multiply equal to:", age *= grace);
console.log("Divide equal to:", age /= grace);
console.log("Modulo equal to:", age %= 3);
console.log("Exponential equal to:", age **= grace);

age = 4;
grace = 2;

// Comparison operator:
console.log("Double equal to:", age == grace);
console.log("Not equal to:", age != grace);
console.log("Triple equal to:", age === grace);
console.log("Not double equal to:", age !== grace);
console.log("Greater than:", age > grace);
console.log("Less than:", age < grace);
console.log("Greater than or equal to:", age >= grace);
console.log("Less than or equal to:", age <= grace);
console.log("Ternary:", (age == grace) ? grace : false);

// logical operator:
console.log("Logical and:", age && grace);
console.log("Logical or:", age || grace);
console.log("Logical not:", !age);