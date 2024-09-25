// Arrays
// Arrays are variables which can hold more than one value.

const fruits = ["banana", "apple", "grapes"];

const a = [7, "Karan", false];    // different data types

// Strings are immutable whereas Arrays are mutable.

let arr = [1, 2, 4, 5, 7];
// Index   0, 1, 2, 3, 4

// console.log(arr, typeof(arr));  // type - object in JS
// console.log(arr.length);
// console.log(arr[0]);
// arr[0] = 73;
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

// Arrays Methods 
console.log(arr.toString());
console.log(arr.join(" and "));
arr.pop();
arr.push(101);
arr.shift(); // pop from front
arr.unshift("KKN"); // push from front
console.log(arr);
delete arr[2];  // empty 
console.log(arr);

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];

console.log(a1.concat(a2, a3)); // 1,2,3,4,5,6,7,8,9
console.log(a1);  // 1,2,3

let arr1 = [1, 3, 5, 2, 4, 6, 7, 9, 8, 0];
arr1.sort();
console.log(arr1);

arr1.splice(1, 3);
console.log(arr1);   // from index 1 removed 3 elements


// arr1.slice(1, 3);
// arr1.reverse();

