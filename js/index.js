// Iteration 1: Names and Input
let hacker1 = "kay"
// driver
console.log("The driver's name is " + hacker1)

let hacker2 = 'doja' 
// navigator

console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

let bothhack = hacker1.length + hacker2.length

if(hacker1.length > hacker2.length){
    console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.')
}else if(hacker2.length > hacker1.length){
    console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.')
}else{console.log('Wow, you both have equally long names,'+ bothhack + ' characters!')}

// Iteration 3: Loops