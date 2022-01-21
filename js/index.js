// Iteration 1: Names and Input
let hacker1 = 'Emanuel'
console.log(`The diver's name is ${hacker1}`)

let hacker2 = 'Mitchell'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
    } else if (hacker2.length > hacker1.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`)    
    } else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }

// Iteration 3: Loops
let nameSeparatedInCapitals = ''

for(let i = 0; i < hacker1.length; i++) {
  if ( i === hacker1.length - 1) {
    nameSeparatedInCapitals += hacker1[i].toUpperCase()
  } else {
    nameSeparatedInCapitals += hacker1[i].toUpperCase() + ' '
  }
}
console.log(nameSeparatedInCapitals)

let nameReverse = ''

for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReverse += hacker1[i];
}
console.log(nameReverse)

if (hacker1.localeCompare(hacker2) === - 1){
  console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely")
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?")
}
// BONUS 1
// a)
const  stringLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nibh vitae nulla venenatis elementum sed id magna. Proin urna eros, suscipit nec efficitur vel, varius nec augue. Aliquam in nisl varius, sagittis lacus non, dapibus ante. Mauris ornare pretium sollicitudin. Duis finibus est quis iaculis commodo. Donec sed ligula felis.

Praesent dictum, nisl ac commodo accumsan, orci arcu pulvinar enim, nec semper dui massa vitae mi. In iaculis sit amet nisi ut aliquet. Pellentesque commodo lacus odio, vel sollicitudin quam finibus a. Nam efficitur ex in facilisis placerat. Mauris molestie justo at augue iaculis maximus. Suspendisse ut eleifend metus. Cras quis facilisis diam. Nulla facilisi. Nunc ultricies euismod consectetur. Vestibulum nec erat at est dignissim consectetur a quis massa. Proin aliquet libero non ligula gravida sodales.

Donec congue urna sapien, non gravida nisl gravida sit amet. Cras pellentesque elit at libero vestibulum ullamcorper. Vivamus dapibus tincidunt ligula eu euismod. Nunc pretium, urna et fermentum faucibus, massa mauris scelerisque dui, a imperdiet augue nulla in elit. Etiam pharetra, nulla at tempor varius, mi dui congue nisl, vitae congue ligula est a velit. Fusce convallis magna sed mi laoreet imperdiet. Sed eu tempor enim.`

// b)
console.log(stringLorem.split(' ').length)

// c)
const arr = stringLorem.split(' ')
let etCounter = 0;

for (let i = 0; i < stringLorem.length; i++) {
  if (arr[i] === 'et') {
    etCounter++
  }
}
console.log(etCounter)

// BONUS 2
const phraseToCheck = 'Amor, Roma'

const noPunctuation = phraseToCheck.toLowerCase().replace(/[^A-Za-z]/g, '')

console.log(noPunctuation)


for (let i = 0; i < noPunctuation.length / 2; i++) {
  
  const lastIndex = noPunctuation.length - 1 - i
  
  if (noPunctuation[i] !== noPunctuation[lastIndex]) {
    console.log('NÃO é palíndroma')
    continue;
  } 
}
console.log('É palíndroma')