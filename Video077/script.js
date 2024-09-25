// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
//     let card = document.createElement('div');
//     card.classList.add('box');
//     card.innerHTML = `
//         <div class="card">
//             <img src="${thumbnail}" alt="thumbnail">
//         </div>
//         <div class="details">
//             <div class="title">${title}</div>
//             <div class="line2">
//                 <div class="cName">${cName}</div>
//                 <div class="views">${views}</div>
//                 <div class="months">${months}</div>
//                 <div class="duration">${duration}</div>
//             </div>
//         </div>
//     `;

//     document.querySelector('.container').appendChild(card);
// }

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function

    let viewStr;

    if (views >= 1000 && views < 1000000){
        viewStr = views / 1000 + "K";
    } else if (views >= 1000000) {
        viewStr = views / 1000000 + "M";
    } else {
        viewStr = views;
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months old</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML += html 
}

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "1000000", "11", "28:31", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEpCPYBEIoBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIFhACGAYgATgBQAE=&rs=AOn4CLDO327usG733GXnX9YTmt2PjH-lzw");



