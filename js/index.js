const hacker1 = "André"

console.log("The driver's name is " + hacker1 )
console.log('The driver\'s name is ' + hacker1)
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Filipe"

console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ` + hacker1.length + ' characters.')
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


let hacker1UpperCased = hacker1.toUpperCase()
console.log(hacker1UpperCased)
console.log(hacker1UpperCased[0] + " " + hacker1UpperCased[1] + " ") 
for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase())
}

let value = "John";

let chars = value.split('')

let newValue = "";

for (let i = 0 ; i < value.length; i++) {
  newValue += chars[i].toUpperCase() + ' ';
}

console.log(newValue)


console.clear()


let startingValue=""
for (let i = hacker2.length -1; i >= 0; i--){
 startingValue += hacker2[i]
}

console.log(startingValue)

console.log(hacker2.split("").reverse().join(""))
console.log(hacker2.toUpperCase().split("").join(" "))

const oneUpper = hacker1.toUpperCase()
const twoUpper = hacker2.toUpperCase()

let compared = oneUpper.localeCompare(twoUpper)

if (compared < 0) {
   console.log(`The driver's name goes first`)
} else if (compared > 0) {
  console.log("Yo, the navigator goes first definitely") 
} else {
  console.log("SAY WHAAAT?")
}


/*
if (oneUpper.localeCompare(twoUpper) < 0) {
  console.log(`The driver's name goes first`)
} else if (twoUpper.localeCompare(oneUpper)  < 0){
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log('Say Whaat?')
}
*/
