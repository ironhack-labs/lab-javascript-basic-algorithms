console.log("I'm Ready!");

var hacker1 = "Octave";
console.log("The driver's name is " + hacker1);

var hacker2 = "";

do {
  hacker2 = window.prompt("Please enter your name");
}
while (hacker2 === "");
console.log("The navigator's name is "+ hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
  else if (hacker1.length < hacker2.length) {
   console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  }
  else if (hacker1.length = hacker2.length) {
    console.log("wow, you both got equally long names, " + hacker1.length +" characters!!");
  }

console.log((hacker1.split("").join(" ").toUpperCase()));
console.log((hacker2.split("").reverse().join(" ")));

if (JSON.stringify(hacker1) === JSON.stringify(hacker2)) {
  console.log("What?! You both got the same name?");
}
else if (JSON.stringify(hacker1) > JSON.stringify(hacker2)) {
  console.log("The driver's name goes first");
}
else if (JSON.stringify(hacker1) < JSON.stringify(hacker2)) {
  console.log("Yo, the navigator goes first definitely");
}