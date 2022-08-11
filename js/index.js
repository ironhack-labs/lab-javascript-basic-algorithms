// Iteration 1: Names and Input

let hacker1 = prompt( 'What is your name?')
hacker1 = hacker1.toUpperCase()
console.log(`The driver´s name is ${hacker1}`)

let hacker2 = prompt( 'What is your name?')
hacker2 = hacker2.toUpperCase()
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)   
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length}`)
}

// Iteration 3: Loops

let result = ""
for(let i = 0; i < hacker1.length; i++){
    
    result += hacker1[i] + ' ' 
}
console.log(result)


let revers = ""
for(let i = hacker1.length -1 ; i >= 0; i--){
    
    revers += hacker1[i ]
}
console.log(revers)

if( hacker1 > hacker2) {
    console.log(hacker1) 
} else {
    console.log(hacker2)
}

