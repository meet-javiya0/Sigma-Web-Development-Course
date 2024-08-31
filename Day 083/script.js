// 1. The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
function magicalSortingHat(names) {
    let ans = [];
    for (const n of names) {
        if (n.length < 6) {
            ans.push("Gryffindor");
        } else if (n.length < 8) {
            ans.push("Hufflepuff");
        } else if (n.length < 12) {
            ans.push("Ravenclaw");
        } else if (n.length >= 12) {
            ans.push("Slytherin");
        }
    }
    return ans;
}
let names = [
    "Jenish",
    "Meet",
    "Sanjay",
    "Devrajsinh",
    "Rutvik",
    "Vinit",
    "Vikramaditya",
    "Shailendraparsad",
];
console.log(magicalSortingHat(names));


// 2. The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
function doubleTrouble(a) {
    let obj = {};
    a.forEach((e, index) => {
        if (!obj.hasOwnProperty(e)) {
            a[index] *= 2;
            obj[e] = e;
        }
        index++;
    });
}
let a = [1, 4, 5, 9, -6, 3, 1, 4, 7, -5, 2, 8, 3, 6];
console.log(a);


// 3. The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
let str = "My name is Meet Javiya";
let newStr = str + " " + str.split("").reverse().join("");
console.log(newStr);


// 4. The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
let pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
console.log(pattern.test("This@123"));
console.log(pattern.test("Like"));
console.log(pattern.test("melababu143"));
console.log(pattern.test("MEWITHYOU143"));
console.log(pattern.test("Iamwithyou"));


// 5. The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
function sumSelector(a) {
    let sum = 0;
    for (let e of a) {
        if (e >= 0) {
            sum += e;
        } else {
            return sum;
        }
    }
    return sum;
}
console.log(sumSelector(a));


// 6. The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
function countVowels(s) {
    return s.match(/[aeiou]/gi).length;
}
console.log(countVowels("This is string for counting the vowels"));
console.log(countVowels("It's not a vowel. This is vowel. Yaay!"));


// 7. The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.
let noteDiv = document.querySelector(".note").innerHTML;
noteDiv = localStorage.getItem("note");
document.querySelector(".btnAddNote").addEventListener("click", () => {
    let note = prompt("Add your note here:");
    noteDiv += `${note}<br>`;
    localStorage.setItem("note", noteDiv);
});


// 8. Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
async function updateArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        arr[i] *= 2;
        console.log(arr);
    }
    return arr;
}
let array = [1, 2, 3];
console.log(array);
updateArray(array).then((result) => {
    console.log("Array: ", array);
    console.log("Result: ", result);
});


// 9. The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
async function placeOrder() {
    return new Promise((resolve, reject) => {
        console.log("Placing your order...");
        setTimeout(() => {
            resolve("Ordred successful!");
        }, 2000 + Math.random() * 3000);
    });
}
placeOrder()
    .then((result) => {
        console.log(result);
    })
    .catch((e) => {
        console.log(e);
    });


// 10. The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
async function brewCoffee(typeOfCoffee) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(typeOfCoffee);
        }, Math.random() * 7000);
    });
}
brewCoffee("Cappuccino")
    .then((result) => {
        console.log(result, "is ready!");
    })
    .catch((e) => {
        console.log(e);
    });


// 11. The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
function filterProducts(products, filters) {
    return products.filter((product) => {
        for (let key in filters) {
            if (key === "minPrice" && product.price < filters.minPrice) {
                return false;
            }
            if (key === "maxPrice" && product.price > filters.maxPrice) {
                return false;
            }
            if (
                key !== "minPrice" &&
                key !== "maxPrice" &&
                product[key] !== filters[key]
            ) {
                return false;
            }
        }
        return true;
    });
}
const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "T-shirt", price: 20, category: "Clothing" },
    { name: "Book", price: 15, category: "Books" },
    { name: "Smartphone", price: 500, category: "Electronics" },
];
console.log(
    filterProducts(products, { category: "Electronics", minPrice: 400 })
);
console.log(filterProducts(products, { maxPrice: 50, category: "Clothing" }));
console.log(filterProducts(products, { maxPrice: 600 }));


// 12. The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.
function setItemWithExpiry(key, value, expiryTime) {
    const now = new Date().getTime();
    const item = {
        value: value,
        expiry: now + expiryTime,
    };
    localStorage.setItem(key, JSON.stringify(item));
}
function getItemWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date().getTime();
    if (now > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}
function setAuthToken(token) {
    setItemWithExpiry(token, token, 1000 * 5);
    // checking token after it's expiry
    setTimeout(() => {
        if (getItemWithExpiry(token) == token) {
            console.log("Authentication successful");
        } else {
            console.log("Authentication failed!");
        }
    }, 9000);
}
setAuthToken("ahevfd");


// 13. The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.
function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}
const shoppingCart = [
    { name: "Laptop", price: 999.99, quantity: 1 },
    { name: "Mouse", price: 29.99, quantity: 2 },
    { name: "Keyboard", price: 79.99, quantity: 1 },
    { name: "HDMI Cable", price: 19.99, quantity: 3 },
];
const total = calculateTotal(shoppingCart);
console.log(`Total cost: $${total.toFixed(2)}`);


// 14. The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.
function smoothScrollToElement(element, speed = 8) {
    const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, 600);
        window.scrollTo(0, run);
        if (timeElapsed < 600) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}
// won't work here because there not much content on the screen right now
// smoothScrollToElement(document.getElementById("target-element"));