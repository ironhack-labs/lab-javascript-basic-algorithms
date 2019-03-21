// Names and Input
var hacker1 = "Guillaume";
console.log("The driver's name is " + hacker1);
var hacker2;
var hacker2 = prompt ("What's your navigator name");
console.log("The navitor's name is " + hacker2);

//Conditionals

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters.")
}
  else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.")
  }
  else {
    console.log("wow, you both got equally long names, XX characters!!")
  }
var hacker1 = hacker1.toUpperCase();
console.log(hacker1);
var hacker1 = hacker1.split('').join(" ");
console.log(hacker1);

function reverseString(hacker1) {
    var reverseStringHacker1 ="";
    for (var i = hacker1.length - 1; i >= 0; i--) {
        reverseStringHacker1 = reverseStringHacker1 + hacker1[i];
    }
    return reverseStringHacker1;
}
console.log(reverseString(hacker1));
var reverseStringHacker1 = reverseString(hacker1);
console.log(reverseStringHacker1);

var tableau=[hacker1,hacker2];
console.log(tableau);
tableau.sort();
console.log(tableau);

if (tableau[0] === hacker1){
  console.log("The driver's Guillaume goes first");
}
else if (tableau[1] === hacker2){
  console.log("The driver 2 goes first for sure")
}
else if (tableau[1] === tableau[2]){
  console.log("You have the same name")
}
else {
  console.log("la fin des haricots si tu vois ça")
}

console.log("testgitpull")
// Lorem ipsum generator

