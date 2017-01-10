![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# JS | Functions & Arrays

## Learning Goals

In this exercise you will apply:

- Array iteration tecniques
- Using functions to manipulate and transform arrays


## Introduction

Manipulating arrays in code is a very common operation. Whether you're creating a total for a shopping cart, grabbing only the first names out of a list of people, or moving a piece on a chessboard, you're probably going to be modifying or manipulating an array in some way.

Let's put this into practice. Use [https://repl.it/](https://repl.it/) to complete the following exercises with your partner.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Write your code in the js file provided in the `starter-code`

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

A single JavaScript file will be enough for now.

## Find the maximum

Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest.

**Starter Code**

```javascript
function maxOfTwoNumbers(first, second){
  // Your Code Here
}

var largest = maxOfTwoNumbers(2, 6);
console.log(largest);
// 6
```

## Finding Longest Word

Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

**Starter Code**

```javascript
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

var longest = findLongestWord(words);
console.log(longest);
// crocodile
```

## Calculating a Sum

Calculating a sum is as simple as iterating over an array and adding each of the elements together.

Semantically [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) is the best method to use for this, but you can use any loop we've discussed so far.

Calculate the sum of the following array:

```javascript
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
```

**Starter Code**

```javascript
function sumArray(array){
// Your Code here
}

var total = sumArray(numbers);
// 87
```

## Calculate the Average

Calculating an average is an extremely common task.  Let's practice it a bit.

**Algorithm**

1. Find the sum as we did in the first exercise
2. Take the sum from step 1, and divide it by the number of elements in the list.


### Level 1: Array of Numbers

Write code to calculate the average of the following array:

```javascript
var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
```

**Starter Code**

```javascript![](https://i.imgur.com/1QgrNNw.png)

# JS | Functions & Arrays

## Learning Goals

In this exercise you will apply:

- Array iteration tecniques
- Using functions to manipulate and transform arrays


## Introduction

Manipulating arrays in code is a very common operation. Whether you're creating a total for a shopping cart, grabbing only the first names out of a list of people, or moving a piece on a chessboard, you're probably going to be modifying or manipulating an array in some way.

Let's put this into practice. Use [https://repl.it/](https://repl.it/) to complete the following exercises with your partner.

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

A single JavaScript file will be enough for now.

## Find the maximum

Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest.

**Starter Code**

```javascript
function maxOfTwoNumbers(first, second){
  // Your Code Here
}

var largest = maxOfTwoNumbers(2, 6);
console.log(largest);
// 6
```

## Finding Longest Word

Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

**Starter Code**

```javascript
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

var longest = findLongestWord(words);
console.log(longest);
// crocodile
```

## Calculating a Sum

Calculating a sum is as simple as iterating over an array and adding each of the elements together.

Semantically [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) is the best method to use for this, but you can use any loop we've discussed so far.

Calculate the sum of the following array:

```javascript
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
```

**Starter Code**

```javascript
function sumArray(array){
// Your Code here
}

var total = sumArray(numbers);
// 87
```

## Calculate the Average

Calculating an average is an extremely common task.  Let's practice it a bit.

**Algorithm**

1. Find the sum as we did in the first exercise
2. Take the sum from step 1, and divide it by the number of elements in the list.


### Level 1: Array of Numbers

Write code to calculate the average of the following array:

```javascript
var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
```

**Starter Code**

```javascript
function averageNumbers(array){
  // Your code here
}

var average = averageNumbers(numbers);
console.log(average);
// 6
```

### Level 2: Array of Strings

Write code to calculate the average *length* of the strings inside of the following array:

```javascript
var words = [
	"seat",
	"correspond",
	"linen",
	"motif",
	"hole",
	"smell",
	"smart",
	"chaos",
	"fuel",
	"palace"
];
```

**Starter Code**

```javascript
function averageWordLength(array){
  // Your code here
}

var averageLength = averageNumbers(words);
console.log(averageLength);
// 5.3
```

## Unique Arrays

Take the following array, remove the duplicates, and return a new array. You're more than likely going to want to check out the [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) function.

Do this in the form of a function.

**Starter Code**

```javascript
function uniquifyArray(array){
  // Your code here
}

var words = [
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
  "bring"
];

var uniqued = uniquifyArray(words);
console.log(uniqued);
// ["crab", "poison", "contagious", "simple", "bring", "sharp", "playground", "communion"]
```

## Finding Elements

Let's create a simple array search.

Write a function that will take in an array of words as one argument, and a word to search for as the other. Return `true` if it exists, otherwise return `false`. **Don't** use `indexOf` for this one. :)

**Starter Code**

```javascript
var words = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

var hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);
// true

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);
// false
```

## Counting Repetion

Write a function that will take in an array of words as one argument, and a word to search for as the other. The function will return the number of times that word appears in the array.

**Starter Code**

```javascript
var words = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience"
  "matter"
];

var howManyMatter = howManyTimes(words, "matter");
console.log(howManyMatter);
// 4

var howManyDog = howManyTimes(words, "dog");
console.log(howManyDog);
// 0
```

## Bonus Quest

In the 20×20 grid below; What is the greatest product of four adjacent numbers in the same direction (up, down, left, right)?

```javascript
var matrix = [
  [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
  [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
  [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
];

var maxProduct = greatestProduct(matrix);
console.log(maxProduct);
// => 57,148,146
```

function averageNumbers(array){
  // Your code here
}

var average = averageNumbers(numbers);
console.log(average);
// 6
```

### Level 2: Array of Strings

Write code to calculate the average *length* of the strings inside of the following array:

```javascript
var words = [
	"seat",
	"correspond",
	"linen",
	"motif",
	"hole",
	"smell",
	"smart",
	"chaos",
	"fuel",
	"palace"
];
```

**Starter Code**

```javascript
function averageWordLength(array){
  // Your code here
}

var averageLength = averageNumbers(words);
console.log(averageLength);
// 5.3
```

## Unique Arrays

Take the following array, remove the duplicates, and return a new array. You're more than likely going to want to check out the [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) function.

Do this in the form of a function.

**Starter Code**

```javascript
function uniquifyArray(array){
  // Your code here
}

var words = [
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
  "bring"
];

var uniqued = uniquifyArray(words);
console.log(uniqued);
// ["crab", "poison", "contagious", "simple", "bring", "sharp", "playground", "communion"]
```

## Finding Elements

Let's create a simple array search.

Write a function that will take in an array of words as one argument, and a word to search for as the other. Return `true` if it exists, otherwise return `false`. **Don't** use `indexOf` for this one. :)

**Starter Code**

```javascript
var words = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

var hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);
// true

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);
// false
```

## Counting Repetion

Write a function that will take in an array of words as one argument, and a word to search for as the other. The function will return the number of times that word appears in the array.

**Starter Code**

```javascript
var words = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience"
  "matter"
];

var howManyMatter = howManyTimes(words, "matter");
console.log(howManyMatter);
// 4

var howManyDog = howManyTimes(words, "dog");
console.log(howManyDog);
// 0
```

## Bonus Quest

In the 20×20 grid below; What is the greatest product of four adjacent numbers in the same direction (up, down, left, right)?

```javascript
var matrix = [
  [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
  [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
  [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
];

var maxProduct = greatestProduct(matrix);
console.log(maxProduct);
// => 57,148,146
```
