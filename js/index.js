console.log("I'm ready!");

// Iteration 1: Names and Input

// 1.1
let hacker1 = 'Colin McRae';

// 1.2
console.log("The driver's name is " + hacker1);

// 1.3
let hacker2 = 'Carlos Sainz';

// 1.4
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// 2.1
if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker1.length < hacker2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.'
  );
} else {
  console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!');
}

// Iteration 3: Loops

// 3.1
let spacedName = '';
spacedName = hacker1.split('').join(' ');
console.log(spacedName.toUpperCase());

// 3.2
console.log(hacker2.split('').reverse().join(''));

// 3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// Bonus 1
let lorem =
  'Integer pharetra sit amet sem ac pharetra. Nullam vel accumsan metus. Nulla vel luctus orci. Cras semper ac sapien eget molestie. Ut posuere sapien ut sapien vulputate, sed posuere sapien sodales. Donec a dignissim neque. Curabitur facilisis vulputate mi, nec suscipit augue pretium eget. Sed eu tempus dui. Nunc sit amet mi a urna accumsan suscipit. Praesent ut magna venenatis, rhoncus urna et, consequat arcu. Suspendisse eros ante, laoreet non dolor a, vulputate aliquam magna. Praesent euismod pretium risus vitae varius. Integer eu augue ac massa placerat euismod. Morbi luctus, sem eu fringilla commodo, elit urna viverra augue, ut ultricies nibh lacus vitae leo.';
let words = 1;

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === ' ') {
    words++;
  }
}
console.log('Your lorem has ' + words + ' words!');
