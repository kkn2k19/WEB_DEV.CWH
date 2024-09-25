// mfr -- map filter reduce

let arr = [1, 13, 5, 7, 11];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

let newArr = arr.map((e)=>{
    return e**2;
})

// let newArr = arr.map((value, index, array)=>{
//     return value*value; 
// })
console.log(newArr);

const greaterThanSeven = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(newArr.filter(greaterThanSeven));

let arr2 = [1, 2,3,4,5,6];
// reduce function
const red = (a, b)=>{
    return a*b;
}

console.log(arr2.reduce(red));

const my_name = "Karan";
console.log(Array.from(my_name));