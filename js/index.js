// Iteration 1: Names and Input
let hacker1 = prompt('name');
capitalizedHacker1 = hacker1.charAt(0).toUpperCase() + hacker1.slice(1);//strip out the first letter of the name to capitalize it
console.log(`The driver's name is ${capitalizedHacker1}`);

let hacker2 = prompt('name2');
capitalizedHacker2 = hacker2.charAt(0).toUpperCase() + hacker2.slice(1);
console.log(`The navigator's name is ${capitalizedHacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);
  } else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops