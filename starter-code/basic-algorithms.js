var hacker1 = "Jamilet"; //driver
  console.log("The Driver's name is: " + hacker1);
var hacker2 = prompt("What is the Navigator's name?"); //navigator
  console.log("The Navigator's name is: " + hacker2);


if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters" );
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, the Navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters");
}

var test = hacker1.toUpperCase("");
console.log(test.split('').join(' '));

var test2 = hacker2.split('').reverse('');
console.log(test2.join(''));

if (hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely");
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else {
  console.log("What?! You both got the same name?");
}
