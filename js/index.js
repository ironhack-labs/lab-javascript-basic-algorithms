// Iteration 1: Names and Input
let hacker1 = 'ivan'
console.log(`The driver's name is ${hacker1} `)
let hacker2 = 'ivan'
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`)
} else console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`)
// Iteration 3: Loops
//
for (const value of hacker1) {
  console.log(value.toUpperCase())
}
let nombreAlReves = ''
for (let i = hacker1.length - 1; i >= 0; i--) {
  nombreAlReves += hacker1[i]
}
console.log(nombreAlReves)
const IronNames = [hacker1, hacker2]
const order = IronNames.sort()
console.log(order)

let order1 = hacker1.localeCompare(hacker2)

if (order1 == -1) {
  console.log(`${hacker1} va primero`)
} else if (order == 1) {
  console.log(`${hacker2} va primero`)
} else {
  console.log('Son iguales')
}
