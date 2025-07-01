// Iteration 1: Names and Input ### Iteration 1: Names and Input
// Create two variables `hacker1` and `hacker2` and assign them the driver's and navigator's names.

const hacker1 = `Francisco`;
console.log(`The driver's name is ${hacker1}`);

const hacker2 = `Lucía`;
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals ### Iteration 2: Conditionals

// No need to reassign hacker1 and hacker2, they are already declared above


// Paso 1: obtener las longitudes
const len1 = hacker1.length; // 9 caracteres
const len2 = hacker2.length; // 5 caracteres

// Paso 2: comparar longitudes
if (len1 > len2) {
  console.log(`The driver has the longest name ${len1} caracteres.`);
} else if (len1 < len2) {
  console.log(` It seems that the navigator has the longest name, it has ${len2} caracteres.`);
} else {
  console.log(`Wow, you both have equally long names, ${len1} caracteres!`);
}

//*Iteration 3: Loops3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".3.3 Depending on the lexicographic order of the strings, print:The driver's name goes first.Yo, the navigator goes first, definitely.What?! You both have the same name?*/ 

// 3.1 – Mostrar el nombre del driver en mayúsculas y separado por espacios
let nameWithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
  nameWithSpaces += hacker1[i].toUpperCase() + " ";
}

console.log(nameWithSpaces);

// 3.2 – Mostrar el nombre del navigator al revés
let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);

// 3.3 – Comparar nombres en orden alfabético
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
