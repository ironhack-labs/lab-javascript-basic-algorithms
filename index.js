// Iteration 1: Names and Input

const hacker1 = 'Joao'
const hacker2 = 'Guilherme'

console.log(`"the driver's is ${hacker1}"`);
console.log(`"the navigator's is ${hacker2}"`);

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`)
}

else if(hacker2.length>hacker1.length){
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`)
}

else {
    console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`)
}

// Iteration 3: Loops

//3.1)

let modName = "";
let modName1 = "";
 
 for (let i = 0; i < hacker1.length; i++) {
  // Store a single character in the string
   modName += hacker1[i] + " ";
 }
  // Print the character in the console
  modName = modName.trim();
  console.log(modName.toUpperCase());

  //3.2)

  for (let i = hacker2.length-1; i >= 0; i--){
    modName1 += hacker2[i];
  }
  modName1 = modName1.trim();
  console.log(modName1)

  //3.3)
  
  if ((`${hacker1}`).localeCompare(`${hacker2}`) === 1){
    console.log("Yo, the navigator goes first, definitely.")
  }

  else if((`${hacker1}`).localeCompare(`${hacker2}`) === 0){
    console.log("The driver's goes first.'")
  }

  else {
    console.log("What?! You both have the same name?")
  }


