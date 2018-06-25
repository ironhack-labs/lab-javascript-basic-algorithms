// Names and Input
var hacker1 = "Andrea";
console.log("The driver's name is " + hacker1);

var hacker2 = window.prompt("Navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log("The Driver has the longest name, it has " + hacker1Length + " characters")
} else if (hacker2Length > hacker1Length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2Length + " characters")
} else {
  console.log("wow, you both got equally long names, " + hacker1Length + " characters!!")
}

// Lorem ipsum generator
var formattedHacker1 = "";

for (var i = 0; i < hacker1Length; i++) {
  formattedHacker1 += hacker1.charAt(i).toUpperCase();
  if (i < hacker1Length - 1) {
    formattedHacker1 += " ";
  }
}

console.log(formattedHacker1);

var formattedHacker2 = "";

for (var i = hacker2Length - 1; i >=0; i--) {
  formattedHacker2 += hacker2.charAt(i);
}

console.log(formattedHacker2);

var driverNameGoesFirst = false;
var greaterFound = false;
var i = 0;

while (!greaterFound && i < hacker1Length) {
  if (hacker1.charAt(i) < hacker2.charAt(i)) {
    driverNameGoesFirst = true;
    greaterFound = true;
  } else if (hacker1.charAt(i) > hacker2.charAt(i)) {
    driverNameGoesFirst = false;
    greaterFound = true;
  }

  i++;
}

if (greaterFound) {
  if (driverNameGoesFirst) {
    console.log("The driver's name goes first");
  } else{
    console.log("Yo, the navigator goes first definitely");
  } 
} else {
  console.log("What?! You both got the same name?");
}
