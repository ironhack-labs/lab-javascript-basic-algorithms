// Iteration 1: Names and Input
let hacker1 = `Caetano`
let hacker2 = `Sebastien`
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
let shortestName = ''
if (hacker1.length > hacker2.length) { 
    shortestName = hacker2
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    shortestName = hacker1
     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
    } else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
// Iteration 3: Loops
let hacker1UpperCase = hacker1.toUpperCase()
let hacker2UpperCase = hacker2.toUpperCase()
let spaceName = ''

for (let i = 0; i < hacker1UpperCase.length; i++) {
 spaceName += hacker1UpperCase[i] + ' '
}
console.log(spaceName)

let reverseName = ''
for (let i = hacker2.length -1; i > -1; i--) {
   reverseName += hacker2[i]
   console.log(hacker2[i], i)
}
console.log(reverseName)




for ( let i = 0; i < shortestName.length ; i++) {
if (hacker1UpperCase === hacker2UpperCase)
{
console.log(`What?! You both have the same name?`)
break

} else if (hacker1UpperCase[i] > hacker2UpperCase[i] ) {
        console.log(`Yo, the navigator goes first definitely.`, hacker2)
        break
}


else if (hacker1UpperCase[i] < hacker2UpperCase[i] ) {
    console.log(`The driver's name goes first.`, hacker1)
    break
} 
}