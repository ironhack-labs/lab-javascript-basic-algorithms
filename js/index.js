// Iteration 1: Names and Input
let hacker1 = `João Pedro`;
let hacker2 = `Henrique`;

let h1 = `The driver's name is ${hacker1}.`;
let h2 = `The navigator's name is ${hacker2} .`;

console.log(h1);
console.log(h2);


// Iteration 2: Conditionals
let h1Length = hacker1.length;
let h2Length = hacker2.length;

if(h1Length > h2Length){
  console.log(`The driver has the longest name, it has ${h1Length} characters.`)
} else if(h2Length > h1Length){
  console.log(`It seems that the navigator has the longest name, it has ${h2Length} characters.`)
} else{
  console.log(`Wow, you both have equally long names, ${h1Length} characters!`)
}



// Iteration 3: Loops:

let hack1 = '';

for(let i = 0; i < hacker1.length; i += 1){
  hack1 += `${hacker1[i].toUpperCase()} `;
  
}
 
console.log(hack1.trim());











