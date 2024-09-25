/*
5. The Sum Selector:
   You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, 2, 3, 4, 5, 6, 7, 8];

function addSum (arr) {
    let sum = 0;

    for (const num of arr) {
        if (num < 0) {
            break;
        }
        sum += num;
    }
    return sum;
}

console.log(addSum(arr));