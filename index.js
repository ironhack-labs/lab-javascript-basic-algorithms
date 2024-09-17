// Iteration 1: Names and Input
let hacker1 = "Alicia"
console.log("The driver´s name is", hacker1)
let hacker2 = "Elena"
console.log("The navigator´s name is", hacker2)

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has , ${hacker1.length} characters`)
}else if(hacker1.length<hacker2.length){
  console.log(`The navigator´s has the longest name, it has, ${hacker2.length} characterers`)
}else{
  console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}

// Iteration 3: Loops

let upperCaseName = ""
for(let i=0; i <= hacker1.length-1; i++){
   upperCaseName += hacker1.charAt(i).toUpperCase() + " "
}
console.log (upperCaseName)

let reversedName = ""
for(let i = hacker2.length-1; i >=0 ; i--){
  reversedName += hacker2.charAt(i)
}

console.log(reversedName)

hacker1 = hacker1.toLowerCase()
hacker2 = hacker2.toLowerCase()


const compareValue = hacker2.localeCompare(hacker1)

if(compareValue == 1){
  console.log("The driver's name goes first.")
}else if(compareValue == -1){
  console.log("Yo, the navigator goes first, definitely.")
}else{
  console.log("What?! You both have the same name?")
}



