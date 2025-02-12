// Control Flow Structure
// Conditional Statements

let age = 15;

// IF statement
if (age >= 18) {
    console.log("You are eligible to vote.");
} else { // ELSE statement
    console.log("You are not eligible to vote.");
}

// IF-ELSEIF-ELSE statement
let temperature = 25;
if (temperature < 0) {
    console.log("it is freezing!");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It is cool outside.");
} else if (temperature >= 20 && temperature < 26)  {
    console.log("It is warm outside.");
} else {
    console.log("It is hot.");
}

// SWITCH statement
let day = 'Wednesday';
switch (day) {
    case 'Monday':
        console.log("It's the start of the week.");
        break;
    case 'Friday':
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's just a regular day.");
        break;
}

let number = 30;

switch (true) {
    case (number >= 0 && number <= 50):
        console.log("Number is between 0 and 50");
        break;
    case (number > 50 && number <= 100):
        console.log("Number is between 51 and 100");
        break;
    case (number > 150 && number <= 200):
        console.log("Number is between 51 and 100");
        break;
            
    default:
        console.log("Number is either negative or greater than 100");
}