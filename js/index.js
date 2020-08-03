let hacker1 = 'Hugo';
console.log (`The driver's name is ${hacker1}`);
let hacker2 = 'Jero';
console.log (`The navigator's name is ${hacker2}`)
function longestName() {
    if (hacker1.length > hacker2.length) {
      console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
    }
    else if (hacker1.length < hacker2.length) {
      console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else {
      console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
  }
  console.log(longestName());
  let hacker1UpperCase = hacker1.toUpperCase();
  console.log(hacker1UpperCase.split('').join(' '));
  console.log(hacker2.split("").reverse().join(""));
  function whoGoesFirst(hacker1,hacker2) {
    if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The divers's name goes firts.`)
  }
  else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
  }
  else {
      console.log(`What?! You both have the same name?`)
  }
  }
  console.log(whoGoesFirst(hacker1, hacker2));

let parrafo1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

let palabras = parrafo1.split(" ");

console.log(palabras.length);

let contador = 0
for (const value of palabras) {
  if (value === 'et') {
    contador += 1;
  }
}
console.log(contador);

let phraseCheck = "Ana Be";

function palindromo (phrase){
  let invertida = phraseCheck.split(" ").join("").split("").reverse().join("").toLowerCase();
  console.log(invertida);
  let normal = phraseCheck.split(" ").join("").toLowerCase();
  console.log(normal);
  if (invertida === normal){
    console.log(`${phraseCheck} es un palíndromo`)
  } else {
    console.log(`${phraseCheck} no es un palíndromo`)
  }
}

palindromo(phraseCheck);