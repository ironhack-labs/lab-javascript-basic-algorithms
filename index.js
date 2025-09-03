// Iteration 1: Names and Input

let hacker1 = "Josh";


console.log (`The driver´s name is ${hacker1}`)

let hacker2 = "Daniel";


console.log (`The navigators´s name is ${hacker2}`)
// Iteration 2: Conditionals

const name1 = "Joshua";
console.log (name1.length);

const name2 = "Daniel"
console.log (name2.length);

if (name1.length > name2.length) {
    console.log (`The driver has the longest name, it has ${name1.length} characters. ` )
}

else if (name1.length < name2.length) {
    console.log (`The navigator has the longest name, it has ${name2.length} characters.`)
}

 else {
console.log (`Wow! You both have equally long names, ${name1.length} characters.`)
 }

// Iteration 3: Loops
let name3 = " "
for (let i = 0; i < 6; i +=1) {
name3 += name1 [i] + " " 
}
console.log (name3);

const allCaps = name3.toUpperCase
console.log (allCaps);

    