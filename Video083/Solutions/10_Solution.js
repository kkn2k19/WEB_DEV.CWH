/*
10. The Coffee Machine:
    In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
*/

function brewCoffee(coffeeType){
    let brewTime = Math.floor(Math.random() *5000) + 1000;

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`Your ${coffeeType} is ready!`);
        }, brewTime);
    });
}

async function serveCoffee() {
    console.log('Brewing your Coffee');
    let message = await brewCoffee("Espresso");
    console.log(message);
}

serveCoffee();