// Iteration 1

const hacker1 = `Daniela`;
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = `Christian`;
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2

const driver = hacker1;
const navigator = hacker2;

if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
} else if (navigator.length > driver.length) {
    console.log(`The navigator has the longest name, it has ${navigator.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${driver.length}`);
}

// Iteration 3

// 3.1
let nameUpper = '';
for(let i = 0; i < driver.length; i++) {
  nameUpper += driver[i].toUpperCase() + ' ';
   } console.log(nameUpper);

// 3.2
let nameReverse = '';
  for(let i = navigator.length - 1; i >= 0; i--) {
    nameReverse += navigator[i];
    } console.log(nameReverse);

// 3.3
if (driver.localeCompare(navigator) === -1) {
  console.log("The driver's name goes first.");
} else if (driver.localeCompare(navigator) === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// BONUS 1

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum lectus, semper luctus suscipit non, pretium quis magna. Sed suscipit mauris in tortor sagittis, quis facilisis nibh fringilla. Aliquam scelerisque varius nisl, ac pharetra orci feugiat non. In interdum lobortis tincidunt. Suspendisse fermentum velit ac maximus tincidunt. Curabitur ut efficitur ante, ut sollicitudin ante. Maecenas vitae leo viverra, aliquet arcu eu, facilisis orci. Fusce egestas consequat laoreet. Etiam scelerisque ultrices lorem sit amet scelerisque. Morbi elementum mauris nulla, vel laoreet lacus sodales vitae. Nullam nunc magna, egestas eu molestie sit amet, consequat ut dolor. Quisque scelerisque urna vel urna semper consectetur faucibus vitae sapien. Pellentesque id eros a magna dapibus bibendum.

Sed quis diam non nulla interdum tincidunt id id ex. Donec commodo, erat non dictum vehicula, tellus ligula lacinia mauris, id vestibulum dolor augue at erat. Vivamus malesuada condimentum orci non varius. Maecenas non leo lorem. Sed at ultricies augue. Nulla sit amet quam ac libero sagittis feugiat a nec massa. Morbi mollis nunc in sapien dignissim, et mollis justo feugiat. Nullam dictum nibh vel nunc tempor dignissim.

Nulla egestas diam eu posuere tempor. Suspendisse mi velit, finibus vel lorem eu, venenatis lacinia augue. Vivamus sed erat porttitor, sagittis orci eu, iaculis elit. Praesent sit amet elit euismod, consectetur orci vitae, posuere leo. Quisque ut mauris ac nulla porta efficitur. Sed at metus arcu. Maecenas ac turpis sit amet lorem dictum eleifend vel ut elit. Etiam eu blandit ex. Ut nec faucibus lacus, vel fringilla quam. Morbi dignissim accumsan nisi, nec iaculis augue molestie non.`;

let wordCount = 1;
const textArr = text.split(' ');

for(let i = 0; i <= textArr.length; i++) {
  wordCount++;
}

console.log(wordCount);


let count = 0;
for(let i = 0; i < text.length; i++) {
  if((text.substr(i, 4) === ' et ') || (text.substr(i, 4) === ' et,') || (text.substr(i, 4) === ' et.') || (text.substr(i, 3) === 'et ')) {
    count++;
  }
} 

// NEEDS TO BE CORRECTED? ^

console.log(count);

// BONUS 2
// Removal of spaces and punctuation still required

randomStr = "racecar"

function phraseToCheck (str) {
  return str == str.split('').reverse().join('');
}

phraseToCheck(randomStr);