// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

//1.2 Print `"The driver's name is XXXX"`.

let hacker1 = "Willllllll";

console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable `hacker2` with the navigator's name.

//1.4 Print `"The navigator's name is YYYY"`.

let hacker2 = "Ryan";
console.log(`The navigator's name is ${hacker2}`);

//console.log("..." = hacker2)


// Iteration 2: Conditionals

/*
2.1 Depending on which name is longer, print: 
- The driver has the longest name, it has XX characters. or 
- It seems that the navigator has the longest name, it has XX characters. or 
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};

//Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let newHacker = "";

for (let i = 0; i < hacker1.length; i++) {
newHacker = newHacker + (hacker1.charAt(i) + " ");
};

console.log(newHacker.toUpperCase());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let newWord = newHacker.toUpperCase();

newWord = newWord.split("").reverse().join("");

console.log(newWord);

/*
3.3 Depending on the lexicographic order of the strings, print: 
- The driver's name goes first. 
- Yo, the navigator goes first definitely. 
- What?! You both have the same name?
*/

let names = [hacker1, hacker2];

names.sort();

if (hacker1.length < hacker2.length) {
  console.log(`The ${hacker1} name goes first.`);
} else if
  (hacker2.length < hacker1.length) {
  console.log(`Yo, the ${hacker2} goes first definitely.`);
} else {console.log(`What?! You both have the same name?`)};


/*Bonus Time!

Bonus 1:
*/

//Bonus 1.1 Go to lorem ipsum generator and generate 3 paragraphs. Store the text in a variable type of string.
let ipsumCount = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et tortor at. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Varius quam quisque id diam. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sodales neque sodales ut etiam. Gravida quis blandit turpis cursus in hac. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Arcu odio ut sem nulla pharetra diam sit amet nisl. Sed libero enim sed faucibus turpis. Id neque aliquam vestibulum morbi blandit cursus. Cras tincidunt lobortis feugiat vivamus at augue. Aliquam id diam maecenas ultricies mi. Malesuada fames ac turpis egestas. Cursus sit amet dictum sit amet. Id porta nibh venenatis cras sed felis eget velit. Enim nulla aliquet porttitor lacus. Sed velit dignissim sodales ut eu sem integer vitae. Sed elementum tempus egestas sed sed risus pretium quam. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Est ultricies integer quis auctor elit sed. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lorem donec massa sapien faucibus et molestie. Morbi tristique senectus et netus et. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Semper quis lectus nulla at volutpat. Amet consectetur adipiscing elit ut aliquam purus sit. Consequat mauris nunc congue nisi vitae suscipit tellus. Sed euismod nisi porta lorem mollis. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. At varius vel pharetra vel turpis nunc eget lorem. Viverra justo nec ultrices dui sapien. In nisl nisi scelerisque eu ultrices vitae auctor eu. Lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur. Ullamcorper sit amet risus nullam eget felis. Nibh venenatis cras sed felis eget velit aliquet sagittis."

// //Bonus 1.2 Make your program count the number of words in the string.
let strCount = ipsumCount.split(" ");
console.log(`There are ${strCount.length} words in the string`);

// Bonus 1.3 Make your program count the number of times the Latin word et appears. 
let search = "et";
let searchCount = 0;

for (let i = 0; i < strCount.length; i++){
  if(search === strCount[i]){
    searchCount++;
  };
};

// result
console.log(`The word "et" appears ${searchCount} times in the string`);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. 
// Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
// -- "Amor Roma"
// -- "race car"
// -- "stack cats"
// -- "taco cat"
// -- "put it up"
// -- "A man a plan a canal Panama"
// -- "step on no pets"

let phraseToCheck = "race car";
let phraseRight = phraseToCheck.split(" ").join('').toLowerCase();

let phraseReverse = "";

// reverse for loop to create the phraseReverse
for (let i = phraseRight.length - 1; i >= 0; i--) {
  phraseReverse += phraseRight[i];
}

// validation check
if (phraseRight === phraseReverse){
  console.log(`The string "${phraseToCheck}" is a palindrome`);
} else {
  console.log(`The string "${phraseToCheck}" is NOT a palindrome`);
};