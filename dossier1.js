//1. Variable Declaration and Initialization
let name="Alex";
let age=20;
let isastudent= true;
console.log("name:",name)
console.log("age:",age)
console.log("isastudent:",isastudent)
//2.Console log
var greeting="hello,world!"
console.log(greeting)
//3.Alert
alert('Welcome to our JavaScript lesson!')


//4.prompt
let userName=prompt('what your name')
alert('hello'+' '+userName)


//5.confirm
let userResponse = confirm("Do you want to continue?");
console.log(userResponse);

//6. Arithmetic Operators
let ab=prompt('entrer le nombre1')
let cd=prompt('entrer le nombre2')
console.log('sum:'+(ab+cd));
console.log('Difference:'+(ab-cd));
console.log('product:'+(ab*cd));
console.log('quotient:'+(ab/cd));


//7. Increment and Decrement
let numbre=13
 ++numbre;
console.log("incremented:"+" "+(numbre));
--numbre;
console.log('decremented:'+" "+(numbre));
//8. Combining Prompt and Arithmetic
let agee= prompt("Please enter your age:");

agee = parseInt(agee);

let ageInFiveYears = agee + 5;

alert(`In 5 years, you will be ${ageInFiveYears}.`);

//9.
let firstName = prompt("Enter your first name:");

let lastName = prompt("Enter your last name:");

let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

//10. Conditional Confirm
let LikesJavaScript = confirm("Do you like JavaScript?");

if (LikesJavaScript) {
    console.log("That's great!");
} else {
    console.log("Keep going, it will get better!");
}
