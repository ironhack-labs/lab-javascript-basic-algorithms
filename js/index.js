// Iteration 1: Names and Input
let hacker1 = "Sofia";
console.log(hacker1);

let hacker2 = "Raul";
console.log(hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}


// Iteration 3: Loops
//1
for (i = 0; i<hacker1.length; i++){
    result += hacker1.charAt(i).toUpperCase() + " ";
}

console.log(result);

console.log(
    hacker1
    .split("")
    .join(" ")
    .toUpperCase()
);

//2

for(i=hacker1.length; i>=0; i--) {
    result += hacker1.charAt(i);
  }

  console.log(result);

  console.log(
    hacker1
    .split("")
    .reverse()
    .join("")
);

//3

switch (hacker1.localeCompare(hacker2)) {
    case 1:
    console.log("The drivers name goes first");
    break;
    case -1:
    console.log("Yo, the navigator goes first definitely.");
    break;
    default:
    console.log("What?! You both have the same name?");
}

//BONUS 1

let loremParr = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Corporis harum eaque corrupti nostrum autem vitae, ab blanditiis molestiae,
voluptatum totam beatae cupiditate quis hic tenetur quae optio sit sed aperiam.`;

function countLorem(str){
  let splitLorem=str.split(" ").length;
  console.log("resultado:",splitLorem)
}

countLorem(loremParr);

////////////////////////

let count = 0;
let splitParr = loremParr.split(" ");
for (let i=0; i < splitParr.length; i++) {
  if (splitParr[i] === "et"){
   count = count + 1;
  }
}
console.log(count);

//BONUS 2
let phraseToCheck1 = "race car";
let phraseToCheck2 = "Was it a car or a cat I saw?";
let phraseToCheck3 = "No 'x' in Nixon";

function checkPhrase(phrase) {
let noSpace = phrase.replace(/[^a-zA-Z0-9]/g, "");
let revPhraseNoSpace = phrase.split("").reverse().join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
if (noSpace === revPhraseNoSpace) {
  console.log("Its a Palindrome!")
} else {
  console.log("Its not a Palindrome!")
}
}
checkPhrase(phraseToCheck2);