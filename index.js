// Iteration 1: Names and Input

const hacker1 = 'Sevda';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Enes';
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else { console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) }



// Iteration 3: Loops

//3.1

let result = '';

for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i] + ' ';
}

console.log(result.toUpperCase());

//3.2

let reversedName = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}

console.log(reversedName);


//3.3

if (hacker1 < hacker2) { 
    console.log("The driver's name goes first.")
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.")
} else  { console.log("What?! You both have the same name?") }




//Bonus


const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ligula at massa tincidunt consectetur non id arcu. Phasellus congue odio et ligula auctor, tempus volutpat tellus facilisis. Sed auctor in mi sed fringilla. Maecenas ultrices, ligula tempor finibus finibus, libero eros porta risus, sed auctor nisi turpis id est. Vestibulum tempor tristique elit. Pellentesque ante nisi, vulputate nec bibendum id, scelerisque vitae magna. Nunc molestie vitae eros a imperdiet. Etiam quis magna aliquet, tempus libero in, euismod erat. Donec sed eros nisl.

Praesent id nisl augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor faucibus leo, quis volutpat risus luctus eget. Nullam pulvinar justo pulvinar diam commodo convallis. Phasellus ultrices vulputate vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed luctus lacus at ultricies placerat. Duis porttitor, urna varius consequat blandit, nisl purus hendrerit enim, vel sodales libero magna quis elit. Fusce congue nunc lectus, et auctor massa eleifend eget. Nulla consequat quam neque, et euismod purus tempor sed.

Nunc interdum gravida felis. Nam volutpat ipsum a eros rutrum accumsan. Pellentesque semper finibus elit id sollicitudin. Nulla dui turpis, rhoncus vulputate ligula non, bibendum faucibus mauris. Vivamus quis commodo dolor. Duis nisl arcu, tempus non finibus vel, egestas eu quam. Sed tristique quam eget ornare vehicula.`


const words = longText.split(" ");
console.log(`Number of words: ${words.length}`);

let count = 0;

for (let i = 0; i < longText.length; i++) {

    const twoChars = longText[i] + longText[i + 1]
    if (twoChars === "et") {
        count++;
    }
}

console.log(count);


//bonus


let phraseToCheck = "Amor, Roma";


// 1. Clean the string: keep only letters and numbers, convert to lowercase
let cleaned = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  const ch = phraseToCheck[i].toLowerCase();
  if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
    cleaned += ch;
  } else {
    continue; // skip anything that's not a letter or digit
  }
}
// 2. Compare characters from start and end
let isPalindrome = true;
for (let i = 0; i < cleaned.length / 2; i++) {
  if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
    isPalindrome = false;
    break; // stop as soon as a mismatch is found
  }
}
// 3. Output the result
if (isPalindrome) {
  console.log("It is a Palindrome.");
} else {
  console.log("It is not a Palindrome.");
}
