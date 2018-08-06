// Names and Input
var hacker1 = "Tom"; 
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2)

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loop

var y ="";

for (i=0; i<hacker1.length; i++) {
   var x = hacker1[i];
   y = y + x + " ";
}

console.log(y.toUpperCase());

var reverse="";
for (i=hacker2.length - 1; i>=0; i--) {
    var z = hacker2[i];
    reverse = reverse + z + " ";
}

console.log(reverse);


if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log("The driver's name goes first")
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
   console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both got the same name?")
}