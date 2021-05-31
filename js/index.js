// Iteration 1: Names and Input
let hacker1 = "Aoão"; //Driver
let hacker2 = "João";     // Navigators
let hackerLen1 = hacker1.length;
let hackerLen2 = hacker2.length;
console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);
// Iteration 2: Conditionals

if (hackerLen1 > hackerLen2){
    console.log(`The driver has the longest name, it has ${hackerLen1} characters.`);
} else if (hackerLen1 < hackerLen2){
    console.log(`The navigator has the longest name, it has ${hackerLen2} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hackerLen1} characters`);
}


// Iteration 3: Loops
let nameHacker1 = "";
let nameHacker2 = "";
for (let i = 0; i < hackerLen1; i++){
    nameHacker1 = nameHacker1 + hacker1[i].toUpperCase() + " ";
}

for (let i = hackerLen2 -1; i >= 0; i--){
    nameHacker2 = nameHacker2 + hacker2[i];
}
console.log(nameHacker1);
console.log(nameHacker2);

if (hacker1 < hacker2){ //
    console.log("The drivers name goes first");
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator comes first");
} else {
    console.log("What?! You both have the same name?");
}

//Bonus 1
const lor = "Lorem ipsum dolor sit et amet asasas et" //Its not all the paragraphs cause im testing
let contador = 0;
let contLor = 0;
for (let i= 0; i<lor.length;i++){
    if (lor[i]=== " "){
        contador++;
    }
}

console.log(contador +1);

let lorSplit = lor.split(" ");
for (let i = 0; i<lorSplit.length; i++){
    if (lorSplit[i] === "et"){
        contLor++;
    }
}
console.log(contLor);

//Bonus 2

let phrase = "Roma amor";
let testPalin = "";
for (let i = phrase.length -1; i >= 0; i--){
    testPalin = testPalin + phrase[i].toLowerCase();
}
let phraseTest = phrase.toLowerCase()

if (phraseTest === testPalin){
    console.log(`${phraseTest} e ${testPalin} são palíndromos!`)
}
else {
    console.log(`${phraseTest} e ${testPalin} não são palíndromos!`)
}

console.log(phrase, testPalin)
