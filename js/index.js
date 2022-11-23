// Iteration 1: Names and Input

console.log("I'm ready!");

const hacker1 = "Rudi"
console.log(hacker1)

const hacker2 = "Rahaf"
console.log(hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
   } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
   } else if (hacker2.length === hacker1.length) {
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
   }

// Iteration 3: Loops

// 3.1

let str = '';
for(let i = 0; i < hacker1.length; i++) {
  str += hacker1.charAt(i) + " ";
  console.log(str.toUpperCase());
}

//needs some change


//3.2

let str2 = '';
for(let i = str.length - 1; i >= 0; i--) {
  str2 += hacker2.charAt(i);
  console.log(str2);
}
//needs some change

//3.3

let alphOrder = hacker1.localeCompare(hacker2);
if (alphOrder === 1) {
    console.log("Yo, the navigator goes first definitely.");
} else if (alphOrder === -1) {
    console.log("The driver's name goes first.")
} else if (alphOrder = 0) {
    console.log("What?! You both have the same name?")
}