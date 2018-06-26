// ***************Names and Input**********************

// 1.Create a variable hacker1 with the driver's name
var hacker1 = "Borja"

//2. Print "The driver's name is XXXX"
console.log("The dirver's name is " + " " + hacker1);

//3.Create a variable hacker2 and ask the user for the navigator's name
var hacker2 = prompt("what's your name?")

//4.Print "The navigator's name is YYYY"
console.log("The navigator's name is" + " " + hacker2);

//*****************Conditionals****************************

//5.Depending on which name is longer, print:
if(hacker1.length>hacker2.length){
  console.log(hacker1 + " has the longest name,it has" + " " + hacker1.length +  " " +"characthers");
}else if( hacker2.length>hacker1.length){
  console.log(hacker2 + " has the longest name,it has" + hacker2.length + "characthers");
}else { 
  console.log("wow, you both got equally long names, XX characters!!");
}

// *******************loops*******************

//6.Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
var result = " ";
for ( var i = 0; i < hacker1.length; i++){
  var driverCharacters = hacker1[i];
  result += driverCharacters.toUpperCase()
  + " ";
 console.log(result);
}


//7.Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
    //option 1
    var driverReverse = hacker1.split("").reverse().join("");
    console.log(driverReverse);
  // option 2
  var nameReverse = "";
  for ( var i = hacker1.length-1; i>=0; i--){
  nameReverse += hacker1[i];
  console.log(nameReverse);}


//8.Depending on the lexicographic order of the strings, print:


if (hacker1[0]<hacker2[0]){
  console.log("The driver's name goes first");
}else if(hacker2[0]<hacker1[0]){
  console.log("Yo, the navigator goes first definitely");
}else{
  console.log("What?! You both got the same name?")
}
//9.Ask the user for a new string and check if it's a Palindrome.
var newString = prompt("give me a new string");
var re = /[^A-Za-z0-9]/g;
var lowRegStr = newString.toLowerCase().replace(re, '');

console.log(lowRegStr);
var newStringReverse = lowRegStr.split('').reverse().join('');
console.log(newStringReverse);

if(lowRegStr === newStringReverse){
  console.log("Esto es un palindromo");
}else{console.log("No es un palindromo");}

// *******************Lorem ipsum generator*******************

/*10. Go to lorem ipsum generator and:

Generate 3 parragraphs. Store the text in a String
Make your program count the number of words in the string
Make your program count the number of times the latin word etappears */

