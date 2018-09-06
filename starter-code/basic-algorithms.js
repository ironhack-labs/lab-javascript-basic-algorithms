// Names and Input
var hacker1 = "alfredo";
console.log("the driver's name is " + hacker1);
var hacker2 = prompt("What is the navigator's name?");
console.log("the navigator's name is: " + hacker2);

//Conditionals
var lengthName = hacker1;

  if (hacker1.length > hacker2.length) {
    console.log(hacker1 + "has the longest name" + "it has" + hacker1.length + "characters");
  } else if (hacker2.length > hacker1.length){
    console.log(hacker2 + "has the longest name" + "it has" + hacker2.length + "characters");
  } else {
     console.log("they both have" + hacker1.length + "characters");
 }
//loops

 var driverSplitted = "";

    for ( i = 0; i < hacker1.length; i++){
        driverSplitted += hacker1[i].toUpperCase() + "";
        console.log( driverSplitted);
    };
 

  var reversed = hacker2.split("").reverse().join("");
  console.log( reversed);

  if(hacker1.toLowerCase() < hacker2.toLowerCase()){
    console.log('The driver\'s name goes first');
  } else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log('Yo, the navigator goes first definitely');
  } else {
    console.log('What?! You both got the same name?');
  }

  // Bonus palindrome
  //Bonus time!

// Ask the user for a new string and check if it's a Palindrome.

var newString = prompt('Check if it\'s a Palindrome');

var reverseString = newString.split('').reverse().join('');

if (newString.toLowerCase().replace(' ', '') === reverseString.toLowerCase().replace(' ','')){
  console.log(newString + ' is a Palindrome');
    } else {
        console.log(newString + ' is not a Palindrome');
}



// Lorem ipsum generator
