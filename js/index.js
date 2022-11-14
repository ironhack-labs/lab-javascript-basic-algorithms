// Iteration 1: Names and Input
//

let hacker1 = "Erica";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Gabriel";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

let newName = "" ;

for (let i = 0; i < hacker1.length; i++){
  newName += hacker1[i].toUpperCase() + " ";
} 

console.log(newName.trim())

let reversedName = ""

for ( let i = hacker2.length -1 ; i >= 0; i--){
    reversedName += hacker2[i];
}

console.log(reversedName)

let hacker1Lower = hacker1.toLowerCase()
let hacker2Lower = hacker2.toLowerCase()

if (hacker1Lower < hacker2Lower) {
    console.log(`The driver's name goes first.`)
} else if (hacker1Lower > hacker2Lower) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (hacker1Lower == hacker2Lower){
    console.log(`What?! You both have the same name?`);
}