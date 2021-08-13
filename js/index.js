// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Ayrton';

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The drivers's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Carlos';

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
} else {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters`
    );
  } else {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
    );
  }
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driverName1 = '';
let driverName2 = '';

for (let i = 0; i < hacker1.length; i++) {
  driverName1 += hacker1[i] + ' ';
}
console.log(driverName1.toUpperCase());

for (let i = 0; i < hacker2.length; i++) {
  driverName2 += hacker2[i] + ' ';
}
console.log(driverName2.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseHacker1 = '';
let reverseHacker2 = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseHacker1 += hacker1[i];
}
console.log(reverseHacker1);

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker2 += hacker2[i];
}
console.log(reverseHacker2);

// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker1 === hacker2) {
  console.log('What?! You both have the same name?');
} else {
  if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
  } else {
    console.log('Yo, the navigator goes first definitely.');
  }
}

// Bonus

// Generate 3 paragraphs. Store the text in a variable type of string.
const loremParagraph = `
amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan interdum molestie. Sed dictum porta vestibulum. Donec posuere neque at nisi ornare, in semper ex luctus. Pellentesque volutpat cursus leo, eget tristique nisl elementum sed. Praesent viverra mauris metus, rutrum mattis nulla vulputate eu. Duis nunc ex, porta vel tristique quis, molestie in risus. Aenean condimentum quis odio laoreet rhoncus. Aenean dictum tincidunt tellus, ut laoreet elit. Curabitur sit amet nisi ac turpis feugiat faucibus vitae vitae lacus. Donec id finibus metus. Duis gravida purus gravida quam aliquet efficitur. Etiam pellentesque imperdiet est ac ultricies. Pellentesque sit amet tincidunt mauris, eget scelerisque magna. Curabitur vel bibendum erat. Ut dapibus eros velit, in eleifend dolor congue non.
Nam fermentum, metus sit amet posuere varius, augue sapien elementum dolor, vel facilisis lacus quam vel lectus. Nunc ornare magna in leo euismod gravida. Nulla facilisi. Fusce quis turpis sapien. In sodales posuere sem ac faucibus. Morbi lacinia sodales nunc quis varius. Vestibulum pretium metus ligula, ac rhoncus urna condimentum quis. Nunc non pulvinar ante. Nulla facilisi. Nullam ut orci ligula. Suspendisse potenti. Maecenas ut elit vitae arcu bibendum blandit vitae venenatis enim. Fusce non massa at augue euismod laoreet at at tortor. Nulla a velit id tortor blandit fermentum a et tortor.
Maecenas congue felis ac leo convallis consequat. Sed nunc leo, laoreet nec placerat eget, egestas id ipsum. Quisque vitae commodo libero. Morbi vehicula imperdiet ipsum. Mauris et fringilla ligula, nec dictum nunc. Sed odio ex, imperdiet at massa in, fermentum pulvinar urna. Ut sollicitudin dapibus commodo. Aliquam rutrum, metus sit amet gravida consectetur, risus enim dapibus tortor, sed vulputate ante felis nec quam. Aenean a turpis eget leo rhoncus aliquet. Proin euismod consectetur felis, vel lobortis dolor facilisis a. Curabitur eu molestie libero. Praesent vel metus sed dolor semper faucibus. Donec sapien quam, cursus non fermentum a, gravida quis tortor.
`;

// Make your program count the number of words in the string.
var pattern = new RegExp(/[a-zA-Z]+/gi);
var wordsCount = loremParagraph.match(pattern).length;

console.log(`The numbers of words are: ${wordsCount}`);

// Make your program count the number of times the Latin word et appears.
var pattern = new RegExp(/\b et /gi);
var count = loremParagraph.match(pattern).length;

console.log(
  `The number of times the word 'et' appears in the paragraph are ${count} times`
);

// Missing Bonus 2
