// Iteration 1: Names and Input
const hacker1 = 'Rebecca'
const hacker2 = 'Olivier'

console.log("1.2 > The driver's name is " + hacker1 + '.')
console.log("1.4 > The navigator's name is " + hacker2 + '.')

//      Iteration 2: Conditionals
//      2.1 Depending on which name is longer
for (var i = 1; i < hacker1.length; i++) {
  //console.log(i);
}

for (var i = 0; i < hacker2.length; i++) {
  //console.log(i);
}

console.log(
  '2.1 > Wow, you both have equally long names, ' + i + ' characters!'
)

//      Iteration 3: Loops
//      3.1 Print all the characters of the driver's name
// string -> uppercase -> loop (add whitespaces, but not for the last letter)

let nhacker1 = hacker1.toUpperCase()
let res = ''
for (var i = 0; i < nhacker1.length - 1; i++) {
  //"For each loop, I  add the letter + whitespace and store it into res
  res = res + nhacker1[i] + ' '
}
// Add the last letter
res = res + nhacker1[nhacker1.length - 1]
console.log('3.1 > ' + res)

//      3.2 Iteration Reverse string
//string to split it into an array -> reverse ->  new array -> new variable -> consol.log
let splithacker = hacker1.split('')
let reversehacker = splithacker.reverse()
let reshacker = reversehacker.join('')
console.log('3.2 > ' + reshacker)

//      3.3 Iteration
let elements = [hacker1, hacker2]
let result = hacker1.localeCompare(hacker2)
if (result > 0) console.log('3.3 > ' + "The driver's name goes first.")
else if (result < 0) console.log('Yo, the navigator goes first definitely.')
else console.log('What?! You both have the same name?')
