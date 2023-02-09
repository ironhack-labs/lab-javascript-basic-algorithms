// Iteration 1: Names and Input

// driver
let hacker1 = "Ronny";
console.log(`The driver's name is ${hacker1}.`);

// navigator
let hacker2 = "Wiebke";
console.log(`The navigator's name is ${hacker2}.`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
else {};



// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let driversName = "";
for(let i = 0; i < hacker1.length; i++) {
  driversName += hacker1[i].toUpperCase();
  if (i !== hacker1.length - 1) {
   driversName += " "; 
  }
}
console.log(`Here’s ${hacker1}’s name in a fancy format:
${driversName}`);


// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

let driver2Name = "";

for(let j = hacker2.length - 1; j >= 0; j--) {
  driver2Name += hacker2[j];
}
console.log(`Here’s ${hacker2}’s name in a fancy format:
${driver2Name}`);


// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
}
else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}
else{}

// ----------
// BONUS 1:
// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.

let longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dui enim. Integer vitae nisi at justo cursus sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc fermentum, mi in mattis viverra, elit nisi porta urna, ac fermentum erat enim nec est. Mauris ipsum turpis, vestibulum quis risus sit amet, lacinia convallis diam. Phasellus elit mi, gravida in dapibus blandit, laoreet sed ex. Nulla id maximus est. Sed efficitur sapien imperdiet diam aliquam imperdiet. Sed et augue varius, sollicitudin nunc ac, viverra ante. Integer vitae venenatis mi. Aenean eleifend eu turpis at aliquam. Nulla porta, erat nec tincidunt dapibus, augue mauris sodales mauris, ultricies malesuada neque nunc a metus. Aliquam et dapibus augue, at ultricies magna. Aliquam malesuada neque nec risus sodales feugiat. Ut sollicitudin mi id tortor imperdiet rhoncus. Nullam sed egestas lectus, eu efficitur mi. Pellentesque bibendum enim id auctor rutrum. Nulla vitae vehicula mi, eu sodales magna. Etiam id tincidunt libero, eu tincidunt lectus. Sed venenatis eget elit a venenatis. Sed dignissim finibus urna ac pharetra. Pellentesque eleifend bibendum eros non lacinia. Suspendisse iaculis vitae lectus sit amet consectetur. Cras ut metus nisl. Etiam quis urna commodo nisl vehicula ullamcorper. Sed dignissim pulvinar pellentesque. Donec bibendum pretium ultrices. Pellentesque eget vestibulum ipsum. Aliquam convallis, leo in facilisis malesuada, felis massa pretium nibh, eu eleifend nisi lectus et quam. Suspendisse molestie augue erat, id ullamcorper elit cursus feugiat. Etiam vehicula quam sit amet metus pharetra, vehicula tempus enim congue. Vivamus pretium, risus vitae rutrum consequat, neque nulla dapibus velit, eget auctor quam lorem sit amet mauris.`;

// initialize a new variable for the word count
let wordCount = 0;

// Every word - except the last one - is followed by a space.
// Go over every character in the text and check if it is a space
for (let k = 0; k < longText.length; k++) {
  
  // if the character is a space, increase the counter
  if(longText[k] === " ") {
    wordCount++;
  }
  
  // the last word in a text is usually not followed by a space
  // so we need to add it to the counter separately
  // this condition checks if the current character is the last one BUT not a space
  // if both conditions apply, the counter increases
  if(k === longText.length - 1 && longText[k] !== " ") {
    wordCount++;
  }
}

console.log(`There are ${wordCount} words in the text.`);


// -----------
// Make your program count the number of times the Latin word et appears.

let etCount = 0;

for (let l = 0; l < longText.length; l++) {
  let fourCharacters = longText[l] + longText[l+1] + longText[l+2] + longText[l+3];
  
  // this works for the text above, but ideally it would count all "et" that are surrounded by anything but letters and also include both a case for an "et" as the first and the last word.
  if (fourCharacters == " et " || fourCharacters == " et.") {
    etCount++;
  }
}

console.log(`The word "et" appears ${etCount} times in the text.`);


// ------------
// Bonus 2:
// Create a new variable phraseToCheck. Write a code that will check if the value we assigned to this variable is a Palindrome.

let phraseToCheck = "taco cat";
let phraseForwards = "";
let phraseBackwards = "";

for (let m = 0; m < phraseToCheck.length; m++) {
  
  // currently only works for phrases with spaces
  // Condition could be extended to exclude all punctution marks
  // however, it would be better to make the condition just check for [a-z] and [A-Z] characters
  if (phraseToCheck[m] !== " ") {
    phraseForwards += phraseToCheck[m].toLowerCase(); 
  }
}
for (let n = phraseToCheck.length - 1; n >= 0; n--) {
  if (phraseToCheck[n] !== " ") {
    phraseBackwards += phraseToCheck[n].toLowerCase();
  }
}

if (phraseForwards === phraseBackwards) {
 console.log(`WOOHOO! You found a palindrome! It’s »${phraseToCheck}«!`); 
}
else {
 console.log(`»${phraseToCheck}« might be many things, but a palindrome, it is not.`); 
}