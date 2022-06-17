// Iteration 1: Names and Input
const hacker1 = "Hugo"
const hacker2 = "Caio"

console.log(`The drivers name is ${hacker1}`)
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters`)
  }  else if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker2.lenght > hacker1.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} charecters.`);
  } 
  
// Iteration 3: Loops

let nome = "";
for (let i = 0; i < hacker1.length; i++) {
nome += hacker1[i] + " ";
}
console.log(nome)


let nome2 = [];
for (let i = 0; i < hacker2.length; i++) {
nome2.push(hacker2[i])
}
nome2.reverse();
console.log(nome2)

nome2.sort();

console.log(nome2)



if (hacker1[0] < hacker2[0]) {
  console.log(`The ${hacker} name goes first`) 
} else if (hacker1[0] > hacker2[0]) {
  console.log(`Yo, the ${hacker2} goes first definitely.`)
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
}