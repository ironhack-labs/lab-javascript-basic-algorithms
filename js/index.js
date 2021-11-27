// Iteration 1: Names and Input
let hacker1 = 'Olena';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Ricard';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let upperCased = hacker1.toUpperCase();
console.log(upperCased);

//let totalHacks = hacker1 + hacker2;
//console.log(totalHacks)

let spacedName = '';

for (let letter of upperCased) {
  console.log(letter);
  spacedName += letter + ' ';
}
console.log(spacedName);
//printing reverse hacker2 = 'Ricard';

let reversedNavigator = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigator += hacker2[i];
}
console.log(reversedNavigator);
//comparing names

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

//Bonus 1:

let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tempus lectus. Nulla lobortis, libero et interdum euismod, mauris quam venenatis quam, in iaculis nisl risus ultrices nunc. In tincidunt sit amet diam sodales consequat. Fusce eu mi mattis neque hendrerit scelerisque et eu velit. Nullam dignissim id lectus ut dignissim. Nulla bibendum malesuada faucibus. Vestibulum sed congue arcu. Ut sed fringilla ipsum. Curabitur suscipit tellus lectus, vel rutrum mauris congue a. Vivamus nec lorem quis ante tempus consequat vel non felis. In accumsan sapien enim. Fusce sit amet velit et leo ullamcorper finibus. Curabitur fermentum nisi quis tellus scelerisque ornare. Vivamus vestibulum ultricies porta. Phasellus felis sapien, posuere vitae massa vitae, pulvinar mollis enim. Donec velit ex, posuere a elit et, euismod auctor ipsum. Integer ullamcorper, ante vel mattis ultrices, arcu felis vestibulum nisl, laoreet aliquet enim sem sit amet nibh. Praesent sit amet nibh commodo, hendrerit urna quis, ornare lorem. Morbi nulla erat, dictum et dictum at, convallis sed augue. Aliquam sollicitudin varius eros, eget pellentesque ante vestibulum tincidunt. Curabitur elementum eget dolor hendrerit bibendum. Suspendisse nec elit feugiat, ultrices diam a, gravida nunc. Duis urna sapien, rhoncus vel semper sit amet, tincidunt ut leo. Nullam at urna ultricies nisl hendrerit dignissim. Vestibulum consequat massa elit. Ut fringilla nec orci at euismod. Nulla venenatis fringilla ante at imperdiet. Suspendisse imperdiet ligula maximus mauris eleifend, quis tempus nulla semper. Suspendisse eros nunc, pretium vitae tempor sodales, lobortis sed mi. Phasellus lacinia erat dignissim, sagittis urna vel, eleifend purus. Ut hendrerit consequat arcu ut ullamcorper. Nullam aliquet, tellus vel vestibulum viverra, arcu justo tempus dui, quis vestibulum magna velit in arcu. Integer ornare semper aliquam. Nulla elementum, nulla sed mollis imperdiet, lectus massa dapibus leo, maximus ullamcorper dolor enim sed mauris.';

let wordsNum = 1;

for (let letter of lorem) {
  if (letter === ' ') {
    wordsNum++;
  }
}
console.log(wordsNum);

const wordToSearch = ' et ';

let etNum = 0;

let i = 0;
while (lorem.indexOf(wordToSearch, i) !== -1) {
  //the iterator stops when we will arrive the last ' et '
  etNum++;
  i = lorem.indexOf(wordToSearch, i) + 1;
}
console.log(etNum);

//Bonus 2

let phraseToCheck = 'Amor, Roma';
phraseToCheck = phraseToCheck.toLowerCase();

for (let index = 0; index < phraseToCheck.length / 2; index++) {
  let firstChar = phraseToCheck.charAt(index);
  let lastChar = phraseToCheck.charAt(phraseToCheck.length - 1 - index);

  if (
    firstChar !== lastChar &&
    firstChar >= 'a' &&
    firstChar <= 'z' &&
    lastChar >= 'a' &&
    lastChar <= 'z'
  ) {
    console.log('This is not a palindrom!');
    break;
  }
}
