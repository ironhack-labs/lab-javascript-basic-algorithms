// Iteration 1: Names and Input
const hacker1 = "tom";
 console.log("The driver's name is " + hacker1);

const hacker2 = "joana";
 console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
let longerName;
let lengthOfHacker1 = hacker1.length;
let lengthOfHacker2 = hacker2.length;

if (lengthOfHacker1 > lengthOfHacker2) {
  longerName = lengthOfHacker1;
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}
else if (lengthOfHacker1 < lengthOfHacker2) {
  longerName = lengthOfHacker2;
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else {
   console.log("Wow, you both have equally long names, " + hacker2.length + " characters!");  
}

// Iteration 3: Loops

let driverName = " "

for (let i=0; i<lengthOfHacker1; i++) 
{
  driverName += hacker1[i].toUpperCase() + " ";
}

console.log(driverName);



let navigatorName = "";

for (let i = lengthOfHacker2 - 1 ; i >= 0 ; i-- ) {
  navigatorName += hacker2[i];
}

console.log(navigatorName);

if(hacker1<hacker2)
{
  console.log("The driver's name goes first.");
}

else if (hacker2<hacker1)
{
  console.log("Yo, the navigator goes first definitely.");
}

else
{
  console.log("What?! You both have the same name?");
}

// Bonus1

let sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et do eiusmod tempor et incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et nisi ut aliquip ex et ea commodo consequat.";

let sampleText2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore et eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est et laborum.";

let sampleText3 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";


function countWords(str) { 
  return str.split(" ").length;
}

console.log(countWords(sampleText2));

let searchedWord = " et ";

function countInstances(str) {
   return str.split(searchedWord).length - 1;
}

console.log(countInstances(sampleText));


// Bonus2


// lets reverse the string
// a palindrome is just letters without spaces that can be reversed
// so i have to erase the spaces in any string because at first I didn't thaught about the space problem

// Not perfect because if we put a sentence with ? ! . I will appear to not be a palindrome
// I'll need to add a new function, maybe to erase like as I did with spaces all characters that arent letters but running out of time now
let str = "imane";
let noSpace = str.replace(/ /g, "");
let strLength = noSpace.length;
let reversedStr = "";

//just checking 
//console.log(noSpace);

for (let i = strLength - 1 ; i >= 0 ; i-- ) {
  reversedStr += noSpace[i];
}

// just in case to unsure the string is well reversed you can uncomment this :
//console.log(reversedStr);

// now we compare the two strings (the one without space) with strict equality
if (noSpace === reversedStr) {
  console.log("Palindrome !");
}
else {
  console.log("Not a palindrome.");
}


