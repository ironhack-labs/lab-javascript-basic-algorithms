// Iteration 1: Names and Input

let hacker1 = 'Raquel'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Teresa'

console.log(`The navigator's name is ${hacker2}`)


//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)

} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops

let uppercased = hacker1.toUpperCase()

let stringHacker1 = uppercased.split('')

let joinHacker1 = stringHacker1.join(' ')

for (let i = 0; i < joinHacker1.length; i++) {
    console.log(`${joinHacker1[i]}`);
}

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2.charAt(i))
}



