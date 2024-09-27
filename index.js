// Iteration 1: Names and Input
const hacker1 = "Antonio";
console.log (`The diver's name is ${hacker1}`);

const hacker2 = "Tito";
console.log (`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops

const arrayLetras1 = hacker1.toUpperCase().split('');
console.log (arrayLetras1);

const arrayLetras2 = hacker2.split('');
const countLetras2 = arrayLetras2.length - 1;
const arrayReves = [];

for (let i = countLetras2; i >= 0 ; i--) {
    arrayReves.push(arrayLetras2[i]); 
}

console.log(arrayReves.join(''));

/* voy por el punto 3.3  y he hecho push de todo */


const abece = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let indice1 = 0;
let indice2 = 0;
const letraH1 = hacker1.split('')[0];
const letraH2 = hacker2.split('')[0];

for (i = 0; i < abece.length; i++) {
    
    if (letraH1.toLowerCase() === abece[i]) {        
        indice1 = i;
    } else if (letraH2.toLowerCase() === abece[i]) {
        indice2 = i;
    }
}

if (indice1 > indice2) {
    console.log (`The driver's name goes first.`);
} else if (indice1 < indice2) {
    console.log (`Yo, the navigator goes first, definitely.`);
} else {
    console.log (`What?! You both have the same name?`);
}
