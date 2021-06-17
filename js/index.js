// Iteration 1: Names and Input

let hacker1 = "Driver"
let hacker2 = "Navigator"
console.log(`The Driver's name is ${hacker1}`);
console.log("The Navigator's name is", hacker2);



// Iteration 2: Conditionals

if (hacker1 > hacker2) console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else if (hacker2 > hacker1) console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
else if (hacker1 == hacker2) console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)


// Iteration 3: Loops

let result = "";

for (let i=0; i<hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

let backwards = "";

for (let i=hacker2.length-1; i >=0; i--) {
  backwards += hacker2[i] + " ";
}
console.log(backwards)

if (hacker1 > hacker2) console.log("The driver's name goes first.");
else if (hacker1 < hacker2) console.log("Yo, the navigator goes first definitely.");
else if (hacker1 === hacker2) console.log("What?! You both have the same name?");