// Iteration 1: Names and Input

let hacker1 = "Gara"
let hacker2 = "Silvia"

console.log(
`The driver's name is ${hacker1}. 
The navigato's name is ${hacker2}.`
);

// Iteration 2: Conditionals

const garaLength = hacker1.length
const silviaLength = hacker2.length

console.log(garaLength, silviaLength)


if (garaLength > silviaLength) {

    console.log(`The driver has the longest name, it has ${garaLength} characters.`);

  } else if (garaLength < silviaLength) {

    console.log(`It seems that the navigator has the longest name, it has ${silviaLength} characters.`);

  } else {

    console.log(`Wow, you both have equally long names, XX characters!`);

  }

// Iteration 3: Loops

    // Paso 1
    let result = hacker1.toUpperCase().split('').join(' ');
    console.log (result);

    // Paso 2
    let reversedName = hacker2.split('').reverse().join('');
    console.log(reversedName);
    
    // Paso 3

    if (hacker1.localeCompare(hacker2) < 0) {
        console.log("The driver's name goes first.");
      } else if (hacker1.localeCompare(hacker2) > 0) {
        console.log("Yo, the navigator goes first, definitely.");
      } else {
        console.log("What?! You both have the same name?");
      }
