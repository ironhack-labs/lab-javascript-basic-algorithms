// Iteration 1: Names and Input
let hacker1 = "Oswaldo";
console.log(`The Driver's name is ${hacker1}`);

let hacker2 = "Oswaldo";
console.log(`The navigator's name is ${hacker2}`);

//ITERATION 2: CONDITIONALS

if(hacker1.length > hacker2.length){
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that ${hacker2}  has the longest name, it has ${hacker2.length} characters`)
  } //Creo que también hubiera podido utilizar un else if en lugar de un else...¿?
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  }


//LOOPS AND LEXICOGRAPHIC ORDER OF STRINGS
//--Hacker1 (Driver): iteración para imprimir el nombre separado por espacio y en mayúsculas
let hacker1LettersSeparatedBySpace = "";
for(let i = 0; i < hacker1.length; i++){
  hacker1LettersSeparatedBySpace += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1LettersSeparatedBySpace)

//--Hacker2: iteración para imprimir el nombre separado por espacio y al revés
//----Solución 1
let hacker2LettersInReverse = "";
for(let i = hacker2.length - 1; i >= 0; i--){
  hacker2LettersInReverse += hacker2[i]; 
}
console.log(hacker2LettersInReverse)

//---Solución 2
let hacker2LettersInReverse2 = hacker2.split("").reverse().join("");
console.log(hacker2LettersInReverse2)

//LEXICOGRAPHIC ORDER OF STRINGS
//Solución #1
if(hacker1 < hacker2){
  console.log(`${hacker1} goes first`)
} else if (hacker1 > hacker2) {
  console.log(`Yo, ${hacker2} goes first definitely.`)
} else if (hacker1 === hacker2) {
  console.log(`What! You both have the same name?`)
}

//BONUS 1

let loremIpsumParragraphs = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum";

//Cuenta el número de palabras en un string
let numberOfCharactersInLoremParragraph = loremIpsumParragraphs.length;
console.log(numberOfCharactersInLoremParragraph)

//Cuenta el número de veces que se repite la palabra "et"
let numberOfRepetitionOfEt = loremIpsumParragraphs.split("et");

console.log(numberOfRepetitionOfEt.length - 1)


//BONUS #2:  PALINDROME

let phraseToCheck = "put it up";

let phraseToCheckLen = phraseToCheck.length;

for (let i = 0; i < phraseToCheck.length; i++){
  if(phraseToCheck[i] !== phraseToCheck[phraseToCheckLen -1 - i]) {
  console.log("It is not a palindrome");
  break;
  } else {
    console.log("It is a palindrome")
    break;
  }
}




