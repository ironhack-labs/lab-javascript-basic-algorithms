// Iteration 1: Names and Input
var hacker1 = 'driver'
    console.log(`"The driver's name is ${hacker1}"`)
var hacker2 = 'navigator'
    console.log(`"The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
}else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
}else {
    console.log(`wow, you both have equally long names, ${hacker1.length} characters.`)
}
// Iteration 3: Loops
for (i = 0; i < hacker1.length; i++) {
    console.log(`$(hacker1[i]) `)
}

var hacker2ver = ""
for (j = hacker2.length - 1; j > 0; j--) {
    hacker2ver += hacker2[j]
}
console.log(hacker2ver)

if (hacker1 < hacker2) {
    console.log('The drivers name goes first.')
  }
  else if ( hacker2 < hacker1) {
    console.log('Yo, the navigator goes first definetly')
  }
  else {
    console.log('What?! You both have the same name?')
