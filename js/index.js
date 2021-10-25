// Iteration 1: Names and Input
// Iteration 1

let hacker1 = "Miguel"
console.log (`The drivers name is ${hacker1}`)
let hacker2 = "Martin Giura"
console.log (`The drivers name is ${hacker2}`)

// Iteration 2: Conditionals

function longerName(driver,navigator) {

    const hacker1 = driver;
    const hacker2 = navigator;
    
    if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
    
    if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length}  characters!.`)
    }
    
    if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
      }
    }
    
    console.log(longerName("Miguel", "Martin"))

// Iteration 3: Loops