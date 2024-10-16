// Iteration 1: Names and Input

let hacker1 = "john";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "maria";

console.log(`The navigator's name is ${hacker2}`);




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters. `)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }


// Iteration 3: Loops

//3.1
let hacker1Upper = hacker1.toUpperCase()
let finalString = "";

 for (let i = 0; i < hacker1Upper.length; i++) {
    finalString += hacker1Upper[i] + " ";
    
}

console.log(finalString);


//3.2
let finalString2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  finalString2 += hacker2[i];
}

console.log(finalString2);


//3.3


if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`${hacker1} goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, ${hacker2}goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

