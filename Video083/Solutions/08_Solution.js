//    8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function asyncArrayMapping(arr) {
    return arr.map((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
    });
}

async function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let promises = await asyncArrayMapping(arr);

    let results = await Promise.all(promises);

    console.log(results);
}

main();