// Iteration 1: Names and Input
let hacker1 = 'andré'

console.log(`The drivers name is ${hacker1}`)

let hacker2 = 'heber e bruno'

console.log(`The navigators name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

let result = ''
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i] + ' '
}
console.log(result.toUpperCase())

let result2 = ''
let j = hacker2.length - 1
for (; j >= 0; j--) {
    result2 += hacker2[j] + ''
}
console.log(result2)

if(hacker1[0] === hacker2[0]){
    console.log("What?! You both have the same name?")
}else if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.")
}else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.")
}


