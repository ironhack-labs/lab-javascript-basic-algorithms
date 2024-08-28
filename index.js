// Iteration 1: Names and Input
const hacker1 = "miguel"
console.log(`The driver's name is ${hacker1}`)


const hacker2 = "malu"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
tamañoHacker1 = hacker1.length
tamañoHacker2 = hacker2.length


if(tamañoHacker1 > tamañoHacker2){
    console.log(`The driver has the longest name, it has ${tamañoHacker1} characters.`)
}
else if(tamañoHacker2 > tamañoHacker1){
    console.log(`It seems that the navigator has the longest name, it has ${tamañoHacker2} characters.`)
}
else if(hacker1 === hacker2){
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
}


// Iteration 3: Loops

let hacker1Format = ""

for(let i = 0; i < hacker1.length; i++){
    hacker1Format += hacker1[i].toUpperCase()
}

const result = hacker1Format.split("").join(" ");
console.log(result)

/*
split(''): Divide la cadena "miguel" en un array de letras: ["m", "i", "g", "u", "e", "l"].
join(' '): Une los elementos del array en una sola cadena, colocando un espacio entre cada letra.
*/


//3.2 Imprimir todos los caracteres del nombre del navegador en orden inverso, es decir

let hacker2Reverse = ""

for(let i = hacker2.length -1; i >= 0; i--){
    hacker2Reverse += hacker2[i]
}
console.log(hacker2Reverse)



if (hacker1 > hacker2) {
    console.log(`The driver's ${hacker1} goes first.`);
} else if (hacker1 < hacker2) {
    console.log(`${hacker2}, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}


