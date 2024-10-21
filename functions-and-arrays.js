// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(3, 7));

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(array) {
  if (array.length === 0) {
    return null;
  } else {
    let n = 0;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      if (n < array[i].length) {
        n = array[i].length;
        index = i;
      }
    }
    return array[index];
  }
}

console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sumNumbers(numbers));
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array2) {
  if (array2.length === 0) {
    return 0;
  } else {
    let average = sumNumbers(array2) / array2.length;
    return average;
  }
}

console.log(averageNumbers([]));

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array3, word) {
  if (array3.length === 0) {
    return null;
  }
  for (i = 0; i < array3.length; i++) {
    if (array3[i] === word) {
      return true;
    }
  }
  return false;
}

console.log(doesWordExist(words2, "subset"));
