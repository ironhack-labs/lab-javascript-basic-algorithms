// Iteration 1: Names and Input
//1.1
const hacker1 = "Joaquín";
//1.2
const hacker2 = "Leonardo";
//1.3
console.log("The driver's name is ", hacker1);
//1.4
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
//2.1
if(hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

// Iteration 3: Loops
//3.1
const hacker1M = hacker1.toUpperCase();
let nh1 = ''
for(let i = 0; i < hacker1M.length; i++) {
  nh1 = nh1 + hacker1M[i] + ' '
}
console.log(nh1);

//3.2
let nh2 = ''
for(let j = hacker2.length - 1; j >= 0; j--) {
    nh2 = nh2 + hacker2[j]
}
console.log(nh2)

//3.3
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
