// Iteration 1: Names and Input
let hacker1 = "Horacio"
console.log("The driver's name is"+ " " + hacker1);
let hacker2 = "Fernanda"
console.log("The navigator's name is"+ " " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`"The driver ${hacker1} has the longest name,it has ${hacker1.length} characters" `)
  }
  else if (hacker1.length<hacker2.length){
    console.log(`"The navigator ${hacker2} has the longest name,it has ${hacker2.length} characters" `)
  }
  else if (hacker1.length == hacker2.length){
    console.log(`"Wow, you both have equally long names, ${hacker2.length} characters!" `)
  }

// Iteration 3: Loops
let hacker1withspaces = ""
for(let char of hacker1){
  hacker1withspaces += char + " ";
  
} 
console.log(hacker1withspaces.toUpperCase())

let hacker2reversed = ""
for(let i=hacker2.length-1; i>-1;i--){
  // console.log(hacker2[i])
  hacker2reversed += hacker2[i];
}
console.log(hacker2reversed)