// Iteration 1: Names and Input

const hacker1 = "Marco"

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Martin"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

const hacker1Array = hacker1.split('')
const hacker1ConvertedName = hacker1Array.join(' ').toLocaleUpperCase()

console.log(hacker1ConvertedName)

const hacker2Array = hacker2.split('')
const hacker2Reversed = hacker2Array.reverse().join('')

console.log(hacker2Reversed)

let longestNameLength = Math.max(hacker1.length, hacker2.length);

console.log(longestNameLength);

let result;

for(let i = 0; i < longestNameLength; i++){
    if(hacker1[i]===hacker2[i]){
        continue
    }
    else if (hacker1[i] < hacker2[i]) { 
        result = hacker1
        break
    }

    else {
        result = hacker2
        break
    }
}

if(!result) {
    console.log('What?! You both have the same name?')

} else if (result === hacker1) {
    console.log("The driver's name goes first.")
} else {
    console.log("Yo, the navigator goes first, definitely.")
}
