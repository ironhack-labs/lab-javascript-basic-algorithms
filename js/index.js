// Iteration 1: Names and Input
const hacker1 = "Joaquín";
const hacker2 = "Leonardo";
console.log("The driver's name is ", hacker1);
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
if(hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

// Iteration 3: Loops
// Iteration 3.1
const hacker1M = hacker1.toUpperCase();
let nH1 = ''
for(let i = 0; i < hacker1M.length; i++) {
  nH1 = nH1 + hacker1M[i] + ' '
}
console.log(nH1);

//Iteration3.2
let nH2 = ''
for(let j = hacker2.length - 1; j >= 0; j--) {
  nH2 = nH2 + hacker2[i]
}
console.log(nH2)

// Iteration 3.3
const h1 = hacker1.charCodeAt(0);
const h2 = hacker2.charCodeAt(0);
console.log(h1, h2)
if(h1 < h2) {
  console.log(`The driver's name goes first.`)
} else if(h1 > h2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`)
}

