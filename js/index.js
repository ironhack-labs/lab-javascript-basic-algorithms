// Iteration 1: Names and Input
//

const hacker1 = 'Joanna'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Pavel'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you have equallz long names, ${hacker1.length} character!`)
}

// Iteration 3: Loops

let name = ''
for (let i = 0; i < hacker1.length; i++) {
    name += hacker1[i].toUpperCase() + ' '
}

name = name.slice(0,name.length - 1)
console.log(name) 

// 3.2

let reversedName = ''
for (let i = hacker2.length - 1; i >= 0 ; i--) {
    reversedName += hacker2[i]
}
console.log(reversedName)

// 3.3

const isLexicographicOrder  = hacker1.localeCompare(hacker2)
if ( isLexicographicOrder === -1 ) {
    console.log("The driver's name goes first.")
} else if (isLexicographicOrder === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci odio, condimentum a ex id, rutrum dignissim nulla. Donec nunc diam, laoreet ac eros et, iaculis molestie neque. Curabitur scelerisque in lacus nec dignissim. Nam risus ante, vehicula vitae quam at, venenatis consectetur diam. Fusce at ipsum enim. Proin at ultrices odio. Mauris at ex est. Suspendisse non viverra ante. Donec eu aliquet massa. Mauris id elementum magna, vel lacinia mi. Etiam convallis erat nec tortor elementum, eu sollicitudin ipsum pulvinar. Praesent quis felis eu lorem faucibus finibus. Duis suscipit nec felis ut elementum. Nam facilisis libero eget sodales fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sed aliquet purus. Pellentesque interdum id arcu ut mollis. Aenean id imperdiet elit. Morbi dapibus turpis ut ligula porta, nec commodo tellus tincidunt. Etiam id vehicula sem. Vestibulum pharetra mollis rutrum. Integer quis fringilla risus. Phasellus ac pharetra lorem. Quisque eget enim eu tellus vestibulum gravida. Suspendisse potenti. Nam eros ex, maximus quis sodales quis, sollicitudin ac augue. Sed eu placerat odio, sed sodales neque. Nam at risus aliquet, fermentum enim sed, malesuada lacus. Nam consequat ligula elit, vitae hendrerit felis scelerisque et. Nunc dolor diam, cursus et quam eget, commodo posuere velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean suscipit sit amet eros id pharetra."
 
let counter = 0
for (let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === ' ') {
        counter++
    }
}

console.log(counter + 1)

let etCounter = 0
const words = loremIpsum.split(' ')
for (let i = 0; i < loremIpsum.length; i++) {
    if (words[i] === 'et' || words[i] === 'et.' || words[i] === 'et,') {
        etCounter++
    }
}

console.log(etCounter)


// Bonus 2
let palindrome = 'A man, a plan, a canal, Panama!'

palindrome = palindrome.replaceAll(' ', '');
palindrome = palindrome.replaceAll('.', '');
palindrome = palindrome.replaceAll(',', '');
palindrome = palindrome.replaceAll('?', '');
palindrome = palindrome.replaceAll('!', '');
palindrome = palindrome.replaceAll("'", '');

palindrome = palindrome.toLocaleLowerCase()


let reversedSentance = ''
for (let i = palindrome.length - 1; i >= 0 ; i--) {
    reversedSentance += palindrome[i]
}

if (palindrome === reversedSentance) {
    console.log('Yes, it is a Palindrome!')
} else {
    console.log('It is not a Palindrome')
}