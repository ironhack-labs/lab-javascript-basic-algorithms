// Iteration 1: Names and Input
let hacker1 = 'Luis'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Juanito'

console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`the driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(` Wow, you both have equally long names, ${hacker1.length} and ${hacker2.length} characters!`)

}


// Iteration 3: Loops

let second = ''

for (let i = 0; i < no.length; i++) {
    second += no[i].toUpperCase() + " "

}

console.log(second)


///


let tex = "";
for (let j = no.length - 1; j >= 0; j--) {
    tex += no[j]

}
console.log(tex)



///
// let n1 = "fran"
// let n2 = "lucia"




if (hacker1.charAt(0) > hacker2.charAt(0)) {
    console.log("The driver's name goes first.")
} else if (hacker1.charAt(0) < hacker2.charAt(0)) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log(" - What?! You both have the same name?")
}


//  The driver's name goes first.
//  - Yo, the navigator goes first definitely.
//  - What?! You both have the same name?


//bono1

let texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia sapiente architecto quisquam iusto velit nisi delectus ducimus. Voluptate nemo quos minima aut in earum debitis fugiat velit, adipisci natus. et"

console.log("caracteres "+ texto.length)

let contador=0;
let letra='et'
for (let i = 0; i < texto.length; i++) {
    if (texto[i]+texto[i+1]==letra) {
        contador++;
    }
    
}
console.log(contador)




