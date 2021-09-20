// Iteration 1: Names and Input
let hacker1 = 'Zeynep';
console.log(`The driver's name is ${hacker1}`);
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Luis';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driverLength = hacker1.length;
console.log(driverLength);
let navLength = hacker2.length;
console.log(navLength);
if (driverLength > navLength) {
  let message = `The driver has the longest name, it has ${driverLength} characters`;
  console.log(message);
} else if (driverLength < navLength) {
  let message2 = `It seems that the navigator has the longest name, it has ${navLength} characters`;
  console.log(message2);
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}
// Iteration 3
let upCase = hacker1.toUpperCase();
let nameSplit = upCase.split(" ");
console.log(nameSplit);
// reverse hacker2

for (var i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}
let compare1 = hacker1.localeCompare(hacker2);
let compare2 = hacker2.localeCompare(hacker1);
if (compare1 === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (compare2 === 1) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1 Lorem Ipsum Generator
let text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur, nisi vestibulum vulputate venenatis, justo dui porta augue, quis egestas lectus diam ac tellus. Ut non augue nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce velit risus, laoreet id interdum eu, egestas non lectus. Nam est urna, tincidunt quis ornare at, congue eu eros. Nulla a elementum est. Morbi non porta augue, sit amet tincidunt libero. Sed eget nunc vel sem venenatis consectetur et a orci. In lacinia dignissim mauris, sed tempus diam euismod nec. Fusce molestie dictum diam eget scelerisque. Donec nec ullamcorper justo, eu luctus ipsum. Etiam volutpat elit quis tortor laoreet, sed malesuada orci lobortis.

In id lectus a magna vehicula rhoncus. Donec sagittis id est at hendrerit. Vestibulum id feugiat turpis. Etiam ante diam, dictum eu magna ut, commodo mattis ex. Praesent egestas neque at ex varius, volutpat porta quam maximus. Quisque rutrum ante sit amet ullamcorper hendrerit. Phasellus vitae purus nec metus congue interdum non et elit. Suspendisse in lorem tempor, tincidunt arcu non, tempus nisi. Nullam nec tortor finibus, ultrices metus quis, iaculis libero. Nullam pellentesque neque condimentum tortor lobortis, lacinia posuere sem pretium. Suspendisse eget diam sagittis, iaculis ex imperdiet, cursus odio.

Maecenas accumsan magna a est viverra condimentum. Sed ut dignissim ipsum, nec ultricies quam. Aenean laoreet nulla libero, quis fringilla elit fringilla vel. Maecenas sed tortor faucibus, eleifend neque vel, lacinia ligula. Curabitur a feugiat tortor, id efficitur lacus. Integer tincidunt ante eros, eu accumsan nulla condimentum ut. Nulla convallis vel mauris quis commodo. Aliquam ac felis id risus eleifend venenatis ut ac purus. Suspendisse a ipsum diam. Etiam malesuada tristique nisi ac tempus. `
count1 = text.split(" ");
console.log(count1.length);

// Count the number of times the Latin word et appears
let word = 'ed';
let count = 0;
// find if text has ed 
let index = text.indexOf(word);
// loop through index variable until indexOf is not negative - it means ed is in the text.Every time add 1 if you find ed to the count.
while (index !== -1) {
  count++;
  index = text.indexOf(word, index + 1);
}

console.log(`${word} appears ${count} times in the text.`);

// palindrome or not?

let str = 'Amor, Roma';
// get the total length of the words  
let totalLen = str.length;