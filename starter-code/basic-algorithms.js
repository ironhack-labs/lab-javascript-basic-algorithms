// Names and Input
var hacker1 = "Montse";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("Enter navigator's name");
console.log("The navigator's name is " + hacker2)

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + "characters.")
} else if (hacker2.length > hacker1.length) {
  console.log("The navigator has the longest name, it has " + hacker2.length + "characters.")
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + "characters!!!!!!!")
};

var name = "";
var uppercase = hacker1.toUpperCase();
var name2 = "";
for (var i=0; i<hacker1.length; i++) {
  name += uppercase[i]+ " ";
}
console.log(name);
var value = hacker1.length -1;
for (var i=value; i>=0; --i) {
  name2 += hacker1[i];
}
console.log(name2);


// Lorem ipsum generator
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
} else if (hacker2 > hacker1) {
  console.log("The navigator's name goes first.")
} else {
  console.log("You both have the same name.")
};