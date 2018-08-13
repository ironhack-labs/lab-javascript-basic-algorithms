
// Names and Input
let hacker1 = "Stephen";
console.log("the driver's name is" + " " + hacker1);

let hacker2 = "Lauren";
console.log("the navigator's name is" + " " + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, " + "it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, " + "it has " + hacker2.length + " characters");
} else if (hacker1.length === hacker2.length) {
  console.log("wow, you both got equally long names, " + "it has " + hacker2.length + " characters");
} else {
  undefined;
}

console.log((hacker1.split('').join(' ')).toUpperCase()); 

console.log(hacker1.split("").reverse().join(""));

// Lorem ipsum generator

if (hacker1 < hacker2) {
  console.log(hacker1);
} else {
  console.log(hacker2);
} 
