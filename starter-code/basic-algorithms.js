// Names and Input

var hacker1 = "Bob";
console.log(`The driver's name is ${hacker1}`);

// var hacker2 = prompt ("Please choose a navigator's name.");
console.log (`The navigator's name is ${hacker2}`);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
}
else {
  console.log (`wow, you both got equally long names, ${hacker1.length} characters!`)
}

// Loops:
// Print all the characters of the driver's name, separated by a space and in capitals.

var spaceCapitals = hacker1.toUpperCase().split("").join(" ");
var upperCaseSeparatedHacker1 = "";

for (var i= 0; i < hacker1.length; i++) {
  console.log(spaceCapitals);
}

// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

var reverseOrder = "";
for (var i = hacker2.length ; i >= 0; i--) {
  console.log(hacker2[i]);
}

// Depending on the lexicographic order of the strings, print:
// The driver's name goes first / Yo, the navigator goes first definitely
// What?! You both got the same name?

var arr = [hacker1, hacker2];
arr.sort();

for (i = 0; i < hacker1.length; i++ ) {
  if (hacker1[i] < hacker2[i]) {
    console.log ("The driver's name goes first")
    break
  }
  else if (hacker1[i] > hacker2[i]) {
    console.log ("Yo, the navigator goes first definitely")
    break
  }
  else (hacker2[i] === hacker1[i])
    console.log ("What?! You both got the same name?")
}

// Ask the user for a new string and check if it's a Palindrome.

// var askAString = prompt ("Please write a Palindrome below:");

function isPalindrome(str){
  var str2 = str.toLowerCase().split("").join("").replace(/ /g, '');
  var str3 = str.toLowerCase().split("").reverse().join("").replace(/ /g, '');
  if (str3 === str2) {
    console.log("Yay, it's a Palindrome!")
  }else {
    console.log("Sorry, it's not a Palindrome...")
  }
}

isPalindrome("Mr Owl ate my metal worm");

// Exercice given by Guillaume :
// Create an array containing objects (each object contains at leat an array).
// Create a function to parse this array and display all contents nicely in the console.

// var electromenager = [
//   {
//     name : "un frigo",
//     contains : ["tiroir", "freezer", "fruits"],
//     color: "red"
//   },
//   {
//     name : "un aspirateur",
//     contains : ["manche", "tube", "balayette"],
//     color: "black"
//   }
// ];

// function iterateElectrom (type) {
//   for (let i = 0; i < electromenager.length; i++) {
//     console.log(`j'utilise chez moi: ${electromenager[i].name}`)
//     // console.log(electromenager[i].contains.length)
//     for (let j = 0; j < electromenager[i].contains.length; j++){
//       // console.log()
//       console.log(electromenager[i].contains[j])
//     }
//   }
// }

// electromenager.forEach((type, i) => console.log(type));
// //try with forEach loop