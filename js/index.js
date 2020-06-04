// Iteration 1: Names and Input
const hacker1 = "alvaro"

console.log(`El nombre del hacker 1 es ${hacker1}`)


const hacker2 = "andres"

console.log(`el nombre del hacker 2 es ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length}`)

} else if (hacker1.length < hacker2.length) {
    console.log(`The ${hacker2} has the longest name, it has ${hacker2.length}`)
} else {
    console.log("Wow, you both have equally long names, XX characters!")
}





//3.1

console.log(hacker1.toUpperCase())

//3.2


console.log(hacker2.split('').reverse().join(''))



//3.3

let a = hacker1.localeCompare(hacker2);

console.log(a)

if (a < 0) {
    console.log(`${hacker1} va antes que ${hacker2}`)

}
else {
    console.log(`${hacker2} va antes que ${hacker1}`)
}