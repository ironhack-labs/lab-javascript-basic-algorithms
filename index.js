// Iteration 1: Names and Input
let hacker1 = "John";
console.log("The driver's name is " + hacker1);

let hacker2 = "Chris";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;
console.log(hacker1Length);
console.log(hacker2Length);

if (hacker1Length === hacker2Length) {
    console.log("Wow, you both have equally long names, " + hacker1Length + " characters!");
} else if (hacker1Length > hacker2Length ) {
    console.log("The driver has the longest name, it has " + hacker1Length + " characters.");
} else {
    console.log("It seems that the navigator has the longest name, it has " + hacker2Length + " characters.");
}

// Iteration 3: Loops

const hacker1SpacesUpperCase = hacker1.split("").join(" ").toUpperCase();
console.log(hacker1SpacesUpperCase);

const hacker2Reverse = hacker2.split("").reverse().join("");
console.log(hacker2Reverse);

const lexicalCompare = hacker1.localeCompare(hacker2);

if (lexicalCompare == 1) {
    console.log("Yo, the navigator goes first, definitely.");
} else if (lexicalCompare == -1 ) {
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1:

const longText = "Lorem ipsum dolor sit amet et consectetur adipisicing elit. Nisi iste, rem est, incidunt nam a assumenda tempore, aperiam cum magni eum earum accusamus minima! Molestiae, ullam sapiente quisquam minus porro neque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus cum, debitis aut placeat consequuntur deleniti necessitatibus inventore laborum quod cum, et corcumporis, libero adipisci ut? Provident delectus quia et modi non et, tempore? Lorem cum ipsum dolor sit, amet consectetur adipisicing elit. Praesentium harum quaerat eos assumenda voluptatibus temporibus, at dolorum tempore recusandae rem impedit, corrupti hic commodi sapiente? Deserunt quos quas eveniet vitae?"

const numberOfWords = longText.split(" ").length;
console.log(numberOfWords);

const longTextWords = longText.split(" ")
/* console.log(longTextWords); */
let numberOfTimes = 0;
const targetWord = "et";
for (const word of longTextWords) {
    if (word.replace(/[.,?!]/g,"") == targetWord) {
        numberOfTimes++;
    }
}
console.log(numberOfTimes);