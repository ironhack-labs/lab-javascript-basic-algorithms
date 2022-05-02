// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.

	// 1.2 Print `"The driver's name is XXXX"`.

    // 1.3 Create a variable `hacker2` with the navigator's name.

    // 1.4 Print `"The navigator's name is YYYY"`.

let hacker1 = 'Theophrastus';
let hacker2 = 'Joe';

console.log(`"The driver's name is ${hacker1}."`);
console.log(`"The navigator's name is ${hacker2}."`);



// ### Iteration 2: Conditionals
//   2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
//   <br>
// 	  - `The driver has the longest name, it has XX characters.` or <br>
// 	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
// 	  - `Wow, you both have equally long names, XX characters!`.

if (hacker1.length > hacker2.length) {
    console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!`)};


// ### Iteration 3: Loops
//   3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//   i.e. `"J O H N"`

let uppercase = hacker1.toUpperCase();

let uppercase1 = "";
for (i=0;i<hacker1.length;i+=1) {
    if (i<(hacker1.length-1)) {uppercase1 += uppercase[i] + " "}
    else uppercase1 += uppercase[i];
}

console.log(uppercase1);

// for (let i=0;i<=hacker1.length; i +=1) {let uppercase2; uppercase2 += hacker1[i].toUpperCase() + " "};
// console.log(uppercase2);

//   3.2 Print all the characters of the navigator's name, in reverse order. 
//   i.e. `"nhoJ"`

let reverse=""; 
for (let i=(hacker2.length); i>0; i -= 1) {reverse += hacker2[i-1]};
console.log(reverse);
  
//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
//     - `The driver's name goes first.` <br>
//     - `Yo, the navigator goes first definitely.` <br>
//     - `What?! You both have the same name?`

if (hacker1<hacker2) {console.log(`The driver's name goes first.`)}
else if (hacker2<hacker1) {console.log(`Yo, the navigator goes first definitely.`)}
else if (hacker1 === hacker2) {console.log(`What?! You both have the same name?`)};



// ### Bonus Time!

// #### Bonus 1:
// Go to [lorem ipsum generator](http://www.lipsum.com/) and:
//   - Generate 3 paragraphs. Store the text in a variable type of string.
//   - Make your program count the number of words in the string.
//   - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed arcu risus. Nullam consectetur augue ligula, non maximus libero tristique eu. Nullam in fermentum mi. Suspendisse a lacus maximus, scelerisque arcu ac, fermentum libero. Donec euismod sit amet mauris eu aliquet. Aliquam lobortis nisi turpis, a efficitur sapien rutrum et. Donec nec scelerisque arcu. Pellentesque elementum convallis nibh, id mattis augue varius eget. Sed viverra volutpat ante, quis consectetur urna ornare a. Vivamus faucibus pulvinar risus, in cursus leo blandit et. Nunc commodo nunc ligula, eget rutrum nisi volutpat ut. Vivamus auctor mi nec orci vulputate, eu condimentum quam tristique. Fusce pretium risus ut metus luctus faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu feugiat leo. Praesent eros ante, semper et sapien sit amet, iaculis molestie erat. Phasellus nisi ipsum, ultricies et ante vel, placerat viverra sapien. Etiam consectetur non diam sit amet dapibus. Proin lacinia tellus risus, non condimentum arcu venenatis vel. Morbi vel pretium ligula, ut elementum felis. Aenean ac commodo tortor, nec feugiat ligula. Nullam lobortis purus eu condimentum pulvinar. Pellentesque eget tellus quam. Ut aliquam purus tellus, ac posuere elit eleifend at. Etiam dictum maximus euismod. Vivamus gravida sodales quam, quis dictum odio. Integer dictum nisl vitae ipsum malesuada viverra. Sed nec lacus at enim aliquam porttitor. Donec hendrerit finibus metus, at feugiat augue finibus a. Mauris fringilla eleifend nunc sed semper. Suspendisse dictum vestibulum dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
let wordCount = lorem. match(/(\w+)/g). length;
console.log(wordCount);
let etCount = lorem. match (/(\W)et(\W)/g).length;
console.log(etCount);

// #### Bonus 2:
// Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
//   - "A man, a plan, a canal, Panama!"
//   - "Amor, Roma"
//   - "race car"
//   - "stack cats"
//   - "step on no pets"
//   - "taco cat"
//   - "put it up"
//   - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
  
//   __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley: 

let phraseToCheck = "Reittier!";
let cleanPhrase =  phraseToCheck.replace(/[^a-zA-Z. ]/g, '');
cleanPhrase = cleanPhrase.toLowerCase();
for (i=0;i<cleanPhrase.length;i+=1) {if (cleanPhrase[i] === cleanPhrase[cleanPhrase.length-i]) 
    {continue; } else {console.log("Not a palindrome!"); break;}
}  
