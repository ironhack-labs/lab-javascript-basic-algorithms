// Iteration 1: Names and Input

const driver = `Maxim`;
console.log(`The drivers's name is ${driver}`);

const navigator = `Sophie`;
console.log(`The navigator's name is ${navigator}`);

// Iteration 2: Conditionals

function checkLength() {
  return driver.length > navigator.length
    ? `The driver has the longest name, it has {hacker1.length} characters`
    : navigator.length > driver.length
    ? `It seems that the navigator has the longest name, it has ${navigator.length} characters`
    : `Wow, you both have equally long names, ${driver.length} characters!`;
}

console.log(checkLength(driver, navigator));

// Iteration 3: Loops

// 3.1

function driversName(name) {
  return name.toUpperCase().split('').join(' ');
}
console.log(driversName(driver));

//3.2

//Solution 1, methods
function reverseDriver(name) {
  return name.split('').reverse().join('');
}
console.log(reverseDriver(driver));

//Solution 2, loops
function reverseLoop(name) {
  let reversed = '';
  for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i];
  }
  return reversed;
}
console.log(reverseLoop(driver));

//3.3

function orderingOfNames(driver, navigator) {
  if (driver[0] > navigator[0]) {
    return 'Drivers name go first';
  } else if (driver === navigator) {
    return 'What?! You both have the same name?';
  } else {
    return 'Yo, the navigator goes first definitely';
  }
}
console.log(orderingOfNames(driver, navigator));

//BONUS 1

const paragraphs =
  'Phasellus tempus tortor neque, id hendrerit nisi volutpat ac. Integer ornare velit interdum risus tincidunt laoreet. Morbi ac neque massa. Curabitur vehicula euismod metus, sed tempus diam tempus nec. Etiam tristique lacus eget aliquam interdum. Nulla rutrum ante vitae consequat pulvinar. Etiam quis cursus leo, sed mollis magna. Vivamus a massa nec erat accumsan vestibulum. Vivamus nec placerat sapien, quis vulputate dui. Pellentesque cursus dolor eu urna sollicitudin, nec volutpat urna accumsan. Aenean nec iaculis ipsum. Integer fringilla lacus tortor, a mollis diam commodo tempus. Mauris volutpat dapibus purus eget ultricies. Sed orci odio, dapibus at ipsum id, lacinia dapibus lectus. Aliquam erat volutpat. Cras ultricies nibh et eleifend dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis massa in elit cursus aliquet. Duis tincidunt at arcu sed varius. Aenean semper venenatis libero, ac consequat turpis egestas eu. Donec velit ligula, dignissim in auctor sit amet, ornare et nisl. In in augue pharetra, lacinia lorem nec, congue libero. Phasellus pretium pulvinar quam, sit amet tristique massa rutrum feugiat. Maecenas ut pharetra dui, in varius leo. Nunc mollis tellus lacus. Integer aliquam molestie ultricies. Mauris ex eros, dapibus vehicula mi et, semper ultrices tortor. Phasellus suscipit finibus dui, ut semper dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros est. Sed hendrerit mauris sit amet auctor elementum. Mauris convallis, erat non ornare fringilla, leo nisl egestas sapien, id facilisis odio turpis non leo. In porttitor est vitae semper malesuada. Fusce erat massa, congue eu interdum vel, aliquet nec sem. Sed non massa elementum, gravida tellus sit amet, eleifend nisl. Integer ut ex orci. Pellentesque et lorem pretium, tincidunt tortor quis, aliquet tortor. Aliquam imperdiet efficitur diam, ut aliquet leo vehicula sed. Aliquam semper sed felis et faucibus. Donec tempus viverra tortor, egestas volutpat nibh accumsan eget.';

function wordCounter(word) {
  return word.split(' ').length;
}
console.log(wordCounter(paragraphs));

function specialWordCounter(word) {
  return word.split(' ').filter((x) => x === 'et').length;
}
console.log(specialWordCounter(paragraphs));

//BONUS 2

function isPalindrome(word) {
  const reversedWord = word
    .trim()
    .split(' ')
    .join('')
    .split('')
    .reverse()
    .join('');
  const inputWord = word.trim().split(' ').join('');
  return inputWord === reversedWord;
}

console.log(isPalindrome('   race car    '));
