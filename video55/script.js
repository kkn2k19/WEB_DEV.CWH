console.log("This is tutorial 55 of web dev course");

var a = 7;
// a = a+1;   // allowed
var b = 3;
var c = "Karan";
var _a = "Jitesh";
// Rules for choosing Variables names 
// -> Letters, digits, underscores and $ sign allowed.
// -> Must begin with a $, _ or a letter. 
// -> JavaScript reserved words cannot be used as a variable name.
// -> Karan & kaRan are different variables (case sensitive).

// var 55a = "Chandan";     // Not Allowed

console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c);

// var vs let in JavaScript
// 1. var is globally scoped while let & const are block scoped.
// 2. var can be updated & re-declared within its scope.
// 3. let can be updated but not re-declared.
// 4. const can neither be updated nor be re-declared.
// 5. var variables are initialized with undefined whereas let and const variables are not initialized.
// 6. const must be initialized during declaration unlike let and var.

// const a1 = 6;
// a1 = a1 + 1;     // Not Allowed
var k1 = 7;
{
    var k1 = 73;
    console.log(k1);
}
console.log(k1);

let k2 = 3;
{
    let k2 = 73;
    console.log(k2);
}
console.log(k2);


let x = "Karan Bhai";   //string
let y = 73;   //number
let z = 3.55;   //number
const p = true;   //boolean 
let q = undefined;   //undefined
let r = null;   //null

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// object in JavaScript
let o = {
    "name": "Karan",
    "job code": 1448,
    "is_good":false
}

console.log(o);
o.salary = "100 crores";
console.log(o);
o.salary = "500 crores";
console.log(o);