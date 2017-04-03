// Authors: Isak La Fleur & Andreas Karpasitis
// Names and Input

console.log("I'm ready!");

const hacker1 = "Isak"
console.log("The driver's name is " + hacker1);
const hacker2 = prompt("What is the name of the navigator?");
console.log("The navigator's name is " + hacker2);


//Conditionals
// Compare the length of the driver's and navigator's name
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

// Loops
// Print the Driver's name with spaces and capitalized
var stringDriver = "";

for (var i=0; i < hacker1.length; i++) {
  stringDriver += hacker1[i].toUpperCase() + ' ';
}
console.log(stringDriver);

// Reverse the navigator's name
console.log(reverse(hacker2));


// Check lexicographic order of the string
if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// Bonus Time
// Check if it's a Palindrome.

// Ask user for string
var string = prompt("Enter a new string please!");
var re = /[^A-Za-z0–9]/g;
var stringPalindrome = string.toLowerCase().replace(re, '');

// print out the palindrome 
// console.log(stringPalindrome);

// Reverse the string
var stringPalindromeReverse = reverse(stringPalindrome);

// Check if string is a Palindrome
if (stringPalindrome === stringPalindromeReverse) {
  console.log("Its a Palindrome");
} else {
  console.log("Its not a Palindrome");
}


// Lorem ipsum generator

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis mauris ut eleifend pharetra. Aliquam dictum metus non quam posuere, eu vulputate arcu pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc risus purus, malesuada luctus luctus id, posuere sollicitudin libero. Proin at mauris magna. Sed nunc ante, consectetur eget orci eget, posuere congue ipsum. Vestibulum semper porttitor ex, sit amet bibendum ex interdum tempus. Etiam venenatis accumsan velit a convallis. Etiam ut facilisis diam, tincidunt venenatis mi. Nam accumsan enim sagittis dolor lobortis, in fermentum quam accumsan. Vestibulum ex lectus, aliquet vel leo eu, gravida rhoncus erat. Cras sed imperdiet dolor. Duis eu faucibus tortor, nec rhoncus magna.\n Aenean ac iaculis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent est nulla, sodales at ornare eu, maximus ac lectus. Vivamus bibendum lacus sit amet pretium mollis. Vestibulum convallis urna id lorem mattis convallis. Nunc non magna luctus, accumsan massa eget, efficitur tortor. Pellentesque tempus hendrerit viverra. Nullam ultricies ut felis nec molestie. Praesent sit amet tempus justo. Mauris in elementum lorem, non laoreet eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent hendrerit et diam sed sagittis. Cras at massa dolor. Suspendisse nec nunc risus\n Morbi augue urna, congue eu ex eget, bibendum elementum magna. Nullam tempus viverra ex. Aliquam id ultricies dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque fermentum enim vel auctor molestie. Proin ut sem non enim dignissim mollis. Cras vitae purus eu urna vestibulum efficitur. Mauris non lacus sollicitudin, fringilla justo eu, imperdiet arcu. Morbi suscipit non elit et tempor."
console.log(lorem);

// Split string into an array
var loremArray = lorem.split(" ");

// Print out number of words
var wordCount = loremArray.length;
console.log("In the lorem ipsum text there are " + wordCount + " words!");

// Find the word et and count how many times it appears
var counter = 0;

for (var i = 0; i < loremArray.length; i++) {
  if (loremArray[i] === "et") {
    counter++;
  }
}

console.log("The word et was found: " + counter + " times");


// Functions
function reverse(s){
    return s.split("").reverse().join("");
}
