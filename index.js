// Iteration 1: Names and Input
let hacker1 = "Keifer"
let hacker2= "Christ"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
console.log(`${hacker1.toUpperCase().split('').join(' ')}`)
let str= ''
for (let i=hacker2.length-1; i >= 0; i--) {
  str = str + hacker2[i];
}
console.log(str);
if (hacker1 > hacker2){
    console.log(`The driver's name goes first`)
}
else if (hacker2 > hacker1){
    console.log(`Yo, the navigator goes first definitely`)
}
else {
    console.log(`What?! You both have the same name?`)
}