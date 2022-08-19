// Iteration 1: Names and Input

let hacker1 = `Mike`;

console.log(`The driver's name is ${hacker1}`);

let hacker2 = `William`;

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let indiLetter = ``;

let capName = ``;


for (let i = 0; i < hacker1.length; i++) {
  
  if (i === hacker1.length - 1) {
    let indiLetter = hacker1.charAt(i);
  
    capName += indiLetter;
    
  } else {
  
  let indiLetter = hacker1.charAt(i) + ` `;
  
  capName += indiLetter;
  }
};

console.log(capName.toUpperCase());


let indiReverseLetter = ``;
let reverseName = ``;

for (let i = 1; i <= hacker2.length; i++) {
  
  
  let j = hacker2.length - i;
  let indiReverseLetter = hacker2.charAt(j);
  
  reverseName += indiReverseLetter;
  
}

console.log(reverseName);



if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`);
};