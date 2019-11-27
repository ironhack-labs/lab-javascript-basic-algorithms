// Iteration 1: Names and Input

const hacker1 = 'Reginaldo';
const hacker2 = 'Giulia';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver's has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let outPutDrivers = '';
for (let i = 0; i < hacker1.length; i += 1) {
  outPutDrivers += `${hacker1[i].toUpperCase()} `;
}
let nameWithSpaces = outPutDrivers.slice(0, outPutDrivers.length - 1);
console.log(nameWithSpaces);

let outPutNavigator = '';
for (let i = (hacker2.length - 1); i >= 0; i -= 1) {
  outPutNavigator += hacker2[i];
}
console.log(outPutNavigator);

// Bonus 3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log('The driver\'s name goes first.');
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// BONUS 01

let lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste doloremque aliquid animi molestiae! Reiciendis amet similique ad assumenda voluptatibus iusto possimus iure delectus doloribus, nisi blanditiis, rem harum vel illum.\n Culpa voluptatibus harum iure nisi! Aliquam porro sunt illum, dolorum unde, tempora corporis hic accusamus minus iure saepe, voluptate voluptates consectetur libero magni delectus. Quisquam optio provident vitae nihil exercitationem.\n Tempora blanditiis facilis officia ratione, nam cupiditate ut placeat voluptate fugiat ad magnam aut expedita, adipisci aspernatur nesciunt inventore cum officiis pariatur omnis obcaecati libero delectus nostrum. Totam, ut soluta! et'

let indices = [];
let elemento = ' ';
let idx = lorem.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = lorem.indexOf(elemento, idx + 1);
}

console.log(`The number of words is ${indices.length + 1}`);

function numOfWords (elemento, whereIsTheWord) {
  idx = lorem.indexOf(elemento);
  indices = [];
  while (idx != -1) {
    indices.push(idx);
    idx = lorem.indexOf(elemento, idx + 1);
  }
  console.log(`The number of 'et' in the ${whereIsTheWord} words is ${indices.length}`);
}

numOfWords ('Et ', 'start');
numOfWords (' et ', 'middle');
numOfWords (' et', 'end');

// Bonus 2:

let phraseToCheck = 'A man, a plan, a canal, Panam';
let phraseTemp = '';
let phraseNormal = '';
let phraseReverse = '';

phraseTemp = phraseToCheck.toLowerCase();
console.log(phraseTemp);

for (let i = 0; i < phraseTemp.length; i += 1) {
  switch (phraseTemp[i]) {
    case ' ':
    case '!':
    case ',':
    case '.':
    case '?':
    case "'":
    case '"':
    case ':':
    case '(':
    case ')':
    case ';':
      break;
    default:
      phraseNormal += phraseTemp[i];
  }
}

console.log(phraseNormal);

for (let i = phraseNormal.length - 1; i >= 0; i -= 1) {
  phraseReverse += phraseNormal[i];
}

console.log(phraseReverse);

if (phraseNormal === phraseReverse) {
  console.log('Yayyyy! It alive... It is indeed a palindrome!');
} else {
  console.log('Buuuuuu! Shit phraseeee!!!');
}

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".