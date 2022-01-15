// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Alberto';
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}.`);
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Alex";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N".
let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ".
let navigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorName += hacker2[i];
}
console.log(navigatorName);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log('Yo, the navigator goes first definitely.');
} else if (hacker1 = hacker2) {
  console.log('What?! You both have the same name?');
}

// Bonus:
/*
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula lacinia, tempor augue consequat, suscipit orci. Donec commodo scelerisque congue. Fusce tellus nunc, maximus sed diam ac, fringilla facilisis ligula. Fusce viverra facilisis felis, non feugiat nisl ultricies nec. Sed a est id nulla sodales tincidunt lobortis non felis. Maecenas mollis mi nec eros molestie tristique. Morbi eget fringilla risus. Fusce mi ex, rutrum at magna quis, aliquet elementum sem. Morbi arcu felis, eleifend sit amet tortor interdum, consequat convallis nibh. Suspendisse eget mollis neque. Morbi congue aliquam elementum. Curabitur risus mauris, convallis in ipsum eleifend, scelerisque vestibulum dolor. Praesent et elit sollicitudin nulla dictum maximus. Phasellus feugiat justo dignissim libero fermentum fermentum.

Pellentesque rutrum eget augue quis tristique. Praesent sit amet luctus elit. Integer faucibus nec ligula a scelerisque. Aliquam ut quam tristique, mattis erat et, convallis tortor. Nunc urna purus, convallis vitae vehicula at, dictum et mi. Sed pretium lacus a libero volutpat rhoncus. Donec condimentum pellentesque maximus. Curabitur sodales nisi massa, eget tempor ex hendrerit ac. Nullam eu nunc vel purus congue gravida. Maecenas ac fringilla quam. Morbi sagittis sapien a purus maximus semper. Fusce fermentum felis eros, sit amet tincidunt risus auctor non.

Pellentesque eget velit ac ante tincidunt iaculis ut a tellus. Nunc pellentesque congue semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vulputate auctor ultricies. Proin sit amet semper ex. Quisque nec interdum tortor. Mauris maximus, neque nec sollicitudin dignissim, dolor nunc placerat lectus, a dictum felis mi sed quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`;

let words = text.split(" ");
let wordsCount = 0;
let etCount = 0;

for (let i = 0; i < words.length; i++) wordsCount++;
for (let i = 0; i < words.length; i++) {
  if (words[i].match("et")) etCount++;
}

console.log(wordsCount);
console.log(etCount);