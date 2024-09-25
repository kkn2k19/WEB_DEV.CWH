/*
9. The Asynchronous Shopper:
   Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
*/

function placeOrder(orderId) {
    return new Promise((resolve) => {
        // Generate a random delay between 1 and 5 seconds (1000ms to 5000ms)
        let delay = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(() => {
            resolve(`Order ${orderId} has been placed successfully!`);
        }, delay);
    })
}

async function main(){
    let orderId = 1448;

    console.log('Placing order ${orderId}...');

    try {
        let confirmation = await placeOrder(orderId);
        console.log(confirmation);
    } catch(err) {
        console.error('Failed to place the order:', err);
    }
}

main();