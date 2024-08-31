let a = 5;

function factorialByReduce(number) {
    let arr = Array.from(Array(number + 1).keys()); // [0, 1, 2, 3, 4, 5] we can also create array like this
    return arr.slice(1).reduce((a, b) => a * b); // 1 is the initial value of a and b is the current value of array
}

function factorialByFor(number) {
    let fact = 1;
    for (let index = 1; index <= number; index++) {
        fact = fact * index;
    }
    return fact;
}
console.log(factorialByReduce(a));
console.log(factorialByFor(a));