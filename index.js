// Iteration 1: Names and Input

let hacker1 = "Ithaisa";
console.log("The driver's name is " + hacker1);

let hacker2 = "Alexander";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters",
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters",
  );
} else {
  console.log(
    "Wow, you both have equally long names, " +
      hacker1.length +
      hacker2.length +
      " characters",
  );
}

// Iteration 3: Loops

//3.1

let i = 0;
let result = "";

while (i < hacker1.length) {
  result += hacker1[i].toUpperCase() + " ";
  i++;
}

console.log(result);

//3.2

let j = hacker2.length - 1;
let reverse = "";

while (j >= 0) {
  reverse += hacker2[j];
  j--;
}

console.log(reverse);

//3.3

let k = 0;
let found = false;

while (k < hacker1.length && k < hacker2.length && !found) {
  if (hacker1[k] < hacker2[k]) {
    console.log("The driver's name goes first.");
    found = true;
  } else if (hacker1[k] > hacker2[k]) {
    console.log("Yo, the navigator goes first, definitely.");
    found = true;
  }
  k++;
}

if (!found) {
  if (hacker1.length > hacker2.length) {
    console.log("Yo, the navigator goes first, definitely.");
  } else if (hacker1.length < hacker2.length) {
    console.log("The driver's name goes first.");
  } else {
    console.log("What?! You both have the same name?");
  }
}


//Bonus 1: 

const longText =
  "Lorem ipsum et dolor sit amet et consectetur adipiscing elit et sed do eiusmod tempor";

let words = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    words++;
  }
}

words = words + 1;

console.log("Number of words: " + words);


let countEt = 0;

for (let i = 0; i < longText.length - 1; i++) {
  if (longText[i] === "e" && longText[i + 1] === "t") {
    countEt++;
  }
}

console.log("Number of et: " + countEt);





//Bonus 2:

let phraseToCheck = "amor roma";

let clean = "";
let indice = 0;

while (indice < phraseToCheck.length) {
  if (phraseToCheck[i] !== " ") {
    clean += phraseToCheck[i].toLowerCase();
  }
  indice++;
}

let reversee= "";
let jota = clean.length - 1;

while (jota >= 0) {
  reversee += clean[j];
  jota--;
}

if (clean === reversee) {
  console.log("Es palindromo");
} else {
  console.log("No es palindromo");
}