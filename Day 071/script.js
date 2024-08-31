let box = document.querySelector(".box");
console.log(box.innerHTML);
console.log(box.outerHTML);
console.log(box.innerText);
console.log(box.textContent);

console.log(box.tagName); // it can be applicable to any element only
console.log(box.nodeName); // it can be applicable to any node

console.log(box.hidden);
box.hidden = true;
console.log(box.hidden);

box.innerHTML = "<h1>Hello!</h1>";


// Attribute methods:
console.log(box.hasAttribute("style"));
console.log(box.getAttribute("style"));
box.setAttribute("style", "display: inline;");
// console.log(box.getAttribute("style"));
console.log(box.attributes);
box.removeAttribute("style");
// console.log(box.hasAttribute("style"));

// document.designMode = "on";


// Data attributes:
console.log(box.dataset);


// Insertion methods:
let container = document.querySelector(".container");
let div = document.createElement("div");

div.setAttribute("class", "created");
div.innerText = "This is a created div element.";
// container.appendChild(div); // it adds the element at the end of the container
// container.prepend(div); // it adds the element at the beginning of the container
// container.before(div); // it adds the element before the container
// container.after(div); // it adds the element after the container
// container.replaceWith(div); // it replaces the container with the element


// insertAdjacentHTML, insertAdjacentElement, insertAdjacentText:
container.insertAdjacentHTML("beforebegin", "<div>beforebegin</div>");
container.insertAdjacentHTML("afterbegin", "<div>afterbegin</div>");
container.insertAdjacentHTML("beforeend", "<div>beforeend</div>");
container.insertAdjacentHTML("afterend", "<div>afterend</div>");

container.insertAdjacentElement("beforebegin", div);
container.insertAdjacentElement("afterbegin", div);
container.insertAdjacentElement("beforeend", div);
container.insertAdjacentElement("afterend", div);

container.insertAdjacentText("beforebegin", "beforebeginText");
container.insertAdjacentText("afterbegin", "afterbeginText");
container.insertAdjacentText("beforeend", "beforeendText");
container.insertAdjacentText("afterend", "afterend");


// Node removal methods:
div.remove();


// className and classList:
console.log("className and classList:");
console.log(container.classList);
console.log(container.className);
container.classList.add("new");
container.classList.toggle("new");
container.classList.toggle("new");
container.classList.remove("red");
console.log(container.classList.contains("container"));