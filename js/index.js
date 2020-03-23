console.log("I'm ready")

// Iteration 1: Names and Input
const hacker1 = "Marie";
console.log(`"The driver's name is ${hacker1}"`);
const hacker2 = "Yosra";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
}

// Iteration 3: Loops
let newDriverName = "";
for (let i = 0; i < hacker1.length; i++) {
    newDriverName += hacker1[i].toUpperCase() + " "
}
console.log(newDriverName);

let newNavigatorName = "";
for (let i = hacker2.length-1; i >= 0; i--) {
    newNavigatorName += hacker2[i]
}
console.log(newNavigatorName);

if (hacker1.localeCompare(hacker2) === -1){
    console.log(`The driver's name goes first.`)
} else if ((hacker2.localeCompare(hacker1) === 1)){
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1
const paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
console.log(paragraph.split(" ").length);
console.log(paragraph.split(" et ").length-1);

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseOnlyLetters = "";
for (let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck[i] == " " || phraseToCheck[i] == "," || phraseToCheck[i] == "!" || phraseToCheck[i] == "?" || phraseToCheck == "." || phraseToCheck == "'" || phraseToCheck == '"' || phraseToCheck == "," ){
        continue;
    }
    phraseOnlyLetters += phraseToCheck[i].toLowerCase();
}
let reversePhrase = "";
for (let i = phraseOnlyLetters.length-1; i >= 0; i--) {
    reversePhrase += phraseOnlyLetters[i]
}
console.log(reversePhrase);

if(reversePhrase === phraseOnlyLetters){
    console.log("We win!")
} else {
    console.log("Try again!")
}