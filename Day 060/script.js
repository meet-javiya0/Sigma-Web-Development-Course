console.log("Strings in JavaScript");

let str1 = "Hello";
let str2 = "World";
let str3 = "Hello";
let str4 = "hello";

console.log(str1 == str2); // false
console.log(str1 == str3); // true
console.log(str1 == str4); // false

console.log(str1[0]); // H
console.log(str1[1]); // e
console.log(str1[2]); // l
console.log(str1[3]); // l
console.log(str1[4]); // o
console.log(str1[5]); // undefined

console.log(str1.length); // 5

console.log(str1.toUpperCase()); // HELLO
console.log(str1.toLowerCase()); // hello
console.log(str1.concat(str2)); // HelloWorld
console.log(str1.concat(" ", str2)); // Hello World

console.log("First word is: " + str1 + " and second word is: " + str2); // First word is: Hello and second word is: World
// better way to write above line is using template literals
console.log(`First word is: ${str1} and second word is: ${str2}`); // First word is: Hello and second word is: World
// ` is called backtick and variable can be used inside ${} in backtick

// Escape Sequences Characters in JavaScript:
// console.log("Hello"Word"); // SyntaxError: Unexpected identifier

// \n - new line
// \t - tab
// \r - carriage return
// \\ - backslash
// \' - single quote
// \" - double quote
console.log("Hello\nWorld");
// Hello
// World
console.log("Hello this is somehitng to write brfore it\rWorld"); // World this is somehitng to write brfore it
console.log("Hello\tWorld"); // Hello   World
console.log("Hello\\World"); // Hello\World
console.log("Hello'World"); // Hello'World
console.log('Hello\'World'); // Hello'World
console.log('Hello"World'); // Hello"World
console.log("Hello\"World"); // Hello"World

// String Methods in JavaScript:
let str5 = "Hello World";
console.log(str5.charAt(0)); // H
console.log(str5.charAt(1)); // e

console.log(str5.charCodeAt(0)); // 72
console.log(str5.charCodeAt(1)); // 101

console.log(str5.indexOf("o")); // 4
console.log(str5.lastIndexOf("o")); // 7

console.log(str5.includes("o")); // true
console.log(str5.includes("O")); // false

console.log(str5.startsWith("Hello")); // true
console.log(str5.startsWith("World")); // false
console.log(str5.endsWith("World")); // true
console.log(str5.endsWith("Hello")); // false

console.log(str5.substring(1, 4)); // ell
console.log(str5.substring(4, 1)); // ell
// explaination of above line: substring() method returns the part of the string between the start and end indexes, or to the end of the string. If either argument is negative or is NaN, it is treated as if it were 0. If start is greater than end, then the effect of substring() is as if the two arguments were swapped. If start is negative, it is treated as 0, and if end is negative, it is treated as 0. So, in this case, 4 is greater than 1, so it will swap the arguments and return the same result as substring(1, 4)
console.log(str5.substring(1)); // ello World
console.log(str5.substring(1, -2)); // H
console.log(str5.substring(-2, 1)); // H

console.log(str5.slice(1, 4)); // ell
console.log(str5.slice(4, 1)); // empty string
// explaination of above line: slice() method extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: the starting index (position) and the ending index (position). The ending index is optional and if not specified, slice() extracts the rest of the string. If the starting index is negative, the position is counted from the end of the string. If the ending index is negative, the position is counted from the end of the string. If the ending index is greater than the starting index, slice() returns an empty string. If the starting index is greater than the string length, slice() returns an empty string. If the ending index is greater than the string length, slice() extracts to the end of the string.
console.log(str5.slice(1)); // ello World
console.log(str5.slice(1, -2)); // ello Worl
console.log(str5.slice(-2, 1)); // empty string

console.log(str5.replace("World", "Universe")); // Hello Universe

console.log(str5.split(" ")); // [ 'Hello', 'World' ]
console.log(str5.split("")); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

console.log(str5.trim()); // Hello World
console.log("  Hello World  ".trim()); // Hello World

console.log(str5.repeat(3)); // Hello WorldHello WorldHello World