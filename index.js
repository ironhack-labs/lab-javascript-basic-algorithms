// Iteration 1: Names and Input

const hacker1 ="Catalina"
const hacker2 = "Henry"

console.log(`the driver name is`,hacker1)
console.log(`the navigator name is`, hacker2)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log(`the driver has the longest name, it has ${hacker1.length} character`)
  }
  else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else if  (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let finalName="" 

for (let i=0; i<hacker1.length ; i++) { 
  finalName += hacker1[i].toUpperCase()
  finalName += " "
}
console.log(finalName)


//Ejercico2

let nameReverse = ""
for (let i=hacker1.length -1; i>=0 ; i--) { 
    nameReverse += hacker1[i].toUpperCase()
}
console.log(nameReverse)