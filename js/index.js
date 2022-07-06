// Iteration 1: Names and Input
const hacker1 = "Raquel";
const hacker2 = "Simão";
//console.log(hacker1, hacker2);
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops

let newName = "";

for (let i = 0; i < hacker1.length; i++) {
 newName += hacker1[i] + " ";
 

}
console.log(newName.toUpperCase());

let newSecondName = "";

for(let i = hacker2.length - 1; i >= 0; i--){
  newSecondName += hacker2[i];
}
console.log(newSecondName);

if(hacker1 < hacker2){
  console.log("The driver's name goes first.")
}else if(hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely")
} else{
  console.log("What?! You both have the same name?")
}
