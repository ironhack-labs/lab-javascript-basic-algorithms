
// Iteration 1: Names and Input

const hacker1 = "Monica"
  
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Adriana'

console.log(`The navigator's name is ${hacker2}`)


/*__________________________________________________*/




// Iteration 2: Conditionals



if(hacker1.length > hacker2.length){

  
console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  
}

else if(hacker1.length < hacker2.length){

  console.log(`It seems that the navigator has the longest name, ${hacker2.length} characters`)
  
}

else {

  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

  
  /*__________________________________________________*/

  // Iteration 3: Loops

  
let word = ''
for(let i = 0; i < hacker1.length; i++){

  const character = hacker1[i]
  word = word + character.toUpperCase()
  if (i!== hacker1.length -1) {
    word += " "
  }
}

  console.log(word)

/*_______________________________________________________*/

let reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}

console.log(reversed);  

/*_______________________________________________________*/

const alpha = hacker1.localeCompare(hacker2)
  console.log(alpha)

if(alpha === -1){
console.log("The driver's name goes first.")
}

else if(alpha === 1){
console.log("Yo, the navigator goes first, definitely.")
}

else{console.log("What?! You both have the same name?")}
