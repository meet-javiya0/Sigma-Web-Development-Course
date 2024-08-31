// normally we use promises like this with variables:

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network etc.
    setTimeout(function () {
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed");
});

// without using any variable:
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is completed");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
});

// with some data:
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

// with error handling and chaining:
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

// async await:
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// fetch api with async await:
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// fetch api with promises:
fetch("https://api.github.com/users/meet-javiya0")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.

// we can handle both reject and resolve from the .then() method, .then() method takes two callback functions as parameters: one for the resolved case and one for the rejected case. The resolved callback function will be called if the promise is resolved, and the rejected callback function will be called if the promise is rejected. Example of how to handle both reject and resolve from the .then() method:

const promise = new Promise((resolve, reject) => {
    let rNum = Math.random();
    console.log(rNum);
    if (rNum < 0.5) {
        resolve("Success");
    } else {
        reject("Error");
    }
});

promise.then(
    (result) => {
        console.log("Resolved: " + result);
    },
    (error) => {
        console.log("Rejected: " + error);
    }
);