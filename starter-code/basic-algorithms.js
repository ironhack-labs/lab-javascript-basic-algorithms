// ex 1&2
var hacker1 = "valerie";
console.log("The driver's name is " + hacker1 + ".");

//ex 3&4
var hacker2 = prompt("Who's the navigator?");
console.log("The navigator's name is " + hacker2 + ".");

//ex 5
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
  } else if (hacker2.length > hacker1.length) {
    console.log("The navigator has the longest name, it has " + hacker2.length + " characters.");
  } else {
     console.log("Wow, you both have equally long names, " + hacker1.length + " characters.");
  };

//ex 6
var hacker1Cap = hacker1.toUpperCase();
var result = "";
for (var i=0; i<hacker1Cap.length; i++) {
   result += hacker1Cap[i] + " ";
};
console.log(result);

//ex 7
var length = hacker2.length;
var resultback = "";
for (var i=0; i<hacker2.length; i++) {
length-= 1;
resultback += hacker2[length];
}
console.log(resultback);

//ex 8
var hacker1Lower = hacker1.toLowerCase();
var hacker2Lower = hacker2.toLowerCase();

if (hacker1Lower > hacker2Lower) {
console.log("The navigator's name goes first");
} else if (hacker1Lower < hacker2Lower) {
  console.log("The driver's name goes first");
} else {
  console.log("What?! You both got the same name?");
};

//ex 9

var text = prompt("Enter text");
var textReverse = "";
var textlen = text.length;

for (var i=0; i<text.length; i++) {
textlen-= 1;
textReverse +=text[textlen];
}

if (text.toLowerCase() === textReverse.toLowerCase()){
  console.log("Hey! it's a palyndrome");
}



