// Aleah, Marcia and Robert

// Iteration 1: Names and Input
let hacker1 = 'Robert';
let hacker2 = 'Marcia';

console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigator's name is ${hacker2}"`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

// 3.1 
let myString = "";
for (let i = 0; i < hacker1.length; i++) {
    myString += hacker1[i].toUpperCase() + " ";
}
console.log(myString);

// 3.2
let myReverseString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    myReverseString += hacker2[i];
}
console.log(myReverseString);

// 3.3
// localeCompare()
// console.log(hacker1.localeCompare(hacker2));
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}


// Bonus 1

// Generate 3 paragraphs. Store the text in a variable type of string.
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue suscipit mauris ac condimentum. Mauris imperdiet augue ante, et porta eros porttitor vel. Etiam consectetur a diam eget condimentum. In placerat rhoncus elit eget tincidunt. Duis fermentum lacus vitae molestie consequat. Sed ornare nisl dictum sodales varius. In eget vestibulum nisl. Aenean iaculis aliquet nisl, ac pellentesque est elementum a. Phasellus sed sapien nec leo ullamcorper congue. Quisque eu mauris sed lacus condimentum porttitor in a libero. Ut et nibh id nibh ornare lacinia quis ac sapien. Vestibulum eget libero a leo rutrum aliquam vel ut ex. Phasellus eget cursus ligula. Aliquam commodo feugiat est, in feugiat massa condimentum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam blandit sodales erat, nec rhoncus nulla. In efficitur pharetra blandit. Nunc porta tempor mauris vel accumsan. Ut eu ipsum consectetur, porta nisi in, sollicitudin mi. Mauris sit amet diam mattis, lacinia ipsum non, hendrerit leo. Nam ac quam quis nibh convallis venenatis non sit amet enim. Aenean euismod nunc at nisl malesuada, eu tristique velit efficitur. Vestibulum convallis tortor et nunc tristique cursus ut ac sapien. Suspendisse tempus risus id aliquam porta. Praesent sit amet justo at erat vehicula pretium. Fusce et risus massa. Praesent ut tristique mauris. Integer et dui sagittis, pharetra turpis a, molestie lorem. Suspendisse lobortis quam non tortor viverra efficitur. Integer commodo lectus ut risus vehicula, eu congue est egestas."

// Make your program count the number of words in the string.
function wordCount(str) {
    return str.split(" ").length;
}
console.log(wordCount(loremIpsum));


// WE ARE HERE (it does not work yet)

// Make your program count the number of times the Latin word et appears. 

// let smallString = "I am Marcia";
// console.log(wordCount(smallString));
// let myArray = ["I", "am", "Marcia"];
// console.log(myArray.length);

console.log(loremIpsum.search("et"));

for (let i = 0; i < loremIpsum.length; i++) {
    console.log(loremIpsum[i].search("et"));
}

/*
console.log(loremIpsum.includes("et"));

let count = 0;
loremArray = loremIpsum.split(" ")
for (let i = 0; i < loremArray.length; i++) {
    count += loremArray[i].search("et");
}
console.log(count);
*/


// Bonus 2