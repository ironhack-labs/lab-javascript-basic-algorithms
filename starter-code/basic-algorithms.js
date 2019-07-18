// Names and Input, print variables and prompt user for string
let hacker1 = "Michael Jackson";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = prompt("Hey, navigator! What's your name?");
console.log(`The navigator's name is ${hacker2}.`);

// Conditionals

// Evaluate length property of 2 variables and determine which is the longest
if (hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`Yo, Navigator got the longest name, it has ${hacker2.length} characters.`)
}
else
  console.log(`Wow, you both got equally long names, ${hacker2.length} characters!!`);

// Stores string characters into an array and prints them in uppercase, separated by a space
console.log(hacker1.split('').join(' ').toUpperCase());

// Stores string characters into an array, reverses the order and prints it
console.log(hacker2.split('').reverse().join(''));

// Determines which of 2 variables goes first according to their lexicographic order
var lex = hacker1.localeCompare(hacker2);

switch( true ) {
  case (lex < 0): 
    console.log(`The driver's name goes first`);
    break;
  case (lex > 0):
    console.log(`Yo, the navigator goes first definitely`);
    break;
  case (lex == 0):
    console.log(`What?! You both got the same name?`);
    break;
}

// Palindrome

// This function receives a string and determines if it's a palindrome
function isPalindrome( phrase ) {
  var forward = phrase.toLowerCase().split(''); //lowercase and store the string's characters in an array and stay in the original order
  var backward = phrase.toLowerCase().split('');//lowercase and store the string's characters in another array to reverse the order
  backward.reverse();// reverse the order of the characters for comparison
  var lex = forward.join(' ').localeCompare(backward.join(' '));//if the 2 arrays are the same, it will assign a value of 0 to the variable lex

  //prints whether the array comparison determined forward and backward variables are the same or not: a palindrome or not
  if ( lex == 0 )
    console.log(`Wow, ${forward.join(' ')} is a palindrome, check it reversed: ${backward.join(' ')}`);
  else
    console.log(`Nope, ${phrase} is NOT a palindrome, check it reversed: ${backward.join(' ')}`);
}

//ask user for string for palindrome verification
var phrase = prompt("Enter phrase or word for palindrome check");

isPalindrome(phrase);

// Count the number of words in a string with three paragraphs


let loremIpsum = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris metus dolor, scelerisque ut erat et, porta accumsan orci. Curabitur porttitor ligula et elit cursus euismod. Etiam vulputate molestie augue, in sagittis justo semper finibus. Quisque ut nibh tristique dolor feugiat commodo sit amet vel tortor. Donec sagittis cursus vestibulum. Etiam vehicula ante vitae orci fringilla, vel aliquet quam mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin condimentum metus nisl, sit amet dictum elit cursus a. Sed imperdiet quam ligula, id dapibus orci tincidunt ac. Suspendisse efficitur fermentum arcu nec tincidunt. Fusce non lorem dapibus, porttitor sapien a, pretium felis. Nunc id lorem sem. Etiam vel molestie velit. Mauris nulla ex, pulvinar id tincidunt eget, tincidunt id neque. Nullam sed iaculis sapien. Aliquam erat volutpat. Donec tempus, nisl molestie cursus iaculis, lacus sapien vestibulum odio, a iaculis sapien nisi ut lacus. Vivamus aliquam eros purus, sed vulputate lorem tincidunt ultrices. Curabitur non turpis finibus, elementum massa non, vestibulum purus. Aenean placerat mattis nibh, in placerat lacus bibendum in. Ut gravida arcu et dapibus maximus. Aliquam vestibulum molestie turpis in congue. Etiam id commodo diam, eget scelerisque nisi. Curabitur in scelerisque mauris. Curabitur vel tristique elit, at posuere augue. Ut vestibulum magna sed magna egestas semper. Morbi viverra vulputate enim. Etiam est est, ultricies in facilisis ac, convallis non mauris. In elementum aliquam tortor eget ultrices. Vivamus in nibh est. Vivamus posuere augue finibus pulvinar varius. Quisque et fermentum ligula. Pellentesque vehicula laoreet sagittis. Aenean nec efficitur lacus, sed accumsan odio. Morbi consequat sagittis semper. Nulla nec risus vel erat semper semper. Mauris fringilla mollis elit, dictum porttitor lacus lobortis quis. Aliquam ullamcorper sagittis enim, sit amet posuere augue. Duis ornare dolor a sapien rutrum lobortis.")

function wordCount(loremIpsum) { 
  return loremIpsum.split(" ").length;
}

console.log(`This paragraph has ${wordCount(loremIpsum)} words`);

// Count how many times the latin word "et" appears in the string


let erCouter = (loremIpsum.match(/er/) || []).length;
console.log(`The latin word "er" appears ${erCouter} times.`);
