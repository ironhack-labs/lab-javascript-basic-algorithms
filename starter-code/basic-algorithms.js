/*NAMES AND INPUT*/
console.log("\n*******************\n* NAMES AND INPUT'S\n*******************\n\n");
/*1. Create a variable hacker1 with the driver's name*/
var hacker1 = "Paula";

/*2. Print "The driver's name is XXXX"*/
console.log("The driver's name is " + hacker1);

/*Create a variable hacker2 and ask the user for the navigator's name*/
var hacker2 = prompt("What's your name?");

/*4. Print "The navigator's name is YYYY"*/
console.log("The navigator's name is " + hacker2);

//Conditionals
/* 5. Depending on which name is longer, print:*/
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("The navigator has the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names, " + hacker2.length + " characters!!");
}


/*LOOPS*/
console.log("\n*******************\n* LOOPS\n*******************\n\n");
/* 6. Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"*/
hacker1Upper = hacker1.split('').join(' ').toUpperCase();
console.log("Space and upper --> " + hacker1Upper);

/* 7. Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"*/
var i, j;
var hacker2Reverse = [];
for (i = hacker2.length - 1, j = 0; i >= 0; i--, j++) {
  hacker2Reverse[j] = hacker2[i];
}
//Conver array hackerReverse to String without any ','
hacker2Reverse = hacker2Reverse.join().replace(/,/gi, "");
console.log("Reverse -->", hacker2Reverse);

/* 8. Depending on the lexicographic order of the strings, print:
    The sort() method sorts the items of an array.
    By default, the sort() method sorts the values as strings in alphabetical and ascending order.
*/
var arrayNames = ["" + hacker1, "" + hacker2];
console.log(arrayNames);
arrayNames.sort();
console.log(arrayNames);

if (arrayNames[0] == arrayNames[1]) console.log("What?! You both got the same name?");
else if (arrayNames[0] == hacker2) console.log("Yo, the navigator goes first definitely");
else if (arrayNames[0] == hacker1) console.log("The driver's name goes first");

/*BONUS TIME*/
console.log("\n*******************\n* BONUS TIME!\n*******************\n\n");

/* 9. Ask the user for a new string and check if it's a Palindrome*/

var text = prompt("Write a string to check if it's a Palindrome");
console.log("\"" + text + "\" is a palindrome? --> " + palindrome(text));

function palindrome(str) {
  var re = /[\W_]/g; // removes all non-alphanumeric characters.
  var lowRegStr = str.toLowerCase().replace(re, ''); //Lowercase the string and replace
  var reverseStr = lowRegStr.split('').reverse().join(''); /*reverse string, convert an array to make reverse() and then make string again*/
  return reverseStr === lowRegStr; // compare
}

/*LOOPS*/
console.log("\n*******************\n* LOREM IPSUM\n*******************\n\n");
/* 10. Go to lorem ipsum generator and: */
//Generate 3 parragraphs. Store the text in a String
var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";
var texts = "";
for (i = 0; i < 3; i++) {
  texts += lorem;
}

console.log(texts);

//Make your program count the number of words in the string
var countingWords = texts.split(" ").length;
console.log("Words --> " + countingWords);

// Make your program count the number of times the latin word 'et' appears
var countTimes = (texts.match(/et/g)).length;
console.log("'et' appears --> " + countTimes);
