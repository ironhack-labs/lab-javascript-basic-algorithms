// https://repl.it/@rbfcccf8426/LAB-basic-algorithms2020 //use prompts & see full coding process

// Iteration 1: Names and Input

/// uncomment prompts to see what I tired. just messing around with HTML...don't really know what I'm doing.. I'm def not repl.it!...There I use prompts for all

//for  VSC
let hacker1 = "Rachel"

// let hacker1 = prompt("Hacker #1 what is your name?") 
// hacker1 = hacker1[0].toUpperCase() + hacker1.substring(1)

console.log(`The driver's name is ${hacker1}`)

//for VSC
let hacker2 = "Allie"

// let hacker2 = prompt("Hacker #2 what is your name?")
//hacker2 = hacker2[0].toUpperCase() + hacker2.substring(1)

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters `);
  } else if(hacker2.length > hacker1.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
  } else if(hacker1.length===hacker2.length){
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters`)
  } else {
    console.log("?????")
  }


////or this quick mess//  
// hacker1.length > hacker2.length ? console.log(`The Driver has the longest name, it has ${hacker1.length} characters `) : hacker1.length < hacker2.length ? console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`) : console.log(`Wow, you both got equally long names, ${hacker1.length} characters`)


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let upperCaseName = ""
for(let i = 0; i < hacker1.length; i++ ){
  upperCaseName += `${hacker1[i]} `.toUpperCase()
}
 console.log(upperCaseName)


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let backwardsName = ""
for(let i = hacker2.length-1; i >= 0; i--){
  backwardsName += hacker2[i]
}
  console.log(backwardsName)

// 3.3 Depending on the lexicographic order of the strings, print:

//using .localeCompare()
if(hacker1.localeCompare(hacker2) === -1) console.log(`${hacker1} goes first.`) 
if(hacker1.localeCompare(hacker2) === 1) console.log(`Yo, ${hacker2} goes first definitely..`)
if(hacker1.localeCompare(hacker2) === 0) console.log("What?! You both have the same name?") 

// or //
// if(hacker1 < hacker2) console.log(`${hacker1} goes first.`) 
// if(hacker1 > hacker2) console.log(`Yo, ${hacker2} goes first definitely..`)
// if(hacker1 === hacker2) console.log("What?! You both have the same name?")








// BONUSES 
// (hardcoded answers change manually paragraph# to check.. am aware multiple copies scope will mess up answers 😬 or see repl.it link above)

// Bonus 1: LOREM IPSUM 

// bonus 1.1
// Generate 3 paragraphs. Store the text in a variable type of string.

let lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin erat non nunc sodales porttitor. Donec et ante commodo, gravida massa sed, rutrum tellus. Pellentesque efficitur, sem ut condimentum consectetur, metus dolor auctor tortor, et."


let lorem2 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum arcu ac elit pellentesque, eget tempus orci dictum. Fusce ultricies eu leo non congue."


let lorem3 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum tincidunt dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vulputate lectus euismod eros posuere, a dignissim risus tempus. Suspendisse potenti. Morbi sapien nunc, gravida at mattis non, semper vitae magna."


// bonus 1.2
// Make your program count the number of words in the string.
//lorem1 -> 35 lorem2 -> 24 lorem3 -> 47 

// HARDCODED ANSWERS: 

// using FOR Loop
let counter = 1
for(let i = 0; i < lorem1.length; i++){
  if(lorem1[i]===" "){
    counter++ 
  }
}
console.log(`The paragraph contains: ${counter} words`)


// // use split()                
let loremWords = lorem1.split(" ").length
console.log(`The paragraph contains: ${loremWords} words`)


// // using charAt()) ("fixed" an old answer weird/long but works!?)//
let i = 0
let word =" " // "" -> i=1
for(lorem1.charAt(i); i <= lorem1.length; i++){
  if(lorem1.charAt(i)===" "){
   word = word += lorem1.charAt(i).length
  }     
}
 console.log(`The paragraph contains: ${word.length} words`)



// // DYNAMIC ANSWER: 
// //using FUNCTION() 
 function numberOfWords(lorem){
  return lorem.split(" ").length
}
console.log(numberOfWords(lorem1))
console.log(numberOfWords(lorem2))
console.log(numberOfWords(lorem3))


// // bonus 1.3
// // ///// Make your program count the number of times the Latin word "et" appears.
      
// //HARDCODED ANSWER: 
// //lorem1 = 2 lorem2 = 0 lorem3 = 1
let strCheck = lorem1.toLowerCase().split(" ")
let count = 0;
  for (let i = 0; i <= strCheck.length - 1; i++){
    if(strCheck[i].split(/[^a-zA-Z]/).join("")==="et"){
    count++
    }
  }
    console.log(` "et" appears ${count} times`)


// //DYNAMIC//
function strAppear(lorem, str){
  str = str.toLowerCase()
  let strCheck = lorem.toLowerCase().split(" ")
  let count = 0;
  for (let i = 0; i <= strCheck.length - 1; i++){
    if(strCheck[i].split(/[^a-zA-Z]/).join("") === str){
      count++
    }
  }
  return ` "${str}" appears ${count} times`
}

console.log(strAppear(lorem1, "et"));
console.log(strAppear(lorem2, "et"));
console.log(strAppear(lorem3, "et"));


//Bonus 2:
// Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome

// Here are some examples of palindromes: 
//   - "A man, a plan, a canal, Panama!"
//   - "Amor, Roma"
//   - "race car"
//   - "stack cats"
//   - "step on no pets"
//   - "taco cat"
//   - "put it up"
//   - "Was it a car or a cat I saw?" and "No 'x' in Nixon".



//// HARDCODED answer:

// let phraseToCheck = "No 'x' in Nixon"
// //let phraseToCheck = prompt("Type a sentence...see if it is a PALINDROME!?!")


// let stringNoSpace = string.toLowerCase().split(" ").join("")  
// let reverseString = stringNoSpace.split("").reverse().join("")

// noSpaces === reverseStr ? console.log(`${phraseToCheck} is a palindrome!`) : console.log(`${phraseToCheck} is NOT a palindrome!`)


// LOOP//

// let phraseToCheck = "No 'x' in Nixon"
// let noSpace = ""
// for(i = 0; i < phraseToCheck2.length; i++){
//   if(phraseToCheck2[i]===" "){
//     continue;
//     } else {
//       noSpace2 += phraseToCheck2[i]
//     }  
// }
// print(noSpace)




// let reverse = ""
// for(let i = noSpace.length - 1; i >= 0; i--){

// }





//// DYNAMIC ///////////
// function checkPal(string){
//   let stringNoSpace = string.toLowerCase().split(/[^a-zA-Z]/).join("")
//   let reverseString = string.toLowerCase().split(/[^a-zA-Z]/).join("").split("").reverse().join("")
//   return  stringNoSpace===reverseString ? console.log("It's a palindrome") : console.log("NOT palindrome")
// }
// checkPal("A man, a plan, a canal, Panama!");
// checkPal("race car");
// checkPal("i did this wrong");
