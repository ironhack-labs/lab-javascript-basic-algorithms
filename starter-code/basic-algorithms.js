// Names and Input

var hacker1 = "Alonso";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, Navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters");
}

// Driver's name in capitals

var driverSeparated = "";

for (var i = 0; i < hacker1.length; i++) {
  driverSeparated += hacker1[i];
  driverSeparated += " ";
}

console.log(driverSeparated.toUpperCase());

// Navigator's name in reverse order

function reverseString(hacker2) {
  var splitString = hacker2.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
}

console.log(reverseString(hacker2));

// Lexicographic order

function lexicalCompare() {
  var compareResult = hacker1.localeCompare(hacker2);

  if (compareResult === -1) {
    console.log("The driver's name goes first");
  } else if (compareResult === 1) {
    console.log("Yo, the navigator goes first definitely");
  } else {
    console.log("What?! You both got the same name?");
  }
}

lexicalCompare();

// Palindrome

function isPalindrome(possiblePalindrome) {
  possiblePalindrome = prompt("Write a Palindrome, we will check it");

  if (possiblePalindrome === possiblePalindrome.split('').reverse().join('')) {
    console.log("Yes, it is!");
  } else {
    console.log("Nah, it's not");
  }
}

isPalindrome();
