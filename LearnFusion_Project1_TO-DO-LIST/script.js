let inputs = document.getElementById("input");
let list = document.querySelector(".text");

function Add() {
    let taskText = inputs.value.trim();

    if (textTask === ""){
        alert("Please enter a Task");
        return;
    } else {
        
    }
}

function createDeleteButton() {
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash";
}