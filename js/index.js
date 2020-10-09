// Iteration 1: Names and Input

// example if prompted user, fix input  
let hacker1 = 'rAcHEl b feldMaN';
let capHack1 = [];
hacker1.split(" ").forEach( e => {
 capHack1.push(e[0].toUpperCase() + e.slice(1).toLowerCase())
 });
hacker1 = capHack1.join(" ");
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Allie';
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
 hacker1.length > hacker2.length ? console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) : hacker1.length < hacker2.length ? console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) : console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)



// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let nameUpperSpace = "";
for(i = 0; i < hacker1.length; i++){
  nameUpperSpace +=  `${hacker1[i].toUpperCase()} `
}
 console.log(nameUpperSpace)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = "";
for(i = hacker2.length -1; i >= 0 ; i--){
  reverseName += hacker2[i]
}
console.log(reverseName)



// 3.3 Depending on the lexicographic order of the strings, print:


hacker1.localeCompare(hacker2) === 1 ? console.log(`Yo, the navigator goes first definitely.`) :  hacker1.localeCompare(hacker2)=== -1 ? console.log(`${hacker1} goes first`) : console.log('What?! You both have the same name?')



//~~Bonus~~//
//Bonus 1:

// 1.1 Generate 3 paragraphs. Store the text in a variable type of string.

const para1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor ante vitae ante auctor pharetra. Vivamus quam nunc, dapibus ac dui sit amet, lobortis imperdiet arcu. Nulla varius arcu ac finibus congue. Fusce tellus dolor, pellentesque non massa eget, feugiat pellentesque enim. Nullam facilisis libero et eleifend condimentum. Aenean egestas."
//Generated 1 paragraph, 50 words
// et - 1

const para2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit diam imperdiet hendrerit vulputate. Aliquam efficitur est sit amet dui fermentum posuere. Donec sed varius nisi. Fusce tincidunt dolor ac odio bibendum, sed viverra lacus placerat."
//Generated 1 paragraph, 36 words
//et - 0


//original
const para3 = "Nunc ipsum urna, consectetur nec tincidunt a, fermentum eget mauris. Donec lectus sem, ullamcorper et urna at, vestibulum ullamcorper nunc. Quisque blandit lectus id tempus ultricies. Nunc ligula neque, fermentum eu faucibus et, auctor vitae ligula. Donec eget sodales nibh. Phasellus vel."

// if messy paragraph
const para3_2 = "    Nunc ipsum urna,,, consectetur nec tincidunt a, fermentum eget mauris. ... Donec lectus sem, ullamcorper et urna at, ,, vestibulum ullamcorper nunc. Quisque blandit lectus id tempus ultricies. Nunc ligula neque, fermentum eu faucibus et, auctor vitae ligula. Donec eget sodales nibh. Phasellus vel  .    "
// Generated 1 paragraph, 42 words
// et - 2

// 1.2 Make your program count the number of words in the string.

// Advanced
console.log(para1.split(' ').length)
console.log(para2.split(' ').length)
console.log(para3.split(' ').length)

function wordCount(para){
  console.log(para.replace(/\W+/g, ' ').trim().split(/\s+/).length)
}

wordCount(para1)
wordCount(para2)
wordCount(para3_2)

//Current Lessons Way
// wont work for para 3_2 need  refactor for
let wordCounter = " "
let numberOfwords;
for(let i = 0; i <= para1.length;i++){
  if(para1.charAt(i) === " "){
   wordCounter += para1[i]
  }
  numberOfwords = wordCounter.length
}
console.log(numberOfwords)

// 1.3 Make your program count the number of times the Latin word et appears.

function countEt(para){
let count = 0
  for(let i = 0; i <= para.length;i++){
    let paraPlain = para.split(/\W/)
    if(paraPlain[i]=== "et"){
      count++
    }
  }
  console.log(count)
}

countEt(para1)
countEt(para2)
countEt(para3)
countEt(para3_2)


//// CURRENT LESSONS WAY
let count1 = 0
  for(let i = 0; i <= para1.length;i++){
   if(para1.substr(i,4)=== " et " || para1.substr(i,4)=== " et," || para1.substr(i,4)=== " et." ){
      count1++
    }
  }
  console.log(count1)

let count2 = 0
  for(let i = 0; i <= para2.length;i++){
   if(para2.substr(i,4)=== " et " || para2.substr(i,4)=== " et," || para2.substr(i,4)=== " et." ){
      count2++
    }
  }
  console.log(count2)

let count3 = 0
  for(let i = 0; i <= para3_2.length;i++){
   if(para3_2.substr(i,4)=== " et " || para3_2.substr(i,4)=== " et," || para3_2.substr(i,4)=== " et." ){
      count3++
    }
  }
  console.log(count3)




//Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. 

// Here are some examples of palindromes:

let phraseToCheck = "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?"  "No 'x' in Nixon"

//Avdanced
function palindromeCheck(phraseToCheck){
  let stringNoSpace = phraseToCheck.split(/[^A-Za-z0-9]/).join('').toLowerCase()

  let reverseString = stringNoSpace.split('').reverse().join('')

  stringNoSpace === reverseString ? console.log(`"${phraseToCheck}" IS a palindrome!`) : console.log(`"${phraseToCheck}" IS NOT a palindrome.`)

}

palindromeCheck("No 'x' in Nixon")
palindromeCheck("A man, a plan, a canal, Panama!")
palindromeCheck("Hey! What's up?")

//LOOP