// Names and Input

var hacker1 = "test";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What the navigator's name?");
console.log("The navigator's name is " + hacker2);

//5- Conditionals : 

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
  } else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  } else {
    console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!")
}
// 6- print driver name in uppercase with spaces
var j = "";
for (i = 0; i < hacker1.length; i++) {
  j += hacker1[i].toUpperCase() + " "; 
}
console.log(j);
// 7- print navigator name in reverse
var j = "";
for (i = hacker2.length -1; i >= 0; i--) {
  j += hacker2[i]; 
}
console.log(j);

// Lorem ipsum generator
