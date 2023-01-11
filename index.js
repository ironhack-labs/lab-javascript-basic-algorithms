// Iteration 1: Names and Input

let hacker1 = "Tobias"
console.log("The driver's name is", hacker1);

let hacker2 = "Manfred"
console.log("The navigator's name is", hacker2);


// Iteration 2: Conditionals

let TobiasLength = hacker1.length
let ManfredLength = hacker2.length

if(TobiasLength > ManfredLength){
  console.log (`It seems that the driver has the longest name, it has ${TobiasLength} characters.`)
}
else if(TobiasLength < ManfredLength){
  console.log (`It seems that the navigator has the longest name, it has ${ManfredLength} characters.`)
}
else if(TobiasLength == ManfredLength){
  console.log(`Wow, you both have equally long names, ${TobiasLength} characters!`)
}


// Iteration 3: Loops

let space = ""
for(let i = 0; i <= UpperCaseTobias.length -1; i++) {
  if(UpperCaseTobias != UpperCaseTobias.slice(0,i+1)) {
    space += UpperCaseTobias[i] + " " 
}
  else {
    space += UpperCaseTobias[i]
  }
}
  console.log(space)

let lastIndex = hacker2.length -1;
let space2 = ""

for(let i = lastIndex; i >= 0; i--){
  const char = hacker2[i]
  space2 += hacker2[i] + ""
}
console.log(space2);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
}