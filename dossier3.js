//function 

//1
function greet() {
    console.log("Hello, world!");
}

greet();

//2
function introduce(name, age) {
    return `Hi, my name is ${name} and I am ${age} years old.`;
}

console.log(introduce("meryem", 21));

//3
function calculatePrice(price, taxRate = 0.1) {
    return price + (price * taxRate);
}

console.log(`Total price (default tax): ${calculatePrice(100)}`);
console.log(`Total price (custom tax): ${calculatePrice(100, 0.2)}`);


//4
let addNumbers = function (a, b) {
    return a + b;
};

console.log(`Sum: ${addNumbers(10, 20)}`);


//5
let multiply = (a, b) => a * b;

console.log(`Product: ${multiply(5, 4)}`);

//6
function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(`Double of 5: ${double(5)}`);
console.log(`Triple of 5: ${triple(5)}`);
console.log(`Double of 10: ${double(10)}`);
console.log(`Triple of 10: ${triple(10)}`);
