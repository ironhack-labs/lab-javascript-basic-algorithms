// Iteration 1: Names and Input
let hacker1 = 'Paul'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Romain'
console.log(`The navigotaor's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let newHacker1 = ''
for(i=0; i<hacker1.length; i++){
    newHacker1 += `${hacker1[i].toUpperCase()} `
    console.log(newHacker1)
}

let newHacker2 = ''
for(let i = hacker2.length - 1; i>=0; i--){
    newHacker2 += `${hacker2[i]}`
    console.log(newHacker2)
}

if(hacker1.localeCompare(hacker2) == -1){
    console.log("The driver's name goes first")
}
else if(hacker1.localeCompare(hacker2) == 1){
    console.log("Yo, the navigator goes first definetly")
}
else {
    console.log("What?! You both have the same name?")
}