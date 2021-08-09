// Iteration 1: Names and Input
let hacker1 = "Iván";

console.log(`The driver´s name is ${hacker1}`);

let hacker2 = "Adam";

console.log(`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`)
  else console.log(`Wow, you both got equally long names, ${hacker2.length} characters!`)
  else if (hacker1.length < hacker2.length) console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
   

// Iteration 3: Loops


let hacker1InCaps = '';

for(let i = hacker2.length; i >= 0; i-- ){
    hacker1InCaps += hacker1[i].toUpperCase();
    if( i !== hacker1.length-1) hacker1InCaps+=""
}
console.log(`hacker1InCaps: ${hacker1InCaps}`);