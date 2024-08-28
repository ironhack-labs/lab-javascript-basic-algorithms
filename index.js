// Iteration 1: Names and Input
let hacker1 = "Diego";
let hacker2 = "David";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
else if(hacker1.length < hacker2.length) console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else if(hacker1.length === hacker2.length) console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops

let fraseUpper = "";

for(let i = 0; i<hacker1.length; i++){
    fraseUpper += hacker1[i].toUpperCase();
    if(i < hacker1.length-1) fraseUpper += " ";
}

console.log(fraseUpper);

let reverse = ""

for(let i = hacker1.length-1; i>=0; i--){
    reverse += hacker1[i];
}

console.log(reverse);

hacker1 = "Diego";
hacker2 = "Diego";

for(let i = 0; i<hacker1.length; i++){
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        break;
    }
    else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first, definitely.");
        break;
    }
    if (i === hacker1.length-1) console.log("What?! You both have the same name?");
}

let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let count = 0;
let countLatin = 0;

for(let i=0; i<longText.length; i++){
    if(longText[i] === " " && longText[i+1] !== " ") count++;
    if(longText[i] === "e" && longText[i+1] === "t") countLatin++;
}

console.log(count, countLatin);

let phraseToCheck = "Amor, Roma";

let newPhrase = phraseToCheck.replaceAll(",", "");
newPhrase = newPhrase.replaceAll(" ", "");
newPhrase = newPhrase.replaceAll("!", "");

newPhrase = newPhrase.toLowerCase();
console.log(newPhrase);

let reversePhrase2 = "";

for(let i=newPhrase.length-1; i>=0; i--) {
    reversePhrase2 += newPhrase[i];    
}

if(newPhrase === reversePhrase2) console.log(`${phraseToCheck} is a Palindrome!`);
else console.log(`${phraseToCheck} not is a Palindrome!`);