// Iteration 1: Names and Input
let hacker1 = "Emiliano";
let hacker2 = "Alexis";

console.log(`the driver's name is ${hacker1}`);
console.log(`the navigator's name is ${hacker2}`);


if (hacker1.length > hacker2.length) {
  let hacker1Char = hacker1.length;
  console.log(`The driver has the longest name, it has ${hacker1Char} characters.`);
}
else if (hacker1.length < hacker2.length) {
  let hacker2Char = hacker2.length;
  console.log(`The driver has the longest name, it has ${hacker2Char} characters.`);
}
else {
  let hackerSame = hacker1.length;
  console.log(`Wow, you both have equally long names, ${hackerSame} characters!`);
}

// Iteration 2: Conditionals

let k = '';
let j = ' ';
for (i = 0; i < hacker1.length; i++) {
  if (hacker1[i] !== " ") {

    k += hacker1[i].toUpperCase() + j;
  }

}
console.log(k);

let lastIndex = hacker2.length - 1
let char = ""
for (let i = lastIndex; i >= 0; i--) {
  char += hacker2[i]
}
console.log(char);


// Iteration 3: Loops

// for(a=0; a<hacker1.length; a++){
//   if(hacker1[a] === "A"){
//     console.log("The driver's name goes first.");
//   }
//   else if (hacker1[a] !== "A"){
//     console.log("Yo, the navigator goes first definitely.");
//   }
//   else if (hacker1 === hacker2){
//     console.log("What?! You both have the same name?")
//   }
// }

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
  } else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
  }