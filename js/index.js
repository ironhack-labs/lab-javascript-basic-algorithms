// Iteration 1: Names and Input

const hacker1 = 'Manuel'
console.log(`The driver's name is ${hacker1}`)


const hacker2 = 'Lola'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

/* Print all the characters of the driver's name, separated by a space and in capitals */

let driverName = ''
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " "
}
console.log(driverName)

/* Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ" */

let reversedNavigatorName = ''
for (let i = hacker2.length -1 ; i >= 0; i--) {
  reversedNavigatorName += hacker2[i]
}
console.log(reversedNavigatorName)

 /* Depending on the lexicographic order of the strings, print: */


let order = hacker1.localeCompare(hacker2)
if (order === 1){
  console.log(`The driver's name goes first.`)
  }
else if (order === -1){
  console.log(`Yo, the navigator goes first definitely.`)
  }
else {
  console.log(`What?! You both have the same name?`)
  }

//BONUS 1

/* Generate 3 paragraphs. Store the text in a variable type of string. */
let myLoremIpsum = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
/* Make your program count the number of words in the string. */
console.log(`This paragraph have ${myLoremIpsum.split(' ').length} words`)
/* Make your program count the number of times the Latin word et appears. */
console.log(`The word 'et' appears on this paragraph ${myLoremIpsum.split('et').length-1} times`);





