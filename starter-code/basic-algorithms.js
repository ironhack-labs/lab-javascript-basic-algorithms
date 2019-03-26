// Names and Input

let hacker1 = "Allan"
let hacker2 = prompt()

console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)

//Conditionals

if(hacker1.length > hacker2.length) {  
  console.log (`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log (`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
  console.log (`wow, you both got equally long names, ${hacker1.length} characters!!`)
}

// Loops

let hacker1Capitals = "" 
for (i = 0; i < hacker1.length; i++) {
  hacker1Capitals += hacker1.charAt(i).toUpperCase() + " "
}
console.log(hacker1Capitals)

let hacker2Reverse = ""
for (i = hacker2.length; i >= 0; i--) {
  hacker2Reverse += hacker2.charAt(i)
}
console.log(hacker2Reverse)


let maxLength = hacker1.length >= hacker2.length ? hacker1.length : hacker2.length
let n = 0
let hacker1Count = ''
let hacker2Count = ''
while (n < maxLength) {
 let h1char = hacker1.charAt(n)
 let h2char = hacker2.charAt(n)

 hacker1Count += h1char < h2char ? '2' : '1'
 hacker2Count += h2char < h1char ? '2' : '1'
 n++
}

if(hacker1Count > hacker2Count) { 
  console.log (`The driver's name goes first`)
} else if (hacker2Count > hacker1Count) {
  console.log (`Yo, the navigator goes first definitely`)
} else {
  console.log (`What?! You both got the same name?`)
}