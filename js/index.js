// Iteration 1: Names and Input
//
let hacker1= prompt("what is your name")
console.log("the drivers name is " + hacker1)
let hacker2 = prompt("what is your name navigator")
console.log("The navigator name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if(hacker2.length = hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let retorno= ""
for(let i = 0; i<hacker1.length; i++){
    retorno += hacker1[i].toUpperCase()
    retorno = retorno + " "

}
console.log(retorno)

let minuscula = ""
for(let i = hacker1.length - 1; i >= 0; i--){
    minuscula += hacker1[i].toLowerCase();
}
console.log(minuscula)

let lexico = false
let lexico1 = false

for(let i = 0; i<hacker1.length; i++){
    if(hacker1[i].match(/[A-Z]/g)){
        lexico = true
    }

}

for(let i = 0; i<hacker2.length; i++){
    if(hacker2[i].match(/[A-Z]/g)){
        lexico1 = true
    }

}

if(lexico == true && lexico1 == false){
    console.log("The driver name goes first")
}else if(lexico1 == true && lexico == false){
    console.log("Yo, the navigator goes first definitely")
}else if(lexico1 == true && lexico == true){
    console.log("What?! You both have the same name?")
}



console.log("I'm ready!")