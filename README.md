![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Basic Algorithms

<br>

![lab-js-basic-algorithms-code-collaboration-gif](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-js-basic-algorithms-code-collaboration-gif.gif)

<br>

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Run JavaScript code from your IDE, using a local server to load it in the browser
  - Declare variables using `const` and `let` keywords and use them to store values.
  - Assign values to variables using assignment operators (`=` , `+=` , `-=` , etc.).
  - Use conditional statements (`if`, `else if`, `else`) and logical operators (AND, OR, NOT) to control the flow of the program.
  - Access and compare string characters, substrings and length.
  - Manipulate strings using basic string methods and proper (`toUpperCase()`, `toLowerCase()`, etc.).
  - Compare values using the comparison operators (`<` , `>` , `<=` , `>=` , `===`).
  - Use `for` or `while` loops to iterate over strings in normal and reverse order.

  <br>
  <hr> 

</details>

## Introduction

Welcome to your first JavaScript lab at Ironhack!

This exercise aims to familiarize you with and allow you to practice the primitive data types and basic JavaScript concepts, which we have covered so far. Feel free to reference lesson and pre-work materials, and don't limit yourself; be curious and use Google to explore multiple solutions.

You will be working with a partner on this lab, practicing **pair-programming**. During the exercise, you should work together on one computer or code editor and take turns writting the code with your partner. One person will act as the **driver** and the other will be the **navigator**. The driver is the one writing the code and the navigator is the one reviewing the code and guiding the driver.

You should switch roles every 15 minutes or after completing each iteration, to give both of you a chance to write code and practice discussing problems and solutions.

Ready to start?

<br>

## Getting Started
For this exercise, we will use VS Code and the Live Server extension to run the JavaScript code. To do it, follow these steps:



- Fork this repo

  

- Clone it to your machine

  

- Open the project folder in VS Code

  

- Once in VS Code, open the file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. To do this, right-click on the `index.html` file and select **Open with Live Server**.

  

- A new browser window will open with the `index.html` file loaded. You can now start working on the exercise.

<br>



## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request and submit your assignment.

<br>

*At Ironhack, we use Pull Requests (PR) to submit lab assignments and verify student's work. After completing all the mandatory iterations, you should commit your code and create a Pull Request. If you can't finish a part of an iteration or still haven't completed all the iterations or the bonuses, it's okay; you should still submit the Pull Request before the start of the class on the next day.*<br>

*Once you make a PR, any other time you push the changes (following the previous three steps), your change will appear automatically on the PR, allowing the teaching staff to verify your submission.*

<br>



## Instructions

You should do all your work in the `index.js` file. The file is already linked to the `index.html` file, so you can open the `index.html` file in the browser and see the results of your work in the console.

<br>

Before you start writing any code, make sure to carefully read the instructions provided for each iteration and understand what you are asked to do.

We hope you enjoy it! :blue_heart:

<br>

### Iteration 1: Names and Input

  1.1 Create a variable `hacker1` with the driver's name. <br>
  1.2 Print `"The driver's name is XXXX"`.<br>
  1.3 Create a variable `hacker2` with the navigator's name.<br>
  1.4 Print `"The navigator's name is YYYY"`.

### Iteration 2: Conditionals

  2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
  <br>
    - The driver` has the longest name, it has XX characters.` or <br>
    - `It seems that the navigator has the longest name, it has XX characters.` or <br>
    - `Wow, you both have equally long names, XX characters!`.

### Iteration 3: Loops

  3.1 Print the characters of the driver's name, separated by space, and [in capital letters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), i.e., `"J O H N"`.

  3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`.

  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

- `The driver's name goes first.` <br>
- `Yo, the navigator goes first, definitely.` <br>
- `What?! You both have the same name?`

### Bonus Time!

#### Bonus 1:

Go to the [lorem ipsum generator](http://www.lipsum.com/) website and:

  - Generate 3 paragraphs. Store the text in a new string variable named `longText`.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.

#### Bonus 2:

Create a new variable, `phraseToCheck`, containing some string value. Write a code to check if the value assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 

  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".

  __IMPORTANT__: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as _join()_, _reverse()_, etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the `for` loop and `if-else` statements with some `break` and `continue`.

__Happy coding!__ :heart:

## Extra Resources

- [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

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
  <summary>How do you find a length of a string in JavaScript?</summary>
  <br>

  To find the length of a string, you can use the `length` property. Here is an example:

  ```js
  const str = "Hello, world!"";
  console.log(str.length); // 13
  ```

  The `length` property returns the number of characters in the string, including spaces and special characters.

  [Back to top](#faqs)
</details>

<details>
  <summary>How do I loop over a string?</summary>
  <br>

  Here is an example of using a `for` loop to loop over a string:

  ```js
  let str = "ironhack";

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  ```

  This code will iterate over each character in the `str` string. The loop will run for as many iterations as there are characters in the string. 
  On each iteration, the loop will log the current character to the console.

  [Back to top](#faqs)
</details>

<details>
  <summary>How do I check if a substring exists in a given string?</summary>
  <br>

  You can use the `includes()` method to check if a substring exists in a given string. 

  This method returns a boolean value  (`true` or `false`) indicating whether the string it is called on includes the substring specified as an argument.

  Example:

  ```js
  let str = "hello world";

  console.log(str.includes("hello"));  // true
  console.log(str.includes("world"));  // true
  console.log(str.includes("bye"));    // false
  ```

  <br>

  You can also use the `indexOf()` method, which returns the index of the first occurrence of the substring within the string, or -1 if the substring is not found.

  Example:

  ```js
  let str = "hello world";

  console.log(str.indexOf("h"));      // 0
  console.log(str.indexOf("world"));  // 6
  console.log(str.indexOf("bye"));    // -1
  ```

  [Back to top](#faqs)
</details>

<details>
  <summary>How do I convert a string to capital or lowercase letters?</summary>
  <br>

  #### Uppercase

  To convert a string to *uppercase* letters, use the `toUpperCase()` method. The method `toUpperCase()` returns a new string with all the characters in uppercase.

  Example:

  ```js
  let str = "ironhack";

  console.log(str.toUpperCase());  // "IRONHACK"
  ```

  <br>

  #### Lowercase

  To convert a string to all *lowercase* letters, you can use the `toLowerCase()` method. This method returns a new string with all the characters in lowercase.

  Example:

  ```js
  let str = "IRONHACK";

  console.log(str.toLowerCase());  // "ironhack"
  ```

  It's important to note that methods `toUpperCase()` and `toLowerCase()` do not modify the original string. They return a new string that has been converted to the desired case.

  [Back to top](#faqs)
</details>

<details>
  <summary>How do I reverse a string?</summary>
  <br>

  You can use a `for` loop to iterate over the characters of the string and add them to a new string in reverse order.

  Example:

  ```js
  let str = "drawer";
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  console.log(reversed);  // "reward"
  ```

  The above example uses a `for` loop to iterate over the characters of the `str` string in reverse order, starting at the last character and ending at the first character. On each iteration, it adds the current character to the `reversed` string.

  [Back to top](#faqs)
</details>

<details>
  <summary>How do I create a multi-line string in JavaScript?</summary>
  <br>

  To create a multi-line string in JavaScript, you must use template literals. Template literals are string literals denoted with backticks (`). They allow you to embed expressions inside string values and create strings that span multiple lines.

  Example:

  ```js
  let str = `This is an
  example of a
  multi-line string.`;

  console.log(str);
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
If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first and then clone your fork to your local machine to be able to push the changes.

**Note**: You should make a copy of your local code to avoid losing it in the process.

  [Back to top](#faqs)

</details>

