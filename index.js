// Iteration 1: Names and Input
const hacker1 = "Luis";
const hacker2 = "Pablo";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length == hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
// 3.1:
let resultDriver = '';
const hacker1Spaced = hacker1.toUpperCase().split('')
//console.log(hacker1Spaced)
for (let i = 0; i < hacker1Spaced.length; i++){
    resultDriver += `${hacker1Spaced[i]} `
}
console.log(resultDriver)

// 3.2:
let hacker2Mirror = ''
for (let i = hacker2.length -1; i >= 0; i--){
    hacker2Mirror += hacker2[i]
 }
console.log(hacker2Mirror);

// 3.3:
if (hacker1.toLowerCase() < hacker2.toLowerCase()){
    console.log("The driver's name goes first.")
}
else if (hacker1.toLowerCase() == hacker2.toLowerCase()){
console.log("What?! You both have the same name?")
}
else {
    console.log("Yo, the navigator goes first, definitely.")
}

// Bonus 1:
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis neque magna. Nunc iaculis nibh sed fermentum dignissim. Cras in diam velit. Suspendisse potenti. Nulla sagittis tincidunt enim, sit amet dapibus ex ornare sit amet. Vestibulum maximus malesuada congue. Integer id egestas tellus. In tincidunt nisi rutrum tortor consequat, scelerisque ullamcorper libero mollis. Aenean at varius arcu. Ut eu diam maximus, sagittis nulla sit amet, placerat erat. Cras posuere justo odio, eget viverra mi consequat quis. Proin auctor orci eget urna feugiat pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tristique justo non laoreet mattis. Phasellus scelerisque hendrerit efficitur. Suspendisse eget sapien quis nisl mattis accumsan quis sit amet mauris. Suspendisse potenti. Suspendisse at tortor nec orci tincidunt facilisis. Cras metus elit, finibus eu luctus eu, elementum sed nulla. Cras ac bibendum nunc. Sed sodales vitae nisl vel finibus. Suspendisse commodo, massa et lobortis laoreet, orci massa vehicula metus, quis dapibus quam metus quis erat. Sed at accumsan enim, ut fermentum nunc. Ut eget placerat est. Pellentesque dictum ut dui eget tempor. Nullam vel auctor risus. Etiam condimentum cursus ligula ut vehicula. In a tristique libero. Vestibulum mi nibh, rutrum id tincidunt ac, lacinia eu libero. Nam varius tempor lectus nec vestibulum. Maecenas sit amet eros vel enim lobortis fermentum vel in leo. Phasellus in tortor metus. Donec feugiat nunc varius blandit auctor. Ut libero mi, tincidunt vitae felis vitae, rutrum tempus justo. Vivamus sit amet venenatis magna, eget consequat elit. Etiam cursus commodo neque, mollis sodales justo. Quisque molestie, quam non bibendum condimentum, diam sapien porta arcu, at maximus lacus enim eu ipsum."

const longTextNumChars = longText.length;

console.log(longTextNumChars);

let count = 0;
for (let i = 0; i < longText.length; i++){
    const twoChars = longText[i] + longText[i + 1] + longText[i + 2]+ longText[i + 3];
    if (twoChars.toLowerCase() === " et " || twoChars.toLocaleLowerCase() === " et."){
        count++;
    }
}
console.log(count);

//Bonus 2:
const phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseNoSpaces = phraseToCheck
  .replace(/[^\w\s]/g, "")
  .split(" ")
  .join("")
  .toLowerCase();
console.log(phraseNoSpaces);

let reversedPhrase = "";
for (let i = phraseNoSpaces.length - 1; i >= 0; i--) {
  reversedPhrase += phraseNoSpaces[i];
}
if (reversedPhrase === phraseNoSpaces) {
  console.log(true);
} else {
  console.log(false);
}