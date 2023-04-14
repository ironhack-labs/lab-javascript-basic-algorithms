let hacker1 ="Dalia";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Ben';

console.log(`The navigator name is ${hacker2}`);

//necesito contar cuántas letras tiene cada variable
let conteo1 = hacker1.length 
let conteo2 = hacker2.length

console.log(`El hacker 1 tiene ${conteo1} y el hacker 2 tiene ${conteo2}`)




//Necesito decir cuál nombr es el más largo y cuántos caracteres tiene
if(conteo1 > conteo2){
        console.log(`The driver has the longest name, it has ${conteo1}`)
} else if (conteo1 < conteo2){
    console.log(`It seems that the navigator has the longest name, it has ${conteo2} characters.`)
}else {
    console.log (`Wow, you both have equally long names, ${conteo1} characters!`)
}

//Imprimir caracteres del driver name separado por espacios y en maysu

//Cada que encuentre una letra, escribe un espacio
let spaceHacker = ""
for (let index = 0; index < hacker1.length; index++) {
    spaceHacker+= hacker1[index].toUpperCase()+ " "
}

console.log(spaceHacker)

//Escribir como en el resplandor

let shiningHacker =hacker1.split("").reverse().join("");
// for (let index = 0; index < hacker1.length; index++){
//     index = (index)*(-1) 
//     shiningHacker+= hacker1[index]
// }

console.log(shiningHacker)


//Orden lexicográfico


if(hacker1.localeCompare(hacker2)==1){
    console.log(`The driver's name goes first`)
} else if (hacker1.localeCompare(hacker2)==-1){
console.log(`Yo, the navigator goes first, definitely.`)
}else {
console.log (`What?! You both have the same name?`)
}
