![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Functions & Arrays

<br>

## Introduction

Array manipulation is a common task in programming. Whether you are calculating a total for a shopping cart, grabbing only the first names from a list of people, or moving a piece on a chessboard, you are probably modifying or manipulating an array somewhere in the code.
<br>

## Requirements

- Fork this repo
- Clone it to your machine

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request so that your TAs can check your work.

## Automated Testing Introduction

### What is automated testing?

Automated software testing is the process of programmatically executing an application in order to validate and verify that it meets the business needs, as well as the technical requirements, and that it behaves as expected.

Testing should be viewed as a continuous process, not a discrete operation or single activity in the development lifecycle. Designing tests at the beginning of the product lifecycle can help to mitigate common issues that arise when developing complex code bases.

Having a strong *test suite* can provide you the ease of mind since you will be able to confidently improve upon your work while knowing that your not breaking a previously developed feature.
<br>

### Testing labs

This LAB, along with some of the labs you will be working on during the bootcamp, is equipped with unit tests to provide automated feedback on your lab progress.
<br>

### Testing with Jasmine

Jasmine is an automated testing framework for JavaScript. It is designed to be used in Behavior-driven Development (**BDD**) programming, which focuses more on the business value than on the technical details.

We have already included Jasmine in the project you just forked, so let's see how to use it to implement our code.
<br>

### Usage

Before starting coding, we will explain the project structure we have provided you:

```
lab-js-functions-and-arrays
  ├── README.md
  ├── SpecRunner.html
  ├── jasmine
  │   └── ...
  ├── src
  │   └── functions-and-arrays.js
  └── tests
      └── functions-and-arrays.spec.js
```

We will be working with the `src/functions-and-arrays.js`. In the `jasmine` folder you can find all of the files needed to use Jasmine. All these files are already linked with the `SpecRunner.html` file. 

In case you want to check the tests, they are in the `tests/functions-and-arrays.spec.js` file.


#### Run tests

Running automated tests with Jasmine is super easy. All you need to do is open the `SpecRunner.html` file in your browser. You will find something similar to this:

[![image](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)


#### Pass the tests

You should write your code on the `src/functions-and-arrays.js` file. While following the instructions for each iteration, you should check every test and make sure it's *passing*, before moving on.

Do not rush. You should take your time to carefully read every iteration, and you should address the *breaking* tests as you progress through the exercise.

When coding with tests, it is super important that you carefully read and understand the errors you are getting, this way you will know for sure what's expected from your code.

To see the output of your JavaScript code open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

**Important:** Note that **you don't need to execute the functions yourself**; the tests will automatically load and execute the functions on each test run. All you need to do is declare the functions, ensure that they handle the parameters passed and that they return what is indicated in the iteration instructions and the test description. For some iterations, we provide you with a sample array, so that you can do some **manual** testing if you wish.

## Instructions

While following the instructions for each iteration, make sure to carefully read the instructions and test descriptions to fully understand the task requirements. Do not rush. You should take your time to carefully read every iteration.

<br>

### Iteration #1: Find the maximum

Implement the function `maxOfTwoNumbers` that takes two numbers as arguments and returns the bigger number.

<br>

### Iteration #2: Find the longest word

Implement the function `findLongestWord` that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

You can use the following array to test your solution:

```javascript
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
```

<br>

### Iteration #3: Calculate the sum

#### Iteration #3.1: Sum numbers

Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named `sumNumbers` that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course, we will learn how to do this by using the `reduce` array method, which will make your work significantly easier. For now, let's practice _the "declarative"_ way of adding values, using loops.

You can use the following array to test your solution:

```javascript
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
```

<br>

#### Bonus - Iteration #3.2: A generic `sum()` function

**The goal: Learn how to refactor your code.** :muscle:

In iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know what was the sum of the length of all of the words in an array? What if we wanted to add _boolean_ values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to _tweak_ it a little bit so that it can be reused no matter what is in the array that is passed as an argument when function `sumNumbers()` is called.

Here we are applying a concept we call **polymorphism**, that is, dealing with a function's input independently of the types they are passed as.

Let's implement the function `sum()` that calculates the sum for an array filled with (_almost_) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

You can use the following array to test your solution:

```javascript
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57
```

<br>

### Iteration #4: Calculate the average

Calculating an average is a very common task. Let's practice it a bit.

**The logic behind this:**

1. Find the sum as we did in the first exercise (or how about reusing the function `sumNumbers()`?)
2. Take that sum and divide it by the number of elements in the array.

<br>

#### Iteration #4.1: Array of numbers

Implement the function `averageNumbers` that expects an array of numbers and returns the average of the numbers.

You can use the following array to test your solution:

```javascript
const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
```
<br>

#### Iteration #4.2: Array of strings

Implement the function named `averageWordLength` that receives as a single argument an array of words and returns the average length of the words:

You can use the following array to test your solution:

```javascript
const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
```

<br>

#### Bonus - Iteration #4.3: A generic `avg()` function

Create function `avg(arr)` that receives any mixed array and calculates the average. Consider as a mixed array an array filled with numbers and/or strings and/or booleans.

The non-numerical values should be counted as follows:

- Booleans: `true` counts as `1` and `false` counts as `0`.
- Strings: use the string `length` as the numeric value.

```javascript
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7
```

<br>

### Iteration #5: Unique arrays

Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the Array methods [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) and [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

Do this in the form of a function `uniquifyArray` that receives an array of words as an argument.



You can use the following array to test your solution:

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

<br>

### Iteration #6: Find elements

Let's create a simple array search.

Declare a function named `doesWordExist` that will take in an array of words as one argument, and a *word to search* for as the other. Return `true` if the word exists in the array, otherwise, return `false`.

You can use the following array to test your solution:

```javascript
const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
```

<br>

### Iteration #7: Count repetition

Declare a function named `howManyTimes` that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.

You can use the following array to test your solution:

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

<br>



### Bonus - Iteration #8



#### Bonus - Iteration #8.1: Product of adjacent numbers

Given multiple arrays, find the greatest product of four adjacent numbers. 

We consider adjacent any four numbers that are next to each other horizontally or vertically. For example, if we have a 5x5 Matrix like:

```bash
[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
```

The greatest product will be the `20`x`20`x`20`x`4` = `32000`.

<br>



Declare a function named `greatestProduct(matrix)` to find it in the 20×20 grid below!

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

<br>



#### Bonus - Iteration #8.2: Product of diagonals

Following the logic you've used in iteration #8.1, declare a function called `greatestProductOfDiagonals(matrix)`. It takes a matrix as a parameter and returns the greatest product of any four values laid out diagonally, in either direction.

<br>

**Happy coding!** :heart:

<br>

## FAQs

<br>

<details>
  <summary>I am stuck in the exercise and don't know how to solve the problem or where to start.</summary>
  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.


  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 


  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>
  <br>

  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

  1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```


  2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
   To check which remote repository you have cloned, run the following terminal command from the project folder:

   ```bash
   git remote -v
   ```

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

  Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  [Back to top](#faqs)
</details>

<details>
  <summary>All of the Jasmine tests are failing and in red. Why did this happen?</summary>
  <br>

  One possible reason why all of the Jasmine tests are failing is that there is a syntax error in the code being tested. If the code contains a syntax error, it will not be loaded properly and none of the tests will be able to run. This will cause all of the tests to fail.

  To troubleshoot this issue, you will need to examine the code being tested for syntax errors. Look for missing brackets, semicolons, or other syntax issues that could be causing the problem. If you find a syntax error, correct it and try running the tests again.

  Another possibility is that there is an issue with the tests. It is possible that you may have modified the test file and caused an issue. If you have made changes to the test file, try copying and pasting the original test file and running the tests again to see if this resolves the issue.

  [Back to top](#faqs)

</details>

<details>
  <summary>How do you find a length of a string in JavaScript?</summary>
  <br>

  To find the length of a string use the `length` property. Here is an example:

  ```js
  const str = "Hello, world!"";
  console.log(str.length); // 13
  ```

  The `length` property returns the number of characters in the string, including spaces and special characters.

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I loop over an array?</summary>
  <br>

  Loops allow you to repeat a block of code a certain number of times. There are several ways to loop over an array in JavaScript:

<br>

  #### For loop

  The `for` loop is the most traditional way to loop through an array in JavaScript. It consists of three parts: the *initialization*, the *condition*, and the *increment/decrement*:

  ```js
  const animals = ['cat', 'dog', 'bird'];

  // initialize counter variable (let i = 0)
  // set condition (i < animals.length)
  // increment counter (i++)
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
  ```

  The initialization is where you declare a counter variable and set its initial value.

  The condition is a boolean expression that is evaluated before each iteration of the loop. If the condition is `true`, the loop will continue. Once the condition turns `false`, the loop will terminate. 

  The increment/decrement is where you update the counter variable and it happens at the end of each iteration.

  The block of code inside the loop is repeated during each iteration.

<br>

  #### While loop

  The `while` loop is another way to loop through an array in JavaScript. It consists of a condition and a block of code that is executed as long as the condition is `true`.

  Like the `for` loop, the `while` loop requires a counter variable to keep track of the current position in the array. The counter variable must be initialized before the loop and incremented or decremented at the end of each iteration.

  ```js
  const animals = ['cat', 'dog', 'bird'];

  // initialize a counter variable (i)
  let i = 0;

  // set condition (i < animals.length)
  while (i < animals.length) {
    console.log(animals[i]);
    
    // increment counter (i++)
    i++;
  }
  ```

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I loop over an array using the <code>forEach()</code> method?</summary>
  <br>

  The `forEach()` method executes a provided function once for each array element. It does not return a new array, but rather executes the function on each element in the array.

  The syntax of the `forEach()` method is as follows:

  ```js
  array.forEach( function(element) {
    // code to be executed for each element
  });
  ```

  <br>

  Here is an example that uses the `forEach()` method to log each element and its index in an array to the console:

  ```js
  const fruits = ['apple', 'banana', 'cherry'];

  fruits.forEach( function(element, index) {
    console.log(`${index}: ${element}`);
  });
  ```

<br>

  You can also use an arrow function as the callback function for `forEach()`:

  ```js
  fruits.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
  ```

  [Back to top](#faqs)

</details>

<details>
  <summary>What could cause <code>array.length</code> to return <code>undefined</code>?</summary>
  <br>

  If you try to access the `.length` property on an array (e.g., `array.length`) but you are getting `undefined` it means that the variable you are accessing is not actually an array.

  <br>

  **How do I fix this?** 

  Check that the variable you are trying to access is actually an array.

  [Back to top](#faqs)

</details>

<details>
  <summary>Why is my function returning the last element of the array instead of the longest one?</summary>
  <br>

  Your function might not be correctly checking for the longest element in the array. In other words, there may be an issue with the logic of the conditional statements in the function, or with the comparison being used in the conditionals.

  To fix this issue, you should check the logic of the conditional statements in the function.

  [Back to top](#faqs)

</details>

<details>
  <summary>How can I compare the length of each word in an array in JavaScript?</summary>
  <br>

  To compare the length of each word in an array in JavaScript, you can use a loop to iterate through the array and compare the length of each element using the `.length` property.

  Here is an example of how you loop over an array:

  ```js
  function findLongestWord(words) {
    for (let i = 0; i < words.length; i++) {
      console.log(words[i]);
    }
  }
  ```

  <br>

  To compare the length of each element you should use a conditional statement in the following way:

  ```js
    if ( words[i].length > longestWord.length) {
      console.log(`${words[i].length} is longer than ${longestWord.length}`);
    }
  ```

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>
  <br>

  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

  1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

  2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
  To check which remote repository you have cloned, run the following terminal command from the project folder:

   ```bash
   git remote -v
   ```

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

   Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  [Back to top](#faqs)

</details>

