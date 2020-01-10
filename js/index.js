console.log("I'm ready")

// Iteration 1: Names and Input
let hacker1 = "Alex";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Rob";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let newHacker1 = "";
for (let value of hacker1) {
  newHacker1 = newHacker1 + value.toLocaleUpperCase() + " ";
}
console.log(newHacker1)

let newHacker2 = "";
for (let value of hacker2) {
  newHacker2 = value + newHacker2
}
console.log(newHacker2)

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

//Bonus1 (option with objects - test)

let paragraph = {

paragraph1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum ultrices ante, nec sollicitudin ante varius vitae. Praesent sodales congue ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus odio, gravida id blandit quis, dictum et mi. Donec interdum massa turpis, ut fringilla arcu commodo et. Morbi efficitur pharetra libero. Sed imperdiet venenatis commodo.",

paragraph2:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas in porttitor neque. Nulla feugiat ligula vitae pulvinar luctus. Cras fringilla at orci vitae vulputate. Donec in felis nec ante hendrerit posuere. Pellentesque accumsan sem cursus, rutrum sem in, eleifend est. Suspendisse convallis mattis tortor eget aliquet. Donec dictum, lacus ac elementum eleifend, lorem mi sollicitudin orci, at dictum ipsum turpis non dui. Cras et ex et ligula ultrices facilisis. Vivamus id justo elit. Nulla vitae sapien sed nibh semper auctor euismod at odio. Maecenas ut leo lectus.",

paragraph3:"Fusce vehicula eget arcu id dictum. Donec ullamcorper orci nec elementum imperdiet. Cras nec sem cursus, blandit dui at, dignissim quam. Morbi blandit cursus porttitor. Maecenas rutrum massa fermentum magna egestas varius. Duis vitae congue nisi. Mauris molestie tortor quis viverra varius. Nullam gravida turpis quis finibus mollis. Quisque risus eros, fringilla dapibus rhoncus in, facilisis vitae tortor. In vulputate, turpis in pretium tincidunt, sem sem condimentum orci, sed suscipit nibh enim sed orci. Fusce imperdiet posuere sapien, eu sollicitudin ex iaculis sit amet. Curabitur nec lectus lacus. Nulla vitae fermentum metus, eget semper mi. Donec nec risus eros."

}

for (i = 0; i<3; i++) {
  let paragraphX = Object.entries(paragraph)[i][1];
  let paragraphLength = paragraphX.split(" ").length;
  console.log(`Paragraph ${i+1} has ${paragraphLength} words`);
}

//Bonus1

let myParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum ultrices ante, nec sollicitudin ante varius vitae. Praesent sodales congue ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus odio, gravida id blandit quis, dictum et mi. Donec interdum massa turpis, ut fringilla arcu commodo et. Morbi efficitur pharetra libero. Sed imperdiet venenatis commodo. 

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas in porttitor neque. Nulla feugiat ligula vitae pulvinar luctus. Cras fringilla at orci vitae vulputate. Donec in felis nec ante hendrerit posuere. Pellentesque accumsan sem cursus, rutrum sem in, eleifend est. Suspendisse convallis mattis tortor eget aliquet. Donec dictum, lacus ac elementum eleifend, lorem mi sollicitudin orci, at dictum ipsum turpis non dui. Cras et ex et ligula ultrices facilisis. Vivamus id justo elit. Nulla vitae sapien sed nibh semper auctor euismod at odio. Maecenas ut leo lectus.

Fusce vehicula eget arcu id dictum. Donec ullamcorper orci nec elementum imperdiet. Cras nec sem cursus, blandit dui at, dignissim quam. Morbi blandit cursus porttitor. Maecenas rutrum massa fermentum magna egestas varius. Duis vitae congue nisi. Mauris molestie tortor quis viverra varius. Nullam gravida turpis quis finibus mollis. Quisque risus eros, fringilla dapibus rhoncus in, facilisis vitae tortor. In vulputate, turpis in pretium tincidunt, sem sem condimentum orci, sed suscipit nibh enim sed orci. Fusce imperdiet posuere sapien, eu sollicitudin ex iaculis sit amet. Curabitur nec lectus lacus. Nulla vitae fermentum metus, eget semper mi. Donec nec risus eros.`

// //console.log(myParagraph)

console.log(`The paragraph has ${myParagraph.split(' ').length} words`)

//More accurate, but complex
function countWords(words) {
  words = words.replace(/(^\s*)|(\s*$)/gi,""); //remove the start and end spaces of the given string.
  words = words.replace(/[ ]{2,}/gi," "); //reduce multiple spaces to a single space.
  words = words.replace(/\n /,"\n"); //exclude a new line with a start spacing.
  words = words.replace(/,|!/gi,"");
  return words.split(' ').length;
}
console.log(`The paragraph has ${countWords(myParagraph)} words`)

//To find and count 'et' word
let myParagraphToArray = myParagraph.split(' ')
function countInArray(array, what) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}
console.log(`Word "et" appears in the paragraph ${countInArray(myParagraphToArray, "et")} times`)


//Bonus2

let phraseToCheck = "A man, a plan, a canal, Panama!"

let phraseToCheckForward = phraseToCheck.replace(/,| |'|!/gi,"").toLowerCase();
let phraseToCheckBackward = "";
for (let value of phraseToCheckForward) {
  phraseToCheckBackward = value + phraseToCheckBackward
}

//console.log(phraseToCheckForward)
//console.log(phraseToCheckBackward)

if (phraseToCheckForward === phraseToCheckBackward) {
  console.log(`Yee! the "${phraseToCheck}" is a Palindrome!!!`)
} else {
  console.log(`Nee! the "${phraseToCheck}" is NOT a Palindrome!!!`)
}