// Iteration 1: Names and Input
console.log("----------------Iteration 1: Names and Input----------------");
const hacker1 = "Carlos";
const hacker2 = "Fabiola";
console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
console.log("----------------Iteration 2: Conditionals----------------");

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
console.log(" -------------------Iteration 3: Loops-------------------");
for (let i = 0; i < hacker1.length; i++) {
  let capName = hacker1[i].toUpperCase();
  console.log(capName);
}

for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

//.localeCompare() 'str1'.localeCompare('str2');
//-1 ------En orden
//1 -------Deberían de invertirse para estar en orden
//0 -------Iguales
console.log(hacker1.localeCompare(hacker2));

if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log(" Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus1 countWords
console.log("-----------------------Bonus 1-----------------------");
const fisrtParagraph = `et et et et et Lorem Ipsum et`;

const secondParagraph = `Lorem Ipsum`;

const thirdParagraph = `Lorem Ipsum is simply dummy text of the printing`;

let fisrtWordsParagraph = fisrtParagraph.split(" ");
let secondWordsParagraph = secondParagraph.split(" ");
let thirdWordsParagraph = thirdParagraph.split(" ");

console.log(`fisrtParagraph tiene ${fisrtWordsParagraph.length} palabras`);
console.log(`secondParagraph tiene ${secondWordsParagraph.length} palabras`);
console.log(`thirdParagraph tiene ${thirdWordsParagraph.length} palabras`);

let counter = 0;
fisrtWordsParagraph.forEach(function (fisrtWordsParagraph) {
  if (fisrtWordsParagraph.includes("et")) {
    counter++;
  }
});

console.log(`La palabra 'et' aparece ${counter} veces en el fisrtParagraph`);

//Bonus2 Palindrome
console.log("-----------------------Bonus 2-----------------------");

let phraseToCheck = "put it up";
let arrayToCheck = phraseToCheck.split("");

let arrayLeft;
let arrayRigth;

arrayToCheck.forEach((elem) => {
  //console.log(elem);
});

for (let i = 0; i < arrayToCheck.length; i++) {
  arrayLeft = arrayToCheck[i];
}

for (let i = arrayToCheck.length - 1; i >= 0; i--) {
  arrayRigth = arrayToCheck[i];
}
