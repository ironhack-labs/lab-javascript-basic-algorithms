// Iteration 1: Names and Input

let hacker1 = "Lily";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Firefox";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
let hackerLength1 = hacker1.length;
let hackerLength2 = hacker2.length;

if (hackerLength1 > hackerLength2) {
  console.log(
    `The driver has the longest name, it has ${hackerLength1} characters.`
  );
} else if (hackerLength2 > hackerLength1) {
  console.log(`It seems that the navigator has the longest name, it has ${hackerLength2} characters.`);
} else if (hackerLength2 === hackerLength1) {
  console.log(
    `Wow, you both have equally long names, ${hackerLength1} characters!`
  );
}


// Iteration 3: Loops
//const reversed = array1.reverse();
console.log(hacker1.toUpperCase().split("").join(" "));

let reversed = "";
let hackerReverse1 = hacker1.toLocaleUpperCase();
for (var i = hackerReverse1.length - 1; i >= 0; i--){         
  reversed += hackerReverse1[i];  
}     
console.log(reversed)

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
  }
  else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  } 