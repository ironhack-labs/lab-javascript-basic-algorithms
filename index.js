// Iteration 1: Names and Input
const hacker1= "Maria"
console.log(`The driver's name is ${hacker1}`)

const hacker2= "Pedram"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let letter= ""

for (let i=0; i<hacker1.length;i++){
   letter+= hacker1[i].toUpperCase() + " "
}

console.log(letter.toUpperCase())

let reverse= ""
for (let i= hacker1.length-1; i>=0; i--){
    reverse+= hacker1[i]
}
console.log(reverse)

if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first, definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

//Bonus 1
const longText= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(longText.split(" ").length)

console.log (longText.split("et").length - 1)

//Bonus 2
const phraseToCheck= "step on no pets";
let leftToRight="";
let rightToLeft="";

for (let i=0; i<phraseToCheck.length;i++){
    leftToRight+= phraseToCheck[i]
}
for (let i= phraseToCheck.length-1; i>=0; i--){
    rightToLeft+= phraseToCheck[i]
}
if (leftToRight === rightToLeft){
    console.log("It's a palindrome")
}
else {
    console.log("It's not a palindrome")
}
