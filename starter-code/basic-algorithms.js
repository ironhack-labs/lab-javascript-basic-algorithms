// Names and Input
const hacker1 = 'Ivan'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = prompt("What's your name?")
console.log(`The navigator's name is ${hacker2}`)

//Conditionals
if (hacker1.length === hacker2.length) {
  console.log(
    `wow, you both got equally long names, ${hacker1.length} characters!!`
  )
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`
  )
} else {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters`
  )
}

// Loops
console.log(
  hacker1
    .split('')
    .join(' ')
    .toUpperCase()
)

console.log(
  hacker2
    .split('')
    .reverse()
    .join('')
)

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
    console.log(`The driver's name goes first`)
    break
  } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
    console.log(`Yo, the navigator goes first definitely`)
    break
  } else if (hacker1.charCodeAt(i) === hacker2.charCodeAt(i)) {
    continue
  } else {
    console.log(`What?! You both got the same name?`)
  }
}

// Palindromes
const phrase = prompt(`Give me a phrase and I'll check if it's a palindrome`)

const standarizedPhrase = phrase
  .replace(/[^a-zA-Z ]/g, '')
  .replace(/\s/g, '')
  .toLowerCase()

const reversedPhrase = standarizedPhrase
  .split('')
  .reverse()
  .join('')

if (standarizedPhrase === reversedPhrase) {
  console.log('Palindrome')
} else {
  console.log('Not palindrome')
}

// Lorem ipsum generator
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra tortor odio, eu varius nibh porta at. Pellentesque scelerisque felis sed elit sollicitudin viverra. Sed lacinia laoreet quam, sit amet venenatis eros luctus sit amet. Quisque varius vehicula tellus, id commodo erat luctus et. In tempus massa ac diam dapibus ultricies. Quisque cursus justo vel nulla hendrerit, a commodo orci hendrerit. Praesent et dolor nec mi blandit sollicitudin eu sed urna. Proin condimentum tincidunt eros sed posuere. Integer ornare est ut sem fringilla tincidunt. Aenean non nunc in mauris ullamcorper ultricies in at lorem. In varius eros in ante ullamcorper, et ultricies metus pharetra. Morbi euismod rutrum nisl quis euismod.

Nam euismod augue nec arcu porta, id dapibus erat feugiat. Duis rutrum tempor consectetur. Cras rutrum eu magna accumsan interdum. Suspendisse efficitur sem magna, at iaculis eros tincidunt non. Donec ut orci ut nisi accumsan tincidunt. Morbi ac rutrum massa, sit amet dapibus lacus. Phasellus quam neque, imperdiet quis finibus sit amet, imperdiet nec sem. Ut malesuada consectetur massa ut luctus. Ut non laoreet odio. Proin mollis euismod enim, sit amet venenatis magna vehicula a. Vivamus condimentum, tortor eget pharetra facilisis, quam turpis semper purus, a hendrerit risus turpis vel mi. Mauris vulputate elit et sem interdum interdum. Phasellus at nisi sed ligula porttitor consequat quis at sapien. Phasellus suscipit turpis orci, quis imperdiet felis tincidunt eget. Maecenas dictum malesuada aliquam.

Aliquam accumsan et mauris eu pretium. Integer molestie id erat at vehicula. Vivamus id augue imperdiet, pharetra orci nec, molestie magna. Donec ac nibh egestas tellus tempus blandit. Nullam vehicula bibendum orci, et auctor diam vulputate sit amet. Sed gravida finibus quam, in vulputate nibh pellentesque vel. In convallis nec urna sed accumsan. Mauris aliquam sapien vel mauris lobortis, ultricies condimentum nibh condimentum. Vestibulum pulvinar justo eget viverra ultricies. Nullam vestibulum fermentum sapien, iaculis rutrum sapien gravida et. Aliquam id sapien non neque porttitor consequat aliquam et orci. Curabitur eget fermentum erat.
`

let wordCounter = 0
for (let i = 1; i < text.length; i++) {
  // A word is when a space or a new line is found
  if (text[i] === ' ' || text[i] === '\n') {
    wordCounter++
    if (text[i] === '\n' && text[i + 1] === '\n') {
      wordCounter--
    }
  }
}
console.log(`wordCounter: ${wordCounter}`)

let etCounter = 0
let word = 'et'

for (let i = 0; i < text.length; i++) {
  if (text[i] === 'et') {
    etCounter++
  }
}

console.log(`etCounter: ${etCounter}`)
