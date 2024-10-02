// Iteration 1: Names and Input
const hacker1 = 'John'
const hacker2 = 'Janathan'
console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  )
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  )
}

// Iteration 3: Loops
// Iteration 3-1
let driverNameUpperCase = ''
for (let i = 0; i < hacker1.length; i++) {
  driverNameUpperCase += hacker1[i].toUpperCase() + ' '
}
console.log(driverNameUpperCase)
// Iteration 3-2
let driverNameUpperCase2 = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
  driverNameUpperCase2 += hacker2[i] + ' '
}
console.log(driverNameUpperCase2)

// Iteration 3-3
let minLength = Math.min(hacker1.length, hacker2.length)

for (let i = 0; i < minLength; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.")

    break
  } else if (hacker1[i] > hacker2[i]) {
    console.log('Yo, the navigator goes first, definitely.')

    break
  } else {
    console.log('What?! You both have the same name?')
  }
}

//Bonus
console.log('>>>>', '\t', '\n')
const longText = `
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
Aenean ac ligula id nulla pulvinar vehicula.
 In non enim dolor. Cras efficitur risus id erat fermentum,
  id auctor elit tempor. Fusce et tempus libero, eu pellentesque arcu.
   Quisque ullamcorper ante enim, in pretium enim luctus efficitur.
    Mauris tincidunt, elit nec vulputate sollicitudin,
     nisi nisi venenatis ante, non varius ex nisl auctor justo. Etiam turpis est, mollis ut justo eu, pellentesque lobortis neque. Nunc fermentum rutrum porta. Maecenas elementum leo ac ligula efficitur, in suscipit sem consequat. Donec quis tincidunt nibh, egestas molestie nulla. Phasellus orci sapien, congue vitae blandit quis, cursus quis purus. Suspendisse laoreet felis tortor, eget rhoncus augue eleifend nec. Integer mollis dui id enim ultricies pulvinar. In vel tempor eros. Suspendisse dictum eget quam a placerat.

Etiam viverra finibus nisl id dictum. Vivamus elementum velit sit amet placerat dignissim. Suspendisse sagittis ultrices diam, consequat rutrum dolor vulputate non. Aliquam convallis ex id libero tincidunt aliquet. Ut vestibulum turpis vitae mauris faucibus, et imperdiet magna auctor. Quisque consectetur urna id lectus volutpat laoreet. Maecenas congue pretium erat, et vulputate mi lacinia a. Morbi sagittis, elit vitae facilisis vulputate, est nibh venenatis orci, ut vulputate diam purus vel lacus. Maecenas eget lacinia purus, sit amet finibus dui. Nunc vel ex sit amet est tincidunt luctus. In consequat, urna non facilisis malesuada, justo massa bibendum odio, ut rutrum ex nibh ut felis. Nam lacinia velit mauris, non maximus tellus varius et.

Morbi porttitor, mi et imperdiet ullamcorper, est dui interdum lacus, sit amet eleifend velit nibh id libero. Ut tincidunt vulputate est. Mauris pulvinar, eros et pharetra aliquam, nulla sem suscipit tortor, eget dignissim magna nulla a arcu. Donec luctus eros ac luctus fringilla. Curabitur justo diam, feugiat vel vulputate sed, facilisis vel est. Nullam mollis sapien at nisl efficitur, ultrices blandit leo convallis. Morbi ac justo sit amet odio fermentum molestie vitae vel eros. Nam vehicula, sem id elementum ullamcorper, velit arcu porttitor justo, vitae aliquam dolor libero a enim.
`
let wordCount = 0
function wordCounter (longText) {
  for (let i = 0; i < longText.length; i++) {
    if (longText[i] === ' ') {
      wordCount++
    }
  }
  return wordCount
}
wordCounter(longText)
let etCount = 0
function etCounter (longText) {
  const words = longText.split(' ')
  console.log('words value is', words)
  for (let i = 0; i < longText.length; i++) {
    if (words[i] === 'et') {
      etCount++
    }
  }
}
etCounter(longText)

console.log('Word count: ' + wordCount)
console.log("Number of times 'et' appears: " + etCount)

// let pharaseChekall = [
//   'A man, a plan, a canal, Panama!',
//   'Amor, Roma',
//   'race car',
//   'stack cats',
//   'step on no pets',
//   'taco cat',
//   'put it up',
//   'Was it a car or a cat I saw?',
//   "No 'x' in Nixon"
// ]

let pharaseChek = 'A man, a plan, a canal, Panama!'
let newPharaseChek = pharaseChek
  .toLowerCase()
  .replace(/\s/g, '')
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
  .split(',')
  .join('')
console.log('newPharaseChek', newPharaseChek)

function checkPalindrome (str) {
  let newWord = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newWord += str[i]
  }
  if (newWord === str) {
    console.log('this is working', newWord, str)
  } else {
    console.log('it is not a Palindorme', newWord, str)
  }
}
checkPalindrome(newPharaseChek)
