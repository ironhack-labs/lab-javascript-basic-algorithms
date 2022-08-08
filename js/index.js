console.log("I'm ready!")

// Iteration 1: Names and Input
//
const hacker1 = "Erika"

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Johanna"

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) { 
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else (`Wow, you both have equally long names, ${hacker1.length} characters!`)

// Iteration 3: Loops


const capitalAndSpace = console.log(hacker1.toUpperCase().split('').join(' '))


const splitString = console.log(hacker2.split('').reverse('').join(''))


if (hacker1.localeCompare(hacker2) == -1) {
    console.log('The driver’s name goes first')
  } else if (hacker1.localeCompare(hacker2) == 1) {
    console.log('Yo, the navigator goes first definitely')
  } else {
    console.log('What?! You both have the same name?') 
}  


// Bonus 1 


let string = "Loremipsumdolor sit am et, consect et ur adipiscing elit."



console.log (string.split(' ').length)

 

function countOccurences(string, word) {
    console.log (string.split(word).length - 1) // why do we have to put -1 ?, because when it starts counting with 0, the result would be 1 (2 times et in the sentence)? 
 }
 
 let count = countOccurences(string,"et")
 

 // Bonus 2


 function checkPhrase (testString) {
      let unifyString = testString.replace(/[^A-Z0-9]/ig, "").toLowerCase('');
console.log (unifyString)
   let checkingPalindrome = unifyString.split('').reverse().join('');
console.log (checkingPalindrome)  
   if(unifyString === checkingPalindrome){
     
     console.log ("It is a Palindrome")
   }
   else {
     console.log ("It no Palindrome")
   }
   
 }


 checkPhrase ("A man, a plan, a canal, Panama!") 