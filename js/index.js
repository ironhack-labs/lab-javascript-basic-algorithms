// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

var hacker1 = "Ferran";

//1.2 Print `"The driver's name is XXXX"`.


console.log("The driver's name is " + hacker1)

//1.3 Create a variable `hacker2` with the navigator's name.

var hacker2 = "Julia";

//1.4 Print `"The navigator's name is YYYY"`.

console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {                 
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}

  else if (hacker2.length > hacker1.length) {                 
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}

else if (hacker2.length == hacker1.length) {                 
console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);
}


// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

console.log(hacker1.toUpperCase().split('').join(' '));

//I found how to do it here: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/split, but can't do it with a loop.

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

console.log(hacker2.split('').reverse().join(''));

//I found how to do it here: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/split, but can't do it with a loop.

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
// Yo, the navigator goes first definitely.
//- What?! You both have the same name?

var lexOrder = hacker1.localeCompare(hacker2);
if ( lexOrder === -1 ) {
  console.log(`The driver's name goes first.`)
} else if ( lexOrder === 1 ) {
  console.log(`Yo, the navigator goes first definitely.`)
} else { console.log(`What?! You both got the same name?`)}

//localeCompare - lexicographic order, gives -1 if referenceStr comes before compareStr, 1 if it comes after and 0 if it's the same aka same name.