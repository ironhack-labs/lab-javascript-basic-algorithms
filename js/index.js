// Iteration 1: Names and Input
let hacker1 = "Paco";
let hacker2 = "Mario";
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if( hacker1.length >  hacker2.length) {
  console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
}
if(hacker2.length >  hacker1.length) {
 console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
} else {
 console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

let hacker1Separated = "";
for(let i = 0; i < hacker1.length; i++) {
  if(i === hacker1.length-1) {
    hacker1Separated += hacker1[i];
  } else {
    hacker1Separated += hacker1[i] + " ";
  }
}
console.log(hacker1Separated.toUpperCase());

let hacker2Reverse = "";
for(let i = 0; i < hacker2.length; i++) {
  hacker2[hacker2.length-1-i];
  hacker2Reverse += hacker2[hacker2.length-1-i];
}
console.log(hacker2Reverse) 

if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`${hacker1} goes first.`)
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`Yo, ${hacker2} goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

