// driver: Paulo
// print: Paulo
// navegador: Fabio
// print: Fabio
// nome igual: Wow, you both have equally long names, XX characters!
// nome 
// Print P A U L O
// print oibaF
// Lexo: Fabio, Paulo

//1: names and input
let hacker1 = `Fabio`;
console.log(`The driver´s name is ${hacker1}`);

let hacker2 = `Paulo`;
console.log(`The navigator´s name is ${hacker2}`);

// 2: conditionals
//console.log(hacker1.length);
//console.log(hacker2.length);

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} caracters`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else if (hacker1.length = hacker2.length)
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

    //3: loops
console.log (hacker2.toUpperCase())
let nomeC = ''
for (letra of hacker2.toUpperCase()) { 
     nomeC = (nomeC + letra + ' ')  
}
console.log(nomeC)

let nomeAlcont = ''
for (letra of hacker1) { 
     nomeAlcont = (letra + nomeAlcont)  
} 
console.log(nomeAlcont);


if (hacker1.length > hacker2.length){
    console.log(`The driver's name goes first.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`Yo, the navigator goes first definitely.`)
}
else if (hacker1.length = hacker2.length)
    console.log(`What?! You both have the same name?`)

    // Para a ordem alfabética precisamos criar uma alfabeto como variável?     