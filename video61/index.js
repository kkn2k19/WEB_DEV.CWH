/*
Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random();
let a = Number(prompt("Enter first number : "));
let b = Number(prompt("Enter second number : "));
let c = prompt("Enter Operation : ");

// let obj = {
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"**",
// }

if (random > 0.1) {
    // Perform correct calculation
    // alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    let result;
    if (c == "+") {
        result = a+b;
    } else if (c == "*") {
        result = a*b;
    } else if (c == "-") {
        result = a-b;
    } else if (c == "/") {
        result = a/b;
    }
    console.log("The result is : " + result);
}

else {
    // Perform wrong calculation
    // c = obj[c];
    // alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    let result;
    if (c == "+") {
        result = a-b;
    } else if (c == "*") {
        result = a+b;
    } else if (c == "-") {
        result = a/b;
    } else if (c == "/") {
        result = a**b;
    }
    console.log("The result is : " + result);
}