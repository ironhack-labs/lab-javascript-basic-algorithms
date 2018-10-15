// Names and Input
var hacker1 = "Ronaldo";
var hacker2 = process.argv[2];

console.log("The driver's name is "+ hacker1);
console.log("The navigator's name is "+ hacker2);


//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver's name is the longest name, it has "+hacker1.length+" characters.");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, the navigator got the longest name, it has "+hacker2.length+" characters.");
} else if (hacker1.length === hacker2.length) {
  console.log("Wow, you both got equally long names, "+hacker1.length+" characters.");
}

var hackerUp = hacker1.toUpperCase();
console.log(hackerUp);
console.log(hackerUp[0]+" "+hackerUp[1]+" "+hackerUp[2]+" "+hackerUp[3]+" "+hackerUp[4]+" "+hackerUp[3]+" "+hackerUp[3]+" "+);

// Lorem ipsum generator
