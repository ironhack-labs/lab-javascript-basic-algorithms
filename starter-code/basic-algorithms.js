var hacker1 = 'John Doe';

console.log("The driver's name is " + hacker1);

// get user input for navigator
var hacker2 = prompt("What is the navigators name?")
console.log("The navigator's name is " + hacker2);

// check length of both variables

if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length  + " characters");
}
else if(hacker2.length > hacker1.length){

  console.log('Yo, navigator got the longest name, it has ' + hacker2.length  + ' characters')
}
else{
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")
}

// Split name with spaces
var splitHacker1 = hacker1.split("").join(' ');

//Change to Uppercase
var upperCase1 = splitHacker1.toUpperCase();

console.log(upperCase1);

// Switch User input to an array to reverse string

arrayHacker2 = Array.from(hacker2);
reverseHackerComma2 = arrayHacker2.reverse();

// remove commas from array
var reverseHacker2 = (reverseHackerComma2.toString().replace(/,/g, ''));

console.log(reverseHacker2);

// Sort both variables as an array and alphabetize
var array = [hacker1, hacker2];
var sortArray = array.sort();
console.log(array);


  if (array[0] === array[1]){
   console.log("What?! You both got the same name?");
}
  else if (array [0] === 'John Doe') {
    console.log("The driver's name goes first");
}
  else {
    console.log("Yo the navigator goes first definitely");
  }

// Bonus //

var userString = prompt('Do you know a Palindrome? Enter here:');

arrayUserString = Array.from(userString);
reverseUserString = arrayUserString.reverse();


var reverseUserComma = (reverseUserString.toString().replace(/,/g, ''));

console.log(reverseUserComma);

if (userString === reverseUserComma){
  console.log(' This is a Palindrome');
}
else {
  console.log ('This is not a Palindrome');
}

// Bonus 2 //

var latin = prompt('Type Lorem Paragraphs:');


function WordCount(str) {
  return str.split(" ").length;
}

console.log(WordCount(latin));
