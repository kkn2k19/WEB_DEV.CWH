// document.querySelector(".box")
// <div class="box">Hey I am a box</div>

// document.querySelector(".box").innerHTML
// "Hey I am a box"

// document.querySelector(".container").innerHTML
// "\n        <div class="box">Hey I am a box</div>\n     "

// document.querySelector(".box").innerHTML
// "Hey I am a box"

// document.querySelector(".box").innerText
// "Hey I am a box"

// document.querySelector(".container").innerText
// "Hey I am a box"

// document.querySelector(".container")
// <div class=​"container">​…​</div>​

// document.querySelector(".container").innerHTML
// '\n        <div class="box">Hey I am a box</div>\n    '

// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">Hey I am a box</div>\n    </div>'

// document.querySelector(".container").tagName
// 'DIV'

// document.querySelector(".container").nodeName
// 'DIV'

// document.querySelector(".container").textContent
// '\n        Hey I am a box\n    '

// document.querySelector(".container").hidden
// false

// document.querySelector(".container").hidden = true
// true

// document.querySelector(".container").innerHTML = "Hey I am Karan"
// 'Hey I am Karan'

// document.querySelector(".container").hasAttribute("style")
// false

// document.querySelector(".box").hasAttribute("style")
// true

// document.querySelector(".box").hasAttribute("style")
// true

// document.querySelector(".box").getAttribute("style")
// 'display: flex;'

// document.querySelector(".box").setAttribute("style", "display: inline")
// undefined

// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

// document.querySelector(".box").removeAttribute("style")
// undefined

// document.designMode = "on"
// 'on'

// document.querySelector(".container").classList
// DOMTokenList(3)['container', 'red', 'bg-green', value: 'container red bg-green']
// 0: "container"
// 1: "red"
// 2: "bg-green"
// length: 3
// value: "container red bg-green"

document.querySelector(".container").className
'container red bg-green'

document.querySelector(".container").classList.add("karan")
undefined

document.querySelector(".container").classList.remove("karan")


document.querySelector(".container").classList.toggle("red")
false

document.querySelector(".container").classList.toggle("red")
true
