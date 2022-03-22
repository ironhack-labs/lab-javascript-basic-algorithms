// Iteration 1: Names and Input

let hacker1 = "Leopoldo";
let hacker2 = "Ariana";

console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  }
  
else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
  }
  
else if(hacker1.length = hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Itration 3: Loops

for (let i=0; i<hacker1.length;i++){
  let upperCase = hacker1.toUpperCase();
  console.log(`${upperCase[i]} `);
}

for (let i=0; i<hacker2.length;i++){
   console.log(hacker2[hacker2.length -1 - i]);
}

let names = ['Leopoldo', 'Ariana']
let sortNames = names.sort((a,b) => a.localeCompare(b));
console.log(sortNames);