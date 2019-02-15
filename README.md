![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Basic Algorithms

Welcome to your first bootcamp exercise at IronHack!

The goal of this exercise is to get you acquainted with the different control structures we have in JavaScript.

Ready?

## Introduction

Edit the `basic-algorithms.js` file with your editor and check the solutions in the developer tools console.

Ready to start?

## Requirements

- Fork this repo
- Then clone this repo

## Submission

- Upon completion, run the following commands:
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
- Create Pull Request so your TAs can check up your work.
 
## Exercise

### Iteration 1: Names and Input

1. Create a variable `hacker1` with the driver's name

2. Print `"The driver's name is XXXX"` 

3. Create a variable `hacker2` and [ask the user](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) for the navigator's name

4. Print `"The navigator's name is YYYY"`

### Iteration 2: Conditionals

5. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
	- `The Driver has the longest name, it has XX characters` or 
	- `Yo, navigator got the longest name, it has XX characters` or
	- `wow, you both got equally long names, XX characters!!`

### Iteration 3: Loops

6. Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  ie. `"J O H N"`
  
7. Print all the characters of the navigator's name, in reverse order. 
  ie. `"nhoJ"`
  
8. Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print:
  - `The driver's name goes first`
  - `Yo, the navigator goes first definitely`
  - `What?! You both got the same name?`

### Bonus Time!

9. Ask the user for a new string and check if it's a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Examples of palindromes:
	- "A man, a plan, a canal, Panama!"
	- "Amor, Roma"
	- "race car"
	- "stack cats"
	- "step on no pets"
	- "taco cat"
	- "put it up"
	- "Was it a car or a cat I saw?" and "No 'x' in Nixon".

10. Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 parragraphs. Store the text in a String
  - Make your program count the number of words in the string
  - Make your program count the number of times the latin word [`et`](https://en.wiktionary.org/wiki/et#Latin)appears

## Extra Resources

- [prompt() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) | Ask user for input
- [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
