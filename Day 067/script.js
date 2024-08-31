console.log(document.body.childNodes); // it will return all the child nodes
console.log(document.body.childNodes[0]); // it will return the first child node
console.log(document.body.childNodes[1].childNodes); // it will return all the child nodes of the second child node

let container = document.body.childNodes[1]; // it will return the second child node
console.log(container.firstChild); // it will return the first child node
console.log(container.lastChild); // it will return the last child node
console.log(container.firstElementChild); // it will return the first element
console.log(container.lastElementChild); // it will return the last element
console.log((container.lastElementChild.style.color = "red")); // it will change the color of the last element to red
console.log(container.lastElementChild.parentElement); // it will return the parent element

console.log(document.body.firstElementChild); // it will return the first child element
console.log(document.body.firstElementChild.childNodes); // it will return all the nodes
console.log(document.body.firstElementChild.children); // it will return only the elements

let temp = document.body.firstElementChild.children[3]; // it will return the fourth element (box4)
console.log(temp.nextElementSibling); // it will return the next element (box5)
console.log(temp.previousElementSibling); // it will return the previous element (box3)
console.log(temp.nextSibling); // it will return the next node
console.log(temp.previousSibling); // it will return the previous node

// table has some special properties:
let table = document.body.children[1];
console.log(table.rows); // it will return all the rows
console.log(table.caption); // it will return the caption
console.log(table.tHead); // it will return the head
console.log(table.tBodies); // it will return the body
console.log(table.tFooter); // it will return the footer
// console.log(tBodies.rows); // it will return all the rows of the body

let tr = table.rows[0];
console.log(tr.cells); // it will return all the cells
console.log(tr.sectionRowIndex); // it will return the index of the row
console.log(tr.rowIndex); // it will return the index of the row
console.log(tr.cells[0].cellIndex); // it will return the index of the cell