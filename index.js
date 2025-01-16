// Iteration 1: Names and Input
const hacker1 = `Omar`;
const hacker2 = `Aytha`;

// Iteration 2: Conditionals

let hacker1Len = hacker1.length;
let hacker2Len = hacker2.length;

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Len} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Len} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2Len} characters!`
  );
}

// Iteration 3: Loops

// Nombre en mayúsculas y separado por espacios

console.log("");
let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    driverName += " ";
  }
}
console.log(driverName);

// Nombre en orden inverso

console.log("");
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// Comparación de los nombres
console.log("");
let comparison = 0;
let minLength = Math.min(hacker1.length, hacker2.length);

for (let i = 0; i < minLength; i++) {
  if (hacker1[i] < hacker2[i]) {
    comparison = -1;
    break;
  } else if (hacker1[i] > hacker2[i]) {
    comparison = 1;
    break;
  }
}

if (comparison === 0) {
  if (hacker1.length < hacker2.length) {
    comparison = -1;
  } else if (hacker1.length > hacker2.length) {
    comparison = 1;
  }
}

if (comparison < 0) {
  console.log("The driver's name goes first.");
} else if (comparison > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus time

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu mauris turpis. Vestibulum eu est eu lorem sollicitudin consequat a a orci. Ut ut placerat purus, at fringilla augue. Mauris quis dui eleifend, laoreet diam quis, mollis nibh. Donec aliquet luctus lectus non vestibulum. Donec a erat dictum, placerat nulla vel, tempus lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar pharetra lacus, vitae feugiat eros tincidunt eu. Nulla tristique risus sit amet lorem sodales, vitae pellentesque magna condimentum. Integer commodo congue aliquam. Donec erat elit, sodales et sagittis tincidunt, imperdiet non metus. Nullam at nunc varius, blandit dolor ac, lacinia purus. Sed semper semper neque rutrum venenatis. Sed ullamcorper efficitur quam, sed facilisis dui pellentesque id.

Nullam ac metus id justo tincidunt faucibus. In auctor laoreet vulputate. Nunc eget porta nulla. Pellentesque posuere velit nisl, vitae congue lectus tempus vulputate. Nullam et luctus arcu. Nunc finibus auctor sem nec convallis. Pellentesque semper metus quis magna placerat, sed euismod justo pulvinar. Pellentesque ut magna sit amet dui scelerisque fringilla. Nulla vel ipsum nec neque dignissim rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam at neque luctus, porttitor nunc sit amet, fermentum urna. Curabitur facilisis nulla nec iaculis condimentum. Pellentesque tempor vel ligula vel mattis. Maecenas iaculis odio erat, non pulvinar leo cursus nec.

Duis sem turpis, consectetur et vehicula id, egestas vel nunc. Nunc suscipit finibus porttitor. Sed in mattis nunc. Phasellus ac lobortis nulla, et finibus risus. Praesent luctus facilisis consectetur. Maecenas pharetra, nulla sit amet commodo aliquet, ipsum tellus dictum massa, et maximus neque nibh non arcu. Quisque suscipit hendrerit sapien, et posuere elit dapibus eu. Proin fermentum, lorem vitae maximus tincidunt, urna eros accumsan ligula, ut bibendum felis nibh ac odio. Phasellus ac ex venenatis, viverra enim ac, pellentesque ipsum. Suspendisse at quam arcu. Pellentesque dictum mi sed arcu pharetra, quis dictum elit consequat. Curabitur a porttitor velit. Morbi dui arcu, pretium a maximus ac, fermentum ut mi. Nullam nec molestie nibh, sed ullamcorper magna. Nunc aliquet sit amet nulla et vulputate. Ut bibendum tincidunt lacus euismod varius`;

// Contar el número de palabras
let wordCount = 0;
let inWord = false;

for (let i = 0; i < text.length; i++) {
  if (
    text[i] === " " ||
    text[i] === "." ||
    text[i] === "," ||
    text[i] === "\n"
  ) {
    if (inWord) {
      wordCount++;
      inWord = false;
    }
  } else {
    inWord = true;
  }
}

// Añadir una palabra final si el texto no termina con espacio o puntuación
if (inWord) {
  wordCount++;
}

console.log(`Number of words: ${wordCount}`);

// Contar el número de veces que aparece "et"
let etCount = 0;
for (let i = 0; i < text.length - 1; i++) {
  if (
    text[i] === "e" &&
    text[i + 1] === "t" &&
    (i === 0 || /\s/.test(text[i - 1])) &&
    (i === text.length - 2 || /[\s.,]/.test(text[i + 2]))
  ) {
    etCount++;
  }
}

console.log(`Number of times the Latin word "et" appears.: ${etCount}`);
