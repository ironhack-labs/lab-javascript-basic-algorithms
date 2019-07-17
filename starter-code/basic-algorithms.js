// Names and Input
var hacker1 = "Pancho";
console.log (hacker1);

var hacker2 = prompt("Please enter the navigator's name");
console.log ("The navigator's name is", hacker2);

var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;
//Conditionals

if (hacker1Length > hacker2Length ){
    console.log ("The Driver has the longest name, it has", hacker1Length, "characters")
  }
    else if (hacker2Length > hacker1Length) {
      console.log ("Yo, navigator got the longest name, it has ", hacker2Length, "characters")
    }
  
  else {
    console.log("wow, you both got equally long names,", hacker1Length, "characters!!")
  }


// Palindrome Checker

var palindromo = prompt("Please enter a palindrome");

var revPal = palindromo.split("").reverse().join("");

/* 
  Intenté usar la función .equals pero no supe que estaba haciendo mal entonces mejor puse un switch

  if(palindromo.equals(revPal) == true) {
    console.log("Palindrome"); 
  } else {
    console.log("Not Pelindrome");
  } 

*/

switch (palindromo) {
  case revPal:
  console.log("its a palindrome");
  break;
  default:
  console.log("not a palindrome");
}


// Lorem ipsum generato 
