// Iteration 1: Names and Input

let hacker1 = "Frantxesko";
console.log("The driver's name is " + hacker1);
let hacker2 = "Virgolini";
console.log("The nevigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 1

let result1 = "";
let hacker1mayus = hacker1.toUpperCase();

for (let i = 0; i < hacker1.length; i++) {
  result1 = result1 + hacker1mayus[i] + " ";
}

result1 = result1.substring(0, result1.length - 1); // Quitamos el espacio del final

console.log(result1);

// 2

let hacker2reversed = "";

for (let i = hacker2.length; i > 0; i--) {
  hacker2reversed = hacker2reversed + hacker2[i - 1];
}

console.log(hacker2reversed);

// 3

if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus metus et viverra imperdiet. Phasellus ut bibendum urna. Nunc vestibulum metus urna, non placerat enim volutpat eget. Morbi imperdiet, quam in maximus faucibus, justo mauris luctus diam, sit amet convallis libero magna vitae mi. Maecenas eget nisi odio. Praesent maximus, nibh vitae porttitor faucibus, justo erat posuere augue, nec lobortis risus nunc quis tellus. Cras pulvinar bibendum sollicitudin. Vestibulum facilisis sem et est tincidunt condimentum. Phasellus eget euismod risus. Vivamus vestibulum, sem eu pellentesque laoreet, metus ante interdum arcu, non accumsan magna metus sollicitudin sem. Nulla facilisi. 

Nullam sodales, odio vel tempor laoreet, odio sem vulputate mi, a aliquam massa tortor quis tellus. Vestibulum eu tortor sed diam volutpat accumsan nec eget velit. Phasellus sit amet eleifend tellus. Vivamus auctor ante massa, in rhoncus ipsum tempor eget. In ac semper nibh. Maecenas arcu elit, molestie a ipsum et, suscipit scelerisque sapien. In malesuada sem eu gravida maximus. Vivamus dapibus ante sit amet mollis luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla finibus fringilla faucibus. Aenean sit amet felis fringilla, tristique justo eget, luctus dui. Morbi lobortis sem ultricies dapibus hendrerit. Mauris suscipit sodales aliquet. 

Etiam laoreet euismod dui, sit amet venenatis nisi iaculis blandit. Proin consequat bibendum sapien, eu vehicula arcu fermentum sed. Nulla urna nisl, laoreet consequat sollicitudin ut, molestie non quam. Nulla a felis vitae velit tempor facilisis. Aliquam luctus convallis ex, nec tincidunt nulla molestie sit amet. Etiam et aliquam augue, ut varius risus. Maecenas a neque quam. Maecenas rutrum orci sit amet metus dapibus, at posuere purus malesuada. Maecenas sollicitudin nulla sed ligula tincidunt consequat. Nunc ut dui a mi lobortis aliquam. Ut aliquam nunc id volutpat mollis. Sed imperdiet neque at enim aliquam, et imperdiet nulla lacinia. Mauris rutrum a libero at interdum. Pellentesque lacinia nisl eget lectus dictum ultricies. Etiam eleifend ipsum vitae dui maximus tincidunt.`;

// 1

let palabras = longText.split(" ");

console.log(palabras.length);

// 2

let etCounter = 0;

for (i = 0; i < longText.length; i++) {
  //Faltarían por añadir otras posibilidades, como ;, :, (), -, etc.
  if (
    (longText[i] === "e") &&
    (longText[i + 1] === "t") &&
    ((longText[i - 1] === " ") ||
      (longText[i - 1] === ",") ||
      (longText[i - 1] === ".")) &&
    ((longText[i + 2] === " ") ||
      (longText[i + 2] === ".") ||
      (longText[i + 2] === ","))
  ) {
    etCounter++;
  }
}

console.log(etCounter);

// Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?";
let enMayuscula = phraseToCheck.toUpperCase();
let comparable = "";
let phraseReversed = "";

for (i = 0; i < phraseToCheck.length; i++) {
  if (
    (enMayuscula[i] !== " ") &&
    (enMayuscula[i] !== ",") &&
    (enMayuscula[i] !== "!") &&
    (enMayuscula[i] !== "?") &&
    (enMayuscula[i] !== "'")
  ) {
    comparable = comparable + enMayuscula[i];
  } else {
    continue;
  }
}
for (i = phraseToCheck.length - 1; i >= 0; i--) {
  if (
    (enMayuscula[i] !== " ") &&
    (enMayuscula[i] !== ",") &&
    (enMayuscula[i] !== "!") &&
    (enMayuscula[i] !== "?") &&
    (enMayuscula[i] !== "'")
  ) {
    phraseReversed = phraseReversed + enMayuscula[i];
  } else {
    continue;
  }
}

if (comparable === phraseReversed) {
  console.log("That's a Palindrome mate!!");
} else {
  console.log("That is not a Palindrome, try with another.");
}
