// Iteration 1: Names and Input
//

const hacker1 = "Willian"
const hacker2 = "Beatriz"

console.log(`The driver's name is ${hacker1}`)
console.log(`The driver's name is ${hacker2}`)


// Iteration 2: Conditionals
let maiorNome = ""

if (hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
}else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
}else (hacker1.length === hacker2.length)   
    console.log (`Wow, you both have equally long names, ${hacker1.length}characters!.`)

    console.log(hacker1.toUpperCase());



const result = hacker1.split('').join(' ')
    console.log(result)


function reverse (hacker2) {
        if (hacker2 === "") {
            return "";
        } else {
            return reverse(hacker2.substr(1)) + hacker2.charAt(0);
        }
    }
    
    let reverseStringIs = reverse(hacker2)
    console.log(reverseStringIs)

    
    
// console.log(hacker1.length)
// console.log(hacker2.length)

// Iteration 3: Loops
