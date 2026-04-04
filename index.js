// Iteration 1: Names and Input

let hacker1 = 'Leonidas'
console.log("The driver's name is " + hacker1)

let hacker2 = 'Khatuna'
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}   else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}   else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}


// Iteration 3: Loops

let i = 0;
let result = "";

while (i < hacker1.length) {
    result += hacker1[i].toUpperCase() + " ";
    i++
}

console.log(result);

let j = hacker2.length -1
let result2 = "";

while (j >= 0) {
    result2 += hacker2[j];
    j--;
}

console.log(result2)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

const longText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum aliquet ante eget tristique. Nam non dolor vitae tellus lobortis dapibus. Proin massa mauris, tempus at semper non, luctus non dolor. Curabitur consectetur purus ut lorem ornare ultrices. Morbi mollis dictum commodo. Aenean sagittis purus a ipsum aliquet ullamcorper. Donec volutpat, nunc id condimentum lacinia, ex nibh ornare orci, in fermentum dolor eros sit amet enim. Integer pulvinar, sapien eu varius viverra, nulla augue gravida diam, sed ultricies ex est quis velit. Nullam sit amet tincidunt tortor, in viverra nunc. Maecenas mauris magna, cursus id iaculis in, fermentum vel erat. Duis aliquet risus a elit pulvinar pellentesque. Aliquam lectus enim, cursus finibus maximus nec, luctus cursus orci.

Nullam et orci tincidunt, commodo justo eget, sollicitudin est. Donec ornare justo eget commodo porttitor. Nulla sed justo vel nulla commodo laoreet et non orci. Nullam feugiat lobortis sem ac lacinia. Suspendisse potenti. Nam consectetur ullamcorper dui ac convallis. Pellentesque vehicula aliquam fringilla. Mauris eget nibh in ligula semper finibus consequat ac nisi. Phasellus vitae semper massa. Vestibulum eget tristique lacus. Donec in nibh ut leo volutpat laoreet. In hac habitasse platea dictumst.

Nam non orci consequat, fermentum felis sed, accumsan ligula. In hac habitasse platea dictumst. Ut dignissim augue lorem, at congue mauris consequat in. Morbi ut posuere nulla. Maecenas pharetra elementum nulla, ut posuere risus feugiat id. Fusce pulvinar bibendum metus, ac malesuada metus faucibus sit amet. Donec ut turpis leo. Nunc egestas dolor magna, et semper eros tincidunt ac. `

let wordsInString = longText.length

console.log(wordsInString)

let countWord = 0;
let wordSearch = "et"
let words = longText.split(" ");

for (let word of words) {
    if (word == wordSearch) {
        countWord++;
    }
}

console.log(countWord);

let phraseToCheck = "Amor, Roma";
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, "");
let reversedPhrase = "";

for (let i = cleanedPhrase.length -1; i >= 0; i--) {
    reversedPhrase += cleanedPhrase[i];
}

if (cleanedPhrase === reversedPhrase) {
    console.log("It's a palindrome!")
} else {
    console.log("It's not a palidrome!")
}