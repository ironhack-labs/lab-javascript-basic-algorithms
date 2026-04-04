const hacker1 = "Janni";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Caro";
console.log(`The navigator's name is ${hacker2}`);


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


let driverNameSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameSpaced += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    driverNameSpaced += " ";
  }
}
console.log(driverNameSpaced);

let navigatorReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReversed += hacker2[i];
}
console.log(navigatorReversed);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.";

let wordCount = 0;
let inWord = false;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] !== ' ' && longText[i] !== '.' && longText[i] !== ',') {
    if (!inWord) {
      wordCount++;
      inWord = true;
    }
  } else {
    inWord = false;
  }
}
console.log(`The text has ${wordCount} words.`);

let etCount = 0;
for (let i = 0; i < longText.length - 2; i++) {
  if (longText[i] === ' ' && longText[i + 1] === 'e' && longText[i + 2] === 't' && (longText[i + 3] === ' ' || longText[i + 3] === '.' || longText[i + 3] === ',')) {
    etCount++;
  }
}
console.log(`The word 'et' appears ${etCount} times.`);


const phraseToCheck = "A man, a plan, a canal, Panama!";

let cleanedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
    cleanedPhrase += char;
  }
}

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
