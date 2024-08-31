console.log(document.getElementById("redbox"));
console.log(document.getElementsByClassName("box"));
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByName("adityanath"));
console.log((document.querySelector(".box").style.backgroundColor = "yellow")); // Change the color of the first box to yellow

// console.log(document.querySelectorAll(".box").style.backgroundColor = "green");   // This will not work because querySelectorAll returns a NodeList and not a single element
document
    .querySelectorAll(".box")
    .forEach((e) => (e.style.backgroundColor = "green")); // Change the color of all the boxes to green

let container = document.querySelector(".container");

// matches() method checks if the element matches the given selector
console.log(container.matches(".container")); // true
console.log(container.matches(".box")); // false
console.log(container.matches("div")); // true
console.log(container.matches("body")); // false

// closest() method returns the closest ancestor of the current element (or the current element itself) which matches the specified selector
console.log(container.closest("body")); // <body>...</body>
console.log(container.closest(".container")); // <div class="container">...</div>
console.log(container.closest(".box")); // null

// contains() method checks if the element contains the specified element
console.log(container.contains(document.querySelector(".box"))); // true
console.log(container.contains(document.querySelector("body"))); // false
