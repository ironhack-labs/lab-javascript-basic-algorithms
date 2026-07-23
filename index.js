// Iteration 1: Names and Input
let hacker1 = "Bob"
let hacker2 = "Tyler"

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

let result31 = ''
let letterUp = ''

for (let i = 0; i < hacker1.length; i++){
    letterUp += `${hacker1[i].toUpperCase()} `
}

result31 = letterUp.slice(0,(letterUp.length - 1))

console.log(result31)

//----

let lastIndexHacker2 = hacker2.length - 1;
let result32 = ''

 for (let j = lastIndexHacker2; j >= 0; j--){
     result32 += hacker2[j]
    } 
 

//console.log(lastIndexHacker2)
console.log(result32)

//----

const hacker1Upper = hacker1.toUpperCase()
const hacker2Upper = hacker2.toUpperCase()

if (hacker1Upper < hacker2Upper){
    console.log(`The driver's name goes first.`);
} else if (hacker1Upper > hacker2Upper){
    console.log(`Yo, the navigator goes first, definitely.`);
} else if (hacker1Upper === hacker2Upper){
    console.log(`What?! You both have the same name?`);
}