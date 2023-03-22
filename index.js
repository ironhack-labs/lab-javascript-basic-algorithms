// Iteration 1: Names and Input
let hacker1 = "zuhammad";
let hacker2 = "hussain"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log("Wow, you both have equally long names, XX characters!")
}
// Iteration 3: Loops
function addSpace(str) {
  return str.split('').join(' ');
}

let hacker1New = addSpace(hacker1).toUpperCase();
console.log(hacker1New)

let hacker2Reversed = hacker2.split('').reverse().join("")
console.log(hacker2Reversed)



let result = hacker1.localeCompare(hacker2)
if (result == -1) {
  console.log("The driver's name goes first.")
}
else if (result == 1) {
  console.log("Yo, the navigator goes first, definitely.")
}
else {
  console.log("What?! You both have the same name?")
}



// BONUS1

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nisl purus. Praesent cursus ultricies odio ac ultricies. Proin tincidunt ipsum ipsum, vitae malesuada dui sollicitudin vel. Suspendisse auctor, nibh vel scelerisque rhoncus, dui tortor dapibus ex, at ornare justo mauris eget urna. Integer sit amet ligula justo. Proin molestie dolor id gravida pharetra. Morbi vel luctus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum risus nibh, convallis et nunc at, fermentum mollis neque. Suspendisse potenti.Pellentesque mattis mollis arcu, nec ornare ante pellentesque vitae. Curabitur gravida tristique mi a tristique. Donec sed rutrum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie faucibus molestie. Duis congue nulla sed odio semper interdum. Ut id scelerisque augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Donec lacus quam, aliquam dignissim urna nec, scelerisque fermentum magna. Suspendisse egestas eleifend eros, condimentum pharetra sapien ullamcorper id. Morbi porta turpis at ornare iaculis. Integer nec ornare erat, a fermentum lacus. Donec in hendrerit ipsum, in tristique felis. Curabitur convallis, eros non ullamcorper ornare, mauris libero congue augue, eu elementum leo metus in sapien. Curabitur eget congue dolor. Vestibulum vitae egestas lorem, fringilla auctor justo. Curabitur iaculis nulla at risus venenatis, ac placerat lacus aliquet. Aenean lacinia suscipit enim, eu imperdiet massa auctor ut. Duis id neque libero.et Fusce semper et nec lectus id placerat. Curabitur laoreet libero a magna interdum eleifend. Proin molestie est vitae sem bibendum placerat. Nunc blandit tincidunt maximus. Sed sed pharetra felis."


let paragraphWords = paragraph.split(" ");
console.log(paragraph[0])
console.log(paragraphWords[0])
// console.log(paragraphWords)
let etCount = 1

for (let i = 0; i < paragraphWords.length; i++) {
  if (paragraphWords[i] === "et") {
    etCount=etCount+1
  }
  
}
console.log(etCount)


// BONUS 2

const example = "A man, a plan, a canal, Panama!"

var re = /[\W_]/g; 
  
var lowRegStr = example.toLowerCase().replace(re, '');
var reverseStr = lowRegStr.split('').reverse().join('');
console.log(lowRegStr)
console.log(reverseStr)

if(lowRegStr===reverseStr){
  console.log("palindrome")
}
else{
  console.log("Not Palindrome")
}
