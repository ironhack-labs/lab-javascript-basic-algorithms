function print(...param){
  console.log(...param)
}


// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
//let hacker1 = "Rachel"

// 1.2 Print `"The driver's name is XXXX"`.

// 1.3 Create a variable `hacker2` with the navigator's name.

// 1.4 Print `"The navigator's name is YYYY"`.

// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?


// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.

let lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin erat non nunc sodales porttitor. Donec et ante commodo, gravida massa sed, rutrum tellus. Pellentesque efficitur, sem ut condimentum consectetur, metus dolor auctor tortor, et."
//Generated 1 paragraph, 35 words  et = 2

let lorem2 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum arcu ac elit pellentesque, eget tempus orci dictum. Fusce ultricies eu leo non congue."
//Generated 1 paragraph, 24 words et = 0

let lorem3 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum tincidunt dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vulputate lectus euismod eros posuere, a dignissim risus tempus. Suspendisse potenti. Morbi sapien nunc, gravida at mattis non, semper vitae magna."
//Generated 1 paragraph, 47 words  et = 1

// Make your program count the number of words in the string.
//lorem1 -> 35 lorem2 -> 24 lorem3 -> 47

                //HARDCODED ANSWERS:
let lorem1Words = lorem1.split(" ").length
console.log(lorem1Words)
let lorem2Words = lorem2.split(" ").length
console.log(lorem2Words)
let lorem3Words = lorem3.split(" ").length
console.log(lorem3Words)


                        ////OR////

//let counter1 = 1
// for(let i = 0; i < lorem1.length; i++){
//   if(lorem1[i]===" "){
//     counter1++ 
//   }
// }
// //console.log(`The 1st paragraph contains: ${counter1} words`)

// let counter2 = 1
// for(let i = 0 ; i < lorem2.length; i++){
//   if(lorem2[i]===" "){
//     counter2++ 
//   }
// }
// console.log(`The 2nd paragraph contains: ${counter2} words`)

// let counter3 = 1
// for(let i = 0; i < lorem3.length; i++){
//   if(lorem3[i]===" "){
//     counter3++ 
//   }
// }
// console.log(`The 3rd paragraph contains: ${counter3} words`)

        ///ALTernative (old answer)///

let i=0
let word1 =" "
for(lorem1.charAt(i); i <=lorem1.length; i++){
  if(lorem1.charAt(i)===" "){
   word1 = word1 += lorem1.charAt(i).length
  }     
}
 console.log(`The 1st paragraph contains: ${word1.length} words`)



let j = 0
let word2 =" "
for(lorem2.charAt(j); j <=lorem2.length; j++){
  if(lorem2.charAt(j)===" "){
   word2 = word2 += lorem2.charAt(j).length
  }     
}
console.log(`The 2nd paragraph contains: ${word2.length} words`)


//lorem3 ~~~~ with variable MUST BE INSIDE~~
let k = 0
let word3 =" "
for(lorem3.charAt(k); k<=lorem3.length; k++){
  let l3Char = lorem3.charAt(k) //outside scope = 1?
    if(l3Char===" "){
      word3 = word3 += l3Char.length
    }     
}
console.log(`The 3rd paragraph contains: ${word3.length} words`)


//DYNAMIC ANSWERs: 
//  function numberOfWords(lorem){
//   console.log(lorem.split(" ").length) 
//   return lorem.split(" ").length
// }
// numberOfWords(lorem1)
// numberOfWords(lorem2)
// numberOfWords(lorem3)


// ///// Make your program count the number of times the Latin word et appears.
      
      //HARDCODED ANSWER: 

//lorem1 = 2
let strCheck1 = lorem1.toLowerCase().split(" ")
let count1 = 0;
  for (let i = 0; i <= strCheck1.length - 1; i++){
    if(strCheck[i].split(/[^a-zA-Z]/).join("")==="et"){
    count1++
    }
  }
    print(` "et" appears ${count1} times`)

//lorem2 = 0
let strCheck2 = lorem2.toLowerCase().split(" ")
let count2 = 0;
  for (let i = 0; i <= strCheck2.length - 1; i++){
    if(strCheck2[i].split(/[^a-zA-Z]/).join("")==="et"){
    count3++
    }
  }
  print(` "et" appears ${count2} times`)

//lorem3 = 1
let strCheck3 = lorem3.toLowerCase().split(" ")
let count3 = 0;
  for (let i = 0; i <= strCheck3.length - 1; i++){
    if(strCheck3[i].split(/[^a-zA-Z]/).join("")==="et"){
    count3++
    }
  }
  print(` "et" appears ${count3} times`)

//DYNAMIC//
function strAppear(lorem, str){
  str = str.toLowerCase()
  let strCheck = lorem.toLowerCase().split(" ")
  let count = 0;
  for (let i = 0; i <= strCheck.length - 1; i++){
    if(strCheck[i].split(/[^a-zA-Z]/).join("")===str){
      count++
    }
  }
  print(` "${str}" appears ${count} times`)
  return ` "${str}" appears ${count} times`
}

strAppear(lorem2, "Vestibulum")
strAppear(lorem1, "et")
strAppear(lorem3, "lorem")



// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".



// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

//HARDCODED//

// deleted alot of my FAILS! below is no where near right. Figured it out before & I shall AGAIN! 😫😡
//as well will do again with loop 

// let phraseToCheck = prompt("Type Sentence Here: Will Check If It's A PALINDROME!? ")
// //let phraseToCheck = "race car"
// let noSpaces = phraseToCheck.split(" ").join("").toLowerCase
// //print(phraseToCheck.split(" ").join(""))
// let reverseStr = phraseToCheck.split(" ").reverse().join("").toLowerCase
// //print(phraseToCheck.split(" ").reverse().join(""))
//console.log("No 'x' in Nixon".split(" ").join(""))
noSpaces === reverseStr ? console.log(`${phraseToCheck} is a palindrome!`) : console.log(`${phraseToCheck} is NOT a palindrome!`)


// LOOP//


//let phraseToCheck2 = prompt("Type Sentence Here: Will Check If It's A PALINDROME!? ")
let phraseToCheck2 = "No 'x' in Nixon"
let noSpace2 = ""
for(i = 0; i < phraseToCheck2.length; i++){
  if(phraseToCheck2[i]===" "){
    continue;
    } else {
      noSpace2 += phraseToCheck2[i]
    }  
}
print(noSpace2)




let reverse = ""
for(let i = noSpace2.length - 1; i >= 0; i--){

}





















      //HARD/DYNAMIC PLAYTIME FUN WITH🤮SCOPES🤮 EVIarL🤮 NOTEs:

// //function DECLARATION hoisted = prints correct 
//print(typeof numberOfWords(lorem1))
// numberOfWords(lorem1) //
// numberOfWords(lorem2) 
// numberOfWords(lorem3)
// // <-VAR...call before/after ->
// // //function DECLARATION hoisted = prints correct 
// function numberOfWords(lorem){
//   console.log(lorem.split(" ").length) 
//   return lorem.split(" ").length
// }
// numberOfWords(lorem1) 
// numberOfWords(lorem2) 
// numberOfWords(lorem3)

// print(typeof numberOfWords(lorem1))
// numberOfWords(lorem1) // <-VAR...call before ->
// //function EXPRESSION not hoisted
// //let/const = refError(not initialized)  
//var= typeError- does not exist,undefined stored for initialization reference for assignment
// var numberOfWords = function(lorem){
//   console.log(lorem.split(" ").length) 
//   return lorem.split(" ").length
// }


//var reassign i=0 
// leak? hoist? behavior  block scope
// Without dynamic function
 //let/var counter = 1 -> accumulates previous values each next conditional block

//let counter1 = 1
// for(i = 0; i < lorem1.length; i++){
//   if(lorem1[i]===" "){
//     //counter1++ 
//     counter++
//   }
// }
// //console.log(`The 1st paragraph contains: ${wordCounter1} words`)
// console.log(`The 1st paragraph contains: ${counter} words`)

// //let counter2 = 1
// for(i = 0 ; i < lorem2.length; i++){
//   if(lorem2[i]===" "){
//     //counter2++ 
//     counter++
//   }
// }
// // console.log(`The 2nd paragraph contains: ${counter2} words`)
// console.log(`The 2nd paragraph contains: ${counter} words`)

// //let counter3 = 1
// for(i = 0; i < lorem3.length; i++){
//   if(lorem3[i]===" "){
//     //counter3++ 
//     counter++
//   }
// }
// // console.log(`The 3rd paragraph contains: ${counter3} words`)
// console.log(`The 3rd paragraph contains: ${counter} words`)






