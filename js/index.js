// Iteration 1: Names and Input
let hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Annamaria";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

//3.1
let string = "";

for (let i = 0 ; i < hacker1.length; i++) {
  if (i === hacker1.length -1) { //last character
    string += hacker1[i];
  } else {
    string += hacker1[i] + " ";
  }; 
};

console.log(`"${string}"`);

//3.2
let string2 = "";
for (let i = hacker1.length-1; i >= 0; i--) {
  string2 += hacker1[i];
};
console.log(string2);

//3.3

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
};

let longestName;

if (hacker1.length > hacker2.length) {
  longestName = hacker1;
} else {
  longestName = hacker2;
};



for (let i = 0; i < longestName.length; i++) {
  if (hacker1.charAt(i) === hacker2.charAt(i)) {
    continue;
  } else if (hacker1.charAt(i) < hacker2.charAt(i)) {
    console.log("The driver's name goes first.");
    break;
  } else {
    console.log("Yo, the navigator goes first definitely.");
    break;
  };
};



//Bonus 1:
let text = "Lorem ipsum et dolor et sit amet, consectetur adipiscing elit et.";

//Numer of words


let counter = 1; //1 because of last word

for (let i = 0; i <= text.length; i++) {
  if (text[i] === " " || currentChar === "\n") { //or if current index is a new line!!!
    counter++;
  }
};

console.log("Number of words in string: " + counter);

//Number of "et"
let etCount = 0;

let textArray = text.split(" ");

for (let i = 0; i < textArray.length; i++) {
  if (textArray[i]==="et" || textArray[i] ==="et,") {
    etCount++;
  }
};

//different solution by looping through string:

//for (var i = 0; i < text.length; i++) {
//  var currentChar = text[i];
//  var previousChar = text[i-1];
//  var nextChar = text[i+1];
//  var lastChar = text[i+2];
//
//  if(previousChar === " " && currentChar === "e" && nextChar === "t" && (lastChar === " " || lastChar===",")) {
//    etCount+++;
//  }
//};


console.log("Number of 'et': " + etCount);

//Bonus 2:

let phraseToCheck = "A man, a plan, a canal, Panama!";

let emptyString = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] !== " " &&
    phraseToCheck[i] !== "," &&
    phraseToCheck[i] !== "!" &&
    phraseToCheck[i] !== "."
  ) {
    emptyString += phraseToCheck[i];
  }
}

let reverseString = "";

for (let i = emptyString.length - 1; i >= 0; i--) {
  reverseString += emptyString[i];
}

console.log(emptyString.toUpperCase());
console.log(reverseString.toUpperCase());

if (emptyString.toUpperCase() === reverseString.toUpperCase()) {
  console.log("This phrase is a palindrome.");
} else {
  console.log("This phrase is not a palindrome.");
}