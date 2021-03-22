// Iteration 1: Names and Input
var hacker1 = "Adrian";
console.log(`The driver name is ${hacker1}`);

var hacker2 = "Pol";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
function nameLength() {
    if (hacker1.length > hacker2.length) {
        console.log("The driver has the longest name, " + hacker1 + " it has " + hacker1.length + " characters");
    } else if (hacker1.length < hacker2.length) {
        console.log("It seems that the navigator has the longest name," + hacker2 + "it has " + hacker2.length + " characters")
    } else {
        console.log("Wow, you both have equally long names," + hacker1.length + "characters!")
    }
}

nameLength();

// Iteration 3: Loops

//Exercise 3.1

var renameHacker1 = '';

for (let i = 0; i < hacker1.length; i++) {
    renameHacker1 += hacker1[i] + " ";
}

console.log(renameHacker1.toUpperCase());
//Exercise 3.2

function reverse(hacker2) {
    var result = "";
    for (var i = hacker2.length - 1; i >= 0; i--)
        result += hacker2[i];
    console.log(result);
}
reverse(hacker2);


//Exercise 3.3
var hacker3 = hacker1.localeCompare(hacker2);
console.log(hacker3);

function myFunction() {
    if (hacker3 <= -1) {
        console.log("The driver's name goes first.")
    } else if (hacker3 >= 1) {
        console.log("the navigator goes first definitely.")
    } else {
        console.log("What?! You both have the same name?.")
    }
}

myFunction();