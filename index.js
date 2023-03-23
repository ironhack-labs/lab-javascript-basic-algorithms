// Iteration 1: Names and Input
// Iteration 1: Names and Input
// 1.1
let hacker1= "John";
// 1.2
console.log(`The diver's name is ${hacker1}`)

//1.3
let hacker2= "Henk"
//1.4
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
//2.1
if (hacker1.length> hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length< hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops
//3.1
let hacker="";
for(let i=0; i< hacker1.length; i++){
  hacker+= hacker1[i].toUpperCase()+ " ";
}
console.log(hacker)

//3.2
let hacker_reverse="";
for(let i=hacker1.length-1; i >=0; i--){
  hacker_reverse += hacker1[i]
}

//3.3
if(hacker1.localeCompare(hacker2)==1){
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2)==-1){
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}

//Bonus 1
//Bonus 2