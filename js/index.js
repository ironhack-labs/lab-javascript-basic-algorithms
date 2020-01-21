console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Manuel';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Myrian';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  var a = hacker1.length
  console.log(`The driver has the longest name, it has ${a} characters.`)
}
else if (hacker2.length > hacker1.length) {
  var b = hacker2.length
  console.log(`It seems the navigator has the longest name, it has ${b} characters.`)
}else {
  console.log('Wow, you both have equally long names, '+ hacker1.length + ' characters!')
}
// Iteration 3: Loops

let x = '';

for(let i = 0; i < hacker1.length; i++) {
  x = x + hacker1[i].toUpperCase()+ ' '
}

console.log(x);

let y = "";

for(let i = hacker2.length -1 ; i >= 0; i--) {
  y += hacker2[i]
}

console.log(y);

let z = [hacker1, hacker2];

z.sort();

if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`)
} else if (z[0] === hacker1){
  console.log(`The driver's name goes first.`)
} else if (z[0] === hacker2){
  console.log(`Yo, the navigator's goes first definitely.`) 
}