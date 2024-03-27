// Functions  - Allows us to write reusable blocks of code

// Defining a function
function greet() {
    console.log("Hello World!");
    console.log("Hello Philippines!");
}

//Calling a function
greet();

//Function with Parameter
function greetMe(name) {
    console.log('Hello, ', name);
}
greetMe('Genevie');

// Function with return
function sum(a, b) {
    return a + b;
}
console.log('Sum', sum(5, 8));