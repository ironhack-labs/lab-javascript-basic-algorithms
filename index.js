// Iteration 1: Names and Input
// Declare 2 variables y las imprimi por consola.

let hackerOne = "Karen";
console.log(`the driver's name is ${hackerOne}`)

let hackerTwo = "Lucas";
console.log(`the navigator's name is ${hackerTwo}`)


// Iteration 2: Conditionals
// Utilizo la propiedad "lenght" para  saber cuantos caracteres tiene cada nombre y hacer compracion entre ellos.

if (hackerOne.length > hackerTwo.length) {
    console.log('The driver has the longest name, it has', `${hackerOne.length}`);
  } else if (hackerOne.length < hackerTwo.length) {
    console.log(
      'It seems that the navigator has the longest name, it has',
      `${hackerTwo.length}`
    );
  } else {
    console.log('Wow, you both have equally long names', `${hackerOne.length}`);
  }


// Iteration 3: Loops
//3.1 -----------------------------------------
//Inicializamos una variable vacia, para guardar el string escrito todo en mayusculas con la propiedad "toUpperCase" y lo imprimimos en consola.

let capLetter = '';
for (let char of hackerOne) {
    capLetter = capLetter + char + ' ';
}
console.log(capLetter.toUpperCase());

//3.2 -----------------------------------------
// con la propiedad reverse, imprimimos el string al reves.

let reversed = '';
for (let i = hackerTwo.length - 1; i >= 0; i--) {
  reversed += hackerTwo[i];
}
console.log(reversed);

//3.3  -----------------------------------------

if (hackerOne < hackerTwo) {
  console.log("The driver's name goes first.");
} else if (hackerOne > hackerTwo) {
  console.log('Yo, the navigator goes first, definitely');
} else {
  console.log('What?! You both have the same name?');
}
