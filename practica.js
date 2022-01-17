// Iteration 1: Names and Input

let hacker1 = "Emanuel"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Roman"
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals

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

for(let i = 0; i <= driver; i++){
  let array = " "
  let word = hacker1[i].toUpperCase(); 
  array = word + array
  console.log(array)
}

//let upperName = 


