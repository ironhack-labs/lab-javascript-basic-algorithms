// Iteration 1: Names and Input
hacker1 = "driver";
console.log(`The driver's name is ${hacker1}`);
hacker2 = "navigator";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1} characters!.`);
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let char = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    char += hacker1[i].toUpperCase();
  } else if (i !== hacker1.length - 1) {
    char += hacker1[i].toUpperCase() + " ";
  }
}
console.log(`${char} `);
// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

function printWordBackwards(word) {
  let backwardsWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    backwardsWord += word[i];
  }
  return backwardsWord;
}
const reverseWord = printWordBackwards("Jhon");
console.log(reverseWord);

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// ` What?! You both have the same name?.`

function getLexicographicOrder(hacker1, hacker2) {
  const driversMessage = `The driver's name goes first.`;
  const navigatorsMessage = `Yo, the navigator goes first, definitely.`;
  const equalsMessage = `What?! You both have the same name?.`;

  // Busco la cadena más pequeña para recorrer como
  // máximo ese número de caracteres en ambas y no excederme
  // de las posiciones del array que sea menor
  let smallerString = hacker1.length;
  if (hacker1.length < hacker2.length) {
    smallerString = hacker1.length;
  } else if (hacker2.length < hacker1.length) {
    smallerString = hacker2.length;
  }

  // Busco el primer caracter ASCII que es menor
  // y en el primero que coincida retorno el mensaje
  // correspondiente
  for (let i = 0; i < smallerString; i++) {
    if (hacker1[i] < hacker2[i]) {
      return driversMessage;
    } else if (hacker2[i] < hacker1[i]) {
      return navigatorsMessage;
    }
  }

  // Si sale del bucle, la cadena más corta tiene
  // identicos caracteres que el inicio de la más larga o
  // bien son iguales.
  // En tal caso irá antes el mensaje de la mas corta
  // o bien el mensaje de que son iguales

  if (hacker1.length < hacker2.length) {
    return driversMessage;
  } else if (hacker1.length > hacker2.length) {
    return navigatorsMessage;
  } else {
    return equalsMessage;
  }
}
const msg = getLexicographicOrder(hacker1, hacker2);
console.log(msg);

