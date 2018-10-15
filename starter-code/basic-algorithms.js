// Names and Input


//Conditionals


// Lorem ipsum generator
// Names and Input
var hacker1 = "jean nicolas"
console.log("The driver's name is " + hacker1 + ".");

var hacker2 = prompt("What is the navigator's name?").toLowerCase();
console.log("The navigators's name is " + hacker2 + ".");
//Conditionals

var hacker1Length = hacker1.length +1;
var hacker2Length = hacker2.length +1;

if (hacker1Length > hacker2Length) {
  console.log("The Driver has the longest name, it has " + hacker1Length + " characters");
}

else if (hacker2Length > hacker1Length) {
  console.log("Yo, navigator got the longest name, it has " + hacker1Length + " characters");
}

else if (hacker1Length === hacker2Length) {
  console.log("wow, you both got equally long names, " + hacker1Length + " characters!!");
};

// Loops

var str1 ="";
for (var i = 0; i <= (hacker1.length - 1); i++) {
  str1 += hacker1[i] + " ";
};
console.log(str1.toUpperCase());



function reverseString (str2) {
  var str2;
  for (var i = 0; i <= (hacker2.length - 1); i++) {
  str2 += hacker2[i];
  };

  var splitString = str2.split("")

  var reverseArray = splitString.reverse();
  var reverseStr = reverseArray.join("");
  console.log(reverseStr);
}

reverseString();

// sorting names

var names = [hacker1, hacker2];
names.sort();

if (hacker1[0] !== hacker2[0]) {

  if (names[0] === hacker1) {
    console.log("The driver's name goes first");
  }

  else if (names[0] === hacker2) {
    console.log("Yo, the navigator goes first definitely");
  };
}
else {
  console.log("What?! You both got the same name?");
};

// Palindrome
/*
var userPal = prompt("check if this is a palindrome:").toLowerCase();
var reverse = userPal

*/
// Lorem ipsum generator

