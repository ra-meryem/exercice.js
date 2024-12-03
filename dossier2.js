//1. Simple Assignment
let x = 10;

console.log("Initial value of x: " + x); 

x += 5;
console.log("After += 5: " + x); 

x -= 3; 
console.log("After -= 3: " + x); 

x *= 2; 
console.log("After *= 2: " + x); 

x /= 4;
console.log("After /= 4: " + x); 

x %= 5;
console.log("After %= 5: " + x); 




///2. Comparing Two Numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

if (num1 > num2) {
    console.log("The first number (" + num1 + ") is larger than the second number (" + num2 + ").");
} else if (num1 < num2) {
    console.log("The first number (" + num1 + ") is smaller than the second number (" + num2 + ").");
} else {
    console.log("The first number (" + num1 + ") is equal to the second number (" + num2 + ").");
}


//3 
let userAge = prompt("Enter your age:");

console.log(`Type of userAge: ${typeof userAge}`);

let isEqualLoose = (userAge == 18);  
let isEqualStrict = (userAge === 18); 

console.log(`Loose equality (==): ${isEqualLoose}`);
console.log(`Strict equality (===): ${isEqualStrict}`);

//4
let isAdult = true;
let  hasPermission = false;

console.log(`Type of isAdult: ${typeof isAdult}`);
console.log(`Type of hasPermission: ${typeof hasPermission}`);

if (isAdult && hasPermission) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}


//5
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("You can relax");
} else {
    console.log("You need to work");
}

//6
let userInput = prompt("Enter a boolean value (true or false):");

let  booleanValue = userInput.toLowerCase() === "true";

console.log(`You entered: ${booleanValue}`);
console.log(`Negation: ${!booleanValue}`);


//7
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullName = firstName + " " + lastName;

console.log(`Full name: ${fullName}`);

//8
const firstNam = prompt("Enter your first name:");
const lastNam = prompt("Enter your last name:");

const fullNam = `${firstNam} ${lastNam}`;

console.log(`Full name: ${fullNam}`);

//9

let greeting = "Hello, ";

const userName = prompt("Enter your name:");
greeting += userName;

console.log(greeting);

//10 

const age = parseInt(prompt("Enter your age:"));

const isMember = prompt("Are you a member? (true/false)").toLowerCase() === "true";

if (age < 18 || isMember) {
    console.log("Discount granted");
} else {
    console.log("No discount available");
}
