// Iteration 1:
let hacker1 = "Fernandito"
  console.log(`the drivers name is ${hacker1}`)
let hacker2 = "Antoñito"
  console.log(`the navigator name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
console.log(`the divers has the longest name, it has ${hacker1.length} char`)
}
else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//3.1
let driversName = "Fernandito"
let navegatorsName = "Iñaki"
let result = ''
let casual= " "

for (let i = 0; i < driversName.length; i++) {
  let nameUp = driversName.toUpperCase()
  result += nameUp[i] + " " 
}
console.log(result.trim())

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

for (let i = navegatorsName.length -1; i >= 0; i--) {
  let nameUp = navegatorsName.toUpperCase()
  casual += nameUp[i] + " " 
}

console.log(casual.trim())


/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
  */

if (driversName.localeCompare(navegatorsName) === -1) {
  console.log(`the ${driversName} goes first`)
}
else if(driversName.localeCompare(navegatorsName) === 1) {
  console.log(`yo,${navegatorsName} goes first definitely`)
}
else{
  console.log('What?! You both have the same name?')
}