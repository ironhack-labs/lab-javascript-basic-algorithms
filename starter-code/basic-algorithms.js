//Names and input
var hacker1 = "Bob";
// var hacker2 = prompt("What is the navigator's name?");
var hacker2 = "Stephen";
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

//lorem ipsum generator
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim est, convallis ac mattis ut, fringilla eget massa. Pellentesque placerat tincidunt nisl, eu porta lacus suscipit malesuada. Nullam orci lectus, semper ut massa et, tempor eleifend tortor. Donec ornare eleifend sapien eget convallis. Duis ex dolor, commodo in sapien vitae, tincidunt iaculis nibh. Phasellus elementum odio nec tincidunt gravida. Aliquam erat volutpat. Cras mattis vestibulum elit, eu accumsan lorem fermentum vitae. Fusce convallis dui at porttitor pharetra. Etiam vel facilisis quam, in vestibulum est. Vivamus ac ultricies tellus. Nunc in nibh vel justo molestie sodales sed a odio. Nunc porta mauris in semper semper. Aliquam metus neque, elementum finibus dolor euismod, dapibus semper erat. Morbi dui odio, semper ut ex condimentum, viverra elementum erat. Duis feugiat vestibulum tempus. Vivamus imperdiet orci eget elit sagittis, ut ornare dolor bibendum. Proin pellentesque augue a neque euismod fermentum. Proin sed lacus bibendum, cursus turpis vel, accumsan orci.Donec interdum aliquam efficitur. Aliquam suscipit porta turpis eu feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in efficitur lectus. Vestibulum porta augue a est posuere, at hendrerit nulla venenatis. Suspendisse sed feugiat arcu. Morbi id purus massa. Proin luctus ac felis sit amet suscipit. Nullam eget bibendum urna, nec faucibus sapien. Donec at congue eros. Ut pulvinar ligula vitae sapien varius, consectetur aliquet sapien dapibus. In hac habitasse platea dictumst.";

//counts words in a string
function countWords(str)
{
  var count = 1;
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] === " ")
    {
      count++;
    }
  }

  return count;
}

//counts the number of instances of the word "et" in lorem ipsum
function countEts(str)
{
  var testString = "";
  var count = 0;
  for (var i = 0; i < str.length; i++)
  {
    testString = str[i] + str[i+1] + str[i+2] + str[i+3];
    if (testString === " et " || testString === " et." || testString === " et," || testString === " et?" || testString === " et!")
    {
      count++;
    }
  }

  return count;
}

console.log(countWords(loremIpsum));
console.log(countEts(loremIpsum));
