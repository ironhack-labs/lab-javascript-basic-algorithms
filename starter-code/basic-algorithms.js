// Names and Input


//Conditionals


// Lorem ipsum generator



// JS BASIC ALGORITHMS. WEEK 1


console.log(" ");
console.log("********************************")
console.log("NAMES, INPUTS AND CONDITIONALS");
console.log("********************************")


let hacker1 = "Mike Nieva";
console.log("The drive name is " + hacker1);

result = window.prompt("What is your name?");
let hacker2 = result;

console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has " + hacker1.length  + " characters");
  } else if (hacker1.length < hacker2.length){
      console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  } else {
      console.log("Wow, you both got equally long names, " +  hacker1.length + " characters");
  }
  


console.log(" ");
console.log("********************************");
console.log("LOOPS");
console.log("********************************");

// Creo una variable inicio y un array vacío donde colocaré cada letra
let x = 0;
let array = [];

// Hago un loop" y obtengo cada letra para guardarla en el array
for (var i = 0; i < result.length; i++) {
    x++;
    array.push(result.slice(i,x));
}

// Palabra unida y en mayúsculas

let word = array.join(' ');
console.log(word.toUpperCase());

// Palabra invertida

wordInverted = array.reverse().join('');
console.log(wordInverted);



// LOCALECOMPARE() - LEXICOGRAPHICAL ORDER

let comparison = hacker1.localeCompare(hacker2);

if (comparison === 0){
    console.log("What?! You both got the same name?");
} else if (comparison > 0){
    console.log("Yo, the navigator goes first definitely");
} else{
    console.log("The driver's name goes first");
}



console.log(" ");
console.log("********************************");
console.log("BONUS TIME - PALINDROME");
console.log("********************************");


// 1. Creamos la variable y la llamada de la ventana en el navegador
let palindrome = window.prompt("Write a word and we will let you know if it is a Palindrome");

// 2. Utilizaremos una función para insertar la palabra y revisarla
function palindromeCheck(palabra) {
  
  // Como se puede poner cualquier palabra con el formato que sea, es importante pulirla para que no tenga errores. Por ello, la convertiremos en minúsculas y utilizaremos una expresión regular para quitar caracteres que no sean del alfabeto o números.
  // Primero, creamos una variable con una instrucción Regex.
  let regex = /[^A-Za-z0-9]/g;
  // Y pulimos nuestra palabra a través de los métodos de minúsculas y el de reemplazo con nuestra instrucción Regex.
  let palabraPulida = palabra.toLowerCase().replace(regex, '');
  // Ya tenemos la palabra pulida, ahora hay que compararla con sus caracteres a la inversa.
  let palabraReversa = palabraPulida.split('').reverse().join(''); 
   
  // Finalmente, las comparamos y si es verdadero, es palíndromo, si no, resulta falso y nos lo indica. Usamos return para expresar el valor final fuera de la función.
  return palabraReversa === palabraPulida;
}
 
  // Guardamos el resultado final
let palindromeFinalResult = palindromeCheck(palindrome);

  // Avisamos del resultado

if (palindromeFinalResult) {
  console.log(palindrome);
  console.log("Es un palíndromo.");
} else {
  console.log(palindrome);
  console.log("No es un palíndromo");
}