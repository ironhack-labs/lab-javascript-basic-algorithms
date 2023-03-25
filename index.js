// Iteration 1: Names and Input
let hacker1 = "João";
console.log(`The driver's name is ${hacker1}.`);


let hacker2 = "João";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}.`);
  }
  else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has XX characters. ${hacker2.length}.`);
  }
  else if (hacker1.length === hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
  }

// Iteration 3: Loops
let hacker1UpperCase = hacker1.toUpperCase();

function insertSpaces(aString) {
  return aString.split("").join(" ");
}
console.log(insertSpaces(hacker1UpperCase));


//3.2
    function ReverseString(str) {
     return str.split("").reverse().join("")
    }
   console.log(ReverseString(hacker2));


//3.3
if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first");
}
else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first, definitely.");
}
else if (hacker1[0] === hacker2[0]) {
    console.log("What?! You both got the same name?");
  }
