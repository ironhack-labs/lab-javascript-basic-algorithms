

// Iteration 1: Names and Input

let hacker1 ="Joseph";
let hacker2 ="Amanda";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`- The driver has the longest name, it has ${hacker1.length} characters.`)}
  
  else if(hacker1.length<hacker2.length){
      console.log(`- It seems that the navigator has the longest name, it has ${hacker2.length} characters`)}
  
  else if(hacker1.length = hacker2.length){console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length}`)}

// Iteration 3: Loops


// ROUND 01

for(let i=0; i<hacker1.length; i++){
  let sum = hacker1[i].toUpperCase();
  console.log(sum);
}

// ROUND 02

for(let i=hacker1.length-1; i>=0; i--){
  console.log(hacker1[i]);
}

// ROUND 03


if(hacker1.localeCompare(hacker2) === 1){
  console.log("The driver's name goes first.")
}

else if(hacker1.localeCompare(hacker2) === -1){
  console.log("Yo, the navigator goes first, definitely.")
}

else if(hacker1.localeCompare(hacker2) === 0){
  console.log("What?! You both have the same name?")
}




  




