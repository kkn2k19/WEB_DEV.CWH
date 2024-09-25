/*
11. The Array Filterer:
    You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
*/

let products = [
    { name: "Laptop", brand: "Apple", price: 1200 },
    { name: "Smartphone", brand: "Samsung", price: 800 },
    { name: "Laptop", brand: "Dell", price: 1000 },
    { name: "Tablet", brand: "Apple", price: 600 }
];

function filterProducts (products, filterCriteria) {
    return products.filter(product => {
        return Object.keys(filterCriteria).every(key => product[key] === filterCriteria[key]);
    })
}

let filterCriteria = {brand : "Dell"};

let filteredProducts = filterProducts(products, filterCriteria);

console.log(filteredProducts);
