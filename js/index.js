// Iteration 1: Names and Input
const hacker1 = 'Juanjo'
console.log("The driver's name is", hacker1)
const hacker2 = 'Yerai'
console.log("The navigator's name is", hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else{
    if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
  }

// Iteration 3: Loops

//Iteration 3.1
console.log(hacker1.split('').join(' ').toUpperCase())

       
//Iteracion 3.2

        for (let i = hacker2.length - 1; i >= 0; i--) {
            console.log(hacker2.charAt(i))
        }



// Iteration 3.3

const lexicalOrder = hacker1.localeCompare(hacker2)


if (lexicalOrder < 0) {
console.log(`The driver's name goes first.`)
} else{
    if(lexicalOrder > 0){
    console.log(`Yo, the navigator goes first definitely.`)
  }
  else {
      console.log(`What?! You both have the same name?`)
    }
  }
