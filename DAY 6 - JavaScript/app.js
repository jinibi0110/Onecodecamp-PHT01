// Array

let fruit = "Mango";
console.log(fruit);
console.log(typeof (fruit));

let fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits[7]); // undefined

// Array Length
console.log(fruits.length);

// Update elements
fruits[1] = 'Avocado';
console.log(fruits);

// Adding elements
// Add element at the END of the array
fruits.push("Dewberry");
console.log(fruits);

// Add element at the START of the array
fruits.unshift("Banana");

// Deleting elements
// Delete element at the END of the array
fruits.pop();
console.log(fruits);

// Delete element at the START of the array
fruits.shift();
console.log(fruits);

// Sorting elements 
// Alphabetically
fruits.sort();
console.log(fruits);

// Reverse
fruits.reverse();
console.log(fruits);

// Search
// indexOf Method
let index = fruits.indexOf('Avocado');
console.log("Index", index);

// Check if an element is present in the array
// .includes method
console.log("Is Apple in fruits: ", fruits.includes("Apple"));

// Joining
// .join method
console.log("Joined: ", fruits.join("-"));

// .slice method
// let sliced_fruits = fruits.slice(1, 3);
// console.log(sliced_fruits);

// .splice method
// let spliced_fruits = fruits.splice(0, 2);
// console.log(spliced_fruits);

// Looping through the elements
// .forEach method
// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

// For Loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}

// Reverse For Loop
for (let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

// For Of Loop
for (fruit of fruits){
    console.log(fruit);
}