![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Basic Algorithms 

Welcome to your first JavaScript lab at Ironhack!

The goal of this exercise is to get you familiarized with the primitive data structures in JavaScript, which we have covered in class. Feel free to reference lesson materials, and don't limit yourself; be curious and use Google to explore multiple solutions.

<br>

![lab-js-basic-algorithms-code-collaboration-gif](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-js-basic-algorithms-code-collaboration-gif.gif)

<br>

## Introduction

For this **pair-programming** activity, we are going to use a [REPL](https://en.wikipedia.org/wiki/Read–eval–print_loop). To make things as simple as possible, we are going to use an in-browser JavaScript REPL that is provided by the browser-based IDE, [repl.it](https://replit.com/languages/javascript).

Ready to start?

## Requirements

- Fork this repo
- Clone this repo
- Go to [repl.it](https://repl.it/languages/nodejs) and create an account (or log in if you have one)
- Create a new reply by clicking on <kbd>+ Create Repl</kbd>
- Type this in the *Code Editor* (left panel)
  ```javascript
  console.log("I'm ready!");
  ```
- Press `run ►`
- If you can see the message in the right side panel, you are really ready!

  ![lab-js-basic-algorithms-replit-ready](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-js-basic-algorithms-replit-ready.png)

- **When you are done completely, or at any point after the first iteration, copy your code into the `index.js` file and follow the steps for submission.**

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create a Pull Request so that the TAs can check your work.

*You should make a PR (Pull Request) as soon as you make any significant change. You shouldn't have to wait until you're completely done with this or any other exercise to make the PR. After you do the first PR, any other time you push the changes (following the previous three steps), your change will appear automatically on the PR and your TAs will be able to check it.*

<!-- ## Submission -->

<!-- When you are done and you have checked that everything works fine, click on the **Share** button and copy the link from the *Share Link* field. Send this link to your TAs so they can check up on your work.
![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_b2aa98f91affe5d4c5f12f216b069184.png) -->

## Instructions

### Iteration 1: Names and Input

  1.1 Create a variable `hacker1` with the driver's name. <br>
  1.2 Print `"The driver's name is XXXX"`.<br>
  1.3 Create a variable `hacker2` with the navigator's name.<br>
  1.4 Print `"The navigator's name is YYYY"`.

### Iteration 2: Conditionals

  2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
  <br>
    - `The driver has the longest name, it has XX characters.` or <br>
    - `It seems that the navigator has the longest name, it has XX characters.` or <br>
    - `Wow, you both have equally long names, XX characters!`.

### Iteration 3: Loops

  3.1 Print the characters of the driver's name, separated by space, and [in capital letters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), i.e., `"J O H N"`.

  3.2 Print all the characters of the navigator's name, in reverse order, i.e., `"nhoJ"`.

  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

- `The driver's name goes first.` <br>
- `Yo, the navigator goes first definitely.` <br>
- `What?! You both have the same name?`

### Bonus Time!

#### Bonus 1:

Go to the [lorem ipsum generator](http://www.lipsum.com/) website and:

  - Generate 3 paragraphs. Store the text in a new string variable named `longText`.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.

#### Bonus 2:

Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 

  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".

  __IMPORTANT__: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as _join()_, _reverse()_, etc.). However, we want you to apply the knowledge you currently have and try to come up with a solution by just using the `for` loop and `if-else` statements with some `break` and `continue`.

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

  To find the length of a string you can use the `length` property. Here is an example:

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
If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  [Back to top](#faqs)

</details>

