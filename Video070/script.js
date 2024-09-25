let boxes = document.querySelector(".container").children

/*
range -- 0 to 255
Math.random -- 0 to 1 with 1 exclusive 
so multiplied with 255
and and added the starting point to show from where it is starting.

after that the ceiling value of the number is been put in rgb() function 
*/

function getRandomColor(){
    let v1 = Math.ceil(0 + Math.random()*255);
    let v2 = Math.ceil(0 + Math.random()*255);
    let v3 = Math.ceil(0 + Math.random()*255);

    return `rgb(${v1}, ${v2}, ${v3})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/main
