console.log("I'm ready!");

//INTERATION 1
//introduction

let hacker1 = "Karolina";
let hacker2 = "Lluis";
console.log("The drivers's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// INTERATION 2
//which name is longer

let lengthHacker1 = hacker1.length;
let lengthHacker2 = hacker2.length;

if (lengthHacker1 > lengthHacker2) {
  console.log(
    "The driver has the longest name, it has " + lengthHacker1 + " characters"
  );
} else if (lengthHacker1 < lengthHacker2) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      lengthHacker2 +
      " characters"
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + lengthHacker1 + " characters"
  );
}

// INTERATION 3

// capitalise hacker1

let capitaliseDriverName = [];

for (let i = 0; i < lengthHacker1; i++) {
  capitaliseDriverName.push(hacker1[i].toUpperCase());
}

console.log(capitaliseDriverName.join(" "));

// reverse hacker2

let newNavigatorsName = hacker2.split("");
newNavigatorsName.reverse();
console.log(newNavigatorsName.join(""));

//WHICH ONE GOES FIRST - alphabetical

let result = hacker1.localeCompare(hacker2);

if (result < 0) {
  console.log("The driver's name goes first.");
} else if (result > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! you both have the same name?");
}

//BONUS

let loremIpsum = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quos facere? Quisquam, quasi cum? Possimus blanditiis saepe nesciunt aut expedita a, quam magni? Aut nisi tenetur pariatur laborum temporibus. Atque?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,quos facere? Quisquam, quasi cum? Possimus blanditiis saepe nesciunt aut expedita a, quam magni? Aut nisi tenetur pariatur laborum temporibus. Atque?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,quos facere? Quisquam, quasi cum? Possimus blanditiis saepe nesciunt aut expedita a, quam magni? Aut nisi tenetur pariatur laborum temporibus. Atque?`;

//Number of words

let numWords = loremIpsum.split(" ");
console.log(`The text has: ${numWords.length}`);

//Number of times "et" occurs in the text

let etCounter = 0;

for (let i = 0; i < numWords.length; i++) {
  if (numWords[i].includes("et")) {
    etCounter++;
  }
}

console.log(`"et" occurs ${etCounter} times in the text`);

// BONUS 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let palindrome = phraseToCheck.split("");
//console.log(palindrome)

//remove spaces and comas

for (let i = 0; i < palindrome.length; i++) {
  if (palindrome[i] === "," || palindrome[i] === " " || palindrome[i] === "!") {
    palindrome.splice(i, 1);
    i--;
  }
}
console.log(palindrome);

// for(let i=0; i<palindrome.length; i++){
//   for(let j=palindrome.length - 1; j<=0; j--){

// if

//     if(palindrome[i]===palindrome[j]){
//       console.log("The phrase is a palindrome!");
//     } else {
//       console.log("The phrase is not a palindrome :(");
//       break;
//     }
//   }
// }

// for(let i=0; i<phraseToCheck.length; i++){
//   for(let j=phraseToCheck.length -1; j>=0; j-- ) {
//     const checkI = phraseToCheck[i]=== ','|| phraseToCheck[i]=== ' '|| phraseToCheck[i]=== '!' ;

//   let counterPos = 1
//   let counterNeg = -1
//     if(checkI){
//     counterPos ++
//     }

//    }
// }
