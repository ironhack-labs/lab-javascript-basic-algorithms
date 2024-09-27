// Iteration 1: Names and Input

const hacker1= "Nombre";
console.log(`The driver's name is ${hacker1}`);
const hacker2="Chrome";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long name, ${hacker1.length} caracters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

// Iteration 3: 

let aux3a= ""
for (let i = 0; i < hacker1.length; i++) {
    aux3a +=`${hacker1[i]} `
}
console.log(aux3a);
let aux3b= ""
for (let i = hacker2.length - 1; i >= 0 ; i--) {
    aux3b +=`${hacker2[i]}`
}
console.log(aux3b);

/**  3.3 Order the strings depending on the lexicographic value
 * 
 * Para realizar este ejercicio hay multiples formas de realizarlo,
 * 1.- En javascript el '<' (menor que) y '>' (mayor que) automaticamente compara y ordena los strings
 *  por su valor lexicografico
 * 2.- Introduciendo los dos strings en un array y utilizando el metodo sort() ordena los strings lexicograficamente
 * 3.- Crear una const con todas las letras del abecedario.
 * 
 * Vamos a implementar la primera y la ultima solucion (case sensitive)
*/

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);

} else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first, definitely.`);

} else {
    console.log(`What?! You both have the same name?`);

}
// Comparando manualmente(case insensitive)

const abecedario= "abcdefghijklmnopqrs"

//Funcion que devuelve la palabara mas larga

function findLogestoword(word1 , word2){
    if (word1.length < word2.length) {
        return word2.length
    } else if (word2.length < word1.length) {
        return word1.length
    } else {
        return word1.length
    }
}

//Recorremos las palabras para compararlas

for (let i = 0; i < findLogestoword(hacker1, hacker2); i++) {
   
    if (abecedario.indexOf(hacker2[i]) === undefined || 
    abecedario.indexOf(hacker1[i].toLowerCase()) < abecedario.indexOf(hacker2[i].toLowerCase())) {
        console.log(`The driver's name goes first.`);
        break;
    } else if (abecedario.indexOf(hacker1[i]) === undefined || 
    abecedario.indexOf(hacker2[i].toLowerCase()) < abecedario.indexOf(hacker1[i].toLowerCase())) {
        console.log(`Yo, the navigator goes first, definitely.`);
        break;
    } else if (i === findLogestoword(hacker1, hacker2) -1) {
        console.log(`What?! You both have the same name?`);
        
    }
}

// Bonus Time!

// Bonus 1:

// Generate 3 paragraphs. Store the text in a new string variable named longText.

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pretium ex, at accumsan enim. Vestibulum sollicitudin ac lectus quis consequat. Praesent at arcu eget mi facilisis tincidunt non id massa. Duis pretium tincidunt varius. Sed consectetur erat metus, nec interdum sem pharetra a. Phasellus id viverra sem. Morbi malesuada nibh sem, et egestas odio congue sit amet. Nullam aliquam iaculis turpis, ac interdum ipsum hendrerit sed.

Maecenas a enim nec mauris faucibus fermentum. Aenean malesuada sagittis ex, a egestas tortor bibendum id. Sed sit amet nunc commodo, eleifend turpis eu, viverra ante. Vestibulum quis gravida velit, eu aliquam magna. Fusce non consectetur mauris. Praesent finibus velit elit, eu pulvinar tortor maximus vitae. Integer ullamcorper, risus non sagittis eleifend, arcu dui egestas odio, id suscipit metus odio vitae mauris. Vivamus euismod malesuada nisi quis tristique. Nunc quis augue in urna luctus mollis. Sed ut leo lacus. Fusce congue massa sit amet turpis accumsan, eu laoreet dui interdum. Nunc tincidunt augue at nisi egestas, at ullamcorper nunc molestie. Sed mi leo, cursus sit amet pharetra eu, efficitur non turpis. Morbi eget tincidunt quam. Donec in nisi in nisi commodo ornare a consectetur urna. Donec ultricies lacinia felis, pharetra placerat justo lacinia ut.

Morbi euismod felis id volutpat blandit. Nam non porta tellus. Aliquam rutrum elit a porttitor tincidunt. Aenean posuere gravida diam, porttitor consectetur ipsum malesuada non. Etiam dapibus malesuada ex, ac tempus ex dignissim quis. Nunc sit amet erat in nunc commodo tincidunt et nec est. Nullam sed metus risus. Aenean at lectus interdum, lobortis ante et, ultrices leo.

Nuevo perrox`
 console.log(longText);

//Make your program count the number of words in the string.

console.log(longText
     .replaceAll("\n\n", " ") // ---> Remplazamos los saltos de linea (que interferian en el split)
     .split(" ",longText.length) // --> Creamos un array en donde el delimitador de palabaras es el " "(espacio)
    .length); // --> Contamos las palabras que contiene el array

// Version sin metodos

let wordsCounter = 1 // --> Empezamos desde el 1 porque no cuenta la palabra final
for (let i = 0; i < longText.length; i++) {
//   console.log(longText[i]);
    if (longText[i]===" " || longText[i] + longText[i+1]==="\n\n") { // --> Remplazamos los dos saltos de linea por un espacio
    wordsCounter++
    // console.log("longText[i-1]",longText[i-1]);
    // console.log("wordsCounter", wordsCounter);
    // console.log("longText[i+1]",longText[i+1]);
  }
}
console.log("wordsCounter :", wordsCounter);

// Make your program count the number of times the Latin word et appears.

console.log(longText
    // Creamos un array en donde el delimitador de palabaras es "et" para encontrar todas las coincidencias
    .split("et", longText.length) 
    .length // --> Contamos las palabras que contiene el array
);

// Version sin metodos

let etCounter = 1 // --> Empezamos desde el 1 porque no cuenta la coincidencia final
for (let i = 0; i < longText.length; i++) {
//   console.log(longText[i]);
    if (longText[i] + longText[i+1]==="et") { // --> Remplazamos los dos saltos de linea por un espacio
    etCounter++
    // console.log("longText[i-1]",longText[i-1]);
    // console.log("wordsCounter", wordsCounter);
    // console.log("longText[i+1]",longText[i+1]);
  }
}
console.log("etCounter: ",etCounter);

// Bonus 2:

//Create a new variable, phraseToCheck, containing some string value. 
//Write a code to check if the value assigned to this variable is a Palindrome. 

const phraseToCheck=`Was it a car or a cat I saw?`
let auxPhraseReverse=""
let auxPhraseToCheck=""

// Damos la vuelta a frase y la asignamos a una variable
for (let i = phraseToCheck.length -1; i >= 0; i--) {
    if (abecedario.includes(phraseToCheck[i].toLowerCase())) {
        auxPhraseReverse += phraseToCheck[i].toLowerCase()
    }    
}
// console.log("auxPhraseReverse: ", auxPhraseReverse);

// Convertimos la frase en un string para luego compararlo
for (let i = 0; i < phraseToCheck.length; i++) {
    if (abecedario.includes(phraseToCheck[i].toLowerCase())) {
        auxPhraseToCheck += phraseToCheck[i].toLowerCase()
    }
}

// console.log("auxPhraseToCheck: ", auxPhraseToCheck);

if (auxPhraseReverse === auxPhraseToCheck) {
    console.log(`La frase: \n${phraseToCheck}\nEs Palindromo `);
    
} else {
    console.log(`La frase: \n${phraseToCheck}\nNo es Palindromo `);

}

//Solved lab