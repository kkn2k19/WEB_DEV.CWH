// console.log("Hey Harry you are nice!");
// console.log("Hey Harry you are good!");
// console.log("Hey Harry your tshirt is nice!");
// console.log("Hey Harry your course is good too!");

function nice (name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " your course is good too!");
}

// nice("chandan");
// nice("karan");

function sum (a, b) {
    // console.log(a+b);
    return a+b;
}

// sum(7,3);
// result = sum(7,3);

// console.log("The sum of these numbers is: ", result)

// result1 = sum(7,3);
// result2 = sum(4,5);
// result3 = sum(2,6);

// console.log("The sum of these numbers is: ", result1);
// console.log("The sum of these numbers is: ", result2);
// console.log("The sum of these numbers is: ", result3);

// Default Parameter or Optional Parameter
function sum (a, b, c=3) {
    return a+b+c;
}
result1 = sum(7,3);
result2 = sum(4,5);
result3 = sum(2,6);

console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);

// Arrow Functions
const func1 = (x)=>{
    console.log("I am an arrow function", x);
}

func1(34);
func1(66);
func1(84);