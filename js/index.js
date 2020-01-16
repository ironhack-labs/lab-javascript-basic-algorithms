// ITERATION 1

let hacker1 = "Manolo";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Chrome";

console.log(`The navigator's name is ${hacker2}`);

// ITERATION 2

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names,${hacker2.length} characters!`
  );
}

// ITERATION 3

let shift = hacker1.toUpperCase();
let space = ``;
let reverseName = ``;

for (i = 0; i < hacker1.length; i++) {
  space += `${shift[i]} `;
}

console.log(shift);

console.log(space);

for (i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}

console.log(reverseName);

// ITERATION 4

if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely");
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS 2

let phraseToCheck = prompt("añada aquí su frase");
let fraseMinuscula = phraseToCheck.toLowerCase();
let fraseSinEspacios = fraseMinuscula.replace(/ /g, "").replace(/,/g, "");

let total = fraseSinEspacios.length;
let fraseAlReves = "";

for (i = total - 1; i >= 0; i--) {
  fraseAlReves += fraseSinEspacios[i];
}

if (fraseAlReves === fraseSinEspacios) {
  console.log("tu frase es un palindromo");
} else if (fraseAlReves != fraseSinEspacios) {
  console.log("tu frase NO es un palindromo");
}
