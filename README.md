![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Basic Algorithms 

Welcome to your first JavaScript lab at Ironhack!

The goal of this exercise is to get you familiarized with the primitive data structures in JavaScript, which we have covered in the class. Feel free to reference lesson materials and don't limit yourself but be curious and use Google to explore multiple solutions.

![qrjeCm](https://user-images.githubusercontent.com/76580/167263489-bd345c02-6c3b-425e-9a9c-96390dea9ba6.gif)



## Introduction

For this **pair-programming** activity we are going to use a [REPL](https://en.wikipedia.org/wiki/Read–eval–print_loop). You can find a REPL that runs in the browser for programming languages as JavaScript in https://repl.it/languages/babel.

Ready to start?

## Requirements

- Fork this repo

- Clone this repo

- Go to [repl.it](https://repl.it/languages/nodejs) and create an account (or login if you have one)

- Create a new reply by clicking on <kbd>+ Create Repl</kbd>

- Type this in the *Code Editor* (left panel)

  ```javascript
  console.log("I'm ready!");
  ```

  

- Press `run ►`

- If you can see the message in the right side panel, you are really ready!

  [![img](https://camo.githubusercontent.com/6aec8c457badb991e89cb96014311a46296f0dbaf3f5c17f88f8c7fab30f436c/68747470733a2f2f73332d65752d776573742d312e616d617a6f6e6177732e636f6d2f69682d6d6174657269616c732f75706c6f6164732f75706c6f61645f31376630393562396262346661346264316265653163303137633034333332372e706e67)](https://camo.githubusercontent.com/6aec8c457badb991e89cb96014311a46296f0dbaf3f5c17f88f8c7fab30f436c/68747470733a2f2f73332d65752d776573742d312e616d617a6f6e6177732e636f6d2f69682d6d6174657269616c732f75706c6f6164732f75706c6f61645f31376630393562396262346661346264316265653163303137633034333332372e706e67)

  

- **When you are done completely or at any point after the first iteration, copy your code into the `index.js` file and follow the steps for submission.**

  

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create a Pull Request so that the TAs can check your work.

*You should make a PR (stands for Pull Request) as soon as you make any significant change. You shouldn't have to wait until you're completely done with this or any other exercise to make the PR. After you do the first PR, any other time you push the changes (following the previous three steps), your change will appear automatically on the PR and your TAs will be able to check it.*

<!-- ## Submission -->

<!-- When you are done and you have checked that everything works fine, click on the **Share** button and copy the link from the *Share Link* field. Send this link to your TAs so they can check up your work.
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
  3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"`

  3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`

  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`

### Bonus Time!

#### Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
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

  __Hint__: If you use Google to help you to find solution to this iteration, you might run into some advanced solutions that use string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley: 

## Extra Resources

- [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

__Happy coding!__ :heart:

