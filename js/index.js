// Iteration 1: Names and Input
//
const hacker1 = "Walter"
const hacker2 = "Karla"

console.log(`The driver´s name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
const hacker1Uppercase = hacker1.toUpperCase()
var hacker1Sep = ""
for (let char of hacker1Uppercase) {
  hacker1Sep += char
  hacker1Sep += " "
}
console.log(hacker1Sep)

var hacker2Reverse = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i]
}
console.log(hacker2Reverse)

let hacker1Lowercase = hacker1.toLocaleLowerCase()
let hacker2Lowercase = hacker2.toLocaleLowerCase()
for (let i = 0; i < 20; i++) {
  if (hacker1Lowercase[i] < hacker2Lowercase[i]) {
    console.log("The driver's name goes first")
    break
  } else if (hacker1Lowercase[i] > hacker2Lowercase[i]) {
    console.log("Yo, the navigator's name goes first, definitely")
    break
  } else {
    console.log("What?! You Both have the same name?")
  }
}
// Solution with no loop iteration
// if (hacker1Lowercase.localeCompare(hacker2Lowercase) === -1) {
//   print("The driver's name goes first")
// } else if (hacker1Lowercase.localeCompare(hacker2Lowercase) === 0) {
//   print("What?! You both have the same name?")
// } else if (hacker1Lowercase.localeCompare(hacker2Lowercase) === 1) {
//   print("Yo, the navigator goes first, definitely")
// }