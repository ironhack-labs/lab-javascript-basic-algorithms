// Iteration 1: Names and Input
let hacker1 = "Sarah";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Franzi";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length +" characters!");
} else {
    console.log("There seems to be a problem...");
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driversName = "";
for (let i = 0; i < hacker1.length; i++) {
    driversName += hacker1[i].toUpperCase() + " ";
    //console.log(i);
}
console.log(driversName);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorName = "";
const theLetters = [];
for (let i = 0; i < hacker2.length; i++) {
    theLetters.unshift(hacker2[i]);
}
for (let i = 0; i < theLetters.length; i++) {
    navigatorName += theLetters[i];
}
console.log(navigatorName);

// 3.3 Depending on the lexicographic order of the strings, print:
let theDriver = hacker1.toLowerCase();
let theNavigator = hacker2.toLowerCase();
const result = theDriver.localeCompare(theNavigator);

if (result === -1) { // -1 Driver first
    console.log("The driver's name goes first.");
} else if (result == 1) { // 1 Navigator first
    console.log("Yo, the navigator goes first definitely.");
} else { // 0 // Same
    console.log("What?! You both have the same name?");
}

//*** Bonus 1:
// Generate 3 paragraphs. Store the text in a variable type of string.
let loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus fermentum, dictum nisl auctor, porttitor eros. Phasellus sollicitudin nisi mauris, eu posuere turpis sollicitudin sit amet. Maecenas at dui varius erat dignissim condimentum. Donec pretium est et metus rhoncus, a convallis dui accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean tincidunt tellus nisi, et iaculis ligula blandit a. Curabitur eleifend tortor in efficitur blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eleifend fringilla arcu sit amet congue. Aliquam aliquam sodales metus, fringilla pharetra augue fringilla et. In eu cursus orci, sed semper leo.

Ut sollicitudin elit congue imperdiet euismod. Donec eget dui lectus. Aliquam placerat elit lacus, quis eleifend nibh mattis sit amet. Nulla facilisi. Mauris posuere lacinia mauris, non hendrerit sem dignissim a. Nullam ac eros suscipit, cursus magna quis, cursus risus. Vivamus vitae ante lobortis, blandit arcu ac, pulvinar massa. Morbi efficitur leo vel libero dignissim, pretium mattis lacus pulvinar. Mauris nec ex a orci blandit imperdiet.

Sed vitae nibh sed dui laoreet aliquet. Praesent in aliquet leo. Fusce quis erat purus. Vestibulum scelerisque egestas dolor quis auctor. Fusce pellentesque gravida vehicula. Etiam cursus odio vitae erat efficitur dapibus. Morbi id dictum lorem, eget venenatis nibh.`;

// Make your program count the number of words in the string.
function countWords(str) { 
    return str.split(" ").length;
}
  
console.log(countWords(loremIpsum));

// Make your program count the number of times the Latin word et appears.
function countOccurence(str, theWord) {
    return str.split(theWord).length -1;
}
console.log(countOccurence(loremIpsum, "et"));

//*** Bonus 2:
/*
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
*/