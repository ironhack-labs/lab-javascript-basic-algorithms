// Iteration 1: Names and Input
/* 1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`. */

let hacker1 = 'André';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Rashoud';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

function longestName() {
    if (hacker1.length > hacker2.length) {
        return `The driver has the longest name, it has ${hacker1.length} characters.`
    } else if (hacker1.length < hacker2.length) {
        return `The navigator has the longest name, it has ${hacker2.length} characters.`
    }else if (hacker1.length === hacker2.length) {
        return `Wow, you both have equally long names, ${hacker2.length} characters!`
    }
}

// Iteration 3: Loops

//3.1
let resultString = "";
for (let i = 0; i < hacker1.length; i++) {
  resultString += hacker1[i].toUpperCase() + " ";
}

console.log(resultString);

//3.2
let stringReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  stringReverse += hacker2[i];
};

console.log(stringReverse)

//3.3
if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
  } else if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
  } else {
    console.log(`Yo, the navigator goes first definitely.`);
  }