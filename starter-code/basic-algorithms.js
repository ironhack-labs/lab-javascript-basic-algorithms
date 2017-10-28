var hacker1 = "Cristina";
var hacker2 = prompt("What is Your name?");


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

//conditionals with switch ¿Por qué se va al default?


switch (hacker2){
case "driver":
  if (hacker1.length>hacker2.length){
      console.log("The Driver has the longest name, it has" + hacker1.length + "characters");}
  break;
case "navigator":
  if (hacker1.length<hacker2.length){
    console.log("Yo, navigator got the longest name, it has" + hacker2.length + "characters");}
  break;
default:
    console.log("wow, you both got equally long names " + hacker1.length + " characters!!");
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
//Generate 3 parragraphs. Store the text in a String


var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

//Make your program count the number of words in the string

console.log("Lorem Ipsum tiene: " + loremIpsum.split(" ").length + " palabras");

//Make your program count the number of times the latin word etappears

console.log("Lorem Ipsum has: " + loremIpsum.match(/et/g).length + "et");
