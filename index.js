// Iteration 1: Names and Input
let hacker1 = "Albert";
let hacker2 = "Alberto";
console.log("the drivers name " + hacker1);
console.log("the navigators name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "the drivers has the longest name, it has " + hacker1.length + " characters"
  );
}

if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigators has the the longest name, it has " +
      hacker2.length +
      " charaters "
  );
}

if (hacker1.length === hacker2.length) {
  console.log("wow you both have equaly long names " + hacker1 + " charaters");
}

// Iteration 3: Loops
let result = "";
let nombre;
let resultado = "";

for (let i = 0; i < hacker1.length; i++) {
  result = result + hacker1[i].toUpperCase() + " ";
}
console.log(result);

for (let i = 0; i < hacker2.length; i++) {
  resultado = resultado + hacker2[hacker2.length - 1 - i];
}
console.log(resultado);
console.log(hacker2.length);

let result3 = [hacker1, hacker2];
result3.sort();
console.log(result3);

if (result3[1] == result3[2]) {
  console.log("What?! You both have the same name?");
} else if (result3[0] == hacker1) {
  console.log("The driver's name goes first.");
} else if (result3[0] == hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
}

//Bonus1
let longText =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, omnis unde illum pariatur iste doloremque vitae repellendus nostrum, magnam totam reiciendis? Magni temporibus eum illo explicabo, atque mollitia reiciendis sequi? Repellendus vitae dolores fuga sequi expedita. Quis facilis voluptas, exercitationem quia magnam, maiores deleniti quos eligendi odio tempora assumenda ulla";

//parte1
let contPalabras = 1; //inicializa en 1 porque hay un espacio menos que palabras en el texto

for (let i = 0; i < longText.length; i++) {
  if (longText[i] == " ") {
    contPalabras++;
  }
}
console.log(contPalabras);

//parte2
let repetET = 0;

for (let i = 0; i < longText.length; i++) {
  if (
    longText[i].toLocaleLowerCase() == "e" &&
    longText[i + 1].toLocaleLowerCase() == "t"
  ) {
    repetET++;
  }
}
console.log(repetET);

//bonus2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let result4 = false;
let word = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i].toLocaleUpperCase().charCodeAt(0) > 64 &&
    phraseToCheck[i].toLocaleUpperCase().charCodeAt(0) < 91
  ) {
    word = word + phraseToCheck[i];
  }
}

for (let i = 0; i < parseInt(word.length / 2); i++) {
  if (word[i].toUpperCase() == word[word.length - 1 - i].toUpperCase()) {
    result4 = true;
  } else {
    result4 = false;
    break;
  }
}
console.log(result4);
