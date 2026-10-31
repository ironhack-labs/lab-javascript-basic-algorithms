const hacker1 = "Nicolas";

const hacker2 = "Antonio";

console.log(`El nombre de quien conduce es ${hacker1}`);

console.log(`El nombre de quien navega es ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `El nombre de quien conduce es el más largo: tiene ${hacker1.length} caracteres.`,
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `Parece que el nombre de quien navega es el más largo: tiene ${hacker2.length} caracteres.`,
  );
} else {
  console.log(
    `¡Vaya! Los dos nombres tienen la misma longitud: ${hacker1.length} caracteres.`,
  );
}

let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i > 0) {
    spacedName += " ";
  }
  spacedName += hacker1[i].toUpperCase();
}
console.log(spacedName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

if (hacker1 < hacker2) {
  console.log("El nombre de quien conduce va primero.");
} else if (hacker2 < hacker1) {
  console.log("¡Oye, el nombre de quien navega va primero, sin duda!");
} else {
  console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;

let wordCount = 0;
let etCount = 0;
let currentWord = "";

for (let i = 0; i <= longText.length; i++) {
  const character = i < longText.length ? longText[i].toLowerCase() : " ";
  if (character >= "a" && character <= "z") {
    currentWord += character;
  } else if (currentWord.length > 0) {
    wordCount++;
    if (currentWord === "et") {
      etCount++;
    }
    currentWord = "";
  }
}

console.log(`Número de palabras: ${wordCount}`);

console.log(`La palabra "et" aparece ${etCount} veces.`);

const phraseToCheck = "A man, a plan, a canal, Panama!";
let normalizedPhrase = "";
const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789áéíóúüñ";

for (let i = 0; i < phraseToCheck.length; i++) {
  const character = phraseToCheck[i].toLowerCase();

  let isValidCharacter = false;

  for (let j = 0; j < validCharacters.length; j++) {
    if (character === validCharacters[j]) {
      isValidCharacter = true;

      break;
    }
  }
  if (!isValidCharacter) {
    continue;
  }
  normalizedPhrase += character;
}

let isPalindrome = true;

for (let i = 0; i < normalizedPhrase.length / 2; i++) {
  if (
    normalizedPhrase[i] !== normalizedPhrase[normalizedPhrase.length - 1 - i]
  ) {
    isPalindrome = false;

    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" es un palíndromo.`);
} else {
  console.log(`"${phraseToCheck}" no es un palíndromo.`);
}
