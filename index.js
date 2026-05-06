// Iteration 1: Names and Input
const hacker1 = 'adrien'
console.log(hacker1)

const hacker2 = 'faith'
console.log(hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow you both have equally long names, it has ${hacker1.length} characters.`)
}


// Iteration 3: Loops

let driverNameSpaced = ''
for (let i=0; i<hacker1.length; i++){
    driverNameSpaced += hacker1[i]+ ' '
}
console.log(driverNameSpaced)
driverNameSpaced = driverNameSpaced.toUpperCase()
console.log(driverNameSpaced)


let navigatorNameReversed = ''
for (let i=hacker2.length-1; i>=0; i--){
    navigatorNameReversed += hacker2[i]
}
console.log(navigatorNameReversed)

const order = hacker1.localeCompare(hacker2)

if (order<0) {
    console.log("The driver's name goes first.")
} else if (order>0) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log('What?! You both have the same name?')
}


//Bonus