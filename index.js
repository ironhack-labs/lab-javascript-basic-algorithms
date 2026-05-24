// Iteration 1: Names and Input
const hacker1 = "Ilkin";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Ismayilov";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let capitalizedDriver = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalizedDriver += hacker1[i].toUpperCase();
  // Add a space after every character except the very last one
  if (i !== hacker1.length - 1) {
    capitalizedDriver += " ";
  }
}
console.log(capitalizedDriver);

let reversedNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigator += hacker2[i];
}
console.log(reversedNavigator);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu justo quis est faucibus rutrum. Curabitur ut tristique diam. Nulla leo ipsum, accumsan ac turpis sed, scelerisque commodo leo. In pulvinar urna at odio congue tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet nunc nec sapien finibus lacinia pharetra eget quam. Donec in laoreet tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Pellentesque ut arcu eu ipsum sollicitudin elementum. Ut luctus scelerisque turpis ac volutpat. Suspendisse fringilla felis sit amet sagittis commodo. Etiam lobortis varius erat, ac fringilla ex aliquet nec. Curabitur ut nunc vitae nisi fermentum accumsan. Praesent vitae facilisis massa, id placerat ligula. In pulvinar, quam quis fermentum iaculis, turpis metus fermentum lacus, id interdum justo massa et justo. Maecenas ac erat nec urna scelerisque vulputate. Nulla eu vehicula urna. Nunc id tincidunt sem. Nullam lacinia urna in sapien bibendum, vel maximus dui egestas. Morbi semper ante quis leo viverra accumsan.

Nullam dapibus eget lectus eget sagittis. Duis vehicula dolor ac volutpat accumsan. Praesent a vestibulum erat. Nam pulvinar faucibus odio, fringilla tincidunt augue fermentum in. Sed finibus velit in mauris gravida, vel ultrices lacus maximus. Maecenas quam urna, imperdiet eu elit id, pellentesque tincidunt massa. Curabitur erat quam, dignissim et enim eget, ullamcorper vehicula turpis. Donec vel placerat magna. Proin vestibulum sollicitudin purus in laoreet. Maecenas porta malesuada convallis. Praesent quis blandit quam. Curabitur molestie, ipsum eget blandit gravida, lacus velit tempus nisi, quis dictum nulla eros vitae purus. Integer ante ligula, finibus nec felis id, convallis aliquet nisl. Suspendisse laoreet felis eget euismod dignissim. Sed non quam ut mauris lobortis cursus.

`

let wordCount = 0;
if (longText.length > 0) {
  wordCount = 1;
  for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " " || longText[i] === "\n") {
      if (longText[i + 1] !== " " && longText[i + 1] !== "\n" && i + 1 < longText.length) {
        wordCount++;
      }
    }
  }
}
console.log(`Total words: ${wordCount}`);

let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === "e" && longText[i + 1] === "t") {
    const charBefore = longText[i - 1];
    const charAfter = longText[i + 2];

    const isBeforeValid = charBefore === " " || charBefore === "\n" || i === 0;
    const isAfterValid = charAfter === " " || charAfter === "\n" || charAfter === "," || charAfter === "." || i + 2 === longText.length;

    if (isBeforeValid && isAfterValid) {
      etCount++;
    }
  }
}
console.log(`The word 'et' appears: ${etCount} times.`);

//Bonus 2
const phraseToCheck = "stack cats";

let cleanedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  const lowerChar = phraseToCheck[i].toLowerCase();
  if ((lowerChar >= "a" && lowerChar <= "z") || (lowerChar >= "0" && lowerChar <= "9")) {
    cleanedPhrase += lowerChar;
  }
}

let isPalindrome = true;
let start = 0;
let end = cleanedPhrase.length - 1;

while (start < end) {
  if (cleanedPhrase[start] !== cleanedPhrase[end]) {
    isPalindrome = false;
    break;
  }
  start++;
  end--;
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" IS a palindrome!`);
} else {
  console.log(`"${phraseToCheck}" is NOT a palindrome.`);
}