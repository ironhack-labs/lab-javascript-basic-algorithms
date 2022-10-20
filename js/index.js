// Iteration 1: Names and Input
const hacker1 = 'Alberto'
console.log('The drive name is', hacker1)

const hacker2 = 'Alejandro'
console.log('The co-driver name is', hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let str = ''
for (let i = 0; i < hacker1.length; i++){
   let letter = hacker1[i].toUpperCase()
   str += letter + ' '
}
console.log(str)


// let drive = hacker1.toUpperCase()
// let drive1 = drive.split('')
// console.log(drive1)

// for (let i = 0; i < hacker1.length; i++){
//    let drive = hacker1.toUpperCase()
//    console.log(drive.split(''))
// }

