// Iteration 1: Names and Input
const hacker1 = 'Fernanda'; //driver
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Matheus'; //navigator
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`,
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`,
  );
}

// Iteration 3: Loops
// 3.1
let upperCaseName = '';

for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    upperCaseName += hacker1[i].toUpperCase();
  } else {
    upperCaseName += hacker1[i].toUpperCase() + ' ';
  }
}

console.log(upperCaseName);

// 3.2
let reverseName = '';

for (let i = 0; i < hacker2.length; i++) {
  reverseName += hacker2[hacker2.length - 1 - i];
}

//Another way to write the code
// for(let i = hacker2.length - 1; i >= 0; i--) {
//   reverseName += hacker2[i]
// }

// 3.3
let order = hacker1.localeCompare(hacker2);

if (order === -1) {
  console.log("The driver's name goes first.");
} else if (order === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

//Bonus 1
// Go to the lorem ipsum generator website and:
// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium varius odio vitae dignissim. Etiam ut leo ipsum. Etiam consectetur vehicula odio a euismod. Integer diam eros, iaculis ut sodales ac, tincidunt ac sem. Phasellus placerat varius libero, at rutrum erat rhoncus ut. Nunc blandit pretium felis, ac auctor sapien laoreet eu. Proin ac dictum nunc. Donec vitae leo tortor. Sed pretium enim a mollis consectetur. Vivamus vitae lacus quis quam varius viverra. Nullam vel ex gravida, hendrerit est sit amet, pretium dui. Cras nec eros ipsum. Maecenas elementum volutpat tortor a faucibus. Aliquam et sapien justo. Vestibulum facilisis massa et mollis euismod. Nullam feugiat magna et erat varius mattis. Praesent sit amet pretium nibh, sit amet tincidunt tortor. Vivamus et sollicitudin elit, at accumsan dolor. Aenean justo nibh, varius sit amet euismod eu, tincidunt a est. Vivamus vel ligula facilisis, lobortis mauris at, lobortis ex. Donec luctus sagittis fringilla. Sed cursus metus nisl, a convallis nunc rhoncus vehicula. Etiam placerat rhoncus felis vel pellentesque. Donec molestie, dolor in pretium imperdiet, odio quam aliquam ipsum, eget mollis dui diam ut urna. Sed ac lacus ac lacus sagittis laoreet. Aenean a diam pretium, rutrum odio in, volutpat justo. Vestibulum massa lacus, tincidunt eget sollicitudin non, ornare eu urna. Nullam pulvinar ullamcorper aliquet. Phasellus eget nibh vulputate, feugiat neque eget, rutrum dolor. Suspendisse dignissim porta pretium. Quisque vitae mi enim. Nunc in placerat lacus. Quisque vel convallis turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vel tellus hendrerit, tristique felis a, fringilla mi. Sed condimentum ex ex, quis auctor massa vehicula in. Maecenas vestibulum, dolor a pellentesque dapibus, tellus elit laoreet elit, vel eleifend dolor turpis a tortor. Sed luctus sollicitudin venenatis. Integer at varius orci, et lobortis neque. Aliquam diam nisl, maximus nec lobortis at, condimentum eu tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

let counter = 0;
let etCounter = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === ' ') {
    counter++;
  }
  if (
    longText[i] === 'e' &&
    longText[i + 1] === 't' &&
    longText[i - 1] === ' ' &&
    longText[i + 2] === ' '
  ) {
    etCounter++;
  }
}
counter = counter + 1;

console.log(`The number of words in this text is ${counter}.`);
console.log(`The number of "et" words in this text is ${etCounter}.`);

//Another way to write the first part
//const counter = longText.split(" ").length

//Bonus 2
