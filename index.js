// Iteration 1: Names and Input

const hacker1 = "Alex"
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Ben"
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if(hacker2.length < hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else{
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops


const hacKer1 = "Alex";
const hacKer2 = "Ben";

// 3.1 Print driver's name in capital letters, separated by spaces
let result1 = "";

for (let i = 0; i < hacKer1.length; i++) {
  result1 += hacKer1[i].toUpperCase() + " ";
}

console.log(result1.trim());
//.trim() removes whitespace from both ends of this string and returns a new string, without modifying the original string.

// 3.2 Print navigator's name in reverse order
let result2 = "";

for (let i = hacKer2.length - 1; i >= 0; i--) {
  result2 += hacKer2[i];
}

console.log(result2);

// 3.3 Compare the names alphabetically
if (hacKer1 < hacKer2) {
  console.log("The driver's name goes first.");
} else if (hacKer2 < hacKer1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1
//Go to the lorem ipsum generator website and:
//Generate 3 paragraphs. Store the text in a new string variable named longText.
//Make your program count the number of words in the string.
//Make your program count the number of times the Latin word et appears.

const longText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac dapibus dolor. Duis maximus et mi malesuada tristique. Fusce elit nibh, ullamcorper ac hendrerit sit amet, varius sit amet ligula. Curabitur volutpat mauris in eros maximus, eu venenatis sem sagittis. Pellentesque finibus auctor augue pretium luctus. Nunc vehicula ut lacus eu porta. Fusce cursus pretium felis et pharetra. Donec porta odio sed bibendum congue. Fusce vehicula leo eget eros semper consectetur. Mauris mattis, leo quis ullamcorper sagittis, lorem massa rutrum nunc, eget mattis quam metus sit amet neque. Proin malesuada porta eros nec efficitur. Phasellus purus urna, fringilla at bibendum ut, fermentum sit amet quam. Nam convallis in urna et rutrum. Mauris interdum rutrum mi, id faucibus nibh consectetur nec. Pellentesque tempor est non magna convallis, vitae rutrum enim lacinia. Donec pharetra vulputate massa sit amet porta Aliquam pharetra lobortis risus maximus egestas. Donec auctor quam in tempor condimentum. Nulla a molestie diam. Donec vulputate viverra suscipit. Fusce fermentum risus purus, bibendum aliquam diam eleifend et. Mauris finibus at nulla nec gravida. Nulla facilisi.";
console.log(longText.length);

let count = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText.slice(i, i + 2) === "et") {
    count++;
  }
} 

console.log(count);

/*
Bonus 2:
Create a new variable, phraseToCheck, containing some string value. 
Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

const phraseToCheck = "A man, a plan, a canal, Panama!"
//to remove spaces
// use of continue which statement terminates execution of the statements in the current iteration and continues execution of the loop with the next iteration
let phrase ="";
for (let i =0; i < phraseToCheck.length; i++){
  if (phraseToCheck[i] === "") {
    continue;
  }
  phrase += phraseToCheck[i].toLowerCase();
}
// to check if the phrase is a Palindrome 
//use of break which helps to terminate the current loop 
let isPalindrome = true;
for(let i = 0; i < phrase.length/2; i++){
  if(phrase[i] !== phrase[phrase.length - 1 -i]){
    isPalindrome = false;
    break;
  } else{
    continue;
  }
}
// printing the result

if(isPalindrome){
  console.log("it is a Palindrome!");
} else{
  console.log("it is not a Planidrome!");
}