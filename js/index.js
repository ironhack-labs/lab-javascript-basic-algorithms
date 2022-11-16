console.log("I'm ready!")

// Iteration 1: Names and Input

const hacker1 = 'Paloma'
console.log(`The driver´s name is ${hacker1}`)
const hacker2 = 'Sergio'
console.log(`The driver´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops

let hacker1Spacing = ''
for (let i = 0; i < hacker1.length; i++) {
    hacker1Spacing += hacker1[i] + ' ';
}
console.log(hacker1Spacing.toUpperCase().slice(0,-1));

let hacker2Reverse = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

// Option 1
for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log(`The driver's name goes first.`);
        break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log(`Yo, the navigator goes first definitely`);
        break;
    } else {
        console.log(`What?! You both have the same name?`);
        break;
    }
}

//Option 2
if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely`);
} else {
    console.log(`What?! You both have the same name?`);
}

//Bonus 1
const longString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat non quam ut consectetur. Cras velit nisl, ultrices vitae eros volutpat, volutpat aliquam dolor. Donec iaculis mauris tellus, suscipit ultricies diam congue eget. Sed consequat ornare purus, eget auctor libero molestie in. Suspendisse a magna condimentum, vulputate tortor dignissim, finibus augue. Ut rutrum, nisl lobortis aliquet tempus, velit magna elementum nisl, id suscipit lorem est ut augue. Nunc nec ornare odio, ac lobortis leo. In ut molestie leo. Quisque at lacus nulla.

Vivamus a justo justo. Cras dictum, enim in lobortis malesuada, ex tortor ultricies eros, a fermentum justo augue et lectus. Praesent aliquam dui et ligula aliquet congue ornare eu eros. Maecenas non euismod ante, quis fermentum ex. Aenean convallis eros ac rutrum faucibus. Fusce suscipit suscipit lectus. Praesent molestie tortor placerat placerat elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ullamcorper, sapien ut euismod maximus, velit ipsum volutpat ante, sed gravida velit metus in nunc.

Duis dapibus, lorem id consectetur interdum, justo diam imperdiet ligula, quis bibendum odio nisl non lacus. Sed eget nulla faucibus, posuere libero quis, facilisis risus. Nunc laoreet fringilla mi quis venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et dolor elit. Nulla a mattis nibh. Duis et ex neque. Sed vitae vulputate libero, vel accumsan nisl. Pellentesque sed leo tempus, auctor est non, aliquam massa. Ut eget ex erat.`

let wordCounter = 0

for (let i = 0; i < longString.length; i++) {
  if (longString[i] === " " && longString[i + 1] !== " " || longString[i] === "." && longString[i + 1] !== " ") {
      wordCounter += 1;
  }
}
console.log(wordCounter);

let etCounter = 0

for (let i = 0; i < longString.length; i++) {
  if (longString[i] === "e" && longString[i + 1] === "t" && longString[i-1] === " " && (longString[i + 2] === " " || longString[i + 2] === ",") ) {
      etCounter += 1;
  }
}
console.log(etCounter);

//Bonus 2
const phraseToCheck = "Hello man!"

let phraseAllTogether = ""

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== " " && phraseToCheck[i] !== "," && phraseToCheck[i] !== "." && phraseToCheck[i] !== "!" && phraseToCheck[i] !== "?" && phraseToCheck[i] !== "'") {
    phraseAllTogether += phraseToCheck[i].toLowerCase();
  }
}

let answer = true;

for (let i = 0; i < phraseAllTogether.length; i++) {
  if (phraseAllTogether[i] !== phraseAllTogether[phraseAllTogether.length - 1 - i]) { 
      answer = false;
      break;
  } 
 }

if (answer) {
  console.log(`The phrase "${phraseToCheck}" is a palindrome`)
} else {
  console.log('Keep looking for a palindrome');
}