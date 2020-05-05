// Iteration 1: Names and Input
var hacker1 = "John"
console.log(`The drivers name is ${hacker1}`)

var hacker2 = "Mary"
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//Uppercase
var newHacker1 = ""
for (let i = 0; i < hacker1.length; i++) {
    let hacker1Caps = hacker1[i].toUpperCase() + " "
    newHacker1 += hacker1Caps
}
console.log(`${newHacker1}`)

//string reversal
var reverseHacker2 = "";
for (let j = hacker2.length-1; j >= 0; j--) {
    reverseHacker2 += hacker2[j]
}

console.log(`${reverseHacker2}`)
//name length
for (let i = 0; i < 1; i++) {
    if (hacker1[0] < hacker2[0]) {
        console.log(`The driver's name goes first.`)
    }else if(hacker1[0] > hacker2[0]){
        console.log(`Yo, the navigator goes first definitely.`)
    }else{
        console.log(`What?! You both have the same name?`)
    }
}

//=============BONUS EXERCISES!!

var paragraphs ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tristique venenatis. Morbi non nisl eget mi consectetur ullamcorper. Praesent efficitur faucibus neque, vitae iaculis ipsum efficitur quis. Mauris sit amet dolor volutpat, lacinia nibh eu, consequat ante. Duis nisl tortor, mollis eu pulvinar at, convallis quis mi. Vivamus eu velit bibendum urna euismod ultrices. Sed et lacinia arcu. Mauris vulputate accumsan sapien, eget placerat leo dignissim et. In accumsan ante tellus, in sagittis nulla dapibus in. Fusce id nisi sagittis, egestas dolor ut, volutpat nibh. Donec sagittis massa magna, eget et et et malesuada massa semper et. Nam feugiat sed urna sed.'

//word count

function wordCount(string){
    //Function counting spaces, stores the spaces in the variable totalWords that starts with a value of one since the first word has no space.
    var totalWords = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i]===" ") {
            totalWords++
        }
    }
        console.log(`${totalWords}`)
        return totalWords
}
wordCount(paragraphs)

//counting et
function countEt(string){
    var totalEts = 0
    //iterating over all characters within the string, if an 'e' is followed by a 't' and both have spaces before them, the empty variable totalEts increases.
    for (let i = 0; i < string.length; i++) {
        if (string[i]==="e" && string[i+1]==="t" && string[i-1]<="A" && string[i+2]<="A") { 
            totalEts++  
        }   
    }
    console.log(`${totalEts}`)
    return totalEts
}
countEt(paragraphs)

//palindrome

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

var phraseToCheck = "Amor, Roma"

function getRidOfSpecialCharacters(string){
    var result = ""
    string= string.toLowerCase()
    for (let i = 0; i < string.length; i++) {
        if (string[i]>="a") {
            result +=string[i]
        }
    }
    return result
}
getRidOfSpecialCharacters(phraseToCheck)

function reverseString(string){
    var reversedString = ""
    for (let i = string.length-1; i >= 0; i--) {
        reversedString += string[i]
        
    }
    return reversedString
}
reverseString(phraseToCheck)

function palindromeVerification(string){
    var palindrome
    var cleanString = getRidOfSpecialCharacters(string)
    var reversedCleanString = reverseString(cleanString)
    if (cleanString === reversedCleanString){
        palindrome = true
    }else{
        palindrome = false
    }
    
    return palindrome
}

console.log(palindromeVerification(phraseToCheck))
