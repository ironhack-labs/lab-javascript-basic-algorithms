// Iteration 1: Names and Input

console.log("Im ready!\n");

console.log("Iteration 1:\n");

const hacker1 = "John";
const hacker2 = "Mike";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

console.log("\nIteration 2:\n");

const len1 = hacker1.length;
const len2 = hacker2.length;

if (len1 > len2) {
  console.log("The driver has the longest name, it has" + len1 + "characters");
} else if (len2 > len1){
  console.log("The navigator has the longest name, it has " + len2 + " characters");
} else {
  console.log("Wow, you both have equally long names, "+ len1 + " characters!");
}

// Iteration 3: Loops

console.log("\nIteration 3:\n");

let name1 = "";
for (let i=0;i<hacker1.length;i++) {
  if (i+1 === hacker1.length) { // Condition to avoid an extra space at the end of the string (last iteration)
    name1 += hacker1[i].toUpperCase();
  } else {
    name1 += hacker1[i].toUpperCase() + " ";
  }
}
console.log(name1);

let name2 = "";
for (let i=hacker2.length - 1; i>=0;i--){
  name2 += hacker2[i];
}
console.log(name2);

// Lexicographic order: We use < or > comparators
if (name1 < name2) {
  console.log("The driver's name goes first.");
} else if (name2 < name1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

console.log("\nBONUS 1:\n");

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mollis sapien. Mauris eget condimentum turpis, non aliquet sapien. Maecenas sollicitudin arcu in magna tincidunt sollicitudin quis eget risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eget sem condimentum, accumsan libero id, pretium urna. Pellentesque bibendum purus non aliquam pellentesque. Nullam ultrices odio eget libero efficitur, a ultrices enim vestibulum. Ut vehicula est feugiat, laoreet lacus ut, efficitur sem. Vivamus egestas velit et mauris blandit, sed rutrum tellus varius. Proin sed urna lorem. Vivamus eu rutrum leo, sed feugiat odio. Curabitur lacinia porttitor eros, at vestibulum ligula iaculis in. In lacus magna, malesuada aliquet dignissim ac, accumsan eget justo. Aliquam vitae felis dapibus, commodo dolor vel, accumsan lectus.

Etiam eleifend bibendum velit sit amet lobortis. Nullam consectetur, enim eu vehicula feugiat, quam elit feugiat ipsum, nec rhoncus elit nulla a dui. Donec in accumsan metus. Donec in posuere lacus. Fusce quis urna malesuada, porttitor erat id, venenatis nunc. Fusce cursus metus luctus neque ornare, et auctor lacus luctus. Integer et sapien est. Cras in lectus ut enim placerat aliquam. Maecenas eu nisl maximus, rutrum massa id, finibus justo. Etiam id tortor id nisl interdum eleifend sit amet vitae diam. Sed et ultricies mauris. Vivamus gravida mollis felis eu gravida. Donec hendrerit egestas mi vitae cursus. Duis porttitor luctus lacinia. Cras sollicitudin porttitor dolor vel pellentesque. Vestibulum eget quam pharetra diam porttitor hendrerit.

Cras rhoncus elementum quam vitae lacinia. Cras orci elit, efficitur quis orci in, rhoncus sagittis tellus. Fusce risus nisi, laoreet vel eros et, auctor venenatis orci. Donec quis fringilla ante, in malesuada odio. Sed nibh sem, feugiat at imperdiet ut, congue tempor lorem. Maecenas mollis, dolor scelerisque viverra varius, nunc justo dapibus urna, et commodo nisl ex non risus. In vestibulum, leo eu vulputate dignissim, ante elit congue leo, a sollicitudin justo leo at eros. Praesent luctus, quam ac hendrerit varius, tortor tortor feugiat lorem, id scelerisque leo mi eu odio. Aliquam viverra tincidunt libero. Morbi a condimentum lacus, eget eleifend quam. Donec lectus nisi, auctor quis quam quis, tristique convallis risus.`;

let inWord = false;
let count = 1; // Starts counting from 1 to compensate last word not being counted
for (let i=0;i<longText.length;i++) {
  // Number of words will be equal to the number of spaces and line breaks (or double line breaks) + 1
  // Counting spaces and double line breaks, since the format is 3 paragraphs.
  if (longText[i] == " " || (longText[i] == "\n" && longText[i+1] != "\n")) {
    count += 1;
  }
}
console.log("The text has " + count + " words");


let et = "";
count = 0; // Re-use last exercice variable
for (let i=0;i<longText.length;i++) {
  // Every time we encounter a space, we process the string collected
  // Taking into account: spaces, line breaks and end of text.
  if (longText[i] === " " || longText[i] === "\n" || i === longText.length - 1) {
    /* Diverse ways we can encounter the word, the second and
    last one are probably not possible in a latin text but added anyways.*/
     if (et === "et" || et === "et." || et ==="Et") {
        count += 1;
      }
    et = ""; // Reset word
  } else {
    et += longText[i]; //Continue iterating character to character
  }
}

console.log("The word et appears " + count + " times");

console.log("\nBONUS 2:\n")

const palindrome = "A man, a plan, a canal, Panama!";
let processed = "";
// Clean characters that are no letters (symbols like !, /, "", ?,-,etc. and spaces)
for (let i=0;i<palindrome.length;i++) {
  // Check if the character is within the range of uppercase and lowercase letters
  if ((palindrome[i].charCodeAt(0) >= 65 && //65->90 Uppercase
       palindrome[i].charCodeAt(0) <= 90) ||
      (palindrome[i].charCodeAt(0) >= 97 && //97->122 Lowercase
       palindrome[i].charCodeAt(0) <= 122)) {
    processed += palindrome[i]; // If it is a letter, concatenate, 
  }
}
// The final product is only letters, no spaces/special characters.
processed = processed.toLowerCase();

let coincide = true;
// Compare each caracter starting from first and last characters, one by one
for (let i=0;i<processed.length / 2;i++) { // We only need to run through half the string
  if (processed[i] !== processed[processed.length - 1 - i]) { // Comparing character to character
    coincide = false; // As soon as there is no coincidence, boolean becomes false and breaks loop.
    break;
  }
}

console.log("The sentence provided is a palindrome: " + coincide);

