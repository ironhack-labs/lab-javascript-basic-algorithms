// Iteration 1: Names and Input
let hacker1 = "John";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Andrew";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let newDriverName = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i != hacker1.length - 1){
        newDriverName += hacker1[i].toUpperCase() + " ";
    }
    else{
        newDriverName += hacker1[i].toUpperCase();
    }
}
console.log(newDriverName);

let newDriverName2 = hacker1.toUpperCase().split("").join(" ")
console.log(newDriverName2);

let newNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigator += hacker2[i];
}
console.log(newNavigator);


console.log(hacker2.split("").reverse().join(" "));

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let word_count = longText.split(" ").length;

console.log(word_count);

let et_count = (longText.match(/et/g) || []).length;

console.log(et_count);

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let phraseCleaned = phraseToCheck.toLowerCase().replace(/[^a-z]/g, '');

isPalindrome = phraseCleaned === phraseCleaned.split("").reverse().join("")

console.log(isPalindrome)
