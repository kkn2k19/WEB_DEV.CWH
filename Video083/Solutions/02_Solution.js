/*
2. The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
*/

let arr = [1, 2, 4, 3, 5, 5, 6, 3, 4, 1, 2, 4, 3, 5, 5, 6, 3, 4 ];

function doubleElement(arr) {
    let res = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != arr[index + 1]) {
            res.push(arr[index] * 2)
        } else {
            res.push(arr[index]);
        }
    }
    console.log(res);
}

doubleElement(arr); 