//Names and input
var hacker1 = "Bob";
var hacker2 = prompt("What is the navigator's name?");
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

//Conditionals
//Measures length of names, outputs string based on who is longer.
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("The navigator has the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

//Splits driver string into capital letters separated by spaces.
var capSpace = ""
for (var i = 0; i < hacker1.length; i++) {
  capSpace += hacker1[i].toUpperCase();
  capSpace += " ";
}

console.log(capSpace);

//Reverses any string
function reverseString(str)
{
  var reversedNav = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversedNav += str[i];
  }
  
  return reversedNav;
}

console.log(reverseString(hacker2));

//checks alphabetical order
var lexico = hacker1.localeCompare(hacker2)
if (lexico === -1)
{
  console.log("The driver's name goes first");
} else if (lexico === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (lexico === 0) {
  console.log("What?! You both got the same name?");
} else {
  console.log("Something bad happened with lexico!");
}

//function to check palindrome
function isPalindrome(str) {
  var newString = "";
  for (var i = 0; i < str.length; i++)
  {
    //This should be a regular expression but it's a quick hack
    if (str[i] === " " || str[i] === "," || str[i] === "?" || str[i] === "!" || str[i] === "'")
    {
      continue;
    }
    else
    {
      newString += str[i].toLowerCase();
    }
  }
  
  if (newString === reverseString(newString))
  {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("this is not a palindrome"));

//ran out of time for lorem ipsum generator
