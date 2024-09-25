console.log("Hello World!");

// document.body

// document.body.childNodes
// NodeList(9) [text, div.container, text, script, text, comment, text, script, text]

// document.body.childNodes[0]
// #text

// document.body.childNodes[1]
{/* <div class="container">
    This is me
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
        <div class="box">Box 5</div>
    </div> */}


// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]


// let cont = document.body.childNodes[1]
// undefined

// cont
{/* <div class="container">
    This is me
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
        <div class="box">Box 5</div>
    </div> */}


// cont.firstChild
// #text

// child.lastChild
// #text

// cont.firstElementChild
{/* <div class="box">Box 1</div> */}

// cont.lastElementChild
{/* <div class="box">Box 5</div> */}

// cont.lastElementChild.style.color = "red";
// cont.lastElementChild.style.backgroundColor = "green";

// cont.lastElementChild.parentElement
// <div class="container">...</div>

// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

// document.body.firstElementChild.children[0]
// <div class=​"box">​Box 1​</div>​

// document.body.firstElementChild.children[1]
// <div class=​"box">​Box 2​</div>​

// document.body.firstElementChild.children[2]
// <div class=​"box">​Box 3​</div>​

// document.body.firstElementChild.children[2].nextElementSibling
// <div class=​"box">​Box 4​</div>​

// document.body.firstElementChild.children[2].previousElementSibling
<<<<<<< HEAD
// <div class=​"box">​Box 2​</div>​
=======
// <div class=​"box">​Box 2​</div>​
>>>>>>> origin/main
