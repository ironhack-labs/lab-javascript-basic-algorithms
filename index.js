// // ! Iteration 1: Names and Input
// //* Pedir el nombre del conductor
// let hacker1 = prompt("The drivers name is: ");

// //* Pedir el nombre del navegador
// let hacker2 = prompt("The navigators name is:");

// // ! Iteration 2: Conditionals
// //* Comparar la longitud de los nombres
// if (hacker1.length > hacker2.length) {
//   console.log(
//     `The driver has the longest name, it has ${hacker1.length} characters.`
//   );
// } else if (hacker1.length < hacker2.length) {
//   console.log(
//     `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
//   );
// } else hacker1.length === hacker2.length;
// console.log(
//   `Wow, you both have equally long names, ${hacker1.length} characters!`
// );

// //* Convertir el nombre del conductor a mayúsculas
// let newHacker1 = hacker1.split("");
// let upperName = "";
// for (let i = 0; i < newHacker1.length; i++) {
//   upperName += newHacker1[i].toUpperCase() + " ";
// }
// console.log(upperName);

// //* Invertir el nombre del navegador
// let reverseHacker2 = " ";
// for (let i = 0; i < hacker2.length; i++) {
//   reverseHacker2 = hacker2[i] + reverseHacker2;
// }
// console.log(reverseHacker2);

// // !Iteration 3: Loops

// //? Comparar letra por letra los nombres
// let ordenHacker = " ";
// //* Comparamos cual es el nombre mas largo y con eso hacemos la comparacion lexica abajo
// let minLength = Math.min(hacker1.length, hacker2.length);
// for (let i = 0; i < minLength; i++) {
//   if (hacker1[i] !== hacker2[i]) {
//     if (hacker1[i] < hacker2[i]) {
//       console.log(`Yo, the driver's name goes first.`);
//     } else {
//       console.log(`Yo, the navigator name goes first definitely`);
//     }
//     break;
//   }
//   //* Si los nombres son iguales hasta el final del nombre mas corto
//   if (i === minLength - 1) {
//     if (hacker1.length > minLength) {
//       console.log(`Yo, the driver's name goes first`);
//     } else if (hacker2.length > minLength) {
//       console.log(`Yo, the navigator name goes first definitely`);
//     }
//   }
// }

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let countWords = [];
let count = 0;

function specificWordCount(text) {
  if (text.length === 0) return null;
  let words = [];
  let count = 0;
  words = text.split(" ");
  words.forEach(function (word) {
    if (word === "et") count++;
  });
  return count;
}

function countWord(text) {
  if (text.length === 0) return null;
  let words = [];
  words = text.split(" ");
  return words.length;
}

console.log(countWord(longText));
console.log(specificWordCount(longText));
