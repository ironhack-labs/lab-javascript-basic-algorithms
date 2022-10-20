// Iteration 1: Names and Input
let hacker1 = window.prompt("insert driver name")
//console.log("the driver's name is " + hacker1)

let hacker2 = window.prompt("insert navigators name")
//console.log("the driver's name is " + hacker2)

//
// Iteration 2: Conditionals
function longestName(hacker1, hacker2){
 if(hacker1.length > hacker2.length){
   console.log(`the driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
 } else if(hacker1.length < hacker2.length){
   console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`)
 }else{
   console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
}
longestName(hacker1, hacker2)

// Iteration 3: Loops

const nameSpace = hacker1.split('').join(' ').toUpperCase()

console.log(nameSpace)

const nsReverse = nameSpace.split('').reverse().join('')
console.log(nsReverse)

//console.log(hacker1.charAt())
let hackers = [hacker1, hacker2]

hackers.sort(function(a,b){

  if(a , b) {return -1}
  if(a , b) {return 1}
  
})


