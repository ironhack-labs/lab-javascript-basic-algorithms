// Iteration 1: Names and Input
let hacker1 = "stephanie";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "gabriel";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems like the navitagor has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let capitalizedName = "";
for (let i = 0; i < hacker1.length; i++) {
    capitalizedName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalizedName);

let reversedName = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
    reversedName += hacker2[j];
}
console.log(reversedName)

if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) == 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}


//Bonus 1
let paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
let counter = 0;
for (let i = 0; i < paragraph.length; i++) {
    const char = paragraph[i];
    if (char === " " || char === ".") {
        counter++;
    }
}
console.log(counter)


//Bonus 2
let phraseToCheck = "Amor, Roma";
let straightPhrase = "";
let reversedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    const char = phraseToCheck[i];  
    if (char === " " || char === ",") {
        continue;
    }
    straightPhrase += char.toLowerCase();
}

for (let j = phraseToCheck.length - 1; j >= 0; j--) {
    const char = phraseToCheck[j];
    if (char === " " || char === ",") {
        continue;
    }
    reversedPhrase += char.toLowerCase();
}

if (straightPhrase === reversedPhrase){
    console.log("It's a palindrome!")
}else {
    console.log("Not a palindrome. Try again.")
}