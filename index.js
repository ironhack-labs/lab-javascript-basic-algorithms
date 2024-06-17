// Iteration 1: Names and Input

let hacker1 = "hacker";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "hackerino";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

console.log(`Ejercicio2`)
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

let hacker1Upp = hacker1.toUpperCase();
let cadena = "";

for (let i = 0; i < hacker1Upp.length; i++){
    console.log(`${hacker1Upp[i]} `)
    //si los quiero en la misma linea
    // preguntar porque asi cadena += `${hacker1Upp[i]} `; no funciona
    cadena = cadena +`${hacker1Upp[i]} `;
}
console.log(cadena);

let cadena2 = "";
for (let i=hacker2.length-1; i>=0; i--){
    console.log(`${hacker2[i]} `)
    //si los quiero en la misma linea
    // preguntar porque asi cadena += `${hacker1Upp[i]} `; no funciona
    cadena2 = cadena2 +`${hacker2[i]} `;
}
console.log(cadena2);

if (hacker1[0] === hacker2[0]){
    console.log(`What?! You both have the same first name?`)
}

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula augue, facilisis quis placerat ut, vulputate vel justo. Nullam at nulla hendrerit, mattis felis at, dignissim massa. Proin vel tortor ipsum. Sed in aliquam est. Fusce nisi dolor, egestas eget augue at, convallis maximus justo. Vivamus placerat, enim et bibendum mattis, metus augue ullamcorper diam, eu cursus libero nibh at sem. Praesent eget nunc in eros dictum varius. Mauris aliquet vitae nisl interdum varius. Quisque scelerisque commodo mi at dapibus. Etiam sagittis pharetra lobortis. Fusce laoreet neque quis faucibus interdum. Sed ut odio ac odio dignissim varius. Aliquam blandit mi a diam elementum, sit amet porttitor orci ultricies.

Morbi aliquam libero sed tellus tincidunt, a suscipit risus commodo. Integer molestie varius arcu, mattis hendrerit lectus feugiat vel. Integer sollicitudin, quam a condimentum ornare, elit metus lobortis odio, sed consequat ex augue semper libero. Donec feugiat turpis tellus, elementum pulvinar ante pellentesque at. Donec lobortis nisi nisi, lacinia consequat velit placerat id. Pellentesque lorem diam, posuere non neque eu, tempor placerat metus. Vestibulum in metus justo. Vivamus venenatis velit odio, eu pellentesque nisl tempor quis. Ut eget enim posuere, sodales tellus eu, maximus risus. Morbi ac magna ut justo venenatis pellentesque. Integer aliquet urna tristique metus malesuada maximus. Ut pellentesque eget orci in fermentum. Etiam ullamcorper finibus nulla id vestibulum. Maecenas lacinia magna eros, id tempus est gravida ut. Sed dictum egestas metus, sed bibendum velit hendrerit non. Pellentesque eu ipsum dolor.

Ut efficitur quam eu posuere varius. Donec imperdiet erat ac neque finibus, non vehicula justo facilisis. Nunc faucibus nunc a metus tempor, et vehicula nulla viverra. Cras semper enim vitae euismod bibendum. Duis vehicula risus sed vulputate porttitor. Nullam tincidunt mollis pretium. Curabitur quis leo turpis. Mauris vulputate purus odio, quis tempus nulla porta ac`;

console.log(`Contador de letras`);

let contador = 0;

for (let i = 0; i < longText.length; i++){
    contador++;
}
console.log(`el numero de letras de este párrafo es ${contador}`);

console.log(`Contador de palabras`);
let contador2 = 0;
for (let i = 0; i < longText.length; i++){
    if (longText[i] === " "){
        contador2++;
    }
}
console.log(`el numero de palabras de este párrafo es ${contador2}`);

console.log(`Contador de repeticiones palabra "et"`);
let contador3 = 0;

for (let i = 0; i < longText.length; i++){
    if(longText[i] === "e" && longText[i+1] === "t"){
        contador3++;
    }
}

console.log(`el numero de repeticiones de la palabra "et" es ${contador3}`);

console.log(`Detector de palindromos`);
let palindromo = "Anita lava la tina";
let noPalindromo = "No es un palindromo";
let numLetras = palindromo.length;
let esPalindromo = false;
for (let i = 0; i < numLetras; i++){
    if(palindromo[i] === palindromo[numLetras-1]){
        esPalindromo = true;
    }
}
if (palindromo === true) {
    console.log(`La palabra ${palindromo} es un palindromo`);
}
else{
    console.log(`La palabra ${palindromo} no es un palindromo`);
}