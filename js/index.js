// Iteration 1: Names and Input
let hacker1 = prompt("What is your name")
    console.log("the driver is name " + hacker1)

let hacker2 = prompt("What is your name navigator")
    console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else if (hacker2.length = hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
    

// Iteration 3: Loops
let retorno = ""
for (let i = 0; i < hacker1.length; i++){
    retorno += hacker1[i].toUpperCase() + " "
}
console.log(retorno)

let nombre = ""
for (let i = hacker1.length -1; i >= 0; i--){
    nombre += hacker1[i].toLowerCase();
}

console.log(nombre)


let lexic1 = false
let lexic2 = false

for (let i = 0; i < hacker1.length; i++){
    if (hacker1[i].match(/[A-Z]/g)){
        lexic1 = true
    }
}

for (let i = 0; i < hacker2.length; i++){
    if (hacker2[i].match(/[A-Z]/g)){
        lexic2 = true
    }
}

if (lexic1 == true && lexic2 == false){
    console.log ("The driver's name goes first.")

}else if (lexic2 == true && lexic1 == false){
    console.log ("Yo, the navigator goes first definitely")

}else if (lexic1 == true && lexic2 == true){
    console.log ("What?! You both have the same name?")
}