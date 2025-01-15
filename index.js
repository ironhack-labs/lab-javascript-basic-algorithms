// Iteration 1: Names and Input
const hacker1 = "Daniel";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Olga";
console.log(`The driver's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} The driver has the longest name`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`${hacker2} It seems that the navigator has the longest name`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}characters`)
}
// Iteration 3: Loops

let result = "";

for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toLocaleUpperCase();
    if (i < hacker1.length - 1) {
        result += " ";
    }
}
console.log(result);

let result2 = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
    result2 += hacker1[i]

}
console.log(result2);


if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

