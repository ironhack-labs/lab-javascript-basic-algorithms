// Iteration 1: Names and Input
//

let hacker1 = "Harry"
console.log(`The navigators name is ${hacker1}`)

let hacker2 = "Louise"
console.log(`The drivers name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker2.length > hacker1.length){
    console.log(`The driver has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  };


// Iteration 3: Loops

let spacedHacker = " "
let backwardsHacker = " "

for (let i = 0; i < hacker1.length; i++){
    spacedHacker += hacker1[i] + " "
}

console.log(spacedHacker.toUpperCase())


for (let i = hacker2.length - 1; i >= 0; i--){
    backwardsHacker += hacker2[i]
}

console.log(backwardsHacker)


if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first")
  } else if (hacker2.localeCompare(hacker1) === -1){
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("What?! You both have the same name?")
  }

  // Bonus 
// Bonus 1 
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
  const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim in sapien viverra volutpat sit amet vel mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta semper porttitor. Ut sagittis ligula sed sodales pellentesque. Suspendisse at risus eget velit suscipit bibendum id a sem. Aliquam ultricies metus quis tortor rhoncus consequat. Fusce feugiat nulla erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam id massa non nibh elementum placerat eu vel erat. Praesent convallis malesuada nunc ac hendrerit.
Vivamus vitae tristique dui. Morbi quam felis, elementum et tortor non, rutrum sodales dolor. Pellentesque a egestas lacus. Cras laoreet neque vel rhoncus sodales. Sed vel velit enim. Aenean in eros id odio mollis blandit ut ac est. Etiam maximus lectus eu ullamcorper pharetra.
Curabitur quis dui quis tortor mollis dictum in sed turpis. Duis id velit at sem egestas vehicula sed ac justo. Aenean egestas sodales nunc ac interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec congue eget lectus eu dignissim. Curabitur ac metus at odio ultrices facilisis sit amet ut tellus. Quisque eu nunc hendrerit, vestibulum lacus non, lobortis ipsum.`
let wordCount = 0
for (let i = 0; i < paragraphs.length; i++){
  let nextLetter = i + 1
    if(paragraphs[i] === " "){
      wordCount++
    }
}
console.log(wordCount)
// this produced a count short of the true number - as it missed the first words of the paragraph 
// we then found the following way to create a word count

let newWordCount = paragraphs.match(/(\w+)/g).length

console.log(newWordCount)

// Make your program count the number of times the Latin word et appears.
let count = 0

for (let i = 0; i < paragraphs.length; i++){
  if (paragraphs[i] === ' '){
    if (paragraphs[i + 1] === 'e'){
      if (paragraphs[i + 2] === 't'){
        count++
      }
    }
  }
}
+ 
console.log(count)

//Bonus 2
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
/* 
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and 
"No 'x' in Nixon".
*/

let phraseToCheck = "No 'x' in Nixon"
let backwardsWord = ""
let spacelessWord = ""
let isPalindrome

for (let i = phraseToCheck.length - 1; i >= 0; i--){
  if (phraseToCheck[i] === " "){
  } else if (phraseToCheck[i] === ","){
    continue
  } else if (phraseToCheck[i] === "!"){
    continue
  } else if (phraseToCheck[i] === "?"){
    continue
  } else if(phraseToCheck[i] === "'"){
    continue
  } else {
    backwardsWord += phraseToCheck[i]
  }
}

for (let i = 0; i < phraseToCheck.length; i++){
  if (phraseToCheck[i] === " "){
  } else if (phraseToCheck[i] === ","){
    continue
  } else if (phraseToCheck[i] === "!"){
    continue
  } else if (phraseToCheck[i] === "?"){
    continue
  } else if(phraseToCheck[i] === "'"){
    continue
  } else {
    spacelessWord += phraseToCheck[i]
  }
}
  backwardsWord.toLowerCase()
  phraseToCheck.toLowerCase()

if (spacelessWord.toLowerCase === backwardsWord.toLowerCase){
  isPalindrome = true
} else {
  isPalindrome = false
}

console.log(isPalindrome)

//Tahdah!! 