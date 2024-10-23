// Iteration 1: Names and Input
const hacker1 = 'Emilia'
const hacker1Name= `The driver's name is ${hacker1}`
console.log(hacker1Name)
const hacker2 = 'Karim'
const hacker2Name= `The navigator's name is ${hacker2}`
console.log(hacker2Name)

// Iteration 2: Conditionals

const hacker1Char = hacker1.length
const hacker2Char = hacker2.length

if (hacker1Char > hacker2Char) {
    console.log(`The driver has the longest name, it has ${hacker1Char} characters.`)
} if (hacker1Char < hacker2Char) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Char} characters.`)
} if (hacker1Char == hacker2Char) {
    console.log(`Wow, you both have equally long names, ${hacker1Char} characters!.`)
}

// Iteration 3: Loops

const upperCasedDriver = hacker1.toUpperCase()
let rowName = ``
let rowNameBack = ``
console.log(upperCasedDriver)


for (let i=0; i <=hacker1.length-1; i++){
    const char = upperCasedDriver[i]
        rowName += char+" "; 
    }
console.log(rowName)

for (let i=hacker2.length-1; i>=0; i--){
    const chara = hacker2[i]
       rowNameBack += chara;

    }
    console.log(rowNameBack) 




if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
} for (let i=0; i<=hacker1.length; i++){
    console.log(hacker1[i])
    if (hacker1[i]<hacker2[i]){
        console.log(`The driver's name goes first.`) 
        break;
    } if (hacker1[i]>hacker2[i]){
        console.log(`Yo, the navigator goes first, definitely.`)
        break;
    }
}



