// Iteration 1: Names and Input
const hacker1="Magda"
console.log(`The Driver´s name is ${hacker1}`)

const hacker2="Maddy"
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The dirver has the longest name, it has ${hacker1.length}characters`)
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.lenght}characters.`)
  }else{
    console.log(`Now, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
let driverUpperCase = hacker1.toUpperCase()
let separatedBySpace= " "
for(let i=0; i<driverUpperCase.length ;i++){
  separatedBySpace += driverUpperCase[i]+ " "
}
console.log(separatedBySpace)