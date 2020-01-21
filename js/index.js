// Iteration 1

const hacker1 = 'José';

console.log("The driver's name is " + hacker1);

const hacker2 = 'Sonia';

console.log(`The navigator's name is ${hacker2}`);

// console.log("The navigator's name is %s", hacker2);

// Iteration 2

/*
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
}

// Iteration 3

// 3.1

let auxiliaryName = '';

for (let i = 0; i < hacker1.length; i++) {
  auxiliaryName += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    auxiliaryName += ' ';
  }
}

console.log(auxiliaryName);

// Alternative solution to 3.1

let alternativeAuxiliaryName = hacker1
  .toUpperCase()
  .split('')
  .join(' ');

console.log(alternativeAuxiliaryName);

// 3.2

let auxiliaryReverseName = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
  auxiliaryReverseName += hacker1[i];
}

console.log(auxiliaryReverseName);

// Alternative

let alternativeAuxiliaryReverseName = hacker1
  .split('')
  .reverse()
  .join('');

console.log(alternativeAuxiliaryReverseName);

// 3.3

/*
 */

const comparisonOrder = hacker1.localeCompare(hacker2);

if (comparisonOrder < 0) {
  console.log('Yo, the navigator goes first definitely.');
} else if (comparisonOrder > 0) {
  console.log("The driver's name goes first.");
} else {
  console.log('What?! You both have the same name?');
}

let auxiliaryLargestName;

if (hacker1.length > hacker2.length) {
  auxiliaryLargestName = hacker1;
} else {
  auxiliaryLargestName = hacker2;
}

for (let i = 0; i < auxiliaryLargestName.length; i++) {
  const iterationComparisonOrder = hacker1[i].localeCompare(hacker2[i]);
  if (iterationComparisonOrder > 0) {
    console.log("The driver's name goes first.");
    break;
  } else if (iterationComparisonOrder < 0) {
    console.log('Yo, the navigator goes first definitely.');
    break;
  } else {
    if (auxiliaryLargestName.length - 1 === i) {
      console.log('What?! You both have the same name?');
      break;
    }
  }
}

// Bonus

const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus porta malesuada. Mauris vel bibendum enim. Ut quis odio congue, pharetra lectus non, condimentum purus. Aenean ornare mattis maximus. Fusce sodales augue ante. Phasellus risus lacus, facilisis a viverra mollis, mattis sed justo. Maecenas ultricies vestibulum metus sit amet pellentesque. Proin in porta urna. Vivamus sit amet condimentum quam. Quisque porta magna et ornare gravida. Integer et euismod nulla, at feugiat magna.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eleifend sapien eget metus laoreet, blandit interdum nisi vulputate. Nulla nulla odio, convallis blandit ligula sed, rutrum molestie risus. Donec scelerisque bibendum felis nec eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et diam enim. Vivamus nec egestas enim. Integer ut dolor dignissim, feugiat turpis sed, interdum risus. Ut velit quam, sagittis et quam in, molestie elementum magna. Curabitur aliquet quam tellus, id efficitur dolor hendrerit vitae. Nullam eu venenatis risus, consequat tempor lacus. Ut id leo porta, varius nibh sed, iaculis ligula. Aenean pharetra ante ut justo tempus convallis.

Curabitur id ligula vitae tellus sagittis luctus. Phasellus sed mollis tellus. Fusce mattis mollis orci id viverra. Quisque a condimentum nulla, nec fringilla orci. Pellentesque at lacus a nibh tempus varius. Aenean vitae lobortis magna, eleifend pretium metus. In ultricies semper lorem, eu mollis augue tempor a. Vivamus vehicula non libero ullamcorper tempus. Nulla eu orci lorem. Sed quis pretium odio, ac tempus quam. Sed posuere egestas dui, sit amet dictum felis sodales et.`;

const numberOfWords = message
  .split('\n')
  .join(' ')
  .split(' ').length;

/*
const numberOfOccurencesOfEt = message
  .toLowerCase()
  .split('.')
  .join(' ')
  .split(',')
  .join(' ')
  .split(' et ')
  .length - 1;
*/

const auxiliaryArray = message
  .toLowerCase()
  .split('.')
  .join(' ')
  .split('?')
  .join(' ')
  .split(',')
  .join(' ')
  .split(' ');

let numberOfOccurencesOfEt = 0;

for (let word of auxiliaryArray) {
  if (word === 'et') {
    numberOfOccurencesOfEt++;
  }
}

console.log(numberOfOccurencesOfEt);

const phrase = 'step on no pets';

let isAPalindrome = true;

const sanitizedPhrase = phrase
  .toLowerCase()
  .split('.')
  .join(' ')
  .split('?')
  .join(' ')
  .split(',')
  .join(' ');

for (let i = 0; i < sanitizedPhrase.length; i++) {
  if (sanitizedPhrase[i] !== sanitizedPhrase[sanitizedPhrase.length - 1 - i]) {
    isAPalindrome = false;
  }
}

console.log(isAPalindrome);
