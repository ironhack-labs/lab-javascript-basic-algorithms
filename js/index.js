// Iteration 1: Names and Input
var hacker1 = "Spyros"
console.log("The driver's name is " + hacker1)

var hacker2 = "Aude"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
console.log(hacker1.split("").join(" ").toUpperCase())
console.log(hacker2.split('').reverse().join(''))

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1
var paragraphe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra turpis ut rhoncus fermentum. In sagittis lacus vitae neque tincidunt malesuada. Nunc ut egestas tellus, consequat iaculis neque. In ultrices risus at ultricies efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate facilisis facilisis. Mauris vel efficitur magna. Sed consectetur dolor eu orci rhoncus, ac cursus nulla bibendum. Integer feugiat nunc eu nibh varius pharetra. Vestibulum nec auctor tortor. Quisque gravida sem ac purus cursus bibendum. Donec laoreet, tellus ac facilisis ultrices, velit augue sollicitudin diam, non porttitor nulla est et justo. Morbi vestibulum pretium justo ut laoreet. Sed pellentesque convallis est ut consequat. Proin sollicitudin mauris tellus, ut ornare magna viverra quis. Sed feugiat sem elit, ut dapibus nulla vulputate mattis. Nullam fermentum dolor in purus scelerisque sollicitudin. Donec cursus leo id risus lobortis sagittis. Curabitur velit sem, varius eget lectus quis, bibendum laoreet metus. Donec massa lacus, rhoncus ac lacus in, placerat iaculis magna. Suspendisse porttitor, risus vel eleifend egestas, erat metus venenatis lorem, in porta arcu purus ut sem. Donec risus elit, lobortis auctor dictum vitae, sagittis at augue. Ut id dapibus mauris. Donec eget aliquam nisi. Proin ut ligula convallis, ultrices sapien eget, sagittis risus. Vivamus et odio velit. Ut vestibulum libero vel vehicula tristique. Integer ut enim eu quam congue accumsan. Curabitur eleifend mi sollicitudin, vehicula purus et, congue nisi. Pellentesque tincidunt diam tincidunt mi viverra, sed porta enim aliquet. Nulla consequat aliquet erat ut commodo. Curabitur lacus leo, venenatis quis ultricies ut, consequat et lacus. Suspendisse posuere lorem at ipsum posuere, sed commodo neque laoreet."

console.log("The paragraph has: " + paragraphe.split(" ").length + " words")

var count=0
for (let i = 0; i < paragraphe.split(' ').length; i++){
    if (paragraphe.split(" ")[i] === 'et' || paragraphe.split(" ")[i] === 'et,' ||
    paragraphe.split(" ")[i] === 'et.'){
        count +=1
    }
}
console.log(count)

// Bonus 2
var phraseToCheck = "step on no pets"
var cleanPhrase = phraseToCheck.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

function palindrome(string) {
    for (let i = 0; i < Math.floor(string.length/2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false; 
        }
    }
    return true;
}

if (palindrome(cleanPhrase)) {
    console.log('Palindrome!')
} else {
    console.log('Not a palindrome!')
}

