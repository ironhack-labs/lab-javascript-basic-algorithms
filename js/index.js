// Iteration 1: Names and Input

let hacker1 = "Joe"
let hacker2 = "Billy"


console.log("The drivers name is "+ hacker1)
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + "characters.")
}
else if (hacker2.length >hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + "characters")
}
else{
    console.log("Wow, you both have equally long names, " + hacker1.length + "characters")
}
// Iteration 3: Loops

let x = " "
for(const char of hacker1){
    x = x + char.toUpperCase() + ' '
}
console.log(x)

let y = ""
for (let i = hacker2.length - 1; i >= 0; i--){
    y = y +hacker2[i]
}
console.log(y)

if (hacker1 < hacker2){
    console.log("The drivers name goes first.")
}
else if (hacker2 < hacker1){
    console.log("Yo, the navigator goes first definietly")
}
else{
    console.log("What?! You both have the same name?")
}

//Bonus 1

// let paragraphs = "et et et"
// const wordCounter = 0
// for (let i = 0; i < text.length; i++){
//     if (text[i] == " "){
//         wordCount++
//     }
//     if (text[i] == "e")
// }
// wordCount++
// console.log("words: " + wordCount)

//Bonus 2


function phraseToCheck(str) { //sets the variable
    var len = Math.floor(str.length / 2); //returns the largest integer less than a given number
    for (var i = 0; i < len; i++) //conditions i 
      if (str[i] !== str[str.length - i - 1])
        return "This is not palindrome"; //if it is not a palindrome
    return "This is a palindrome"; //if it is a palindrome
  }
console.log(phraseToCheck("A man a plan a canal Panama"))

//Didnt really complete the Bonus but I am still working on it.