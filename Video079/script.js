let a = prompt("Enter first number")
// bydefault prompt gives a string input
// parseInt() to make it to integer

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main() {
    try {
        console.log("The sum is: ", sum * x)
        return true
        // here x is not defined so it will give a error
    } catch (e) {
        // console.log("Error aa gaya bhai")
        console.log(e.name)   // ReferenceError
        console.log(e.message)      // x is not defined
        console.log(e.stack)        // ReferenceError: x is not defined
        return false
    }
    finally {
        console.log('files are being closed and db connection is being closed');
    }
}


let c = main()


// VVVVI (Interview me puchega -- why finally is used )
// generally inside a function when a return statement is executed then whole code after that will be ignored but finally will be executed even if a return statement is executed already
// it works normal like clog but when its function it works differently
