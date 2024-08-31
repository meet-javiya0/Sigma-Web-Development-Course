/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/

let randomNumber = Math.random();
console.log(randomNumber);

let num1 = parseInt(prompt("Enter first number: "));
let operator = prompt("Enter operator: ");
let num2 = parseInt(prompt("Enter second number: "));

let result;

if (randomNumber < 0.1) {
    switch (operator) {
        case "+":
            result = num1 - num2;
            break;
        case "*":
            result = num1 + num2;
            break;
        case "-":
            result = num1 / num2;
            break;
        case "/":
            result = num1 ** num2;
            break;
        default:
            result = "Invalid operator";
    }
} else {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            result = "Invalid operator";
    }
}

console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);