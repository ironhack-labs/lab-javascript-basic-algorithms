// Iteration 1: Names and Input

let hacker1 = "Marcelo"
console.log(`"The driver's name is ${hacker1}"`)

let hacker2 = "Bryan"
console.log(`"The navigator's name is ${hacker2}"`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  }
  else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops

let iteration1 = ""

for (i = 0; i < hacker1.length; i++){
    iteration1 += hacker1[i] + " "
}
console.log(iteration1.toUpperCase());

//

let reverse = ""

for(let i = hacker2.length -1; i >= 0; i--){
  reverse += hacker2[i]
}
console.log(reverse)

//

let getValue = hacker1.localeCompare(hacker2)

if(getValue === 1){
    console.log('Yo, the navigator goes first, definitely.')
}
else if(getValue === 0){
    console.log("What?! You both have the same name?")
}
else if(getValue === -1){
    console.log("The driver's name goes first.")
}

