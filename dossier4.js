//condition

//1
let temperature = parseInt(prompt("Enter the temperature in Celsius:"));

if (temperature >= 35) {
    console.log("It's very hot!");
} else if (temperature >= 25) {
    console.log("It's warm.");
} else if (temperature >= 15) {
    console.log("It's cool.");
} else {
    console.log("It's cold.");
}

//2
let  number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

//3
const password = prompt("Enter your password:");

if (password.length >= 8 && /\d/.test(password)) {
    console.log("Strong password");
} else if (password.length >= 8) {
    console.log("Moderate password");
} else {
    console.log("Weak password");
}

//4
const year = parseInt(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

//5
const age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
