
// Iteration 1: Names and Input


// let hacker1 = "Pauli"
let hacker1 = "Pauli"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Paul"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.lenght} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops

//1.//

hacker1Space = ""; 

for (i = 0; i < hacker1.length; i++) {
  hacker1Space += hacker1[i] + " "
}

console.log(hacker1Space.toUpperCase()) 



let hacker1Reverse = ""

for (i = hacker1.length - 1; i >= 0; i--) {
  hacker1Reverse += hacker1[i] 
}

console.log(hacker1Reverse)

// .............................

let shortestName 

if (hacker1.length > hacker2.length) {
  shortestName = hacker2
} else {
  shortestName = hacker1
}
  console.log(shortestName)


for (i = 0; i < shortestName.length -1; i++ ) {
  if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`)
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log(`Yo, the navigator goes first definitely.`)
    break;
  }
  if (shortestName.length-1 === i) {
    if (hacker1.length === hacker2.length) {
    console.log(`What?! You both have the same name?`)  
    } else {
      if (hacker1.length < hacker2.length) {
            console.log(`The driver's name goes first.`)
      } else {
            console.log(`Yo, the navigator goes first definitely.`)
      }
    } 
  }
}



// Bonus


let data = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

let countWords = data.split(" ")
console.log(countWords.length)




