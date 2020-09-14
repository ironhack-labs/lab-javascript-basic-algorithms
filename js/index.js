// Iteration #1: Find the maximum
let num1;
let num2;
function maxOfTwoNumbers(num1, num2) {
  let max = num1;
  if (num1 < num2) {
    max = num2;
  }
  return max;
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (words.length == 0) {
    return null;
  }
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
  let sum = 0;
  if (numbers.length == 0) {
    return numbers.length;
  }
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbersAvg) {
  if (numbersAvg.length == 0) {
    return null;
  }
  let average = sumNumbers(numbersAvg) / numbersAvg.length;
  return average;
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];
function averageWordLength(wordsArr) {
  let totalLength = 0;
  if (wordsArr.length == 0) {
    return null;
  }
  for (let i = 0; i < wordsArr.length; i++) {
    totalLength += wordsArr[i].length;
  }
  let averageLength = totalLength / wordsArr.length;
  return averageLength;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(wordsUnique) {
  let uniqResult = [];
  if (wordsUnique.length == 0) {
    return null;
  }
  for (let word of wordsUnique) {
    if (uniqResult.indexOf(uniqResult) < 0) {
      uniqResult.push(word);
    }
  }
  return uniqResult;
}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordsFind, word) {
  if (wordsFind.length == 0) {
    return null;
  }
  if (wordsFind.indexOf(word) >= 0) {
    return true;
  } else if (wordsFind.indexOf(word) < 0) {
    return false;
  }
}

// Iteration #7: Count repetition
const wordsCount = [];

// Iteration #8: Bonus

const matrix = [];
