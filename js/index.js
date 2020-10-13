// Iteration 1: Names and Input

let hacker1= "Carlos Riojas"
console.log(`The drivers name is ${hacker1}`)
let hacker2 = "Karen-Alberto";
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
} if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops

let empty = ''

for (let i=0 ; hacker1.length > i; i++) {
  empty += hacker1[i] + " ";
}

console.log(empty.toUpperCase());

for (let i = hacker1.length-1 ;i >=0; i--) {
  empty += hacker1[i]; 
}

console.log(empty)


let resultComp =  hacker1.localeCompare(hacker2);
if (resultComp == -1){ 
 console.log("The driver's name goes first")
}else if(resultComp == 1) {
  console.log("Yo, the navigator goes first definitely.")
}else{
  console.log("What?! You both have the same name?")
}

//BONUS 1

let parrafo= "What is Lorem Ipsum?\
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let new_str = parrafo.split(" ")


console.log(new_str)
console.log(new_str.length)
let count = parrafo.split("et").length -1
console.log(count)
 

//BONUS 2 
let palindromo = "amor"
let word1 = 'roma'
let word2 = ""

for (let i = palindromo.length-1 ;i >=0; i--) {
  word2 += palindromo[i]; 
}

if (word1 == word2) {
  console.log(`${word1} and ${palindromo} are a palindrome`)
} else {
  console.log(`${word1} and ${palindromo} not are a palindrome`)
}
