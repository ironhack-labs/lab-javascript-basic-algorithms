// Iteration 1: Names and Input

let hackerOne = "Ana";
console.log(`The driver's name is ${hackerOne}.`);


let hackerTwo = "Jose";
console.log(`The driver's name is ${hackerTwo}.`);


// Iteration 2: Conditionals


if (hackerOne.length > hackerTwo.length) {
    console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
}
else if (hackerOne.length < hackerTwo.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hackerOne.length} characters!.`);
}

// Iteration 3: Loops

/*split(""): Divide la cadena en un array de caracteres individuales.
join(" "): Une esos caracteres de nuevo, pero esta vez con un espacio entre ellos.*/

let driverSplit = hackerOne.toUpperCase().split("").join(" "); 
console.log(driverSplit);

/*cadenas de texto no tiene metodo reverse, por lo que hay que pasar cadena de texto a array con un *split*, luego *reverse* y volver a pasar a cadena de texto con *join**
aprovecho para pasarlo a minusculas con toLowerCase */
let navigatorReverse = hackerTwo.toLowerCase().split("").reverse().join("");
console.log(navigatorReverse);


if (hackerOne.localeCompare(hackerTwo) > 0) {
    console.log(`The driver's name goes first.`);
}
else if (hackerOne.localeCompare(hackerTwo) < 0) {
    console.log(`Yo, the navigator goes first, definitely.`);
}
else {
    console.log(`What?! You both have the same name?`);
}
