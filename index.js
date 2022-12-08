//Iteration1: Names and Input
let hacker1 = 'lynn'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'mike'
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names,  ${hacker2.length} characters!`)
}

//Iteration 3: Loops
console.log(hacker1.toUpperCase().split('').join(' '))
let revHacker2 = ''
for(i = 0;i<hacker2.length;i++){
  revHacker2 += hacker2[hacker2.length - i - 1]
}
console.log(revHacker2)

let result = hacker1.localeCompare(hacker2)
if (result == '1'){
  console.log('Yo, the navigator goes first definitely.')
}
else if ( result == '-1'){
  console.log("The driver's name goes first.")
} else {
  console.log('What?! You both have the same name?')
}