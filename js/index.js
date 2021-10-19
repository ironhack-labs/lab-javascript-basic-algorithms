console.log("I'm ready");

// Iteration 1: Names and Input
let hacker1 = 'Greg';
console.log (`The driver's name is ${hacker1}`);
let hacker2 = 'Carlos';
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driver = hacker1.length;
let navigator = hacker2.length;

if (driver > navigator){
    console.log (`The driver has the longest name, it has ${driver} characters.`);
} else if (navigator > driver){
  console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`);
} else {
  console.log(` Wow, you both have equally long names, ${driver} characters!`);
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let upperCase = '';

for (i = 0; i < hacker1.length; i++){
     upperCase += hacker1[i].toUpperCase() + ' ';
}
console.log(upperCase.trim());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
//1. creating new empty var to store end result
let reversedName = '';
//2. create loop and code to run
for (let k = hacker1.length -1; k>=0; k --){
  reversedName += hacker1[k];
}
console.log(reversedName);

//3.3 Depending on the lexicographic order of the strings, print:

if (hacker1 > hacker2){
console.log (`The driver's name goes first.`);
} else if (hacker2 > hacker1){
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`)
}

//Bonus 1
let loremString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sapien eget nunc convallis elementum vitae id sem. In aliquet tincidunt tempor.';

//trim the start and end spaces first
let trimmedLorem = loremString.trim();

 //COUNT THE NUMBER OF WORDS IN THE STRING
 let counter =0;

for (character of trimmedLorem) {
  if (character === " ") counter += 1;
}
console.log(`Word count is ${counter + 1}.`);

  
 //Bonus 2
 
 let text = "Amor Roma";
 let backwardsText = "";
 
 for (let h = text.length - 1; h >= 0; h--) {
   backwardsText += text[h];
 }
 
 if (text.toLowerCase() === backwardsText.toLowerCase()) {
   console.log(`${text} is a Palindrome`);
 } else {
   console.log(`${text} is not a Palindrome`);
 }


 