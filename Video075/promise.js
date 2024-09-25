console.log('This is Promises');

// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number is not supporting you");
//     } else {
//         setTimeout(() => {
//             console.log('Yes I am done');
//             resolve("Karan");
//         }, 500);
//     }
// })

// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number is not supporting you");
    } else {
        setTimeout(() => {
            console.log('Yes I am done');
            resolve("Karan");
        }, 500);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number is not supporting you 2 ");
    } else {
        setTimeout(() => {
            console.log('Yes I am done 2');
            resolve("Karan 2");
        }, 300);
    }
})

let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number is not supporting you 3");
    } else {
        setTimeout(() => {
            console.log('Yes I am done 3');
            resolve("Karan 3");
        }, 1000);
    }
})

let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number is not supporting you 4");
    } else {
        setTimeout(() => {
            console.log('Yes I am done 4');
            resolve("Karan 4");
        }, 400);
    }
})

let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number is not supporting you 5");
    } else {
        setTimeout(() => {
            console.log('Yes I am done 5');
            resolve("Karan 5");
        }, 100);
    }
})

// let pr = Promise.all([prom1, prom2, prom3, prom4, prom5])
let pr = Promise.allSettled([prom1, prom2, prom3, prom4, prom5])
// let pr = Promise.race([prom1, prom2, prom3, prom4, prom5])
// let pr = Promise.any([prom1, prom2, prom3, prom4, prom5])
pr.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
