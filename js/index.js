// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "ingrid";
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`)
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 =  "paulo";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.


if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
   console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(` Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
console.log(hacker1.toUpperCase())

let result31 = "";

for(let i = 0; i< hacker1.length; i++){
  result31 += hacker1[i].toUpperCase() + ' ';
}

console.log(result31)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let result32 = " ";

for(let i = hacker2.length-1; i >= 0; i-- ){
   result32 += hacker2[i];
}

console.log(result32)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

const hackers = [hacker2, hacker1];
console.log(hackers)
if(hacker1 === hacker2){
 console.log( "What?! You both have the same name?")
} else if(hackers.sort()[0] === hacker1 ){
  console.log( "The driver's name goes first")
} else {
  console.log( " Yo, the navigator goes first definitely")
} 

// Bonus Time!

// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra vulputate auctor. Etiam pellentesque tempus leo, sit amet rhoncus leo vehicula vitae. Nullam semper luctus metus, quis aliquam justo faucibus eu. Cras ante tortor, gravida quis nisl sed, blandit pharetra est. Mauris sem metus, dapibus eu viverra nec, dictum semper lacus. Aenean non iaculis lorem, non placerat est. Sed purus orci, cursus et leo cursus, dignissim finibus lacus. Proin et venenatis enim. Suspendisse potenti. Curabitur vestibulum, lorem ut lobortis condimentum, enim lectus volutpat nisi, ac lobortis nisi ipsum eget felis. Fusce lacinia, diam non hendrerit scelerisque, leo lectus congue quam, ac interdum purus arcu egestas lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec condimentum nunc ligula, nec porttitor purus consectetur vel. Mauris vel varius tellus. Fusce sed nulla nunc. Mauris congue aliquet lectus vel vulputate. Nam sed nisl nec risus efficitur vulputate at eu arcu. Quisque sed metus metus. Maecenas in nunc sit amet ipsum tempor sollicitudin. Nullam vel urna vestibulum, pulvinar quam a, blandit tortor. Sed fermentum, lectus at tempus porta, velit magna commodo nisi, ut vulputate odio ligula a est. Donec interdum nulla euismod vulputate vestibulum. Sed condimentum, nulla ac hendrerit sodales, lacus leo egestas eros, quis cursus erat augue at metus. In hac habitasse platea dictumst. Nullam erat elit, congue non lectus id, laoreet consectetur nisl. Vestibulum ac tempus ligula. Morbi dictum fringilla justo, et convallis ligula efficitur quis. Aenean a hendrerit eros, ut placerat neque. Vivamus sit amet porta ante. Proin pretium, orci eleifend tincidunt aliquet, diam neque dignissim elit, nec porta dolor erat fermentum sem."

// Make your program count the number of words in the string.
const array1 = paragraphs.split(" ");
console.log(array1.length)

// Make your program count the number of times the Latin word et appears.
let count = 0;

for(let i = 0; i<array1.length; i++){
  if(array1[i] === "Latin"){
    count +=1
  }
}

console.log(count)

// Bonus 2:

// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
let phraseToCheck = "";
let phrases = [ `Was it a car or a cat I saw?" and "No 'x' in Nixon`, "Amor, Roma", "race car", "stack cats", "step on no pets", "taco cat", "put it up"];
let string1 = "";
let string2 = "";

for(let j = 0; j<phrases.length; j++){
  phraseToCheck = phrases[j];
  string1 = "";
  string2= "";

  // console.log(phraseToCheck)

  for(let i = 0; i<phraseToCheck.length; i++){
    if(phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "?" || phraseToCheck[i] === "!" || phraseToCheck[i] === "." || phraseToCheck[i] === "'" || phraseToCheck[i] === `"`){
      continue
    } else {
      string1 += phraseToCheck[i].toLocaleLowerCase()
    }
  }

  console.log(string1)

  for(let i = string1.length-1; i >= 0; i-- ){
    string2 += string1[i];
  }

  console.log(string2)

  if(string1 === string2){
    console.log(`${phraseToCheck} Palíndromo!!!`)
  } else {
    console.log(`${phraseToCheck} não é Palíndromo! :(`)
  }
}



// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".