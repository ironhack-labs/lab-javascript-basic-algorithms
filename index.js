// Iteration 1: Names and Input
let hacker1 = "Elena"
console.log("The driver's name is ", hacker1)

let hacker2 = "Elodio"
console.log("The navigator's name is ", hacker2)

// Iteration 2: Conditionals
console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
console.log( `It seems that the navigator has the longest name, it has ${hacker2.length} characters` )

if (hacker1.length === hacker2.length) { 
    console.log( `Wow, you both have equally long names, ${hacker1.length } characters!`)
} else{
    console.log(`Ups, they don't have the same length`)
}

// Iteration 3: Loops

let hacker3 = "John"
let uperHacker3 = hacker3.toUpperCase()
let spaceHacker3 =""
let returnHacker3 =""

console.log( hacker1.charAt(0) + " " + hacker1.charAt(1) + " " + hacker1.charAt(2) + " " + hacker1.charAt(3) + " " + hacker1.charAt(4) + " " + hacker1.charAt(5) )

for(let i = 0; i < uperHacker3.length; i++ ){
    spaceHacker3 += uperHacker3.charAt(i) + ' ';
}

console.log(spaceHacker3)

for(let i = hacker3.length-1; i >= 0 ; i-- ){
    returnHacker3 += hacker3.charAt(i);
}

console.log(returnHacker3)


let result = hacker1.localeCompare(hacker2)

if(result === -1){
    console.log(`The driver's ${hacker1} goes first`)
} else if (result ===  1) {

    console.log (`Yo, the navigator goes first, definitely.`)
    
} else{
    console.log ( `What?! You both have the same name?`) 
}
