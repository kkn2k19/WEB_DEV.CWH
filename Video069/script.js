let a = 5

// reduce method
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    return c
}

// for loop
function facFor(number) {
    if (number < 0) console.log("Not Defined");
    if (number == 0) return 1;
    else {
        let fac = 1;
        for (let index = 1; index <= number; index++) {
            fac = fac * index;
        }
        return fac;
    }
}


// factorial(a)
console.log(facFor(a));