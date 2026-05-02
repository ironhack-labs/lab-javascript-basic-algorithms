//Iteration 1: 

const hacker1 = "Anne";
console.log("The driver's name is", hacker1);

const hacker2 = "david"
console.log("The navigator's name is", hacker2);


// Iteration 2: 

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longer name, it has", hacker1.length, "characters");
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longer name, it has",  hacker2.length,  "characters");
} else {
  console.log("you both have equally long names", hacker1.length, "characters");
}


// Iteration 3
let nameSpaced = "";

for (let i = 0; i < hacker1.length; i++) {
  nameSpaced += hacker1[i].toUpperCase() + " ";
}

console.log(nameSpaced);



let nameReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  nameReversed += hacker2[i];
}

console.log(nameReversed);


if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("the navigator's name goes first");
} else {
  console.log("You both have same name order");
}