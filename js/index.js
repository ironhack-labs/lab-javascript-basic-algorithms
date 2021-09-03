// Iteration 1: Names and Input

let hacker1 = "Hassan";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Cleiton";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

    } else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
    }

// Iteration 3: Loop
let newHacker1 = "";
let reverseHacker2 = "";

for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(newHacker1);

for (let j = hacker2.length -1; j >= 0; j--) {
  reverseHacker2 += hacker2[j];
}
console.log(reverseHacker2);

let n = 0;

while (n < hacker1.length && n < hacker2.length) {
  if(hacker1[n] < hacker2[n]) {
    console.log("The driver's name goes first");
    break;
  } else if (hacker2[n] < hacker1[n]) {
    console.log("The navigator's name goes first");
    break;
  } else if (n === (hacker1.length -1) || n === (hacker2.length - 1)) {
    console.log("What?! You both have the same name?");
  }
  n++;
}
