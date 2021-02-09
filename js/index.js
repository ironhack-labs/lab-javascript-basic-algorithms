// Iteration 1: Names and Input
const haker1 = 'Anderson'
console.log(`The driver's name is ${haker1}`)
const haker2 = 'Santiago'
console.log(`The navigator's name is ${haker2}`)

// Iteration 2: Conditionals
if (haker1.length > haker2.length) {
    console.log(`The driver has the longest name, it has ${haker1.length} characters.`);
  } else if (haker1.length < haker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${haker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${haker1.length} characters!`)
  }    

// Iteration 3: Loops

let toUpper = '';

for (let i = 0; i < haker1.length; i++) {
    toUpper += `${haker1[i].toUpperCase()} `}

 let reverseString = haker2.split("").reverse().join("");   

console.log(reverseString)