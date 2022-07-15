// Iteration 1: Names and Input

const hacker1 = "Lena";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Roxanie";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i] + " ";
}

console.log(spacedName.toUpperCase());

// let spacedName = "";

// for (let i = 0; i < hacker1.length; i++) {
//   //   if (i === hacker1.length - 1) {
//   //     spacedName += hacker1[i];
//   //   } else {
//   //     spacedName += hacker1[i] + " ";
//   //   }
// }
// console.log(spacedName.toUpperCase());

// console.log(hacker1[i] + " ");

// Lena;
// 0123;

// console.log;
// hacker1;

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

// 3.3 Depending on the lexicographic order of the strings, print:

// const hacker1 = "Lena";
// console.log(`The driver's name is ${hacker1}`);

// const hacker2 = "Lena";
// console.log(`The navigator's name is ${hacker2}`);

// if (hacker1.length > hacker2.length) {
//   console.log(
//     `The driver has the longest name, it has ${hacker1.length} characters.`
//   );
// } else if (hacker1.length < hacker2.length) {
//   console.log(
//     `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
//   );
// } else {
//   console.log(
//     `Wow, you both have equally long names, ${hacker1.length} characters!.`
//   );
// }

// let spacedName = "";

// for (let i = 0; i < hacker1.length; i++) {
//   if (i === hacker1.length - 1) {
//     spacedName += hacker1[i];
//   } else {
//     spacedName += hacker1[i] + " ";
//   }
// }
// console.log(spacedName.toUpperCase());

// let reverseOrder = "";

// for (let i = hacker2.length - 1; i >= 0; i--) {
//   reverseOrder += hacker2[i];
// }
// console.log(reverseOrder);

// if (hacker1 < hacker2) {
//   console.log(`The driver's name goes first.`);
// } else if (hacker1 > hacker2) {
//   console.log(`Yo, the navigator goes first definitely.`);
// } else {
//   console.log(`What?! You both have the same name?`);
// }
