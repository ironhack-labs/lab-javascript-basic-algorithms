// Iteration 1: Names and Input
let hacker1 = "Mateo";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Naim";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops
//3.1
let nameUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) {
        nameUpperCase += hacker1[i].toUpperCase();
    } else {
        nameUpperCase += hacker1[i].toUpperCase() + " "
    }
}
console.log(nameUpperCase)

//3.2
let nameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReverse += hacker2[i]
}
console.log(nameReverse)

//3.3
let abc = "abcdefghijklmnopqrstuvwxyz";
let numName;
let numName2;
for (let a = 0; a < abc.length; a++) {
    if (hacker1[0].toLowerCase() === abc[a]) {
        numName = a
    } else if (hacker2[0].toLowerCase() === abc[a]) {
        numName2 = a
    }

}

if (numName < numName2) {
        console.log("The driver's name goes first.")
    } else if (numName > numName2) {
        console.log("Yo, the navigator goes first, definitely.")
    } else {
        console.log("What?! You both have the same name?")
    }

//Bonus
let longText = "Lorem et Ipsum is simly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
let numberWords = 1;
let etCount = 0;

if (longText === "") {
    numberWords = 0
} else if (!longText.includes(" ") && !longText === "") {
    numberWords = 1
}

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        numberWords += 1
    } else if (longText[i] === "e" && longText[i + 1] === "t" && longText[i - 1] === " " && longText[i + 2] === " ") {
        etCount += 1
    }
}

console.log(numberWords)
console.log(etCount)
