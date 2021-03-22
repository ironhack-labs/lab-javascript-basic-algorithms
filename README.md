!Lexicographical_order) of the strings, print: <br>
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
  
  __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley: 

## Extra Resources

- [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)


__Happy coding!__ :heart:

let hacker1="Jeroen van Bart";

console.log(`The drivers name is ${hacker1}`);


let hacker2 = "Jamal Nasser";

console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
//Jamal Nasser
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters

  console.log(hacker1.toUpperCase());
  console.log("hacker1".split('').join(' '));
