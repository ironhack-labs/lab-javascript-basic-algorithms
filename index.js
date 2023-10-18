// Iteration 1
let hacker1 = 'Hugo';
let hacker2 = 'Mert';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
//Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}
//Iteration 3 - 3.1
function printCapitalLettersSpaced(name) {
  let result = '';
  for (let i = 0; i < name.length; i++) {
    if (i !== name.length - 1) {
      result += name[i].toUpperCase() + ' ';
    } else {
      result += name[i].toUpperCase();
    }
  }
  return result;
}
let testHacker1 = printCapitalLettersSpaced(hacker1);
let testHacker2 = printCapitalLettersSpaced(hacker2);
console.log(testHacker1);
console.log(testHacker2);
//Iteration 3 - 3.2
function printReversed(name) {
  let result = '';
  for (let i = name.length - 1; i >= 0; i--) {
    result += name[i];
  }
  return result;
}
let reverseHacker1 = printReversed(hacker1);
let reverseHacker2 = printReversed(hacker2);
console.log(reverseHacker1);
console.log(reverseHacker2);
//Iteration 3 - 3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`);
}
// Bonus 1:
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac elit ut metus euismod scelerisque. Sed semper dolor a nunc cursus eleifend. Pellentesque dignissim nunc ex, sed auctor lectus cursus non. Curabitur tortor erat, placerat sed dui ac, facilisis pulvinar nulla. Integer euismod purus nisi, non placerat libero vehicula ut. Nulla aliquam ullamcorper lorem, id vehicula neque bibendum volutpat. Mauris nec dictum elit. Sed luctus erat nibh, id maximus ex egestas sit amet. Nullam orci nibh, finibus nec lacus sit amet, iaculis faucibus sem. Maecenas purus odio, gravida non nisi eu, luctus porttitor libero. Nullam quis volutpat erat, vel cursus ex. Proin et arcu et sapien varius cursus luctus sit amet quam. Mauris ex nunc, porta vitae nibh quis, commodo posuere mauris. Etiam id felis sed augue maximus egestas sed vitae augue. Nullam sit amet lobortis purus. Curabitur at faucibus elit. Phasellus vitae quam luctus, iaculis neque non, porta augue. Phasellus aliquet tristique tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eget massa sit amet quam ullamcorper finibus vitae id nulla. Nam accumsan mauris vitae cursus ultricies. Nulla consectetur nisi dictum eros imperdiet dignissim. Morbi a quam at ligula aliquet aliquet. Nam rutrum laoreet finibus. Pellentesque vel nibh eros. Quisque ac massa erat. Vestibulum sit amet ipsum velit. Quisque varius purus quis augue auctor, quis aliquam orci facilisis. Praesent ullamcorper, tortor et malesuada vestibulum, erat lorem scelerisque sapien, sed mattis libero nunc pharetra turpis. Etiam tristique tellus consectetur ipsum pellentesque, eget bibendum neque mattis. Mauris et nibh eu metus egestas aliquam in ultrices ex.';
function countWords(paragraph) {
  let count = 0;
  for (let i = 0; i < paragraph.length; i++) {
    if (i === paragraph.length - 1 || paragraph[i] === ' ') {
      count += 1;
    }
  }
  return count;
}
function countEt(paragraph) {
  let countEt = 0;
  for (let i = 0; i < paragraph.length; i++) {
    if (
      paragraph[i] + paragraph[i + 1] + paragraph[i + 2] + paragraph[i + 3] ===
      ' et '
    ) {
      countEt += 1;
    }
  }
  return countEt;
}
let resultBonus = countWords(longText);
let resultBonusEt = countEt(longText);
console.log(resultBonus);
console.log(resultBonusEt);

//Bonus 2:
function palindromeFinder(text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let lowerCasePhrase = text.toLowerCase();
  let resultOnlyLetters = '';
  //Keep only the letters
  for (let i = 0; i < lowerCasePhrase.length - 1; i++) {
    if (alphabet.indexOf(lowerCasePhrase[i]) !== -1) {
      resultOnlyLetters += lowerCasePhrase[i];
    }
  }
  //return resultOnlyLetters;

  //Have a variable with reversed letters
  let reversedResultOnlyLetters = '';
  for (let i = resultOnlyLetters.length - 1; i >= 0; i--) {
    reversedResultOnlyLetters += resultOnlyLetters[i];
  }
  //return reversedResultOnlyLetters;

  if (resultOnlyLetters === reversedResultOnlyLetters) {
    return 'Yes';
  } else {
    return 'No';
  }
}

let phraseToCheck = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac elit ut metus euismod scelerisque. Sed semper dolor a nunc cursus eleifend. Pellentesque dignissim nunc ex, sed auctor lectus cursus non. Curabitur tortor erat, placerat sed dui ac, facilisis pulvinar nulla. Integer euismod purus nisi, non placerat libero vehicula ut. Nulla aliquam';
let a =2;
console.log(palindromeFinder(phraseToCheck));
