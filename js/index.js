// Iteration 1: Names and Input

const hacker1 = "Areeba";
console.log(hacker1);

const hacker2 = "Yorick";
console.log(hacker2);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  
else if (hacker2.length > hacker1.length){
console.log("It seems that the navigator has the longest name, it has ${hacker2.length} characters.");
}

else
console.log("Wow, you both have equally long names, XX characters!");

// Iteration 3: Loops

//3.1
let capName = ""

for(let i = 0; i < hacker1.length; i++){
  capName += hacker1[i].toUpperCase() + " "
}

console.log(capName);

//3.2
let reverseName = "";

for(let i = hacker2.length-1; i >= 0 ; i--){
  reverseName += hacker2[i];
}

console.log(reverseName);

//3.3
if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
}
  
else if (hacker2 < hacker1){
console.log("Yo, the navigator goes first definitely.");
}

else
console.log("What?! You both have the same name?");


//Bonus 1 (b)

let wordCount = 0;

for(let i= 0; i < loremIpsumText.length; i++){
  if (loremIpsumText.slice(i, i+2) === "et" ){
    wordCount++;
  }
}

console.log(wordCount);