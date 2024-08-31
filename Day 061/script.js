let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    // Perform wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

// Be careful with the eval function. It can execute any code passed to it. It is recommended to use it only when you are sure about the input.

// Here if user passes in faulty calculator time so if they input operation like ** then it will throgh error because it has no mapped element in the object