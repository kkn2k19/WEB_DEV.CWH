/*
3. The Mirror Mirror:
   Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
*/

let name = "Karan";

function mirrorImage(name) {
    let newName = name;

    for (let i = 0; i < name.length; i++) {
        newName += name[name.length - i - 1];
    }

    console.log(newName);
}

mirrorImage(name);