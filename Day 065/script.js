let num = prompt("Enter a number");

// create an array of numbers from 1 to num
let arr = [];
for (let i = 1; i <= num; i++) {
    arr[i - 1] = i;
}

// by reduce method
let factByReduce = arr.reduce(
    (currentNumber, result) => currentNumber * result,
    1
); // 1 is the initial value of result
console.log(`Factorial of ${num} is ${factByReduce} by reduce method`);

// by loop
let factByLoop = 1;
for (let i = 1; i <= num; i++) {
    factByLoop *= i;
}
console.log(`Factorial of ${num} is ${factByLoop} by loop`);