// Iteration 1: Names and Input
const hacker1 = "Julio"
const hacker2 = "Ironhack"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let nombreMayus = ""

for (let i = 0; i < hacker1.length; i++) {
  nombreMayus += hacker1[i].toUpperCase() + " "
}

console.log(nombreMayus);

let nombreInverso = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
  nombreInverso += hacker1[i]
}
console.log(nombreInverso);

const comparisonResult = hacker1.localeCompare(hacker2);

if (comparisonResult < 0) {
  console.log(`${hacker1} goes first`);
} else if (comparisonResult > 0) {
  console.log(`Yo, ${hacker2} goes first, definitely.`);
} else {
  console.log('What?! You both have the same name?');
}

//Bonus 1

const longText = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis suscipit tellus, non egestas augue. Suspendisse sit amet laoreet ipsum. Praesent tempor, eros pellentesque laoreet rhoncus, tortor ligula sagittis leo, quis congue nisi quam sit amet metus. Ut justo eros, luctus eget sapien non, molestie rhoncus dui. Fusce ultrices a risus sit amet semper. Suspendisse porta suscipit feugiat. Mauris sit amet enim tortor. Curabitur fermentum elementum lectus, sed dapibus ligula varius vitae. Praesent vitae iaculis libero. Sed in quam porttitor, rhoncus lacus sed, scelerisque nisi. Cras lacinia elementum quam et bibendum. Pellentesque lacus metus, semper non interdum quis, dictum at sem. \n\nEtiam eu justo risus. Ut pharetra bibendum dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer fringilla hendrerit pellentesque. Proin vestibulum, leo non eleifend ultricies, urna nunc aliquam nisi, sit amet tempor purus justo in orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed maximus erat sem, vitae placerat velit sagittis sed. Quisque elit sem, venenatis ut ante ut, commodo interdum sapien. \n\nUt consectetur sed ipsum id tempor. Integer vestibulum sapien orci, at dapibus libero malesuada eu. Sed commodo efficitur erat, sit amet tristique ex aliquam at. Donec et ornare velit. Aliquam erat volutpat. Vivamus vestibulum nisi leo, nec tempor justo feugiat at. Etiam placerat tristique blandit. Aliquam vestibulum suscipit feugiat. Nulla pellentesque orci eu ante congue rhoncus. Nulla ut leo ornare, gravida dolor eget, posuere lorem.");

const palabras = longText.split(" ");
const cantidadPalabras = palabras.length;
console.log(`Cantidad de palabras: ${cantidadPalabras}`);

const words = longText.split(" ");
let cantidadEt = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    cantidadEt++;
  }
}

console.log(`Se repite et ${cantidadEt} veces`);

// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!";
let isPalindrome = true;

const limpiarFrase = phraseToCheck.replace(/[^a-zA-Z]/g, "").toLowerCase();

for (let i = 0; i < Math.floor(limpiarFrase.length / 2); i++) {
  if (limpiarFrase[i] !== limpiarFrase[limpiarFrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("La frase es un palíndromo.");
} else {
  console.log("La frase no es un palíndromo.");
}
