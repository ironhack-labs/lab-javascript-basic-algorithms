console.log("I'm ready!");

// Iteration 1&2

var hacker1 = "Thomas";
var hacker2 = "Ben";
let i = 0;
let longText = " ";
var text = "";
var navre = "";
var rev = "";
let result = hacker1.toUpperCase();
let len1 = hacker1.length;
let len2 = hacker2.length;
let lenres = result.length;
if (len1 > len2) {
  console.log("The driver has longest name,it has " + len1 + "characters");
} else if (len2 > len1) {
  console.log("The navigator has longest name,it has " + len2 + "characters");
} else {
  console.log("wow,you both have equal long name with" + len1 + "characters");
}

// Iteration 3

let driverName = prompt("Please enter name");
const capitalizedDriverName = driverName.toUpperCase();
const separatedDriverName = capitalizedDriverName.split("").join(" ");

console.log(separatedDriverName);

*****************************************************

let NavigatorName = prompt("Please enter name");

const reversedNavigatorName = NavigatorName.split('').reverse().join('');

console.log(reversedNavigatorName);

***********************************************************
let driverName = prompt("Please enter drivername");
let navigatorName = prompt("Please enter navigatorname");
 if (driverName < navigatorName) {
  console.log("The driver's name goes first.");
 } else if (driverName > navigatorName) {
   console.log("Yo, the navigator goes first, definitely.");
 } else {
  console.log("What?! You both have the same name?");
 }