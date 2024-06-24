// Iteration 1: Names and Input

// 1.1 Crear una variable hacker1
let hacker1 = 'zerone';

// 1.2 Impresión "The driver's name is XXXX". 

console.log("The driver's name is " + hacker1);

// 1.3 Create a variable hacker2 with the navigator's name.

let hacker2 = "ciber";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// 2.1 Depending on which name is longer, print the appropriate message.

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1 Imprimir los caracteres del nombre del conductor, separados por el espacio, y en mayúsculas, es decir, "J O H N".
let driverNombreEnMayusculas = "";
for (let i = 0; i < hacker1.length; i++) {
    driverNombreEnMayusculas += hacker1[i].toUpperCase() + " ";
}
console.log(driverNombreEnMayusculas.trim());

// 3.2 Imprimir todos los caracteres del nombre del navegante en orden inverso, es decir, "nhoJ".
let driverNombreInverso="";
for (let i = hacker2.length -1; i >=0; i--) {
    driverNombreInverso += hacker2[i];
}
console.log(driverNombreInverso.trim());

// 3.3  Dependiendo del orden lexicgráfico de las cadenas, imprime: 

// 3.1 The driver's name goes first.
// 3.2 Yo, the navigator goes first, definitely.
// 3.3 What?! You both have the same name?

if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker1 < hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}
    

// Bonus 1


// bonus 1.1 Genera 3 párrafos. Almacene el texto en una nueva variable de cadena con nombre longText.

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.";


// bonus 1.2  Haz que tu programa cuente el número de palabras en la cadena.

let contadorPalabras = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " " || longText[i] === "\n") {
        contadorPalabras++;
    }
}
contadorPalabras++; // 
console.log(`La variable longText tiene ${contadorPalabras} palabras.`);

// bonus 1.3  Haz que tu programa cuente el número de veces que la palabra latina etAparece.
let etContador = 0;
for (let i = 0; i < longText.length; i++){
    if (longText[i] === "e" && longText[i+1] === "t") {
        etContador++;
    }
}   
console.log(`la palabra et longText aparece ${etContador} veces en el texto.`);


