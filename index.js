// Iteration 1: Names and Input

let hacker1 = 'Ronaldinho'; // driver
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = 'Zlatan'; // navigator
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length ){
    `The driver has the longest name, it has ${hacker1.length} characters.`
}
else if (hacker1.length < hacker2.length ){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length = hacker2.length ){
    `Wow, you both have equally long names, ${hacker2.length} characters.`
}

// ternary operator version if needed
hacker1.length > hacker2.length ? console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) :
hacker1.length < hacker2.length ? console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) :
console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)


//Iteration 3: Loops

// 3.1
let SpacedDriverName = "" 
for(let i =0; i< hacker1.length; i++){
    SpacedDriverName += (`${hacker1[i].toUpperCase()} `)
}
 console.log(SpacedDriverName)

 // 3.2 
 let reversedDriverName = ""
 for(let i = hacker1.length; i >= 0 ; i--){
    // This condition was adedd to avoid having 'undefined' with the reversed driver name
    if(i!=hacker1.length){
        reversedDriverName += (hacker1[i])
    }
 }
 console.log(reversedDriverName)

 //3.2

 if(hacker1.localeCompare(hacker2) == -1){
    console.log('The driver\'s name goes first.')
 }
 else if(hacker1.localeCompare(hacker2) == 1){
    console.log(' Yo, the navigator goes first definitely.')
 }
 else{
    console.log(' What?! You both have the same name?')
 }



