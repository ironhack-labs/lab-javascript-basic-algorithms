// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "jose Luis";
// 1.2 Print "The driver's name is XXXX".
console.log("The Driver´s name is " + hacker1);
// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "garmin";
// 1.4 Print "The navigator's name is YYYY".

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// 2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
//   <br>
//     - `The driver has the longest name, it has XX characters.` or <br>
//     - `It seems that the navigator has the longest name, it has XX characters.` or <br>
//     - `Wow, you both have equally long names, XX characters!`.

let fulano = hacker1.length;
let mengano = hacker2.length;

if (fulano > mengano) {
  console.log(`The driver has the longest name, it has ${fulano} characters.`);
} else if (fulano < mengano) {
  console.log(
    `It seems that the navigator has the longest name, it has ${mengano} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, XX characters!`);
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and [in capital letters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), i.e., `"J O H N"`.

let patata = hacker1.toUpperCase().split("").join(" ");

let str = "";
for (i = 0; i < hacker1.length; i++) {
  str += hacker1[i].toUpperCase() + " ";
}

console.log(patata);
console.log(str);

//   3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`.

let str2 = "";

for (i = hacker2.length - 1; i >= 0; i--) {
  str2 += hacker2[i].toUpperCase();
}

console.log(str2);

//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

let tomate = hacker1.localeCompare(hacker2);

if (tomate < 0) {
  console.log(`The driver's name goes first.`);
} else if (tomate > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// - `The driver's name goes first.` <br>
// - `Yo, the navigator goes first, definitely.` <br>
// - `What?! You both have the same name?`

// Bonus 1:
// Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
console.log("bonus1");
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae elementum enim. Maecenas at arcu sagittis, hendrerit quam eget, finibus nulla. Duis scelerisque risus cursus libero ullamcorper, sed tristique magna aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vel velit a tellus ullamcorper hendrerit vel non orci. Suspendisse semper malesuada arcu id egestas. Pellentesque congue bibendum elit, et lacinia mi imperdiet in. Integer nisi massa, laoreet at neque et, posuere vehicula libero. Aliquam fringilla lorem ligula, nec sollicitudin magna congue sit amet.

Donec vestibulum odio ex, in ullamcorper tellus accumsan eget. Donec orci justo, accumsan in vehicula a, ultricies ac nibh. Integer vehicula lorem eu odio ullamcorper venenatis. Vivamus sit amet tempus est, non semper libero. Cras semper tortor quis felis varius tincidunt. Donec suscipit sem vel justo venenatis semper vitae vitae lacus. Nam dignissim convallis sapien, ac euismod velit tincidunt eu. Morbi dapibus lacus nec magna imperdiet finibus. Maecenas dictum, dui pellentesque tristique iaculis, lorem nisi luctus purus, id vehicula ipsum urna vitae eros. Integer rutrum diam a condimentum rutrum. Donec vehicula, erat id eleifend porta, ex lectus eleifend nunc, at mollis eros urna vel est. Vestibulum viverra eros sed sapien luctus, et malesuada turpis accumsan. Fusce risus odio, imperdiet sed magna at, bibendum venenatis augue. Nulla molestie tortor ac porta cursus. Nunc sit amet laoreet mi, maximus fringilla ipsum. Vivamus non arcu at orci sodales consectetur.

Cras cursus, nibh quis dictum pulvinar, metus sapien interdum lectus, vitae porta justo ante eu dui. Vestibulum in nunc vitae dolor varius ultricies. Nunc mi justo, hendrerit id dapibus sed, imperdiet venenatis nunc. Morbi tempor metus tortor, sollicitudin scelerisque turpis aliquam a. Etiam bibendum luctus nisl, egestas facilisis ex elementum sit amet. Proin in massa finibus, egestas erat in, malesuada tortor. Duis hendrerit mi tortor, ac eleifend lectus facilisis non. Vestibulum ullamcorper, metus quis fringilla dapibus, nisl lorem rhoncus felis, sed ornare diam velit non tortor. Integer nec sollicitudin turpis. Curabitur auctor lacus nunc, eget blandit sapien commodo rhoncus. Nam dapibus mi at diam pretium varius. Nullam quis purus nec est ullamcorper finibus. Aliquam vitae ante a turpis lobortis gravida. Praesent non pretium orci, non feugiat lorem.

`;

// Make your program count the number of words in the string.
let count = 0;
let palabras = lorem
  .toLowerCase()
  .replaceAll(",", "")
  .replaceAll(".", "")
  .split(" ");
for (let i = 0; i < palabras.length; i++) {
  count++;
}
console.log(count);

// Make your program count the number of times the Latin word et appears.
let count2 = 0;

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i] == "et") {
    count2++;
  }
}

console.log(count2);

// Bonus 2:
// Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

let phraseToCheck = "";

function hardPalindrome(phraseToCheck) {
  let reves = "";
  let sinNada = phraseToCheck
    .toLowerCase()
    .replaceAll(",", "")
    .replaceAll(" ", "")
    .replaceAll("?", "");

  let letras = sinNada.split("");

  console.log("tengo las letras");

  for (let i = letras.length - 1; i >= 0; i--) {
    reves += letras[i];
  }
  console.log("me he dado la vuelta");

  if (reves === sinNada) {
    return "claro que si , guapi";
  } else {
    return "pues va a ser que no";
  }
}

console.log(hardPalindrome("Amor, Roma"));
console.log(hardPalindrome("Was it a car or a cat I saw?"));
console.log("estoy fuera de la funcion");

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as join(), reverse(), etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue.
