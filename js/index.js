// Iteration 1: Names and Input

let hacker1 = 'Ruben'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Andy'

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if(hacker1.length > hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

//3.1 

let capitalHacker1 = ""

for (let i=0; i<hacker1.length; i++){
    capitalHacker1 += `${hacker1[i].toUpperCase()} `
}

console.log(capitalHacker1)

//3.2 

let reverseHacker2 =""

for (let i = hacker2.length-1; i>=0; i--){
    reverseHacker2 += `${hacker2[i]}`
}
console.log(reverseHacker2)


//3.3

let hackerCompare = hacker1.localCompare(hacker2)

switch(hackerCompare){
    case -1:
        console.log(`The driver's name goes first.`)
        break;
    case 1:
        console.log(`Yo, the navigator goes first definitely.`)
        break;
    case 0 :
        console.log(`What?! You both have the same name?`)
        break;
}
