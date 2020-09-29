//Ejercicio 1.1

let hacker1 = "Marc";
console.log("The driver  name is " + hacker1);
let hacker2 = "Alberto";
console.log("The navigator's name is " + hacker2);

//Ejercicio 2

if (hacker1.length > hacker2.length) {
    console.log("The driver " + hacker1 + " has the longest name, it has " + hacker1.length + "  characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("The driver " + hacker2 + " has the longest name, it has " + hacker2.length + "  characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + "  characters!");
}

//Ejercicio 3.1

let hacker1mayus = hacker1.toUpperCase().split("").join(" ");
let hacker2mayus = hacker2.toUpperCase().split("").join(" ");
console.log("sus nombres en mayúsculas son " + hacker1mayus + " y " + hacker2mayus);

//Ejercicio 3.2

let hacker1reverse = hacker1.split("").reverse().join("");
let hacker2reverse = hacker2.split("").reverse().join("");
console.log("sus nombres al revés son " + hacker1reverse + " y " + hacker2reverse);

// Ejercicio 3.3

let hacker1lexic = hacker1.localeCompare(hacker2);
if (hacker1lexic === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1lexic === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}