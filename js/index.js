// Iteration 1: Names and Input
let hacker1 = "cristian";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "cristian";
console.log(`The navigator's name is ${hacker2}`)

//
// Iteration 2: Conditionals

let resp1 = `The driver has the longest name, it has ${hacker1.length} characters.`;
let resp2 = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
let resp3 = `Wow, you both have equally long names, ${hacker1.length} characters!`;

let resultado = (hacker1.length > hacker2.length )? resp1 : 
                (hacker2.length > hacker1.length)? resp2 : resp3 ;

console.log(resultado)

// Iteration 3: Loops
let word = "";
for (let iter of hacker1){
    word = word + " " + iter.toUpperCase();
}
console.log(word);

let palabra = "";
let str = hacker2.split("");
for(i = hacker2.length - 1; i >= 0; i--){
    palabra = palabra + str[i];
}
console.log(palabra);

function ordenadorLexicografico(word1, word2){
    let resulWord = ""
    if(word1 < word2){
        resulWord = word1;
    } else if(word2 < word1){
        resulWord = word2;
    } else if(word1 === word2) {
        resulWord = "Is equal"
    }
    return resulWord;
}

let valor = ordenadorLexicografico(hacker1, hacker2);

switch(valor){
    case hacker1:
        console.log("The driver's name goes first.")
        break
    case hacker2:
        console.log("Yo, the navigator goes first definitely.")
        break
    default:
        console.log("What?! You both have the same name?")
        break
}

//Bonus 1
//lorem ipsum generator

let dictionary = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "enim", "ad", "minim", "veniam", ",", "."];

function generadorLoremIpsum(numword){
    let loremWord = "";
    let texLorem = "";
    let texLoremAdd = "";
    for(let i = 1; i <= numword; i++){
        let numRandom = Math.floor(Math.random()*dictionary.length) // Se genera un numero aleatorio dentro del rango de indices en el arreglo del diccionario
        loremWord = dictionary[numRandom];
        if(texLorem.length == 1 && loremWord.length == 1 && loremWord === "."){
            texLorem = "";
        }else if(texLorem.length == 1 && loremWord.length == 1 && loremWord === ","){
            texLorem = "";
        }else if(texLorem.length > 1 && loremWord.length == 1 && loremWord === "."){
            texLorem = texLorem + loremWord; 
        }else if(texLorem.length > 1 && loremWord.length == 1 && loremWord === ","){
            texLorem = texLorem + loremWord
        }else if(loremWord.length > 1 && i == 1){
            texLorem = loremWord[0].toUpperCase() + loremWord.substring(1);
        }else {
            texLorem = texLorem + " " + loremWord;
        }
    }
    return texLorem;
}

let texLoremIpsum = generadorLoremIpsum(90);
console.log(texLoremIpsum)

let textoStr = texLoremIpsum.split(" ");
console.log(`Number of words in strig is: ${textoStr.length}`)

function numeroDePalabra(wordSerch){
    let contador = 0;
    for(let x = 0; x <= textoStr.length; x++){
        if(textoStr[x] === wordSerch){
            contador = contador + 1;
        }
    }
    return contador;
}

let numWordSearch = numeroDePalabra('et');
console.log("En numero de veces que se repite 'et' en el string es:", numWordSearch);
