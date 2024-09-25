console.log("I am a tutorial on Loops");

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for loop
for(let i = 0; i < 100; i++) {
    console.log(a+i);
}

// for in loop
let obj = {
    "name": "Karan",
    "role": "Programmer",
    "company": "ChandanOP"
}

for(const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

// for of loop
for (const c of "Karan") {
    console.log(c)
}

// while loop
let j = 0;
while(i<6) {
    console.log(i);
    j++;
}

// do-while loop
let i = 0;
do {
    console.log(i);
    i++;
}while(i < 6);