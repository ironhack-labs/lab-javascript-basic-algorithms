// Iteration 1: Names and Input
const hacker1 = "Leonardo"
const hacker2 = "Luis Cruz"

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else if(hacker2.length === hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1
let newHacker1 = ""
for (let i = 0; i < hacker1.length; i++) {
 
    newHacker1 += hacker1.charAt(i).toUpperCase() + ' ';
}
console.log(newHacker1);

//3.2
let newHacker2 = ""
for (let i = hacker2.length; i >= 0 ; i--) {
 
  newHacker2 += hacker2.charAt(i);
}
console.log(newHacker2);
//3.3
if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
}else if(hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.")
}else if(hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name?")
}