// Iteration 1: Names and Input
console.info("\ -------- Iteration 1 -------");
let hacker1 = 'Francois';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Abdoulaye';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.info("\ -------- Iteration 2 -------");

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
console.info("\ -------- Iteration 3 -------");

let string = "";
for(let i=0; i<hacker1.length; i++){
    string += hacker1[i] + " ";
}
console.log(string);

 string = "";
for(let i=0; i<hacker1.length; i++){
    string += hacker1[hacker1.length-1-i];
}
console.log(string);

var shorterName = "";
var longerName = "";
if (hacker1.length > hacker2.length) {
  shorterName = hacker2;
  longerName = hacker1;
} else {
  shorterName = hacker1;
  longerName = hacker2;
}

for (let i = 0; i < shorterName.length; i++) {
  if (shorterName[i] < longerName[i]) {
    console.log(`The driver's name goes first.`);
    break;
  } else if (shorterName[i] > longerName[i]) {
    console.log("Yo, the navigator goes first definitely");
    break;
  }
  if (
    i === shorterName.length - 1 &&
    shorterName.length === longerName.length
  ) {
    console.log("What?! You both have the same name");
    break;
  } else if (i === shorterName.length - 1 && hacker1.length < hacker2.length) {
    console.log(`The driver's name goes first.`);
  } else if (i === shorterName.length - 1) {
    console.log("Yo, the navigator goes first definitely");
    break;
  }
}


//Bonus 1 : 
console.info("\ -------- Bonus 1 -------");

let lorem = `Lorem ipsum dolor sit amet, et et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

function countStringOcc(stringToCount, wordinString) {
    let array = stringToCount.split(" ");
    return array;
}

let splitArray = countStringOcc(lorem, "");

console.log(splitArray, "\nLength is :", splitArray.length);


function countOccurence(array, wordtoSearch) {
    let count=0;

    for(let i =0; i<splitArray.length ; i++)
    {
        if(splitArray[i]===wordtoSearch)
        {
            count++;
        }
    }
    return count;
}
let wordToSearch = 'et';
let count = countOccurence(splitArray,wordToSearch);
console.log(`Number of times the word ${wordToSearch} appears : ${count}`);

//Bonus 2 : 
console.info("\ -------- Bonus 2 -------");

function checkIfPalindrome(stringToCheck) {
    let isPalindrome = false;
    stringToCheck = stringToCheck.replaceAll(/[^a-z]/gi, "").toLowerCase();

    console.log("string to check", stringToCheck);

    let reverseString = '';
    for(let i=0; i<stringToCheck.length; i++){
        reverseString += stringToCheck[stringToCheck.length-1-i];
    }

    if (reverseString===stringToCheck){
        isPalindrome =true;
    }
    return isPalindrome;
}

console.log(checkIfPalindrome("Amor, Roma"));
console.log(checkIfPalindrome("A man, a plan, a canal, Panama!"));
console.log(checkIfPalindrome("put it up"));
console.log(checkIfPalindrome("put it upaa"));