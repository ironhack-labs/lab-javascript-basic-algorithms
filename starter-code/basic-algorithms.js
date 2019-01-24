// Names and Input

var hacker1 = prompt("Enter your name ");
console.log("Driver name is " + hacker1);
var hacker2 = prompt("What is the navigator name ");
console.log("Navigator is " + hacker2);

// Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + "characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + "characters");
} else {
  console.log("wow, you both got equally long names, " + hacker2.length + "characters!!");
}

// Loops

var driverCap = " ";
for (var i = 0; i < hacker1.length; i++) {
  driverCap += hacker1[i].toUpperCase() + " ";
}
console.log(driverCap);

var navigatorCap = " ";
for (var i = hacker2.length - 1; i >= 0; i--) {
  navigatorCap += hacker2[i].toUpperCase() + " ";
}
console.log(navigatorCap);


var alphaBet = "abcdefghijklmnopqrstuvwxyz";

if (hacker1.length > hacker2.length) {
  var i = 0;
  while (i < hacker2.length) {
    if (alphaBet.indexOf(hacker1[i].toLowerCase()) > alphaBet.indexOf(hacker2[i].toLowerCase())) {
      console.log("Yo, the navigator goes first definitely");
      break;
    } else if (alphaBet.indexOf(hacker2[i].toLowerCase()) > alphaBet.indexOf(hacker1[i].toLowerCase())) {
      console.log("The driver's name goes first");
      break;
    }
    else if (alphaBet.indexOf(hacker2[i].toLowerCase()) == alphaBet.indexOf(hacker1[i].toLowerCase())) {
      continue;
    }
  }
  i++;
}

if (hacker1.length < hacker2.length) {
  var i = 0;
  while (i < hacker1.length) {
    if (alphaBet.indexOf(hacker1[i].toLowerCase()) > alphaBet.indexOf(hacker2[i].toLowerCase())) {
      console.log("Yo, the navigator goes first definitely");
      break;
    } else if (alphaBet.indexOf(hacker2[i].toLowerCase()) > alphaBet.indexOf(hacker1[i].toLowerCase())) {
      console.log("The driver's name goes first");
      break;
    }
    else if (alphaBet.indexOf(hacker2[i].toLowerCase()) == alphaBet.indexOf(hacker1[i].toLowerCase())) {
      continue;
    }
  }
  i++;
}

// Bonus Time

var string = prompt("Enter new string");

lowerStr = string.toLowerCase();
var combinedStr = lowerStr.split(" ").join("");
console.log(combinedStr);
var reverseStr = combinedStr.split("").reverse().join("");
console.log(reverseStr);

if (combinedStr != reverseStr){
  console.log("False, the string " + " '" + string + "' " + " is a Palindrome");
}else{
  console.log("Yay, the string  " + " '"+ string + "' " + " is a Palindrome.");
}

