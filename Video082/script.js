async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c){
    return a+b+c;
}

// IIFE = immediately invoked function expression
(async function main() {
    // let a = await sleep()
    // console.log(45);
    // let b = await sleep()
    // console.log();45

    // let x, y = [1, 5]    X
    // let [x, y] = [1, 5]
    // let [x, y] = [1, 5, 7]
    // console.log(x, y);
    // let [x, y, ...rest] = [1, 5, 7, 8, 9, 10]
    // console.log(x, y, rest);

    let obj = {
        a:1, 
        b:2,
        c:3
    }

    let {a,b} = obj;
    console.log(a, b);

    let arr = [1, 4, 6];
    // console.log(arr[0] + arr[1] + arr[2]);
    // console.log(sum(arr[0] , arr[1] , arr[2]));
    console.log(sum(...arr));
    
})()

