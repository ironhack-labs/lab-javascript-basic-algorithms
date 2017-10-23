// Names and Input
var hacker1 = "Carlos";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is the navigator's name?", "");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

// Loops
var capitalized = "";
for (var i = 0; i < hacker1.length; i++) {
    capitalized += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        capitalized += " ";
    }
    
}
console.log(capitalized);

var reversed = "";
for (var i = hacker2.length - 1; i >= 0; i--) {
    reversed += hacker2[i];
}
console.log(reversed);

var first = "";
var minSize = Math.min(hacker1.length, hacker2.length);
for (var i = 0; i < minSize; i++) {
    if (hacker1[i] < hacker2[i]) {
        first = hacker1;
        break;
    } else if (hacker1[i] > hacker2[i]) {
        first = hacker2;
        break;
    } else if (i == minSize - 1) {
        first = false;
    }
}

switch (first) {
    case hacker1:
        console.log("The driver's name goes first");
        break;
    case hacker2:
        console.log("Yo, the navigator goes first definitely");
        break;
    default:
        console.log("What?! You both got the same name?");
}