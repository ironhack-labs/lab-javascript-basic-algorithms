function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Names and Input
let hacker1 = "Rick";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = prompt("What's the navigator's name?");
hacker2 = capitalizeFirstLetter(hacker2);
alert(`The navigator's name is ${hacker2}`);

//Conditionals
function checkLengths(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    return `The Driver has the longest name, it has ${hacker1.length} characters`;
  } else if (hacker2.length > hacker1.length) {
     return `Yo, navigator got the longest name, it has ${hacker2.length} characters`;
  } else {
    return `Wow, you both got equally long names, ${hacker1.length} characters!!`;
  }
}

let lengthResult = checkLengths(hacker1, hacker2);
console.log(lengthResult);

// Loops

//Capitalize

function spaceString(hacker) {
  let newSpace = [];
  for (let i = 0; i < hacker.length; i++) {
   newSpace.push(hacker[i].toUpperCase());
  }
  newSpace = newSpace.join(' ');
  return newSpace;
}

let spacedString = spaceString(hacker1);
console.log(`The spaced string is ${spacedString}`);


// Reverse

function reverseString(hacker) {
  let newNav = [];
  for (let i = hacker.length-1; i >= 0; i-- ) {
    newNav.push(hacker[i]);
  }
  return newNav.join('');
}

let newReversed = reverseString('daniel');
console.log(`The reversed is ${newReversed}`);


// LEXICOGRAPHIC

function compareNames(driver, navigator) {
  if(driver === navigator) {
    return "What?! You both got the same name?";
  }
  let namesArray = [driver, navigator].sort();
  
  if(driver === namesArray[0]) {
    return "The driver's name goes first";
  } else {
    return "Yo, the navigator goes first definitely";
  }
}

console.log(compareNames(hacker1, hacker2));


//9. Bonus: PALINDROME

function checkPalin(palin){
  let arrPalin = palin.toLowerCase().split(/[\s,!]+/);
  let currentPalin = arrPalin.join('');

  let newPalin = "";
  for (let i = currentPalin.length - 1; i >= 0; i--) {
    newPalin += currentPalin[i];
  };

  if (currentPalin === newPalin) {
    alert("It is Palindrome!");
  } else {
    alert("It is not!");
  }
}

let askPalin = prompt("Please write some words");
checkPalin(askPalin);

// Lorem ipsum generator
let parLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function wordCount(word) {
  return word.split(" ").length;
}

let countWord = wordCount(parLorem)
console.log(countWord);

// //et Word Count
function etResult(paragraph) {
  return paragraph.match(/\bet\b/g);
}

let etWord = etResult(parLorem)
console.log(etWord.length);