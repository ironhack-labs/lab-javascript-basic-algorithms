// Iteration 1: Names and Input */
const hacker1 = 'Kseniia';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Leandra';
console.log(`The driver's name is ${hacker2}`);




// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops
let upperCase = '';

for (let i = 0; i <= hacker1.length; i++) {
  upperCase += hacker1[i].toUpperCase() + ' ';
  console.log(upperCase);
}

let nameVerse = '';
const lastIndex = hacker2.length - 1;
for (let i = lastIndex; i >= 0; i--) {
  nameVerse += hacker2[i];
console.log(nameVerse);
}

if (hacker1.slice(1) > hacker2.slice(1)) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.slice(1) < hacker2.slice(1)) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}


//Bonus 1:
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum ut sem vel auctor. Maecenas malesuada turpis non odio faucibus, sed dictum diam posuere. Morbi mattis ante et erat lacinia iaculis. Donec ac pharetra augue. Sed iaculis ipsum vel mauris pellentesque, nec gravida arcu varius. Curabitur feugiat accumsan magna, nec placerat neque porta viverra. Ut augue nisi, bibendum sed leo et, lobortis rutrum dui. Vivamus porttitor aliquam tellus, in eleifend felis luctus et. Donec pharetra diam eget magna mollis imperdiet. Integer rhoncus purus condimentum lobortis viverra. Proin at sem odio. Integer magna risus, tincidunt quis fermentum vitae, congue in ipsum. Ut tincidunt sem a sodales ultrices. Nunc pretium est eu tortor egestas, vel ultricies ipsum venenatis.
Donec odio turpis, euismod sagittis orci ut, faucibus viverra dolor. Proin in interdum quam. Fusce nibh dui, porttitor a est vitae, luctus facilisis ipsum. Pellentesque fringilla tristique magna accumsan condimentum. Vestibulum quis nibh varius, molestie tellus id, dignissim turpis. Aliquam dignissim metus nunc, id fermentum neque facilisis at. Phasellus feugiat nisl tincidunt odio condimentum volutpat. Morbi felis nulla, feugiat nec nulla vel, euismod fermentum nisi. Donec vel consectetur nunc, nec viverra nisi. Nulla interdum tellus dui, id volutpat dui vulputate et. Morbi gravida massa quis risus convallis rhoncus. Morbi lobortis auctor velit. Aenean vehicula libero erat, eu vulputate tellus mollis sit amet. Nullam porttitor dui ut mi finibus dignissim. Pellentesque eu sodales purus.
Vestibulum vehicula rhoncus egestas. Donec aliquet magna et elit laoreet ultrices. Nullam elementum risus vel ipsum eleifend, sit amet auctor lorem eleifend. Praesent sodales consectetur nibh vehicula dapibus. Mauris felis felis, aliquet a velit eu, sollicitudin luctus tortor. Integer sed nulla nec turpis lacinia rutrum nec nec sem. Quisque ultricies pharetra turpis, quis rhoncus eros dapibus a.`

//Solution #1
let nOfWords = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === ' ') {
    nOfWords ++;
  }
}

//Solution #2
let wordsArr = longText.split(' ');
console.log(wordsArr.length);



//'et' count
let countEts = 0;

for (let i = 0; i < longText.length; i++) {
  if (wordsArr[i] === 'et') {
    countEts ++;
  }
}

// let sum = 0; 
// for (let i = 0; i < longText.length; i++) {
//   const twoLetters = longText[i] + longText[i + 1];
  
//   if (twoLetters === 'et') {
//     sum++;
//   }
// }
// console.log(sum);

// 1. Declare a variable where i place my 'et' word count, starts from 0.
// 2. Loop through the string, declare a variable twoLetters as our word word 'et' consists of two letters.
// 3. Then check the condition if twoLetters === 'et, if yes, then i add it to my sum.

//Bonus 2

let phraseToCheck = 'race car';
let stringWithoutSpaces = '';


for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== ' ') {
    stringWithoutSpaces += phraseToCheck[i];
  }
}

let stringReversed = '';

for (let i = stringWithoutSpaces.length - 1; i >= 0; i--) {
  stringReversed += stringWithoutSpaces[i];
}

// More advanced
const reversed = stringWithoutSpaces.split("").reverse().join("");
console.log(reversed);

if (stringReversed === stringWithoutSpaces) {
  console.log(`String is a palidrome`);
} else {
  console.log('String is NOT a palidrome');
}


