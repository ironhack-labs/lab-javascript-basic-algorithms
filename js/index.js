// Iteration 1: Names and Input
//
let hacker1 = "Juliana";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Raiza Garcia";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
 console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
}
 else if (hacker1.length < hacker2.length) { 
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
 }
 else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.lenght}, ${hacker2.lenght} characters!`);
 }

// Iteration 3: Loops

  for (let i = 0; i <= hacker1.length; i++){   
    console.log(hacker1[i].toUpperCase());
  }

  for (let j = 0; j <= hacker2.length; j++){   
    console.log(hacker2[j].reverse());
  }