console.log("Hello!");

// variables:

// var
var a = 5;
//let
let g = 5;

var b = 6;
var c = "Meet";
var _d = "Jenish";
var $e = 7;
// var 1a = 8; not allowed

// const
const f = 11;
// f = f + 1; not allowed

console.log(a);
console.log(g);

{
    // var is global scoped
    var a = 66;
    console.log(a);
    
    // let is block scoped
    let g = 10;
    console.log(g);
}

console.log(a);
console.log(g);

console.log("a + b =", a + b);
console.log(a , b, c);
console.log(typeof a , typeof b, typeof c);

// data types:

let h = null;
let i = 3;
let j = 33.5;
let k = "Meet";
let l = Symbol('$');
let m = undefined;
let n = true;
let o = 12345678901234567890n;

console.log(h, i, j, k, l, m, n, o);
console.log(typeof h, typeof i, typeof j, typeof k, typeof l, typeof m, typeof n, typeof o);

// object:

let p = {
    name: "Meet",
    "job code": 123,
    is_rich: true
};

console.log(p);
p.salary = "100 crore";
console.log(p);
p.salary = "500 crore";
console.log(p);