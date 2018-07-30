//var hacker1 = prompt("What is the driver's name?");
var hacker1 = "Tom";
console.log("The driver's name is " + hacker1);

//var hacker2 = prompt("What is the navigator's name?");
var hacker2 = "Benjamin";
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
} else { 
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters")
}

var driversName = "";

for (var i = 0; i < hacker1.length; i++){
  driversName += hacker1[i].toUpperCase();
  driversName += " ";  
}
console.log(driversName);

var navigatorsName = "";

for (var i = hacker2.length - 1; i >= 0; i--){
  navigatorsName += hacker2[i];
}
console.log(navigatorsName);


if (hacker1[0] > hacker2[0]){
  console.log("The driver's name goes first");
} else if (hacker1[0] < hacker2[0]){
  console.log("Yo, the navigator goes firs definitely")
} else {
  console.log("What?! You both got the same name?");
}
