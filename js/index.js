// Iteration 1: Names and Input
//
const hacker1 = "Catalina"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "David"
console.log(`The navegator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
const divername = ["Ana"]
for (let i = 0; i < divername.length; i++) {
  hacker1.splice(i, "");
  console.log(i)
}