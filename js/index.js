// Iteration 1: Names and Input
//  1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Mango';
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Luis';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(`The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
// Var with the name all in uppercase 
let upperCasedDriver = hacker1.toUpperCase();
// Variable that will contain the result name with spaces - for now it is an empty string
let spacedDriver = '';
// Iterate through the string, get each char added to the empty variable and get a spaced concatenated to it
for (const value of upperCasedDriver) {
  spacedDriver += value + ' ';
}
console.log(spacedDriver);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseNavigator = '';

for (let i = (navigatorLength - 1); i >= 0; i--) {
  reverseNavigator += hacker2[i];
}
console.log(reverseNavigator);

// 3.3 Depending on the lexicographic order of the strings, print:
let charDriver;
let charNavigator;

let charASCIIDriver;
let charASCIINAvigator;
for (let i = 0; i < smallName; i++) {
  charDriver = hacker1[i].toUpperCase();
  charNavigator = hacker2[i].toUpperCase();

  charASCIIDriver = charDriver.charCodeAt(0);
  charASCIINAvigator = charNavigator.charCodeAt(0);

  if (charASCIIDriver < charASCIINAvigator) {
    console.log(hacker1);
    break;
  } else if (charASCIIDriver > charASCIINAvigator) {
    console.log(hacker2);
    break;
  } else {
    continue;
  }
};

// Bonus 1:
let text = `Lorem, ipsum dolor et sit amet consectetur adipisicing elit. Beatae magnam, similique cum delectus ullam at maxime placeat aut eveniet tempore dolore praesentium laborum, id deserunt animi velit. Tempora, nemo et accusantium. 
Lorem, ipsum dolor et sit amet consectetur adipisicing elit. Beatae magnam, similique cum delectus ullam at maxime placeat aut eveniet tempore dolore praesentium laborum, id deserunt animi velit. Tempora, nemo et accusantium. 
Lorem, ipsum dolor et sit amet consectetur adipisicing elit. Beatae magnam, similique cum delectus ullam at maxime placeat aut eveniet tempore dolore praesentium laborum, id deserunt animi velit. Tempora, nemo et accusantium.`;

let words = countWords(text);
console.log(words);

function countWords(text) {
    let wordCount;
    if (text[0] !== ' ') {
        wordCount = 1;
    } else {
        wordCount = 0;
    }

    let n = text.length;
    for (let i = 0; i < n; i++) {
        let char = text[i];

        if (char === ' ') {
            wordCount += 1;
        }
    }
    // If last char is a space, we don't count it as another word and for that reason we subtract 1 from the word count 
    if (text[n - 1] === ' '){
        wordCount -= 1;
    }
    return wordCount;
}

// Make your program count the number of times the Latin word et appears.
let etWord = etWordsCount(text);
console.log(etWord);

function etWordsCount(text) {
    let wordCount = 0;

    let n = text.length;
    for (let i = 0; i < n; i++) {
      let charAnte = text[i -1];
      let char = text[i];
      let char2 = text[i + 1];
      let char3 = text[i + 2];

        if (charAnte === ' ' && char === 'e' && char2 === 't' && char3 === ' ') {
            wordCount += 1;
        }
    }
    return wordCount;
}