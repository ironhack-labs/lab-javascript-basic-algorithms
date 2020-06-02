// Iteration 1: Names and Input

const hacker1 = 'Guilherme';
const hacker2 = 'Hebert';
let highName;

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  highName = hacker1.length;
}else{ 
  highName = hacker2.length;
}

if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${highName} characters.`);

} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${highName} characters.`);
  
}else if(`${hacker1.length} == ${hacker2.length}`){
  console.log(`Wow, you both have equally long names, ${highName} characters!`)
}

// Iteration 3: Loops

console.log(`${hacker1.toUpperCase()}`);

console.log(`${hacker2.split('').reverse().join('')}`);

let ordemAlfabet = [hacker1, hacker2];

console.log(ordemAlfabet.sort())
