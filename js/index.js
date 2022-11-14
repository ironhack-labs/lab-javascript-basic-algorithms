// Iteration 1: Names and Input

let hacker1 = "John"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Steve"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }
  else if (hacker1.length > hacker2.length) {
     console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else {
     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }

// Iteration 3: Loops
//3.1

console.log(hacker1.toUpperCase().split('').join(' '));

//3.2

let reverse = ''

for (let i = hacker2.length -1; i >= 0; i--) {
  reverse += hacker2[i];
}

//3.3

let order = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let hacker1Upper = hacker1.toUpperCase();
let hacker2Upper = hacker2.toUpperCase();

if (hacker1Upper === hacker2Upper){
    console.log("What?! You both have the same name?")
  }
  else {
    for (let i = 0; i < hacker1Upper.length; i++){
      if (order.indexOf(hacker1Upper[i]) < order.indexOf(hacker2Upper[i])){
        console.log("The driver's name goes first");
        break;
      }
      else {
        console.log("Yo, the navigator goes first definitely.");
        break;
      }
    }
  }

  //Bonus 1

let numberOfWords = 0;
let textArray = text.split(" ");
let vecesEt = 0

for (let i = 0; i < text.length; i++){
  numberOfWords += 1;
  if (textArray[i] === "et") {
    vecesEt += 1;
  }
}

//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phrase = phraseToCheck.replace(/[^a-zA-Z ]/g, "");
let phraseUnited = phrase.split(' ').join('');
let phraseUp = phraseUnited.toUpperCase();

for (let i = 0; i < phraseUp.length; i++){
  if (phraseUp[i] !== phraseUp[phraseUp.length -1 -i]){
    console.log("This is not a palindrome");
    break;
  }
  else {
    console.log("Is a palindrome")
    break;
  }
 }