// Names and Input
var hacker1 = "Josh";

console.log("The Driver's name is " + hacker1 + ".");

var hacker2 = prompt("What is the navigator's name?");

console.log("The Navigator's name is " + hacker2 + ".");

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops
console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse().join(''));

if (hacker1 < hacker2) {
  console.log('The drivers name goes first.');
} else if (hacker2 < hacker1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both got the same name?');
}


// Bonus Palindrome & Lorem ipsum generator
var userPalindrome = prompt('Write anything!');

if (userPalindrome == userPalindrome.split('').reverse().join('')) {
  console.log('This is a palindrome!');
} else {
  console.log('This is not a palindrome.');
}

var loremString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dignissim dictum. Quisque varius iaculis suscipit. Maecenas et commodo dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Aliquam scelerisque iaculis accumsan. Nulla facilisi. Pellentesque eget eleifend augue, sed ultricies nulla. Suspendisse condimentum, libero sed gravida commodo, nibh nisi porta nulla, non vehicula orci neque ac dolor. Sed consectetur metus ut enim aliquet tristique. Morbi tristique velit id justo consectetur ultrices. Mauris quis porttitor quam. Praesent faucibus purus malesuada tempus blandit. Sed pulvinar sagittis nisi. Aliquam ac lacus mauris. Nam tristique ipsum in mattis aliquam. Cras accumsan tortor ut sapien volutpat semper. Integer quis maximus erat, quis hendrerit ex. Ut viverra blandit nisl, nec consequat nibh pellentesque et. Donec at nisi arcu. Aenean suscipit ex vel ligula lacinia consectetur. Nullam massa mauris, interdum nec tempus quis, finibus vel quam. Proin scelerisque quam vel fermentum suscipit. Donec efficitur velit quis est vehicula tempor. Cras tellus risus, mollis nec urna ut, sagittis pharetra purus. Donec non rhoncus mauris.';


var wordCount = loremString.split(' ').length;

console.log(wordCount);

var etMatches = loremString.match(/et/gi).length;

console.log(etMatches);
