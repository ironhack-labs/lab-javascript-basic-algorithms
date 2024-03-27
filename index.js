// Iteration 1: Names and Input
const hacker1 = "Susanne";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Anna";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1
let newString = "";

for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    newString += hacker1[i].toUpperCase();
    break;
  }
  newString += hacker1[i].toUpperCase() + " ";
}
console.log(newString);

// 3.2
let newStringReverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newStringReverse += hacker2[i];
}
console.log(newStringReverse);

// 3.3
switch (hacker1.localeCompare(hacker2)) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first, definitely.");
    break;
  case 0:
    console.log("What?! You both have the same name?");
  default:
    console.log("Error!");
}

// Bonus 1
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla faucibus, sodales mauris non, sollicitudin velit. Donec volutpat, lectus eget tempus tempor, risus erat porttitor augue, ut auctor quam purus vitae est. Phasellus vel rutrum libero, et tempus ex. Praesent id maximus orci, at egestas quam. Suspendisse fermentum lacus at tincidunt lobortis. Nulla facilisi. Sed sit amet dapibus ipsum. Proin in ipsum suscipit eros tincidunt euismod. Phasellus vitae arcu sit amet urna tincidunt euismod. Nulla in ultrices urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam posuere varius nunc eu iaculis. Suspendisse ac purus sapien. Curabitur euismod scelerisque dui, a sodales augue feugiat eu. Vivamus vitae ipsum cursus, efficitur ante non, ultrices tortor. Suspendisse sit amet lacus vitae diam vulputate congue. Integer sollicitudin sed eros a semper. Proin malesuada massa a neque facilisis gravida. Mauris maximus varius elementum. Ut tincidunt aliquam elit, ut fermentum odio auctor a. Vivamus vitae condimentum ante. Nullam ipsum mauris, ultrices ac gravida a, ultrices vel ipsum. Pellentesque tempus et turpis placerat placerat. Sed elementum efficitur purus, a condimentum mi sagittis et. Praesent lacus sapien, porta eget fermentum nec, scelerisque quis velit. Curabitur tincidunt mollis enim, sed rutrum urna ultricies ac. Suspendisse velit ipsum, fermentum non erat nec, cursus dictum nisi. Vivamus sapien urna, ultricies quis sem quis, finibus elementum sapien. Proin non dolor eu velit hendrerit sollicitudin sit amet vel ex. Curabitur faucibus id diam sit amet hendrerit. Duis lobortis et odio ut vestibulum. In vehicula neque id nunc vehicula tincidunt. Vivamus sit amet nisi et justo pulvinar ultricies. Nam velit lectus, hendrerit vel faucibus in, feugiat ut sapien. Aliquam ex ante, posuere sit amet vehicula non, vehicula sit amet enim. Aliquam finibus neque vel urna molestie, a placerat mi accumsan.";

function WordCount(str) {
  return str.split(" ").length;
}
console.log(WordCount(longText));

let countET = 0;

for (let i = 0; i < longText.length; i++) {
  const fourChar =
    longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3];

  if (fourChar === " et " || fourChar === " et." || fourChar === " et,") {
    countET++;
  }
}
console.log(countET);

// Bonus 2
// const phraseToCheck = [
//   "A man, a plan, a canal, Panama!",
//   "hacker racker",
//   "stack cats",
//   "step on no pets",
//   "taco cat",
//   "put it up",
//   "peanut tuna",
//   "Was it a car or a cat I saw?",
//   "No 'x' in Nixon",
// ];

const phraseToCheck = "step on no pets";

function removeSpace(str) {
  return str.split(" ");
}

function checkIfPalimdrom(check) {
  let checkBeginn = "";
  let checkEnd = "";

  for (let i = 0; i < check.length; i++) {
    checkBeginn += check[i];

    if (check[i] === " ") {
      continue;
    } else if ((check[i] = check.length)) {
      continue;
    } else {
      checkBeginn += " ";
    }
  }

  for (let j = check.length; j >= 0; j--) {
    checkEnd += check[j];

    if (check[j] === " ") {
      continue;
    } else if ((check[j] = 0)) {
      continue;
    } else {
      checkEnd += " ";
    }
  }

  return checkBeginn === checkEnd;
}

// function isPalindrome(phrase) {
//   const cleanStr = phrase.replace(/[^A-Za-z0-9]/g, " ").toLowerCase();
//   const reversedStr = cleanStr.split(" ").reverse().join(" ");
//   return cleanStr === reversedStr;
// }

console.log(checkIfPalimdrom(phraseToCheck));
