// Iteration 1: Names and Input
const hacker1 = "john";

console.log("the driver name is " + hacker1);
const hacker2 = "gabriel";
console.log("the navigator's name is " + hacker2);

// Iteration 2: Conditionals
let length1 = hacker1.length;
let length2 = hacker2.length;

if (length1 > length2) {
    console.log("The driver has the longest name, it has " + length1 + " characters.");
}
else if (length2 > length1) {
    console.log("It seems that the navigator has the longest name, it has " + length2 + " characters.");
}
else {
    console.log("WOW,you both have equally long names " +
        length1 + " characters!")
}

// Iteration 3: Loops


let message = "";
for (let i = 0; i < hacker1.length; i++) {
    //console.log(hacker1.toUpperCase(i).charAt(i));
    message = message + hacker1.charAt(i).toUpperCase() + " ";

}

console.log(message);

// question 3.2

let reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversed += hacker2[i];
}

console.log(reversed);

// 3.3
let compValue = hacker1.localeCompare(hacker2);

switch (compValue) {
    case -1:
        console.log("The driver's name goes first.");
        break;
    case 1:
        console.log("Yo, the navigator goes first, definitely.");
        break;
    case 0:
        console.log("What?! You both have the same name?")
            ; break;
}




