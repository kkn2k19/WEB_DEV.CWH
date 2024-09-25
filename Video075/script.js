console.log("Karan is a Hacker")

console.log("Rahul is a Hecker")


// asynchronous nature of the javascript makes settimeout() run after the full script is executed
setTimeout(() => {
    console.log(
        "I am inside the settimeout"
    )
}, 0);

setTimeout(() => {
    console.log(
        "I am inside the settimeout 2"
    )
}, 2000);

console.log("The End")


const fn = () => {
    console.log("Nothing");
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Karan", fn);
  document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

//12.12