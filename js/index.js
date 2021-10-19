// Iteration 1: Names and Input
let hacker1 = 'Federico';
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Aaron';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length}characters`)
}
else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
for(let i = 0; i < hacker1.length; i++){
  console.log(hacker1[i].toUpperCase() +' ')
}

//Bonus 1:
const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

//Count the number of words in the paragraph
let wordCounter = 0
let etCounter = 0
for(let i = 0; i < lorem.length; i++){
  if(lorem[i] === " "){
    wordCounter++
  }
  else if(lorem[i] === "e" && lorem[i+1] === "t"){
  etCounter++
  }
}

console.log(wordCounter)
console.log(etCounter)

//Alternate form with a switch
/*
let wordCounter = 0
let etCounter = 0
for(let i = 0; i < lorem.length; i++){
  switch(lorem[i]){
    case " ":
      wordCounter++
      break
    case "e":
      if(lorem[i+1] === "t"){
        etCounter++
      }
      break
  }
}

console.log(wordCounter)
console.log(etCounter)*/
 
//Bonus2: Check whether a phrase is a palindrome or not
function alphaOnly(phrase) { //Function that extracts letters from a string (sacada de gugel y adaptada)
    var alphaText = '';
    for (var i = 0; i < phrase.length; i++) {
        if (phrase[i] >= 'A' && phrase[i] <= 'z'){ //Checks whether the character is a letter using the ASCII values of letters
           alphaText += phrase[i].toLowerCase()
        }
    }
    return alphaText;
}

let flag //This flag keeps track of the state of the word as the loop progresses, true if its a palindrome, changes to false otherwise
const phraseToCheck = prompt(`Input the phrase`)
const letras = alphaOnly(phraseToCheck) //Converts the phrase to letters using the function above

let reversedPhrase = '';

for(i = letras.length - 1; i >= 0; i--){
  // if(letras[i] == letras[(letras.length - 1) - i] && i < (letras.length - 1) - i){ //The first condition checks whether the pair of letters compared from each end are the same, the second condition makes sure the pairs are compared just once, in a word of a length of 8, there's 4 pairs of letters, so at i = 3 you'd be comparing the last pair, if the letters are the same, i = 3 < 4, on the next iteration i = 4, and 4 < 3, so that way we avoid going over the pair we just compared and the process ends

  //   flag = true
  //   continue
  // }else{
  //   flag = false
  //   continue
  // }

  reversedPhrase += letras[i]

  //reversedPhrase = 
}

console.log(reversedPhrase)


if(reversedPhrase === letras){
  console.log(`The phrase ${phraseToCheck} is a palindrome`)
}else{
  console.log(`The phrase ${phraseToCheck} is not a palindrome`)
}
