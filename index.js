// Iteration 1: Names and Input
const hacker1 = "Lorena";

console.log (`The diver's name is ${hacker1}`)

const hacker2 = "Ironhack";

console.log (`Te navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
    
    } else if (hacker1.length < hacker2.length) {
    
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
    
    } else {
    
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
    }

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
    const charUpperCase = hacker1[i].toUpperCase()
  
    newName += charUpperCase;
  
    if (i !== hacker1.length - 1) {
      newName += " ";
    }
  }
  
  console.log (newName);