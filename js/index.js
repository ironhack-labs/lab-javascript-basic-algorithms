// Iteration 1: Names and Input
const hacker1 = 'aaaaaaaaa';
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'aaaaaa'
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditional=

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

let nameToUpperCase = ''
for (let i = 0; i < hacker1.length; i++) {
    nameToUpperCase += `${hacker1.charAt(i).toUpperCase()}  `
}

let reversedName = ''
for (let i = hacker1.length - 1; i >= 0; i--) {
    reversedName += `${hacker1[i]}`
}
console.log(reversedName)

// Iteration 3: Loops

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
}
else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first definitely.`)
}
else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
}


// Bonus 1:

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum feugiat elementum. Mauris nec mauris in arcu dapibus dictum ac vel lacus. Nunc volutpat lacus vel leo rutrum faucibus. Vestibulum pretium tortor vel lectus feugiat gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel nulla molestie, volutpat felis id, bibendum turpis. Praesent in augue tortor. Ut dui metus, interdum a mi eget, tincidunt sollicitudin nibh. Phasellus condimentum varius quam at vestibulum. Aenean pretium, ante eget pharetra tristique, urna neque cursus arcu, sed convallis arcu mi non mi. Duis ligula mauris, aliquam eu diam ut, ultrices porta tortor. Curabitur commodo interdum dapibus. Donec sed nisl sit amet turpis aliquet lacinia. Quisque pharetra nisl pharetra arcu tempor sollicitudin. Aenean semper a felis at rhoncus. Sed molestie, orci nec gravida ullamcorper, nulla dolor lobortis magna, vel eleifend risus velit sed leo. Suspendisse a nibh rhoncus, mollis erat vitae, dapibus nisi. Maecenas vitae pellentesque augue. Sed ante tellus, sagittis id mauris ac, dapibus vestibulum felis. Maecenas volutpat molestie pulvinar. Aliquam pharetra vel sem in tempor. Morbi imperdiet quis quam sed dignissim. Cras feugiat purus non gravida facilisis. Donec a vulputate augue. Integer fermentum risus ut tristique porttitor. Nam sit amet dictum augue. Aliquam erat volutpat. Aliquam dolor tortor, lobortis eget ipsum eget, finibus feugiat mi. Maecenas eu finibus elit. Maecenas commodo nisl nunc, et viverra nisl vulputate non. Sed ut ullamcorper sapien. Aliquam elementum laoreet dictum. Duis eu dictum erat, in tristique dui. Nam pulvinar ex sed vehicula convallis. Nunc sit amet scelerisque urna. Pellentesque molestie iaculis metus eu laoreet."

// wordCount Approach #1 (long approach)
/* Constructing a for loop to count number of spaces between strings ONLY.
 Since the number of spaces between strings in a sentence is equal to the number of words - 1, we can easily find the word count as shown below */

let spaceCount = 0;
let wordCount = 0;
for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === ' ') {
        spaceCount++;
        wordCount = spaceCount + 1
    } else if (paragraph[i] === ' ' && i === 0 || paragraph[i] === ' ' && i === paragraph.length - 1) {
        continue;
    }
}
console.log(wordCount)


// wordCount Approach #2 (easy & short approach)
const wordsInParArr = paragraph.split(' ')
console.log(wordsInParArr.length)

// etCount Approach #1
let etCount = 0;
for (let i = 0; i < wordsInParArr.length; i++) {
    if (wordsInParArr[i] === 'et') {
        etCount++;
    }
}
console.log(etCount)

// etCount Approach #2 - Using regex to count et
let regex = /\set\s/g
let etArr = paragraph.match(regex)
console.log(etArr)


// Bonus 2:

function palindromeChecker(phraseToCheck) {
    let sentence = ''
    let reversedSentence = ''
    let regex = /[a-z]/i

    for (let i = 0; i < phraseToCheck.length; i++) {
        if (phraseToCheck[i] !== ' ' && regex.test(phraseToCheck[i]) === true) {
            sentence += phraseToCheck[i]
        }
    }
    console.log(sentence)
    for (let i = sentence.length - 1; i >= 0; i--) {
        reversedSentence += sentence[i]
    }

    if (sentence.toLowerCase() === reversedSentence.toLowerCase()) {
        console.log("It's a Palindrome")
    } else { console.log("It's NOT a Palindrome") }
}

palindromeChecker("No 'x' in Nixon")

