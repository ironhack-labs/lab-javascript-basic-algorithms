// Iteration 1: Names and Input

// 1.1
const hacker1 = 'Vinícius';

// 1.2
console.log(`"The driver's name is ${hacker1}"`);

// 1.3
const hacker2 = 'Adalberto';

// 1.4
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

// 2.1
if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters.`
  );
} else if (navigatorLength > driverLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorLength} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driverLength} characters!`
  );
}

// Iteration 3: Loops

// 3.1
let hacker1Uppercase = '';

for (let i = 0; i < driverLength; i++) {
  if (i == driverLength - 1) {
    hacker1Uppercase += hacker1[i];
  } else {
    hacker1Uppercase += hacker1[i] + ' ';
  }
}

console.log(hacker1Uppercase.toUpperCase());

// 3.2
let hacker1Reversed = '';

for (let i = driverLength - 1; i >= 0; i--) {
  hacker1Reversed += hacker1[i];
}

console.log(hacker1Reversed);

// 3.3
if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
}
if (hacker1.localeCompare(hacker2) == 0) {
  console.log(`What?! You both have the same name?`);
}

// BONUS

// Bonus 1
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus massa id varius vehicula. Cras tempor felis ac erat viverra interdum. Nam eu ipsum vitae eros fermentum porta facilisis eu ligula. Cras eget urna sapien. In scelerisque porttitor tempus. Aliquam quis felis hendrerit, egestas enim at, dignissim elit. Quisque pulvinar, metus sed congue porta, velit elit varius ante, in viverra ante dui et sapien. Duis purus odio, vestibulum ultrices libero sed, sollicitudin dapibus odio. Integer vulputate nulla convallis, sodales enim et, tincidunt elit. Phasellus euismod, nisi quis tempor pharetra, elit nibh semper orci, eget ultricies felis tortor sed magna. Vestibulum id augue nulla.

Sed sem lectus, tincidunt at mi et, dictum egestas sem. In lorem turpis, rutrum at libero ut, fermentum hendrerit enim. Etiam vitae blandit purus. In eget rutrum turpis. Duis placerat, sapien sit amet auctor ultrices, mi dolor scelerisque mi, semper faucibus lectus nisl et mauris. Nam suscipit et nisi a sagittis. Praesent vulputate lacus ut pulvinar dictum. Nam laoreet ante non nisi bibendum mattis. Nullam a velit lectus. Maecenas scelerisque pulvinar orci, interdum vehicula risus pretium et. Praesent tristique ipsum at quam pharetra, eu sollicitudin sapien dapibus.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus dapibus tellus a risus egestas, eget lacinia arcu viverra. Cras in nulla quis velit sollicitudin ultricies. Aliquam eu tellus augue. Proin in dui quis leo porttitor tempor a a ante. Duis id fermentum sapien. Suspendisse vitae arcu ultrices, auctor quam nec, condimentum metus. Cras convallis mi vel finibus ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam posuere sed dolor efficitur pulvinar. Aliquam ac mi vel ante hendrerit ornare sit amet in neque. Duis elit nunc, pellentesque sit amet augue id, egestas congue eros. Praesent sodales vehicula arcu. Fusce et nisi tempus, rutrum quam vel, consectetur quam.`;

console.log(loremIpsum.split(' ').length);

let etCount = 0;

for (i = 1; i < loremIpsum.length; i++) {
  if (
    loremIpsum[i] == ' ' &&
    loremIpsum[i + 1] == 'e' &&
    loremIpsum[i + 2] == 't' &&
    loremIpsum[i + 3] == ' '
  ) {
    etCount += 1;
  }
}

console.log(etCount);

//Bonus 2
let phraseToCheck = `Was it a car or a cat I saw?`;

let normalizePhrase = '';

for (i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] !== ' ' &&
    phraseToCheck[i] !== ',' &&
    phraseToCheck[i] !== '!' &&
    phraseToCheck[i] !== '?' &&
    phraseToCheck[i] !== '.' &&
    phraseToCheck[i] !== "'" &&
    phraseToCheck[i] !== '"'
  ) {
    normalizePhrase += phraseToCheck[i];
  } else {
    continue;
  }
}

let lowercasePhrase = normalizePhrase.toLowerCase();

for (j = 0; j < lowercasePhrase.length; j++) {
  if (
    lowercasePhrase[j] !== lowercasePhrase[lowercasePhrase.length - (j + 1)]
  ) {
    console.log('This is not a palindrome :(');
    break;
  } else {
    if (j === lowercasePhrase.length - 1) {
      console.log('This is a palindrome!');
    } else {
      continue;
    }
  }
}
