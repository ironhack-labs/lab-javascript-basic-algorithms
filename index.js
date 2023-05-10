// Iteration 1: Names and Input

const hacker1 = 'Philippe';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Paula';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const driverCount = hacker1.length;
const navigatorCount = hacker2.length;
if (driverCount > navigatorCount) {
  console.log(
    `The driver has the longest name, it has ${driverCount} characters.`
  );
} else if (driverCount < navigatorCount) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorCount} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigatorCount} characters.`
  );
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let capitals = '';
for (let i = 0; i < hacker1.length; i++, capitals += ' ') {
  capitals += hacker1[i].toUpperCase();
}

console.log('drivers capitals:', capitals);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let reverse = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}
console.log('reverse:', reverse);

// 3.3 Depending on the lexicographic order of the strings, print:

const comparisonResult = hacker1.localeCompare(hacker2);

if (comparisonResult < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
  console.log('Yo, the navigator goes first, definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// Bonus Time!
// Bonus 1:

const longText =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae dui vitae felis ullamcorper imperdiet. Donec egestas ipsum at enim luctus rutrum. Nam sit amet fringilla mauris, a sodales enim. Pellentesque rhoncus mollis leo, eu iaculis turpis molestie quis. Quisque convallis accumsan nulla eget efficitur. Ut ornare libero tellus, at ornare purus finibus consequat. Curabitur eleifend vestibulum ante finibus lobortis. Quisque vitae sodales felis, et pellentesque tortor. Aenean vel condimentum magna. Nullam euismod eu nunc ornare pulvinar. Aenean cursus rutrum sem scelerisque facilisis. Nullam accumsan tellus sem, quis aliquam lacus sagittis tristique. Ut elementum vulputate massa, eu luctus tellus commodo vitae. Ut sodales, lorem non placerat feugiat, tortor magna vehicula felis, vel pharetra leo mauris eget felis. Donec quis purus vel est venenatis bibendum eu at nisl.

Vivamus vel tristique augue. Aenean pulvinar dolor et cursus ullamcorper. Etiam sit amet risus tortor. Nulla dapibus, leo eget congue malesuada, augue tellus sagittis risus, at semper enim eros ac erat. Etiam ultricies quam nibh, quis consectetur sem lacinia vel. Fusce vitae convallis elit, non fermentum nulla. Donec sagittis, lorem eget aliquam condimentum, turpis lorem feugiat sem, eu fringilla lacus odio eu ipsum. Fusce sollicitudin arcu id lacus rhoncus laoreet. Vestibulum imperdiet dolor tortor, at dignissim tortor viverra at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vestibulum nisi sit amet erat feugiat, non placerat mi bibendum. Praesent lacinia, nulla nec malesuada placerat, massa lectus porta metus, ac facilisis enim turpis non leo. Cras vitae urna vitae libero tristique varius sit amet iaculis tellus. Duis volutpat rutrum nibh in sagittis. Nam ac dui lacus.

Mauris dignissim non ex quis vestibulum. Sed efficitur risus ultricies, tincidunt dui non, bibendum ipsum. Integer ornare odio orci, sed feugiat eros sodales vel. Morbi condimentum arcu erat, at pellentesque nibh commodo quis. Nullam et leo eget purus auctor eleifend. Fusce semper at mauris ut suscipit. Aenean lacinia laoreet enim sit amet tempus. Nunc pulvinar sit amet orci quis consectetur. Maecenas fermentum tristique condimentum. Donec neque lorem, elementum vel nibh ac, pulvinar euismod erat. Etiam pellentesque quam arcu, vitae dictum nisl pellentesque suscipit. Integer sodales, justo non malesuada lacinia, lectus mauris faucibus tortor, ac vestibulum tortor quam at ipsum. Phasellus vulputate tempor mollis. Nullam viverra in turpis id ultricies.`.toLowerCase();

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

//     Make your program count the number of words in the string.
let wordCounter = 0;
let isWordFound = false;

for (let i = 0; i < longText.length; i++) {
  if (isLetter(longText[i].toLowerCase())) {
    if (!isWordFound) {
      wordCounter++;
      isWordFound = true;
    }
  } else {
    isWordFound = false;
  }
}

console.log('How many words found?', wordCounter);

//     Make your program count the number of times the Latin word et appears.

let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (
    !isLetter(longText[i - 1]) &&
    longText[i] === 'e' &&
    longText[i + 1] === 't' &&
    !isLetter(longText[i + 2])
  ) {
    etCount++;
  }
}

console.log("number of 'et':", etCount);
