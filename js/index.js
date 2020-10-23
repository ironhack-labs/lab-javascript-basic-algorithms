// Iteration 1: Names and Input

let hacker1 = "Fernanda";
console.log(`on the drive´s name is ${hacker1}`);

let hacker2 = "Kleber";
console.log(`on the navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals

const h1Length = hacker1.length;
const h2Length = hacker2.length;

if (hacker1.length > hacker2.length) {
  console.log(
    ` The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (h2Length > h1Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

function reverseString(string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  console.log(joinArray);
}

reverseString(hacker1);
reverseString(hacker2);

function printName(string) {
  for (var i = 0; i < string.length; i++) {
    if (i < string.length + 1) {
      let letra = string[i];
      console.log(letra.toUpperCase());
    } else {
      info += hacker1[i];
    }
  }
}

printName(hacker1);
printName(hacker2);
