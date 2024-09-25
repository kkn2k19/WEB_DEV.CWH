console.log("This is strings tutorial")
let a = "Karan";
// console.log(a);  // full string print
console.log(a[0]);  // K
console.log(a[1]);  // a
console.log(a[2]);  // r
console.log(a[3]);  // a
console.log(a[4]);  // n
// console.log(a[5]);  // undefined

console.log(a.length);  // 5

// Template Literals
// Template literals use backtics instead of quotes to define a string
// with template literals, it is possible to use both single as well as double quotes in a string
// we can insert variables directly in template literal. This is called String interpolation.
let real_name = "Karan";
let friend = "Rahul";
console.log("His name is " + real_name + " and his friends name is " + friend);
console.log(`His name is ${real_name} and his friends name is ${friend}`);


// Escape Sequence Characters 

// some properties
let b = "chandan";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,4)); 
console.log(b.slice(1));
console.log(b.replace("an", "@N"));
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"));