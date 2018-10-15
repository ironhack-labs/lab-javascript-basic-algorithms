// Names and Input


//Conditionals


// Lorem ipsum generator
var hacker1 = "The driver's name is XX";
console.log(hacker1);

var hacker2 = "The driver's name is YYYY";
console.log(hacker2);


if(hacker1.length > hacker2.length) {
  console.log(hacker1 + " has the longest name, it has " + hacker1.length + " characters"); 
}
else if (hacker2.length > hacker1.length) 
{
  console.log( hacker2 + " has the longest name, it has " + hacker2.length + " characters");
}

else { 
  console.log("wow, you both got equally long names, " + hacker1.length + "characters!!!");

}

//Conditionals

var driver1 = "Felipe";
var driver2 = "Felipe";
for (var i = 0; i < driver1.length; i++) {
  console.log(driver1[i].toUpperCase());

    console.log(driver1[i].split().reverse().join());



  }

var alphabeticalOrder = [driver1, driver2].sort();
if(driver1 === driver2) {
  console.log("What?! You both got the same name?");
} 
else { 
console.log(alphabeticalOrder[0] + "'s name goes first");
}


var palindrome = "racecar";

if ("race car" === palindrome.split('').reverse().join(''))
{
  console.log("you win");
  
}
else {
  console.log( "you lose");
}


