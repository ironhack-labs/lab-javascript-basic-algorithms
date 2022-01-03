// Iteration 1: Names and Input

let hacker1 = "Clara";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Chris";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}  else if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}



// Iteration 3: Loops

let newDriver = "";

for (let i=0; i<hacker1.length;i++) {
    newDriver += hacker1[i] + " ";
    
}

console.log(newDriver.toUpperCase());

let newNavigator = ""

for (let i=(hacker2.length-1); i>-1; i--) {
   newNavigator+= hacker2[i]
}

console.log(newNavigator);

if (hacker1.localeCompare(hacker2) === 0) {
     console.log(`What?! You both have the same name?`);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`The driver's name goes first.`);
}

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
 It was popularised in the 1960s with the release of et Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
like Aldus PageMaker including versions et of Lorem Ipsum.`;

console.log(`There are ${text.split(" ").length} words in the sentence.`);


let startOfTheString = 0;
let etCounter = 0;
let index = 0;

while (text.indexOf(" et ", startOfTheString)!==-1) {
    index = text.indexOf(" et ", startOfTheString);
    startOfTheString = index+2;
    etCounter++;
}


if (etCounter === 0) {
    console.log(`There is no "et" in the sentence`);
}  else {
    console.log(`There is/are ${etCounter} in the sentence.`)
}

let phraseToCheck = "race car";

phraseToCheck = phraseToCheck.replace(/\s/g, '');

let backwords = "";

for (let i=(phraseToCheck.length-1); i>-1; i--) {
    backwords+= phraseToCheck[i];
 }


if (phraseToCheck===backwords) {
    console.log(`It is a palindrome.`);
} else {
    console.log(`It is not a palindrome.`);
}

