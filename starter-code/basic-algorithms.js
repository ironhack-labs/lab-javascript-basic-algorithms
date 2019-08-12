// Names and Input
let hacker1 = 'Emiliano Popoca'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = prompt('Enter the navigator name')

console.log(`The navigator's name is ${hacker2}`)

//Conditionals
let h1Length = hacker1.length
let h2Length = hacker2.length

if (h1Length > h2Length) {
  console.log(`The driver has the longest name. It has ${h1Length} characters.`)
} else if (h1Length < h2Length) {
  console.log(`Yo, Navigator got the longest name. It has ${h2Length} characters.`)
} else {
  console.log(`Wow, you both got equally long names, ${h2Length} characters.`)
}

 hacker1.toUpperCase().split('').join(' ')

 hacker1.split('').reverse().join('')


let harray = [hacker1.toUpperCase(), hacker2.toUpperCase()].sort()
console.log(harray)

if (hacker2.toUpperCase()== hacker1.toUpperCase()) {
  console.log(`What?! You both got the same name.`)
}
else if (harray[0]== hacker1.toUpperCase()) {
  console.log(`The driver's name goes first`)
} else if (harray[0]== hacker2.toUpperCase()) {
  console.log(`Yo, the navigator goes first definately.`)
} 



// Palindrome and Lorem ipsum generator
let palindromeText = prompt('Please enter Palindrome text.')

let cleanText = palindromeText.replace(/[^A-Z\d]/gi, '').toUpperCase()

let okTick = false;
for (i=0; i<Math.floor((cleanText.length)/2); i++)
{
  if (cleanText[i]===cleanText[cleanText.length-1-i]) {
    okTick = true;
  } else {
    okTick = false;
    break;
  }
}

if (okTick === true) {
  console.log('It is a Palindrome!!! ;)')
} else {
  console.log('It is not a Palindrome ;(')
}
