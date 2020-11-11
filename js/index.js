// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Manuel Carrillo";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Jose Rascon"

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The Navigator's name is ${hacker2}` )

// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!

if (hacker1.length > hacker2.length){
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// ===Iteration 3: Loops===
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
// Option 1 - Loop
for (i = 0; i < hacker1.length; i++){
  console.log(hacker1[i].toUpperCase());
}
// Option 2 (no loop)
console.log(hacker1.split('').join(' ').toUpperCase())

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e.
// Option 1 - Loop
for (i = hacker2.length -1; i >= 0; i--){
  console.log(hacker2[i]);
}
// Option 2 (no loop)
console.log(hacker2.split('').reverse().join(''));

// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker1.localeCompare(hacker2) === -1){
  console.log(`${hacker1} goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log(`Yo, ${hacker2} goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`);
}

/*Manu, creo que esto es lo que se buscaba en el 3.3
Tal como lo teniamos lo he dejado aqui debajo comentado.
Pero haciendolo asi, no cambiaba el orden al cambiar los nombres.
Echale un ojo y comentamos*/

/*if (hacker1.localeCompare(hacker2)){
  console.log(`${hacker1} goes first.`);
} else if (hacker2.localeCompare(hacker1)){
  console.log(`$hacker2`)
} else {
  console.log(`What?! You both have the same name?`);
}*/