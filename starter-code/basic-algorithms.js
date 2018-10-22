// Names and Input
//1. Create a variable hacker1 with the driver's name
var hacker1 = 'Travis'; 

//2. Print "The driver's name is XXXX"
console.log("The driver's name is " + hacker1); 

//3. Create a variable hacker2 and ask the user for the navigator's name
var hacker2 = prompt("Please enter the navigator's name"); 

//4. Print "The navigator's name is YYYY"
console.log("The navigator's name is " + hacker2); 

//Conditionals
//5. Depending on which name is longer, print: "The Driver has the longest name, it has XX characters" or "Yo, navigator got the longest name, it has XX characters" or "wow, you both got equally long names, XX characters!!"
if (hacker1.length > hacker2.length) { 
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else { 
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops
//6. Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
var hacker1Capital = ''; 

for (var i = 0; i < hacker1.length; i++) {
  hacker1Capital += hacker1[i];
  if (i === hacker1.length - 1) {
    break;
  } else {
    hacker1Capital += ' ';
  }
}

console.log(hacker1Capital.toUpperCase());

/*
for (var letter in hacker1) {
        hacker1Capital += hacker1[letter];
        hacker1Capital += ' ';
}
*/

//7. Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
var hacker1Reverse = ''; 

for (var j = 0; j < hacker1.length; j++) {
  hacker1Reverse += hacker1[hacker1.length - 1 - j];
}

console.log(hacker1Reverse);

/*
for (var j = hacker1.length; j > 0; j--) {
  hacker1Reverse += hacker1[j - 1];
}
*/

/*
for (var j = hacker1.length - 1; j > -1; j--) {
  hacker1Reverse += hacker1[j];
}
*/

//8. Depending on the lexicographic order of the strings, print: "The driver's name goes first" or "Yo, the navigator goes first definitely" or "What?! You both got the same name?"
if (hacker2.localeCompare(hacker1) > 0) { 
  console.log("The driver's name goes first");
} else if (hacker2.localeCompare(hacker1) < 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

//Bonus Time!
//9. Ask the user for a new string and check if it's a Palindrome.
var sentence = prompt("Please enter a sentence"); 

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  for (var i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        return false;
    }
  }
  return true;
 }

 if (palindrome(sentence) === true) {
  console.log("Your sentence was a palindrome!");
 } else {
  console.log("Your sentence was not a palindrome!");
 }

//10. Go to lorem ipsum generator and: 1) Generate 3 parragraphs. Store the text in a String 2) Make your program count the number of words in the string 3) Make your program count the number of times the latin word et appears
var parragraphs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel augue id eros vehicula accumsan vel vel ante. Nulla feugiat sapien at ullamcorper vestibulum. Aliquam sem orci, varius a feugiat a, lobortis a libero. Praesent ac mauris in mauris porttitor accumsan. Morbi gravida nunc sapien, et cursus odio posuere vel. Aliquam pulvinar eros sit amet malesuada aliquam. Vestibulum et lacus nec quam vehicula condimentum eget eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis quam eget ante fermentum aliquet. Duis scelerisque nulla sit amet metus congue pulvinar. Suspendisse potenti. Pellentesque facilisis urna sit amet velit aliquam, a tempus quam mollis. Quisque volutpat sapien posuere erat commodo luctus. Mauris cursus facilisis nibh vel dapibus. \nCurabitur pretium arcu quis vestibulum venenatis. Donec molestie luctus augue, sed maximus tellus. Nullam accumsan eros nec congue blandit. Nunc eget felis at mauris suscipit dictum a condimentum ipsum. Etiam et viverra mi, non suscipit ligula. Nulla id tincidunt eros. Maecenas justo nisl, vestibulum eu arcu eu, efficitur aliquet eros. Donec tempor mauris et aliquet consequat. Nunc metus augue, aliquet hendrerit odio non, imperdiet euismod justo.\nInteger ex augue, sollicitudin ut urna ac, volutpat luctus felis. Fusce aliquet libero mi, sed porta risus sollicitudin in. In at enim gravida felis faucibus porta at eu massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus eget metus euismod sapien iaculis bibendum. Quisque lobortis sollicitudin nibh ut porttitor. Maecenas facilisis quis mauris a semper.'

console.log("The number of words in the string is " + (parragraphs.split(" ").length + 1));

console.log("The number of times the latin word 'et' appears is " + (parragraphs.split(" et ").length - 1));
