![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Functions & Arrays


## Introduction

Manipulating arrays in code is a very common operation. Whether you're creating a total for a shopping cart, grabbing only the first names out of a list of people, or moving a piece on a chessboard, you're probably going to be modifying or manipulating an array in some way.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create Pull Request so your TAs can check up your work.

## Automated Testing Introduction

### What is automated testing?

Automated software testing is the process of programmatically executing an application in order to validate and verify that it meets the business needs, as well as the technical requirements, and that it behaves as expected.

Testing should be viewed as a continuous process, not a discrete operation or single activity in the development lifecycle. Designing tests at the beginning of the product lifecycle can be help to mitigate common issues that arise when developing complex codebases.

Having a strong _test suite_ can provide you ease of mind, since you'll be able to confidently improve upon your work while knowing that your not breaking a previously developed feature.

### Testing labs

This lab, along with some of the labs you'll be working on during the bootcamp, has a complete test suite that is meant to ensure that your work fulfills the requirements we established.

### Testing with Jasmine

<!-- ![Jasmine Logo](https://i.imgur.com/A1pop7h.png) -->

Jasmine is an automated testing framework for JavaScript. It is designed to be used in Behavior-driven Development (**BDD**) programming, which focuses more on the business value than on the technical details.

We have already included Jasmine in the project you just forked, so let's see how to use it to implement our code.

### Usage

Before start coding, we will explain the project structure we have provided you:

```
starter-code/
├── jasmine
│   ├── jasmine-2.8.0/
│   |   └── ...
├── src
│   └── functions-and-arrays.js
├── tests
│   └── FunctionsAndArraysSpec.js
└─ SpecRunner.html
```

We will be working with the `functions-and-arrays.js` file inside of the `src` folder. In the `jasmine` folder you can find all of the files that compose Jasmine, that is already linked with the `SpecRunner.html` file.

**Run tests**

Running automated tests with Jasmine is super easy. All you need to do is open the `SpecRunner.html` file in your browser. You will find something similar this:

![image](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)

**Pass the tests**

You should write your code on the `src/functions-and-arrays.js` file. By following the instructions for each iteration, you should go every test and make sure it's _passing_.

Do not rush. You should take your time to carefully read every iteration, and you should address the _breaking_ tests as you progress through the exercise.

When coding with tests, it is super important that you carefully read and understand the errors you're getting, this way you'll know for sure what's expected from your code.

## Deliverables

Write your JavaScript in the provided `src/functions-and-arrays.js` file.

## Iteration #1: Find the maximum

Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest.

## Iteration #2: Find longest word

Declare a function named `findLongestWord` that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

**Starter Code**

```javascript
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
```

## Iteration #3: Calculate the sum

Calculating a sum is as simple as iterating over an array and adding each of the elements together.

<!-- Semantically [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) is the best method to use for this, but you can use any loop we've discussed so far. -->

Declare a function named `sumArray` that takes as an argument an array of numbers, and returns the sum of all of the numbers in the array. Later in the course we'll learn how to do this by using the `reduce` array method, which will make your work significantly easier. For now, let's practice _"manual"_ way using loops.

**Starter Code**

```javascript
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
```

## Iteration #4: Calculate the average

Calculating an average is an extremely common task. Let's practice it a bit.

**Algorithm**

1. Find the sum as we did in the first exercise
2. Take the sum from step 1, and divide it by the number of elements in the list.

### Level 1: Array of numbers

Declare a function named `averageNumbers` that expects an array of numbers and returns the average of the numbers:

**Starter Code**

```javascript
const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
```

### Level 2: Array of strings

Declare a function named `averageWordLength` that receives as a single argument an array of words and returns the average length of the words:

**Starter Code**

```javascript
const words = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
```

## Iteration #5: Unique arrays

Take the following array, remove the duplicates, and return a new array. You're more than likely going to want to check out the [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) Array method.

Do this in the form of a function `uniquifyArray` that receives an array of words as a argument.

**Starter Code**

```javascript
const words = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
```

## Iteration #6: Find elements

Let's create a simple array search.

Declare a function named `doesWordExist` that will take in an array of words as one argument, and a word to search for as the other. Return `true` if it exists, otherwise, return `false`. **Don't** use `indexOf` for this one.

**Starter Code**

```javascript
const words = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];
```

## Iteration #7: Count repetition

Declare a function named `howManyTimes` that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.

**Starter Code**

```javascript
const words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
```

## Iteration #8: Bonus

What is the greatest product of four adjacent numbers? We consider adjacent any four numbers that are next to each other in horizontal, vertical or diagonal.

For example, if we have a 5x5 Matrix like:
```bash
[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
```
The greatest product will be the `20`x`20`x`20`x`4` = `32000`;

Declare a function named `greatestProduct` to find it in the 20×20 grid below!

```javascript
const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];
```

**Happy coding!** :heart:
