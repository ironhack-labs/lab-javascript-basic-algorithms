// Iteration 1: Names and Input
var hackerone = "Alba";
console.log("The driver's name is", hackerone);
var hackertwo = "Melina";
console.log("The navigator's name is", hackertwo);

// Iteration 2: Conditionals
const str1 = "Alba";
const str2 = "Melina"; 


if (str1.length < str2.length) {
    console.log("It seems that the navigator has the longest name, it has", str2.length, "characters");
}  else if (str1.length > str2.length) {
    console.log("It seems that the driver has the longest name, it has", str1.length, "characters");
} else {
    console.log("Wow, you both have equally long names", str1.length, "characters");
}



// Iteration 3: Loops
const myString = "Alba";
const splittedString = myString.split("");
const stringWithSpaces = splittedString.join(" ");
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);

let str = "Melina";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);

const lexicographicallysortedAlba = str1.split("").sort().join("");
console.log(lexicographicallysortedAlba);

const lexicographicallysortedMelina = str2.split("").sort().join("");
console.log (lexicographicallysortedMelina);

if (lexicographicallysortedAlba < lexicographicallysortedMelina) {
    console.log("The driver's name goes first.");
}  else if (lexicographicallysortedMelina> lexicographicallysortedAlba) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}




