// Iteration 1: Names and Input

const hacker1 = "Tesa";
console.log("The driver's name is " + hacker1);

const hacker2 = "Haripriya";
console.log("The navigators name is " + hacker2);

// Iteration 2: Conditionals
const driversName = "Tesa";
const navigatorsName = "Haripriya";
if(driversName.length > navigatorsName.length)
  {
    console.log("The driver has the longest name, it has XX characters")
  }
else if(navigatorsName.length > driversName.length)
  {
    console.log("It seems that the navigator has the longest name, it has " + navigatorsName.length + " characters" )
  }
else {
  console.log("ow, you both have equally long names," + driversName.length  + "characters");
}

// Iteration 3: Loops
 // 1.1 
 //3.1
const driverName = "Tesa";
console.log (driverName.toUpperCase());

//3.2
driverName = "Tesa"
let myName = ""
for (let i = driverName.length - 1; i >= 0; i--) {
 myName +=driverName[i];
 }
console.log(myName);

//3.3

const firstName  = "Tesa"
const secondName = "Haripriya";

const alphaOrder = firstName.localeCompare(secondName);

if(alphaOrder >0)
  {
    console.log("The driver's name goes first.")
  }
else if (alphaOrder <0)
  {
    console.log ("Yo, the navigator goes first, definitely.");
  }
else {
  console.log("What?! You both have the same name?");
}


//Bonus 1

const longText =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \
  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, \
  as opposed to using 'Content here, content here', making it look like readable English.\
   Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,\
  and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, \
  sometimes by accident, sometimes on purpose (injected humour and the like).There are many variations of passages of Lorem Ipsum available,\
  but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\
  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\
  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\
   It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. \
   The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
    Excepteur sint occaecat cupidatat non proident\
  ,sunt in culpa qui officia deserunt mollit anim id est laborum";


  // SOLUTION ONE//

  // const words = longText.length;
// console.log(words);
// let count = longText.match(/et/g);
// console.log(count);


//const words  = longText.length;

// SOLUTION 2//
console.log(longText.split("et").length-1);



//Bonus 2


const phrase = "Amore Roma";

const middleOfThePhrase = Math.floor(phrase.length / 2);

const part1 = phrase.slice(0, middleOfThePhrase);
console.log(part1)
// console.log(part1);

const part2 = phrase.slice(middleOfThePhrase);
const capitalizeLastLetter = part2.slice(-1).toUpperCase();

let finalPart = part2.slice(0, -1) + capitalizeLastLetter;
finalPart = finalPart[0].toLowerCase() + finalPart.slice(1);

console.log(finalPart);
// console.log(finalPart);

for (let i = 0; i < middleOfThePhrase-1 ; i++) {
  if (part1[i] === finalPart[finalPart.length - 1 -i]) {
    console.log("It's a palindrome");
  } else {
    console.log("It's not a palindrome");
  }
}
