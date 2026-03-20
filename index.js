// Iteration 1: Names and Input
let conductor = "Elias"
console.log("El nombre del conductor es " + conductor)
let copiloto = "Anamari"
console.log("El nombre del copiloto es " + copiloto)

// Iteration 2: Conditionals
let nombreMasCorto=conductor
if (conductor.length > copiloto.length){
    console.log ("El conductor, " + conductor + ", tiene el nombre más largo con " + conductor.length + " caracteres.")
    nombreMasCorto=copiloto
} else if (copiloto.length > conductor.length){
    console.log ("El copiloto, " + copiloto + ", tiene el nombre más largo con " + copiloto.length + " caracteres.")
} else{
    console.log ("Ambos tienen el nombre igual de largo, con " + conductor.length + " caracteres.")
}

// Iteration 3: Loops
let conductorMayusculas = ""
for(let i=0;i<conductor.length; i++){
    conductorMayusculas = conductorMayusculas + " " + conductor.charAt(i).toUpperCase()
}
console.log(conductorMayusculas)


//

let copilotoInvertido = ""
for(let i=copiloto.length;i>=0; i--){
    copilotoInvertido = copilotoInvertido + copiloto.charAt(i)
}
console.log(copilotoInvertido)


//

let i=0
while (i<nombreMasCorto.length){
if(conductor===copiloto){
    "Ambos tienen el mismo nombre"
    i=nombreMasCorto.length
} else if (conductor.charCodeAt(i)<copiloto.charCodeAt(i)){
    console.log("Conductor va antes")
    i=nombreMasCorto.length
} else if (conductor.charCodeAt(i)>copiloto.charCodeAt(i)){
    console.log("Copiloto va antes")
    i=nombreMasCorto.length
} else i++
}
