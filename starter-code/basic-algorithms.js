// Names and Input

var hacker1 = "Cristina";
var hacker2 = prompt("What is Your name?");
var text;

console.log( "The driver name is: " + hacker1);
console.log( "The navigators name is: " + hacker2);

//Conditionals

  if (hacker1.length>hacker2.length){
        console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
     } else if (hacker1.length<hacker2.length){
        console.log("Yo, navigator got the longest name, it has " + hacker2.length + "characters");
     } else{
        console.log("wow, you both got equally long names" + hacker1.length + "characters!!");
     }

//conditionals with switch

switch (text){
case "driver":
  if (hacker1.length>hacker2.length){
      console.log("The Driver has the longest name, it has" + hacker1.length + "characters");}
  break;
case "navigator":
  if (hacker2.length>hacker1.length){
    console.log("Yo, navigator got the longest name, it has" + hacker2.length + "characters");}
  break;
default:
    console.log("wow, you both got equally long names" + hacker1.length + "characters!!");
    }

//Cristina reverse

var hackerSpace = "";

function reverseHacker(hacker1) {

    for (var j = hacker1.length - 1; j >= 0; j--) {
        hackerSpace += hacker1[j];
    }
  return hackerSpace;
}

reverseHacker(hacker1);

//Cristina split

var solution = "";


function spaceHacker(hacker1){
  for (i=0; i<hacker1.length; i++){
solution+=hacker1[i]+" ";
  }
  return solution;
}
spaceHacker(hacker1);

//Apuntes para recordad como print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

function reverseString(myString) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = myString.length - 1; i >= 0; i--) {
        newString += myString[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

    // Step 3. Return the reversed string
    return newString; // "olleh"
}

reverseString(myString);

//Depending on the lexicographic order of the strings, print:
//The driver's name goes first
//Yo, the navigator goes first definitely
//What?! You both got the same name?

if (hacker1.toUpperCase()<hacker2.toUpperCase()){
console.log (" The driver's name: " + hacker1 + " goes first");
 }
 else if(hacker1.toUpperCase()>hacker2.toUpperCase()){
console.log ("Yo, the navigator's name: " + hacker2 + " goes first");
 }
 else {
 console.log ("What?! You both got the same name?");
 }

//Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

 var palindromeName = prompt("Can you write a new string?");
 var res = palindromeName.charAt(0);


 function isPalindrome(palindromeName){
     if(palindromeName.length() < 2) {
       palindromeName=true;}
 else if (palindromeName.charAt (0) != palindromeName.charAt (str.length() - 1)){
       palindromeName=false;}
 return palindromeName;
 }


//Go to lorem ipsum generator and:

var loremIpsum = "Lorem ipsum dolor sit amet. Suspendisse sodales elementum odio, ac elementum est pellentesque in. Duis cursus nulla at quam venenatis, vel finibus tortor cursus.";

//Generate 3 parragraphs. Store the text in a String

//Make your program count the number of words in the string

console.log("Lorem Ipsum tiene: " + loremIpsum.split(" ").length + " palabras");

//Make your program count the number of times the latin word etappears
