// Iteration 1: Names and Input
var hacker1 = "SpongeBob";
var hacker2 = "Thormund";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
  }
  else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);    
  }
  else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
};

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
var driverUpCaseSeparated = hacker1.toUpperCase().split('').join(' ');
var navUpCaseSeparated = hacker2.toUpperCase().split('').join(' ');
console.log(driverUpCaseSeparated);
console.log(navUpCaseSeparated);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
var driverReversed = hacker1.split('').reverse().join(' ');
var navReversed = hacker2.split('').reverse().join(' ');
console.log(driverReversed);
console.log(navReversed);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
}
else if (hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely.`);
}
else if (hacker2 === hacker1) {
  console.log(`What?! You both have the same name?`)
}



// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
var loremIpsum = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus turpis, consequat ut egestas in, tincidunt ac dolor. Mauris et rutrum arcu. Donec tempor vehicula justo in pretium. Nullam aliquet pharetra enim, et maximus ante varius at. Morbi sed lectus commodo eros commodo facilisis nec quis ex. Sed non suscipit nunc, id blandit nibh. Mauris et eleifend erat. Integer eleifend velit mauris, eu faucibus est dapibus eget. Duis facilisis porta lectus, in congue dui molestie nec.

In sed magna vitae nisl cursus commodo ac quis tellus. Proin at nisl sed odio blandit dapibus vel quis nibh. Nunc finibus, nibh dictum pulvinar eleifend, nibh enim maximus mi, vel pharetra nibh nisl dapibus sapien. Nunc dictum risus leo. Donec quis ante et neque pellentesque euismod. Cras sed maximus nisl. Etiam eget hendrerit elit, et sagittis risus. Mauris suscipit nunc augue, sodales interdum odio mattis non. Morbi urna nisl, scelerisque nec risus id, accumsan ultricies elit.

Vivamus tempor condimentum orci, at tempus nisi ultrices at. Etiam mollis cursus augue, id auctor libero pulvinar quis. Pellentesque pulvinar cursus velit ac interdum. Quisque auctor felis in pharetra tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui odio, sodales id eros eu, consequat laoreet purus. Nulla cursus posuere malesuada. Nulla dignissim, ipsum ac tempus mollis, velit ipsum convallis metus, ac consectetur leo orci id dolor. Nulla facilisis malesuada mauris at sagittis. Cras vel dignissim mi. `;

// Make your program count the number of words in the string.
var wordCount = loremIpsum.split(' ').length;
console.log(`loremIpsum string has ${wordCount} words`);

// Make your program count the number of times the Latin word et appears.
var etWordcount = loremIpsum.match(/et/gi).length;
console.log(etWordcount);