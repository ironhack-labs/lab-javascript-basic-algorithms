// Iteration 1: Names and Input
let hacker1 = "Javi";
let hacker2 = "Jose";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has  ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let name = "John";
let nameReversed = "";

console.log(name.toUpperCase());

let nameSpace = "";
let space = " ";
for (let j = 0; j <= name.length - 1; j++) {
  if (j < name.length) {
    nameSpace = nameSpace + name[j] + space;
  } else {
    nameSpace = nameSpace + name[j];
  }
}
console.log(nameSpace.toUpperCase());

for (let i = name.length - 1; i >= 0; i--) {
  const reversed = name[i];
  nameReversed += reversed;
}

console.log(nameReversed);

//Bonus 1.a
let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius, tellus at semper condimentum, nisl massa congue nisi, vitae fermentum dui arcu id augue. Nam tempus nisi id purus porttitor tempor. Mauris euismod odio a vestibulum tristique. Vestibulum vitae condimentum nibh, quis hendrerit nisi. Vestibulum ac accumsan lacus. Nam fermentum a velit nec efficitur. Ut ut odio lacinia lectus vulputate vehicula. Morbi finibus fringilla porta. Nam ac felis quis urna facilisis sodales sed et ex. Mauris eget consectetur nulla. Sed faucibus consectetur nibh, vel tincidunt massa mollis in. Nunc mattis molestie dolor aliquet venenatis. Nam tristique odio id bibendum accumsan. Nunc eget dui quis leo vulputate condimentum. Vestibulum malesuada purus ac interdum varius. Mauris lacinia vitae risus eget pretium. Morbi tellus nunc, lobortis ac mollis eget, fermentum at dui. In massa est, luctus in massa sit amet, blandit varius ex. Phasellus feugiat dignissim nunc vel tempus. Proin ipsum enim, ultrices ut orci a, consectetur rhoncus justo. Cras ac nisl facilisis, fermentum ipsum eu, facilisis sapien. Integer rutrum metus ut viverra aliquet. Integer sodales mi ac sollicitudin viverra. Ut lectus orci, faucibus vitae molestie quis, suscipit ut dolor. Pellentesque sed convallis libero. Proin euismod varius tellus ac semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ullamcorper, mauris non tincidunt ultricies, libero elit tristique nibh, ac placerat arcu diam ut libero. Integer sit amet ligula ut lectus sagittis cursus. Pellentesque ac enim at erat fermentum commodo. Donec lacinia et nunc non lacinia. In hac habitasse platea dictumst. Integer condimentum odio nec dolor hendrerit lobortis. Vestibulum posuere odio eu arcu tempus, egestas hendrerit nibh convallis. In magna odio, facilisis vitae fermentum quis, luctus sed nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse eget convallis.";

let count;

if (longText === null || longText === " " || longText === "") {
  count = 0;
} else {
  count = 1;
  for (let k = 0; k <= longText.length; k++) {
    if (longText[k] === " ") {
      count++;
    }
  }
}

console.log(`La cadena consta de ${count} palabras`);

//Bonus 1.b
let countEt = 0;
let position = 0;

while (longText.indexOf(" et ", position) !== -1) {
  countEt++;
  position = longText.indexOf(" et ", position) + 1;
}

console.log(`El texto contiene ${countEt} veces la palabra "et"`);

//Bonus 2
let phraseToCheck = `Was it a car or a cat I saw?`;

//1. Pasamos la frase a mayúsculas
phraseToCheck = phraseToCheck.toUpperCase();

//2. Nos quedamos sólo con las letras
let storeLetters = "";
for (let l = 0; l <= phraseToCheck.length; l++) {
  switch (phraseToCheck[l]) {
    case "A":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "B":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "C":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "D":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "E":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "F":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "G":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "H":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "I":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "J":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "K":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "L":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "M":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "N":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "Ñ":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "O":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "P":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "Q":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "R":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "S":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "T":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "U":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "V":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "W":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "X":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "Y":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
    case "Z":
      storeLetters = storeLetters + phraseToCheck[l];
      break;
  }
}

//3. Dividimos la frase en dos
let phraseToCheckPart1 = "";
let phraseToCheckPart2 = "";

//3.a Un palíndromo siempre es par, por lo que tenemos que coger la primera parte
for (let m = 0; m < storeLetters.length / 2; m++) {
  phraseToCheckPart1 += storeLetters[m];
}

//3.b Y ahora cogemos la segunda parte y le damos la vuelta
for (let n = storeLetters.length - 1; n >= storeLetters.length / 2; n--) {
  phraseToCheckPart2 += storeLetters[n];
}

//4. Comprobamos las dos partes para ver si son iguales
if ((phraseToCheckPart1 = phraseToCheckPart2)) {
  console.log(`Es un palíndromo`);
} else {
  console.log(`No es un palíndromo`);
}
