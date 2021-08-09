// Iteration 1: Names and Input

const hacker1 = 'Miguel';
console.log(`The driver´s name is ${hacker1}.`);

const hacker2 = 'Stephen';
console.log(`The Navigator´s name is ${hacker2}.`);

// Iteration 2: Conditionals

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker1Length < hacker2Length) {
  `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`;
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2Length} characters!`
  );
}

// Iteration 3: Loops

// 3.1

let hacker1UpperCase = hacker1.toUpperCase();

let hacker1space = '';

for (let i = 0; i < hacker1UpperCase.length; i++) {
  hacker1space += hacker1UpperCase.charAt(i) + ' ';
}

// 3.2

let reversed = '';
for (var i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}

// 3.3

const lexicograph = hacker1.localeCompare(hacker2);

if (lexicograph < 0) {
  console.log(`The driver's name goes first.`);
} else if (lexicograph > 0) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// BONUS TIME!!!

// BONUS TIME 1

// Generate 3 Paragraphs
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non porttitor turpis. Aenean non augue nec nisi lacinia commodo. Aenean tincidunt lectus at justo dictum dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris sed lorem a massa congue sodales. Curabitur et dui ut tortor ullamcorper interdum vel nec urna. Donec lobortis turpis et massa porttitor, nec convallis dui molestie.
  Curabitur mauris erat, rutrum non dolor ut, porttitor lobortis arcu. Curabitur eu condimentum ex, at convallis enim. In sed facilisis metus. Sed eleifend metus quis aliquam accumsan. Integer eget diam tincidunt lorem tincidunt fringilla. Sed ut sem interdum, pretium odio eget, dictum dolor. Pellentesque a nisl augue. Donec placerat vulputate volutpat. Nulla pulvinar, orci eget finibus faucibus, dolor mi semper lectus, non finibus libero nisl eget ligula.
  Suspendisse dui neque, faucibus a aliquet ut, ornare ut erat. Maecenas venenatis, ex sit amet iaculis suscipit, est risus facilisis mauris, non tempor orci magna vitae nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus pharetra, justo quis mollis condimentum, sapien diam tincidunt ante, vel fermentum nisi nulla et sem. Fusce erat libero, suscipit eu bibendum ac, vulputate eget mi. Praesent sollicitudin felis nec nunc dapibus imperdiet. Nam iaculis erat facilisis imperdiet vestibulum. Vestibulum lobortis tempor ante, non pharetra nibh congue eget. Donec tincidunt volutpat massa, a faucibus lacus. Nullam pulvinar mollis elit ultrices sodales.`;

// Number of words in the string
let count = 0;
for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === ' ') {
    count += 1;
  }
}
console.log(count);

// number of times 'et' appears
let count = 0;
for (let i = 0; i < paragraph.length; i++) {
  if (
    paragraph[i] === ' ' &&
    paragraph[i + 1] === 'e' &&
    paragraph[i + 2] === 't' &&
    paragraph[i + 3] === ' '
  ) {
    count += 1;
  }
}

// BONUS TIME 2

function checkPhrase(phraseToCheck) {
  let lowerCase = phraseToCheck.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] !== lowerCase[lowerCase.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
