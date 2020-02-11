// Iteration 1: Names and Input

const hacker1 = "Bob";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has
    ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}
    characters.`);
}

// Iteration 3: Loops let nameInCapital="" ; let nameInReverse="" ;

let nameInCapital = "";

for (let i = 0; i < hacker1.length; i++) {
    nameInCapital += hacker1[i].toUpperCase();

    if (i !== hacker1.length - 1) { // Doesn't add a space if we're by the end of the string
        nameInCapital += " ";
    }
}
console.log(nameInCapital);

let nameInReverse = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
    nameInReverse += hacker1[i];
}
console.log(nameInReverse);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo,the navigator goes definitely first.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1: creating 3 paragraphs and joining them together

const par1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere nulla viverra elit porta sagittis. Maecenas in vestibulum orci, id commodo orci. Integer sed fermentum elit, sed condimentum eros. Aenean venenatis, augue id consectetur euismod, enim mauris tempor ex, vitae mattis ipsum enim ac lacus. Phasellus finibus at massa sed blandit. Nullam sit amet urna ultricies, porttitor odio sit amet, malesuada odio. Integer mattis, odio non vulputate dignissim, lorem odio placerat libero, sed convallis augue libero ut nulla. Etiam sit amet fringilla nulla. Cras sodales et nunc quis tempus. Maecenas hendrerit elit erat, in iaculis est eleifend eget. Integer vehicula tincidunt lacus vitae porttitor. Etiam nulla nibh, imperdiet ut dictum ac, tincidunt ac dolor. Aliquam et sapien metus. Vivamus volutpat imperdiet massa et placerat.";
const par2 =
    "In id interdum lectus, sit amet venenatis orci. Pellentesque libero leo, malesuada in ligula tincidunt, interdum dapibus justo. Nunc eu dictum lorem. Donec consequat, quam at dignissim tincidunt, nunc nulla semper mi, vel hendrerit turpis arcu at orci. Nunc pretium faucibus molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus at blandit metus. Curabitur ultrices sed justo sed placerat. Fusce a velit sed nisi fringilla consequat in at odio. Proin porta vel diam vel molestie.";
const par3 =
    "Fusce porta rhoncus elementum. Cras rutrum commodo diam, non varius nulla interdum at. Vivamus fermentum ipsum urna, id cursus ipsum vestibulum mattis. Nunc sed urna quam. Nulla facilisi. Nullam eu orci porttitor, dictum dui ac, volutpat nulla. Aenean aliquet, mauris id consectetur aliquet, urna lectus tempus mi, eget imperdiet eros orci id tortor. Nam tristique augue vitae nunc mollis, sed blandit nibh condimentum. Phasellus vitae elit iaculis, elementum libero in, hendrerit magna. Fusce placerat, dolor ut ullamcorper ultricies, eros orci molestie lacus, lacinia ultricies mi nibh sit amet nibh. Fusce tincidunt nisl dolor, non hendrerit turpis vulputate a. Nunc quis luctus neque. In hac habitasse platea dictumst. Phasellus lorem ex, efficitur et nibh at, commodo lacinia velit.";

// total = 319 words.

const loremIpsum = par1 + "\n" + par2 + "\n" + par3;

console.log(loremIpsum);

// Counting words, including spaces or new lines as word delimiter

let numberOfWords = 0;
for (let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === " " || loremIpsum[i] === "\n") {
        numberOfWords++;
    }
}
numberOfWords++;

console.log(`This string has ${numberOfWords} words.`);

// Counting how many times the word 'et' appears in the Lorem Ipsum (should be 5 times). 

let countEt = 0;
for (let i = 0; i < loremIpsum.length; i++) {
    if (
        loremIpsum[i] === " " &&
        loremIpsum[i + 1] === "e" &&
        loremIpsum[i + 2] === "t" &&
        loremIpsum[i + 3] === " "
    ) {
        countEt++;
    }
}

console.log(`In this string the Latin word 'et' appears ${countEt} times.`);

// Bonus 2: checking if a string is a palindrome (note: I tried to write a regex function by using a .match method, failing miserably :-) This is the other solution I came up with)

const phraseToCheck = "A man, a plan, a canal, Panama!";
let regularPhrase = "";
let reversedPhrase = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    // Transfers backwards the characters of phraseToCheck and keeps only the alphabetical ones
    if ( // this condition could easily be a switch. Opted for if/else statement instead.
        phraseToCheck[i] === "," ||
        phraseToCheck[i] === "." ||
        phraseToCheck[i] === ";" ||
        phraseToCheck[i] === ":" ||
        phraseToCheck[i] === "!" ||
        phraseToCheck[i] === "?" ||
        phraseToCheck[i] === " " ||
        phraseToCheck[i] === "'" ||
        phraseToCheck === '"'
    ) {
        reversedPhrase += "";
    } else {
        reversedPhrase += phraseToCheck[i];
    }
}

for (let i = 0; i < phraseToCheck.length; i++) {
    // Keeps only alphabetical characters of phraseToCheck, without reverting the string order of characters
    if (
        phraseToCheck[i] === "," ||
        phraseToCheck[i] === "." ||
        phraseToCheck[i] === ";" ||
        phraseToCheck[i] === ":" ||
        phraseToCheck[i] === "!" ||
        phraseToCheck[i] === "?" ||
        phraseToCheck[i] === " " ||
        phraseToCheck[i] === "'" ||
        phraseToCheck === '"'
    ) {
        regularPhrase += "";
    } else {
        regularPhrase += phraseToCheck[i];
    }
}

console.log(reversedPhrase);
console.log(regularPhrase);

if (regularPhrase.toUpperCase() === reversedPhrase.toUpperCase()) {
    // check if the two strings are equal, setting them both toUpperCase to better compare them
    console.log(`The sentence "${phraseToCheck}" is a palindrome!`);
} else {
    console.log(`The sentence "${phraseToCheck}" is not a palindrome.`);
}