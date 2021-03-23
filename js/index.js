/* Iteration 1: Names Input */

let hacker1 = "Asif";
let hacker2 = "Asif";
console.log(`The Driver Name is: ${hacker1}`);
console.log(`The navigator's Name is: ${hacker2}`);

console.log("***********************************");

/* Iteration 2: Conditionals */

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the Navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long name, ${hacker2.length} characters.`);
}
console.log("***********************************");

/* Iteration 3: Loops */

let print = "";
for (let i = 0; i < hacker1.length; i++) {
    print += hacker1.charAt(i) + " ";
}
console.log(print.toUpperCase());

console.log("***********************************");

let print1 = "";
for (let i = hacker2.length; i >= 0; i--) {
    print1 += hacker2.charAt(i) + " ";
}
console.log(print1.toUpperCase());

console.log("***********************************");


function newFunction(driver, navigator) {

    if (driver < navigator) {
        console.log("The driver's name goes first.");
    } else if (navigator < driver) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }
}
newFunction(hacker1, hacker2);
