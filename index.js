// Iteration 1: Names and Input
let hacker1 = prompt("Driver's name:")
let hacker2 = prompt("Navigator's name:")


console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

let hacker1 = prompt("Driver's name:")
let hacker2 = prompt("Navigator's name:")

if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if(hacker1.length == hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
  console.log("invalid submission")
}

// Iteration 3: Loops

let hacker1 = prompt("Driver's name:")
let hacker2 = prompt("Navigator's name:")



//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let newUppercaseWithSpaces = ''

for (let i = 0; i < hacker1.length; i++) {
  newUppercaseWithSpaces += hacker1[i].toLocaleUpperCase() + " "
}

console.log(newUppercaseWithSpaces)

// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".
let reverseNavigatorsName = ''

for (let i = 0; i < hacker2.length; i++) {
  reverseNavigatorsName += hacker2[hacker2.length - i - 1]
}

console.log(reverseNavigatorsName)

// 3.3 Depending on the lexicographic order of the strings, print different output:


switch((hacker1.localeCompare(hacker2))){
  case -1:
    console.log("The driver's name goes first.")
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely. ")
    break;
  default:
    console.log("What?! You both have the same name?")
}


// BONUS
//bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at mi augue. Mauris varius, quam nec condimentum tincidunt, libero metus malesuada libero, ut rhoncus elit ligula sit amet turpis. Aliquam eget euismod arcu, non cursus turpis. Ut id rutrum felis. Vestibulum nec tempor diam. Curabitur rutrum sed neque id posuere. Cras faucibus leo quis massa euismod, eu cursus massa molestie. Ut molestie ornare tempus. Duis quis dolor lacinia, viverra leo sed, pellentesque lacus. Praesent interdum ultrices tellus, eget accumsan eros volutpat non. Quisque in faucibus mauris. Donec at dolor feugiat, feugiat velit non, fermentum dui. Aliquam efficitur orci dolor. Quisque tristique vestibulum lacus eget congue. Fusce luctus dui vel fermentum vulputate. Vestibulum at sollicitudin metus. Suspendisse ut laoreet arcu. Aliquam scelerisque venenatis porttitor. Quisque vitae hendrerit sapien. Mauris ac mattis nisl, sed faucibus nisi. Nulla facilisi. Duis rutrum pretium justo, eget iaculis tortor volutpat ornare. Mauris aliquam, tellus vel consequat dictum, mi diam maximus ipsum, non porttitor mauris est quis est. Integer scelerisque sed elit non consequat. Nunc velit metus, tincidunt id nisl quis, ullamcorper dictum tellus. Cras ornare turpis ut est auctor cursus. Cras rhoncus, nunc eget viverra ullamcorper, purus dui congue justo, eget viverra justo purus sit amet mi. Suspendisse suscipit pretium consectetur. Sed at libero lorem. Phasellus quis risus nunc. Phasellus at suscipit tortor, ut cursus dolor. Proin ut nisl a eros lobortis condimentum in efficitur tellus. Vestibulum sit amet ipsum vitae lacus viverra gravida id ac diam. Nam est justo, ultricies at lobortis ut, accumsan non risus. Etiam laoreet a libero ac congue. Pellentesque in ipsum interdum, aliquam eros sit amet, ornare elit. Duis sed nulla quis ex rhoncus accumsan. Vestibulum nec ligula urna. Donec ultrices, dui ac dictum pharetra, tortor arcu malesuada leo, a aliquam elit ante vel felis. Praesent dignissim feugiat mauris sed hendrerit. Pellentesque et blandit sapien."

let wordEtCount = 0
let wordsCount = 0

    // assuming sentences end with '.' and not '!' etc 
    // space or full stop means current word ended
    

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === ' ' || (longText[i] === '.' && longText[i+1] !== ' ' )) {
    wordsCount++;
  }
  if(longText[i].toLocaleLowerCase() === 'e' && longText[i+1].toLocaleLowerCase() === 't' && (longText[i+2] === ' ' || longText[i+2] === ',' || longText[i+2] === '.')  ){
    wordEtCount++;
  }
}

console.log(`The string has ${wordsCount} words and the word "et" shows ${wordEtCount} times`)

// bonus 2

//lowercase the user input since palindromes are not case sensitive
let phraseToCheck = prompt("give us a phrase to check").toLocaleLowerCase()
let phraseTocheckOnlyLetters = ''

//Clean up for most common simbols or punctuation 
for(let j = 0; j < (phraseToCheck.length); j++){
  if( phraseToCheck[j] !== '!' && phraseToCheck[j] !== ' ' && phraseToCheck[j] !== ',' && phraseToCheck[j] !== '.' && phraseToCheck[j] !== '?' && phraseToCheck[j] !== "'"){
    phraseTocheckOnlyLetters += phraseToCheck[j]
  } else {
  continue
  }
}

let isPalindrome = false

// check opposite indexes of string and compare, will assume palindrome from the 1st match until it fails
for(let i = 0; i < (phraseTocheckOnlyLetters.length-i - 1); i++){
  if( phraseTocheckOnlyLetters[i] === phraseTocheckOnlyLetters[phraseTocheckOnlyLetters.length-i - 1]){
    isPalindrome = true;
  } else {
    isPalindrome = false;
    break;
  }
}

console.log("isPalindrome")
