// Console test: console.log("I'm ready!");
// Iteration 1: Names and Input
console.log("Iteration 1: Names and Input");

const hacker1 = "Tom";
console.log("The driver's name is", hacker1);
const hacker2 = "Jerry";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
console.log("\nIteration 2: Conditionals");

let driver = hacker1.length;
let navigator = hacker2.length;
if (driver > navigator){
    console.log(`The driver has the longest name, it has ${driver} characters.`);
} else if (navigator > driver){
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${driver}`);
}

// Iteration 3: Loops
console.log("\nIteration 3: Loops");

// 3.1
let upperDriver = "";
for (char of hacker1){
    upperDriver += char.toUpperCase() + " "; 
}
console.log("3.1:",upperDriver.trim());
// 3.2
let reverseNavigator = "";
let substractor = 1;
for (let i = 0; i < navigator; i++){
    reverseNavigator += hacker2[navigator - substractor];
    substractor += 1;
}
console.log("3.2:",reverseNavigator);
// 3.3
let order = hacker1.localeCompare(hacker2);
if (order === -1){
    console.log("3.3: The driver's name goes first.");
} else if (order === 1){
    console.log("3.3: Yo, the navigator goes first definitely.");
} else {
    console.log("3.3: What?! You both have the same name?");
}

//Bonus 1: Lorem Ipsum Word Counter
console.log("\nBonus 1");

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus nisi metus, quis viverra enim vulputate ac. Morbi laoreet feugiat pretium. Vestibulum sit amet dapibus purus. Fusce quis turpis fermentum, ultrices ante ac, accumsan eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque dignissim eros eget lorem luctus venenatis. Morbi semper imperdiet imperdiet. Vestibulum quis dolor mollis, sagittis tellus a, bibendum est. Praesent at mauris nisl. Aliquam id libero et odio mattis tempor ut vitae tortor. Aliquam vel interdum neque. Proin convallis a nunc id suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat hendrerit sollicitudin.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et diam sem. Morbi at nunc turpis. Nullam varius arcu dictum risus venenatis, sed lobortis neque pretium. Nulla semper at augue quis placerat. Praesent vestibulum nisi eu elit tincidunt porttitor. Vivamus scelerisque bibendum gravida.
Curabitur venenatis ac leo non rhoncus. Sed a finibus mauris. In hac habitasse platea dictumst. Maecenas ac luctus massa, vitae suscipit nisi. Duis pretium felis ut urna sagittis dapibus. Sed in mi sit amet libero scelerisque sollicitudin. In semper posuere mi. Nullam quis nibh a arcu congue tincidunt a quis nibh. Vestibulum non urna pretium, porttitor nisi placerat, pretium est.`;
let wordsArray = loremIpsum.split(" ");
console.log("Number of words in paragraph:",wordsArray.length);
let counter = 0;
for(let i = 0; i < wordsArray.length; i++){
    if (wordsArray[i] === "et"){
        counter += 1;
    }
}
console.log("Number of 'et' appearances:",counter);

//Bonus 2: Palindrome
console.log("\nBonus 2");

const phraseToCheck = "A man, a plan, a canal, Panama!";
console.log("Phrase to check:",phraseToCheck);
let onlyLetters = "";
let invalidChars = ",. !?()&'/";
for (char of phraseToCheck){
    if (invalidChars.includes(char)){
        continue;
    } else {
        onlyLetters += char;
    }
}
let reversed = "";
for (let i = 1; i <= onlyLetters.length; i++) {
    reversed += onlyLetters[onlyLetters.length - i];
}
let isPalindrome = onlyLetters.toLowerCase() === reversed.toLowerCase();
console.log("Is it palindrome?",isPalindrome);
