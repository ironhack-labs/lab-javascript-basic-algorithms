console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Driver";
console.log(`The driver's name is : ${hacker1}`);
let hacker2 = 'Navigator';
console.log(`The Navigator's name is : ${hacker2}`);
//
// Iteration 2: Conditionals
    if( hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!.`);
    }

// Iteration 3: Loops
let toUpperCaseSpace = hacker1.toUpperCase().split("").join(" ");
console.log(`The Driver's Name separated by space and in capitals is : ${toUpperCaseSpace}`);
let reverse = hacker2.split("").reverse().join("");
console.log(`Navigators's Name in reverse order is: ${reverse}`);
