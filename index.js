// Iteration 1: Names and Input
var hacker1 = "Andreu Soriano"
console.log ("El nombre del conductor es " + hacker1)

var hacker2 = "Chrome"
console.log ("EL nombre del navegador es " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log ("El conductor tiene el nombre más largo, tiene " + hacker1.length + " caracteres.")
}
    else if (hacker1.length < hacker2.length) {
        console.log ("Parece que el navegador tiene el nombre más largo, tiene " + hacker2.length + " caracteres.")
    }
        else {
            console.log("Parece que el navegador tiene la misma longitud del nombre que el conductor, tiene " + hacker1.length + " caracteres.")
        }

// Iteration 3: Loops
nombreSeparado =""

for (let i=0; i<hacker1.length; i++){
    nombreSeparado += hacker1.charAt(i)+" "
}
console.log ("El nombre del conductor separado es "+ nombreSeparado)

nombreInverso =""

for (let i=0; i<hacker2.length; i++){
    nombreInverso = hacker2.charAt(i) + nombreInverso
}
console.log ("El nombre del navegador inverso es "+ nombreInverso)

