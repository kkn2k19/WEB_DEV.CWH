// async function getData() {
//     // simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }


// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}

async function main() {
    console.log('Loading Modules');
    console.log('Do Something else');
    console.log('Load Data');

    let data = await getData()

    console.log(data);
    console.log('Process Data');
    console.log("task 2");
}

// let data = getData()
// data.then((v) => {
//     console.log(data);
//     console.log('Process Data');
//     console.log("task 2");
// });

main()