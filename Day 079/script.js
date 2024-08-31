let a = prompt("Entrt first number:");
let b = prompt("Entrt second number:");
if (isNaN(a) || isNaN(b)) {
    // throw stops the execution of the script
    throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);

function main() {
    let m = 1;
    try {
        console.log("The sume is:", sum * m);
        return true;
    } catch (error) {
        console.log("In catch block", error);
        return false;
    }
    // this statement won't excute because the function is returning from both try and catch
    // we can use finally fot this
    console.log("Files and Database connection are being closed...");
}
let x = main();
console.log(x);