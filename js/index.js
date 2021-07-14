// Iteração I `${}`

let hacker1 = 'John';
let hacker2 = 'Navigator';
console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteração II ===> if & else if

const hacker1len = hacker1.length;
const hacker2len = hacker2.length;

if (hacker1 > hacker2) {
    console.log(`The driver has the longest name, it has ${hacker1len} characters.`);
} else if (hacker1 < hacker2) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2len} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1len} characters!`);
};

// Iteração III ===> for

const espaço = " "; // variavel para adicionar
let resultado = "";

for (let contador = 0; contador < hacker1len; contador++) {
    resultado += hacker1[contador].toUpperCase() + espaço;

}
console.log(resultado)