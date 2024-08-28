// Iteration 1: Names and Input
let hacker1 = "Emma"
let hacker2 = "Enrique"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let cantidad1 = hacker1.length
let cantidad2 = hacker2.length

if (cantidad1>cantidad2) {
    console.log(`The driver has the longest name, it has ${cantidad1} characters`)
}
else if (cantidad2>cantidad1) {
    console.log(`It seems that the navigator has the longest name, it has ${cantidad2} characters`)
}
else if (cantidad1===cantidad2) {
    console.log(`Wow, you both have equally long names, ${cantidad2} characters`)
}
// Iteration 3: Loops
let char= ""
for (let i=0; i<cantidad1; i++) {
    
    char+=hacker1[i]+" "
}
console.log(char.toUpperCase())

let char2= ""
for (let i=cantidad2 -1; i>=0; i--) {
    
    char2+=hacker2[i]
}
console.log(char2)


let nombre1May = hacker1.toUpperCase()
let nombre2May = hacker2.toUpperCase()

if (nombre1May < nombre2May) {
    console.log("The driver's name goes first")
}
else if (nombre2May < nombre1May) {
    console.log("Yo, the navigator goes first, definitely")
}
else if (nombre1May === nombre2May) {
    console.log("What?! You both have the same name?")
}


//BONUS 1
let longText = "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus eros auctor mollis nullam sociosqu facilisis class montes. Netus velit inceptos convallis conubia dapibus. Sed ex risus et ridiculus scelerisque dignissim mattis. Egestas nisi aliquam tortor enim rhoncus bibendum convallis euismod. Sagittis laoreet fringilla semper duis auctor ultricies aenean aliquam. Dolor tempor massa eleifend sem proin dictum ultrices. Volutpat vulputate enim odio turpis parturient sed pharetra. Eleifend magnis sollicitudin; quis pellentesque urna dignissim turpis nisl consequat. Varius vel aenean euismod himenaeos parturient diam. Orci massa habitasse parturient per ipsum torquent vulputate. Vel fermentum habitant vivamus, porta hendrerit vel diam. Magna ex taciti, vulputate lectus ultrices et. At nostra convallis elementum venenatis urna inceptos felis. Consequat massa suscipit suspendisse lobortis adipiscing in cubilia fusce facilisis. Habitant pulvinar lacinia pharetra hendrerit primis vivamus. Ligula nisl quis nisl rhoncus nullam. Ultricies nam venenatis at sapien pharetra integer. Massa vestibulum odio ex tempus, orci aenean nisi. Tortor condimentum sagittis id arcu ornare. Magnis lectus posuere sem luctus, porttitor mattis commodo."

let cuenta = 1


for (let i=0; i<longText.length; i++) {
    if (longText[i]===" ") {
        cuenta++
    }
}

console.log(cuenta)

let palabraEt = 0

for (let i=0; i<longText.length; i++) {
    if (longText[i] + longText[i + 1]==="et") {
        palabraEt++
    }
}
console.log(palabraEt)



//BONUS 2
//INTENT0 1----------
// let phraseToCheck = "Amor, Roma"

// let phraseMin = phraseToCheck.toLowerCase()
// let palabra1 = phraseMin.slice(0,4)
// let palabra2 = phraseMin.slice(-4)


// let palabra2Reversed = ""

// for (let i=palabra2.length-1; i>=0; i--) {
    
//     palabra2Reversed+=palabra2[i]
// }


// if (palabra1===palabra2Reversed) {
//     console.log("It's a palindrome!")
// }


//INTENTO 2------
let phraseToCheck = "taco cat"

let phraseMin = phraseToCheck.toLowerCase()

let fraseFormateada = ""

for (let i=0; i<phraseToCheck.length; i++) {
    if (phraseToCheck[i]===" "||phraseToCheck[i]===","||phraseToCheck[i]==="?"||phraseToCheck[i]==="'") {
        continue
    }
    else {
        fraseFormateada+=phraseToCheck[i].toLowerCase()
    }
}


let mitad = fraseFormateada.length/2

let palabra1 = fraseFormateada.slice(0, mitad)
let palabra2 = fraseFormateada.slice(mitad)

let palabra2Reversed = ""

for (let i=palabra2.length-1; i>=0; i--) {
    
    palabra2Reversed+=palabra2[i]
}

if (palabra1===palabra2Reversed) {
    console.log("It's a palindrome!")
}

console.log(palabra1)
console.log(palabra2)