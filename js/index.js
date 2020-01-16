let hacker1 = "Alejandro"
console.log(`The driver's name is ${hacker1}
`)
let hacker2 = "Armando"
console.log(`The navigator's name is ${hacker2
}
`)

if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

let hacker1upperCase = hacker1.split("").join(' ').toUpperCase()
console.log(hacker1upperCase)

let hacker2reverse = hacker2.split("").reverse().join("")
console.log(hacker2reverse)

let names = [hacker1, hacker2]
if (hacker1 === hacker2){
  console.log(`What?! You both have the same name?`)
} else if (names.sort()[0] === hacker2) {
  console.log(`Yo, the navigator goes first definitely.`)
  } else {
   console.log(`The driver's name goes first.`) 
  }