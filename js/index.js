// Iteration 1: Names and Input
//1.1
let hacker1 = "Emanuel"
//1.2
console.log(`The driver's name is ${hacker1}`)
//1.3
let hacker2 = "Roman"
//1.4
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals
//2.1
let driver = hacker1.length
let navigator = hacker2.length

if(driver>navigator){
    console.log(`The driver has the longest name, it has ${driver} characters.`)

}else if(navigator>driver){
    console.log(`The navigator has the longest name, it has ${navigator} characters.`)
}else if (navigator===driver) {
    console.log(`Wow, you both have equally long names, ${navigator} characters!`)
}
//Iteration 3: Loops
//3.1
let prueba = String()
for(let i = 0; i < driver; i++){
  let array = " "
  let word = hacker1[i].toUpperCase() + array
  prueba = prueba + word

}
console.log(prueba)
//3.2
let pruebaDos = String()
for(let i = 0; i < navigator; i++){
  let arrayDos = " "
  let wordDos = hacker2[i].toLowerCase() + arrayDos
  pruebaDos = wordDos + pruebaDos

}
console.log(pruebaDos)

//3.3

let comparenames = hacker1.localeCompare(hacker2)

if( comparenames === 1 ){
  console.log("Yo, the navigator goes first definitely.")
}else if (comparenames === -1){
  console.log("The driver's name goes first.")
}else if (comparenames === 0){
  console.log("What?! You both have the same name?")

}

//Bonus 1:

const paragraph = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
//remove spaces between words
const withoutparagraph = paragraph.replace(/\s+/g, '')
let countwords = withoutparagraph.length
console.log(countwords)

let count = 0
for (let j=0; j< paragraph.length; j++){
    if ( paragraph[j] === "e" && paragraph[j+1] === "t"){
      count++
    }
}
console.log(count)

//Bonus 2:

let phraseToCheck = ['Amor', 'Roma']
let withoutCharacter = phraseToCheck.join('')
let countLength = withoutCharacter.length / 2

console.log(countLength)

for (let x= 0; x< withoutCharacter.length; x++){
  if (countLength % 2 === 0){
    if(withoutCharacter[x]===withoutCharacter[withoutCharacter.length-x]){
      console.log("It is a palindrome")
    }

  }else{
    console.log("It is not a palindrome")
  }



}
