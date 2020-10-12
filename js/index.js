// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Francisco';
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Isabel';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`he navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
  console.log('Error')
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let capName = '';
for (char of hacker1.toUpperCase()){
  if (char === hacker1[-1]){
    capName +=  char;
  }
  capName += char + ' ';
}
console.log(capName);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = '';
for (i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (hacker1.localeCompare(hacker2) === -1 ){
  console.log(`The driver's name goes first.`);
} else if (hacker2.localeCompare(hacker1) === 1 ) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  consoel.log('What?! You both have the same name?');
}

// Bonus 1:
// Go to lorem ipsum generator and:
// - Generate 3 paragraphs. Store the text in a variable type of string.
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus eget augue vel euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras id faucibus turpis, a scelerisque lorem. Cras et pretium enim. Duis condimentum, felis sit amet vestibulum consequat, lectus ante gravida lacus, a eleifend tellus augue in nulla. Nullam at porta est, ut tempus mauris. Nulla faucibus dolor in dolor cursus porttitor. Vivamus nec felis ut nisi scelerisque lacinia ut bibendum arcu.

Nam semper odio ac lorem hendrerit efficitur. Suspendisse quis feugiat nunc, eget pharetra nibh. Ut at mauris magna. Nulla ut fermentum orci. Ut nec nibh vel purus feugiat mattis in quis mi. Fusce viverra tristique turpis at cursus. Aliquam at massa turpis. Pellentesque ut tellus pellentesque, pharetra lorem commodo, accumsan mi. Quisque non sem a urna laoreet commodo eu sed magna. Aenean lobortis interdum nulla, sit amet viverra lacus.

Cras nibh enim, pulvinar nec cursus et, elementum euismod tellus. Cras scelerisque ut lacus a mollis. Maecenas ac hendrerit mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum lorem eu arcu ultrices egestas. Aliquam viverra vulputate erat, ut volutpat ante suscipit id. Pellentesque non tempus turpis, et efficitur justo. Cras lobortis justo non purus mattis congue.`;

// - Make your program count the number of words in the string.
console.log('Number of words in the string: ', lorem.split('\n\n').join(' ').split(' ').length);
// - Make your program count the number of times the Latin word et appears.
  console.log('Number of times "et" appears: ', lorem.split(' et').length - 1);
//Bonus 2:
//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.
