console.log("Loops");

// normal log
let a = 1;
console.log(a);
console.log(a + 1);
console.log(a + 2);

// for loop:
for (let i = 0; i < 10; i++) {
    console.log(a + i);
}

let obj = {
    name: "Meet",
    role: "Programmer",
    company: "My AI"
}

// for in loop:
for (const key in obj) {  
    console.log(key)
}

// for of loop:
for (const c of "Meet") {
    console.log(c)
}

let i = 0;
// while loop:
while (i < 15) {
    console.log(i)
    i++;
}

i = 10;
// do while loop:
do {
    console.log(i)
    i++;
} while (i < 6);