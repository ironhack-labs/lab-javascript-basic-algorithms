// Iteration 1: Names and Input
let hacker1 = "Ana";
console.log  ("The driver's name is ", hacker1)
let hacker2 = "Daniel";
console.log  ("The navigator's name is ", hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log ("The driver has the longest name, it has", hacker1.length ,"characters")
}
else if (hacker1.length < hacker2.length) {
    console.log ("It seems that the navigator has the longest name, it has", hacker2.length ,"characters")
}
else {
    console.log ("Wow, you both have equally long names,", hacker1.length, "characters!")
}

// Iteration 3: Loops

let driverSpace = ""
for (let i = 0; i <= hacker1.length - 1; i++) {
    driverSpace += hacker1[i] + " "; 
    
}
console.log (driverSpace.toUpperCase())



let hacker2Backwards = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Backwards += hacker2[i];
}
console.log (hacker2Backwards)

let primeraLetraDriver = ""
for (let i = 0; i === 0; i++) {
    primeraLetraDriver += hacker1[0]; 
}

let primeraLetraNavigatos = ""
for (let i = 0; i === 0; i++) {
    primeraLetraNavigatos += hacker2[0]; 
}

if (primeraLetraDriver > primeraLetraNavigatos) {
  console.log("The driver's name goes first.");
} else if (primeraLetraNavigatos > primeraLetraDriver) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
  




// Bonus 2
let frase = (prompt("Escribe una frase sin especios:"));

let fraseInv= "";

for (let i = frase.length - 1; i >= 0; i--) {
  fraseInv += frase[i];
}
console.log(fraseInv)

if (frase === fraseInv) {
  console.log("Cool frase, it is a palindromo");
} else {
  console.log("Sorry, your frase is lame");
}


