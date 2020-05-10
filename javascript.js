var text = "Lorem Ipsum is" //and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
// Iteration 1: Names and Input
var hacker1 = "Jonh" //driver
var hacker2 =  "Jonathan"; //navigator
console.log(`The driver's name is ` ,hacker1)
console.log(`The navigator's name is ` ,hacker2)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(hacker1.length)
    console.log(`The driver has the longest name, it has`,hacker1.length ,`characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has `,hacker2.length ,`characters.`)
} else {
console.log(`Wow, you both have equally long names,` ,hacker2.length , `characters!`)
}
// Iteration 3: Loops
var  printName = "";
for (let i = 0; i < hacker1.length; i++) {
printName += hacker1[i] + " ";
}
console.log(`name in capital letters and with space is `,printName.toUpperCase())
//reverce name
var reverceName = "";
for (let i = hacker2.length-1; i >=0; i--) {
reverceName += hacker2[i]
}
console.log(`the reverce name is ` ,reverceName)

//Bonus 1
function wordsCount(text) {
    result = 0;
    result1 = 0;
  for (let i = 0; i < text.length; i++) { 
      result = text.split(" ").length 
      result1 = text.split("et").length-1
return console.log(`the number of words is ` ,result, `and the number of times of latin words is ` ,result1)
}
}
console.log(wordsCount("Lorm Ipsum is helllo et et et"))
//Bonus 2
//polindrome
function cleanInput(someString) {
    var cleanString = " ";
       for ( let i = 0; i < someString.length; i++) {
           if (someString[i] >= "a" && someString[i] <= "z") {
               cleanString = cleanString +  someString[i]
           }
        }
    return cleanString  
}
console.log(cleanInput("your program Pount the Number of words"))
//reverce function 
function reverceString(someString) {
   var revercedString = ""
   for (let i = someString.length-1; i >= 0; i--) {
       revercedString += someString[i]
   }
   return revercedString
}
console.log(reverceString('frans'))

function polindrome(someString) {
       if (cleanInput(someString) === reverceString(someString)) {
           return true
       } else {
           return false
       }
}
console.log(polindrome("race car"))
