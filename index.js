// Iteration 1: Names and Input

let hacker1 = 'Jhon'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Zlvaro'

console.log(`the navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if (
    hacker1.length > hacker2.length
) {
    console.log('the driver has the longest name, it has', hacker1.length, 'chararters')
}
else if (
    hacker1.length < hacker2.length
) {
    console.log('it seems that the navigator has the longest name it has', hacker2.length, 'chararters')
}
else {
    console.log('iuhpijfpoifjpoirfpwiej', hacker1.length, 'chararters')
}



// Iteration 3: Loops
let nonee = ''

for (let i = 0; i < hacker1.length; i++) {
    nonee += hacker1[i] + ' '
}
console.log(nonee.toUpperCase())


let no = ''

for (let i = hacker1.length - 1; i >= 0; i--) {


    no += hacker1[i]

}
console.log(no)



let first = hacker1.localeCompare(hacker2)
if (
    first === 1
) {
    console.log('bla bla bla')
}
else if (
    first === 0
) {
    console.log('blebleble')
}
else {
    console.log('bli bli bli')
}

