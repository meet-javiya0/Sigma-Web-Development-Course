console.log("Meet is a hacker");
console.log("Jenish is a hecker");

setTimeout(() => {
    console.log("I'm inside timeout");
}, 0);

console.log("The end");

// Callback:
const callback = (arg) => {
    console.log(arg);
};
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Script loaded!");
    document.head.append(sc);
};

loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
    callback
);

// To many callbacks causes callback hell(Pyramid of doom) and to solve this we can use promise/async-await

// Promise:
let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rand = Math.random();
        if (rand < 0.5) {
            reject("The random number is not supporting you!");
        }
        console.log("Yes I am done");
        resolve("Meet");
    }, 2500);
});

prom1
    .then((a) => {
        console.log(a);
    })
    .catch((a) => {
        console.error(a);
    });

let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rand = Math.random();
        if (rand < 0.5) {
            reject("The random number is not supporting you 2!");
        }
        console.log("Yes I am done 2");
        resolve("Meet 2");
    }, 500);
});

prom2
    .then((a) => {
        console.log(a);
    })
    .catch((a) => {
        console.error(a);
    });

// Promise concurrency:
let prom3 = Promise.all([prom1, prom2]);
prom3
    .then((a) => {
        console.log(a);
    })
    .catch((a) => {
        console.error(a);
    });

// like this we have .allSettled(), .any(), .race() etc.