// Iteration 1: Names and Input
let hacker1 = `Franky`;
console.log(`The driver's name is ${hacker1}`);

let hacker2 = `Manuel & Álvaro`
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  
  } else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

hacker1.split("").map((letter) => letter.toLocaleUpperCase()).join(" ");

hacker2.split("").reverse().join("");

// 3.3

function compare(a , b) {
    if (a >  b) {
      return console.log(`The driver's name goes first.`);
    }
    if (b > a) {
      return console.log(`Yo, the navigator goes first definitely.`);
    }
    else {
      return console.log(`What?! You both have the same name?`);
    }
  }
  compare(hacker1,hacker2);

