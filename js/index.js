// Iteration 1: Names and Input

const hacker1 = "Nelli";
console.log(`The Driver's name is ${hacker1}`);
const hacker2 = "Gizem";
console.log(`The Navigator's nameis ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
} else if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker1.length == hacker2.length) {
    console.log(
        `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
}

// Iteration 3: Loops

// Iteration 3.1 

let spaceBetween = ' ';

console.log(hacker1.split('').join(spaceBetween).toUpperCase());

// another way 

let result = '';

for(var i=0; i<hacker1.length; i++){
   result += hacker1.charAt(i).toUpperCase() + spaceBetween;     
}

console.log(result);


// Iteration 3.2
let reverseHacker2 = '';

for(var i = hacker2.length ; i>= 0; i--){
   reverseHacker2 += hacker2.charAt(i);     
}

console.log(reverseHacker2);


// Iteration 3.3

if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log('What?! You both have the same name?');
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
}

// Bonus 1.1

let para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus quam mi. Sed id urna non odio tincidunt pellentesque. Aenean imperdiet metus mauris, vel sollicitudin nisl fermentum vitae. Sed a purus tempus mauris molestie lacinia. Donec diam ligula, iaculis faucibus vehicula sit amet, vehicula interdum turpis. Curabitur fermentum mi non diam cursus lacinia. Curabitur sit amet sem et mi semper convallis nec elementum mi. Nulla tincidunt nisi at libero hendrerit sodales. Quisque volutpat ante vitae orci placerat, a pretium arcu tincidunt. Duis iaculis lacus est, lacinia sagittis ante imperdiet vitae. Nulla facilisi. Aenean vel justo eu ex suscipit convallis. In ornare scelerisque velit, eu feugiat sapien tempus ut. Phasellus commodo nibh elit, eu mattis odio semper feugiat. Curabitur auctor et nisl eu rhoncus. Proin convallis ut nibh tincidunt euismod. Suspendisse ullamcorper erat vestibulum iaculis porta. Pellentesque gravida, massa non pharetra volutpat, nunc tortor tincidunt erat, et sollicitudin magna urna ac urna. In hac habitasse platea dictumst. Etiam sit amet varius massa, porta dictum ligula. Etiam lectus justo, posuere vel sagittis sit amet, posuere id odio. Nunc non tortor mattis, molestie ante eu, molestie eros. Morbi eget magna vel nunc sollicitudin luctus. Sed volutpat, ante at tempor pulvinar, odio ante tristique tortor, eu volutpat orci metus ut ante. Pellentesque ut orci imperdiet, tristique ipsum vel, imperdiet quam. Ut sed erat accumsan, euismod ipsum nec, hendrerit velit. Suspendisse vulputate dolor quis nisi tempor, quis feugiat lorem finibus. Sed quis mauris at arcu luctus eleifend. Ut venenatis, ipsum at tristique fermentum, sem augue porta velit, sit amet consectetur lacus odio eget libero. Etiam consectetur tempus orci, nec eleifend nibh rutrum a. Morbi sit amet tristique nisi. Proin nisl quam, dapibus in malesuada ac, vestibulum in ante. Mauris tristique aliquam nisl in ultrices. Sed eu blandit nunc. In venenatis et risus et cursus. Cras arcu lacus, semper eu molestie dapibus, maximus vel quam. Nullam posuere, sem ornare blandit efficitur, turpis erat vehicula quam, id pulvinar eros velit vitae lectus. Curabitur et efficitur mauris. Nam ligula ante, sollicitudin in finibus eget, mollis id justo." ;

//console.log(para);
// Bonus 1.2
function countWords (str) {
    return str.split(' ').length;
}
console.log(countWords(para));

// Bonus 1.3

function howMany (str, word) {
    return str.split(word).length - 1;
}

console.log(para, "et");



### Bonus Time!

#### Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.

#### Bonus 2:
Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is 
a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
  
  __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.).
   However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley: 

## Extra Resources

- [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)


__Happy coding!__ :heart:
