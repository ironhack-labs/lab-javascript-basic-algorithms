console.log(`I'm ready`);
// Iteration 1: Names and Input

const hacker1 = 'Pepe';
const hacker2 = 'Lucho';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
  console.log(`The driver has the longest name, it has ${hacker1} characters.`);
else if (hacker1.length < hacker2.length)
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
else
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );

// Iteration 3: Loops
//3.1
console.log(
  hacker1
    .split('')
    .reduce((cadena, item) => cadena + item.toUpperCase() + ' ', '')
);
//3.2
console.log(hacker1.split('').reverse().join(''));
//3.3
if (hacker1.localeCompare(hacker2) < 0)
  console.log(`The driver's name goes first.`);
else if (hacker1.localeCompare(hacker2) > 0)
  console.log(`Yo, the navigator goes first definitely.`);
else console.log(`What?! You both have the same name?`);

//bonus time
//b1

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex tortor, ultricies eu est in, rhoncus hendrerit libero. Sed at luctus ante. In semper posuere rhoncus. Donec consectetur mauris faucibus, interdum odio nec, hendrerit libero. Aenean ornare enim sit amet bibendum pharetra. Sed luctus vitae eros dictum semper. Sed venenatis placerat elit convallis sollicitudin. Mauris sed elementum nulla. Aliquam pharetra ante eget quam pretium, blandit pulvinar lectus elementum. Nunc id sem sit amet sapien maximus convallis eu a magna. Donec urna nibh, blandit scelerisque egestas a, scelerisque ac arcu. Sed tristique consectetur vehicula. Nulla eu lacinia sem. Aliquam ante orci, dignissim at sollicitudin vel, convallis vitae elit. Praesent ullamcorper quis felis id mollis. Ut pellentesque ligula quis sollicitudin laoreet. Integer feugiat erat ut lorem lacinia luctus. Quisque malesuada gravida rhoncus. Mauris feugiat lacus a feugiat molestie. Curabitur quis vestibulum arcu. In hac habitasse platea dictumst. Vivamus sed odio eget mi rutrum ullamcorper non ut lectus. Duis vel ornare mi. Nam pellentesque massa ante, vitae egestas enim facilisis sed. Nam laoreet euismod ipsum in egestas. Ut mollis sem non mi vulputate imperdiet. Morbi volutpat ante leo, a porttitor lectus suscipit ut. Mauris sed nulla odio. Sed lectus nunc, lacinia ut varius non, vulputate rutrum ligula. Praesent bibendum aliquet mi. Fusce faucibus tincidunt lacus in dictum. Fusce orci lorem, mollis nec massa ac, finibus ultricies nibh. Morbi nec scelerisque augue. Nam sit amet tellus et nulla egestas ultrices. Cras ut venenatis sapien. Duis tempus magna urna, eget pretium metus feugiat ac. Duis condimentum interdum ligula, eu sollicitudin enim aliquet in. Donec bibendum quis augue id venenatis. Nunc posuere auctor sem quis bibendum. Proin vel tincidunt nisi. Phasellus turpis ante, sagittis vitae arcu et, malesuada vulputate enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non tempor lacus, non scelerisque metus. Cras interdum nunc non mauris dignissim sollicitudin. Suspendisse quis massa ut massa porta feugiat. Cras vel dignissim augue, a sollicitudin nibh. Vestibulum tincidunt metus et elit feugiat tincidunt id ac est. In id posuere ante, sit amet dignissim massa. Suspendisse luctus sit amet erat nec rhoncus. Nullam lacus felis, faucibus vitae tellus non, vehicula fringilla mi. Vivamus diam velit, pellentesque laoreet pulvinar nec, cursus ac purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed blandit tortor id mattis vulputate. Phasellus quam sem, iaculis id massa pretium, commodo mollis est. Praesent semper gravida condimentum. Fusce sodales vel nisl ut varius. Quisque tortor libero, venenatis non magna id, tincidunt vestibulum eros. Ut ultricies libero ligula, sit amet mattis nibh tristique eget. Nullam fermentum libero neque, a elementum dolor rutrum sed. Proin at odio elementum, tincidunt massa sed, efficitur massa. Suspendisse sodales accumsan lectus, non dignissim sapien consequat sed. Nunc velit mauris, molestie in tellus ullamcorper, vehicula hendrerit massa.';

const numberOfWords = lorem.split(' ').length;
console.log(numberOfWords);
const numberOfUniqueWords = [...new Set(lorem.split(' '))];
console.log(numberOfUniqueWords);

let indexSearch = 0;
let contadorDePalabras = 0;

while (indexSearch > -1) {
  if (lorem.indexOf('et', indexSearch) > -1) {
    contadorDePalabras++;
    indexSearch = lorem.indexOf('et', indexSearch) + 1;
  } else {
    break;
  }
}
console.log(contadorDePalabras);

//b2
let phraseToCheck = [
  'A man, a plan, a canal, Panama!',
  'Amor, Roma',
  'race car',
  'stack cats',
  'step on no pets',
  'taco cat',
  'put it up',
  'Was it a car or a cat I saw?',
  "No 'x' in Nixon",
];

//Cadena tal como viene
console.log('Cadena como viene');
phraseToCheck.forEach((value, index) => {
  let largoCadena = value.length;
  let primeraMitad,
    segundaMitad = '';
  if (largoCadena % 2 === 0) {
    primeraMitad = value.slice(0, largoCadena / 2 - 1);
    segundaMitad = value.slice(largoCadena / 2, value.length);
  } else {
    largoCadena = value.length - 1;
    primeraMitad = value.slice(0, largoCadena / 2);
    segundaMitad = value.slice(largoCadena / 2 + 1, largoCadena + 2);
  }
  console.log('item', value);
  if (primeraMitad == segundaMitad.split('').reverse().join('')) {
    console.log('Verdadero');
  } else {
    console.log('Falso');
  }
});

//Limpiando espacios en blanco
console.log('Limpiando espacios y pasando todo a minuscula');
phraseToCheck.forEach((value, index) => {
  value = value.split(' ').join('');
  let largoCadena = value.length;
  let primeraMitad,
    segundaMitad = '';
  if (largoCadena % 2 === 0) {
    primeraMitad = value.slice(0, largoCadena / 2 - 1);
    segundaMitad = value.slice(largoCadena / 2, value.length);
  } else {
    largoCadena = value.length - 1;
    primeraMitad = value.slice(0, largoCadena / 2);
    segundaMitad = value.slice(largoCadena / 2 + 1, largoCadena + 2);
  }

  console.log('item', value);
  if (
    primeraMitad.toLowerCase() ==
    segundaMitad.split('').reverse().join('').toLowerCase()
  ) {
    console.log('Verdadero');
  } else {
    console.log('Falso');
  }
});
