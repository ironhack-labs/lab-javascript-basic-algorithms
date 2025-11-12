// Iteration 1: Names and Input
const hacker1 = "Valentina"
console.log("The driver's name is " + hacker1)

const hacker2 = "Alguer"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
const hacker1Length = hacker1.length
const hacker2Length = hacker2.length
if (hacker1Length > hacker2Length) {
    console.log("The driver has the longest name, it has " + hacker1Length + " characters")
}
else if (hacker1Length < hacker2Length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2Length + " characters")
}

else if (hacker1Length === hacker2Length) {
    console.log("Wow, you both have equally long names, " + hacker1Length + " characters!")
}


// Iteration 3: Loops
let letras = " "
for (let i = 0; i < hacker1.length; i++) {
    letras += hacker1[i] + " ";

}
console.log(letras.toUpperCase())

let letras2 = ""
for (let i = hacker2.length-1; i>=0; i--){
    letras2 += hacker2[i];
}
console.log (letras2)

if (hacker1<hacker2){
    console.log ("The driver's name goes first")
}
else if (hacker1>hacker2){
    console.log ("Yo, the navigator goes first, definitely")
}
else if (hacker1 === hacker2){
    console.log ("What?! You both have the same name?")
}