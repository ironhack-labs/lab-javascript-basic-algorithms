// Iteration 1: Names and Input

let hacker1 = "Gandalf el blanco"; //driver´s name

console.log(`The driver´s name is ${hacker1}`);

let hacker2 = "Antonio"; //navigator´s name

console.log(`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest ${hacker1}, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The driver has the longest ${hacker2}, it has ${hacker2.length} characters`);
} else {
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

/*
if (hacker1.length > hacker2.length) console.log(`The driver has the longest ${hacker1}, it has ${hacker1.length} characters`);
else if (hacker1.length < hacker2.length) console.log(`The driver has the longest ${hacker2}, it has ${hacker2.length} characters`);
else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
*/



/*
Terciario: (iteration 2.1 solo las dos primera condiciones)

hacker1.length > hacker2.length ? console.log(`The driver has the longest ${hacker1}, it has ${hacker1.length} characters`) : console.log(`The driver has the longest ${hacker2}, it has ${hacker2.length} characters`);
*/

// Iteration 3: Loops

//3.1
let hacker1SeparedLetters="";

for (let i=0; i < hacker1.length; i++) {
  
  if (i !== hacker1.length - 1) { // para no añadir un espacio al final
    hacker1SeparedLetters += hacker1[i].toUpperCase() + " ";
  }else {
    hacker1SeparedLetters += hacker1[i].toUpperCase();
  }
}

console.log(hacker1SeparedLetters);

let hacker1Reversed ="";

//3.2

for (let i=hacker1.length - 1; i >= 0; i--) {
  hacker1Reversed += hacker1[i];
}

console.log(hacker1Reversed);

//3.3
//Palíndromo

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log(`The driver's name goes first`);
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
   console.log(`What?! You both have the same name?`);
}


// BONUS 1

let longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus repellat alias architecto! Voluptates, et ab tenetur quae in hic atque excepturi, perferendis, fugiat rem ut unde amet sunt cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam nemo error, doloribus obcaecati eligendi suscipit excepturi! Excepturi minus amet, quia ullam nostrum similique, quasi corporis ratione, labore blanditiis repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure nisi doloremque aliquid officiis aspernatur enim dicta, alias repellat id quae quos. Fugiat, quae. Eum temporibus ex ea animi id?"

// count words
let countLetters = 1;
for (let i=0; i < longText.length; i++) {
  if (longText[i] === " ") countLetters ++;
}

console.log(`the numbers of word in longText is ${countLetters}`);


// count "et"

let countEt = 0;

for (let i=0; i < longText.length - 1; i++) {
  if ((longText[i].toLowerCase() + longText[i + 1].toLowerCase()) === "et") countEt++;
}

console.log(`the numbers of "et" in longText is ${countEt}`);

// BONUS 2

let phraseToCheck = "No 'x' in Nixon";
let cleanPhrase= "";

for (let  i= 0; i < phraseToCheck.length; i++) { // recorro la frase y la dejo limpia para comparar
  
  let char = phraseToCheck[i].toLowerCase(); // cada caracter en lower case
  
  if (char !== " " && char !== "," && char !=="!" && char !== "?" && char !== "'") {
    cleanPhrase += char;
  }
}

let isPalindrome = true;

for (let i = 0; i < cleanPhrase.length / 2; i++) {
  if (cleanPhrase[i] !== cleanPhrase[(cleanPhrase.length -1) - i]) {
    isPalindrome = false;
    break
  }
}

if (isPalindrome) {
 console.log(`${phraseToCheck} is PALINDROME`);
} else {
 console.log(`${phraseToCheck} is NOT PALINDROME`);
}

// Otra manera es comparar también la frase limpia al reverso

let cleanPhraseReversed = "";

for (let  i= phraseToCheck.length - 1 ; i >= 0 ; i--) { // recorro la frase y la dejo limpia para comparar
  
  let char = phraseToCheck[i].toLowerCase(); // cada caracter en lower case
  
  if (char !== " " && char !== "," && char !=="!" && char !== "?" && char !== "'") {
    cleanPhraseReversed += char;
  }
}

cleanPhrase === cleanPhraseReversed ? console.log("IS PALINDROME") : console.log("IS NOT PALINDROME");