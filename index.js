// Iteration 1: Names and Input
let hacker1 = 'Elena';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Nacho';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
if (hacker1.length === hacker2.length) {
  console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!');
}


// Iteration 3: Loops
// 3.1
let result = "";

for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    result += ", ";
  }
}
console.log(result);


// 3.2
let resultReverse = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  if (i === 0) {
    resultReverse += hacker1[i].toUpperCase();
  } else {
    resultReverse += hacker1[i].toLowerCase();
  }
}
console.log(resultReverse);


// 3.3
/**
 * número negativo string 1 es antes que el string 2
 * numero positivo string 2 es antes que el string 1
 * 0 si son iguales 
 */
let resultLocalCompare = hacker1.localeCompare(hacker2);

if (resultLocalCompare < 0) {
  console.log(`${hacker1} The driver's name goes first.`);
} else if (resultLocalCompare > 0) {
  console.log(`${hacker2} Yo, the navigator goes first, definitely.`);
} else {
  console.log("What?! You both have the same name?");
}


// Bonus 1
const longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita possimus totam sapiente delectus, facilis ad aut aspernatur earum cupiditate quisquam atque, ipsa beatae iure ut aliquam ex, itaque debitis. Libero explicabo voluptatum saepe aspernatur laborum dolorum, minus id provident ipsam quia, recusandae reiciendis aperiam sunt dolore animi vero. Tenetur esse voluptatem doloribus quidem incidunt necessitatibus facilis laborum nobis ducimus! Ab amet recusandae impedit animi, officiis soluta possimus doloremque nam quas, harum tempora laboriosam praesentium? Tempore, voluptate, adipisci, alias illum earum quisquam error optio soluta animi autem repudiandae ipsam id.";

const words = longText.split(" ");
const totalWords = words.length;

console.log(`In total, there are: ${totalWords} words`);


// Bonus 2
// let phraseToCheck = "Amor, Roma";
let phraseToCheck = "Was it a car or a cat I saw?";
//let phraseToCheck = "taco cat";
let cleanPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] != " " && phraseToCheck[i] !== "," && phraseToCheck[i] != "." && phraseToCheck[i] != "?") {
    cleanPhrase += phraseToCheck[i].toLowerCase();
  }
}
if (cleanPhrase === cleanPhrase.split("").reverse().join("")) {
  console.log(`${phraseToCheck} is a Palindrome`);
} else {
  console.log(`${phraseToCheck} is NOT a Palindrome`);
}
