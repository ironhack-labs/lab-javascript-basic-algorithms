// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
//1.2 Print `"The driver's name is XXXX"`.
//1.3 Create a variable `hacker2` with the navigator's name.
//1.4 Print `"The navigator's name is YYYY"`.

let hacker1 = 'Rhaysa';
let hacker2 = 'Eduardo';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
/*- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/ 
let number = hacker1.length - hacker2.length;
if(hacker1.length > hacker2.length)
{
  console.log(`The driver has the longest name, it has ${number} characters.`);
}
else if(hacker2.length > hacker1.length)
{
  console.log(`It seems that the navigator has the longest name, it has ${-(number)} characters`);
}
else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops 
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

let receive = "";

for(let i = 0; i < hacker1.length; i++)
{
  receive += hacker1.toUpperCase().charAt(i) + ' ';
  /**"hello".split('').join(' '); */
}
console.log(receive);


/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/

console.log(hacker2.split("").reverse().join(""));


/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
let compare = hacker2.localeCompare(hacker1);

if( compare >= 1)
{
  console.log("The driver's name goes first.");
}
else if( compare <= -1)
{
  console.log("Yo, the navigator goes first definitely.");
}
else{
  console.log("What?! You both have the same name?");
}


/*BONUS 1 
Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
 */
let paragrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis nulla eget vestibulum dictum. Ut fringilla enim eget risus blandit, in consectetur ante malesuada. Aliquam finibus mauris nibh, convallis porttitor lectus ultricies sit amet. Fusce malesuada turpis non lobortis accumsan. Fusce sit amet leo id elit finibus volutpat quis id leo. Aenean aliquam rutrum dolor. Nam eget euismod eros. Suspendisse maximus ullamcorper semper. Quisque at quam eu sapien sodales suscipit. Fusce egestas dolor a venenatis ultricies. Etiam vulputate imperdiet rutrum. Aliquam scelerisque tempus elementum. In purus nunc, venenatis eleifend mauris nec, tincidunt congue dolor. Duis non ante vehicula, interdum orci ut, pulvinar massa. Mauris elit nisl, pulvinar et magna vitae, ullamcorper ornare lorem. Etiam non odio a libero lacinia euismod. Duis eget dui diam. Nullam consectetur, justo a sagittis cursus, enim lorem sollicitudin justo, ut cursus justo orci mattis enim. Aenean pharetra eleifend dui, ac pulvinar sapien suscipit sit amet. Etiam efficitur mi consequat magna dapibus, quis tempor sem imperdiet. Ut venenatis, lorem ut sodales vehicula, nisl felis ullamcorper dui, eu laoreet augue ante in massa. Nulla aliquet scelerisque nibh, ut molestie tellus ultricies et. Pellentesque quis egestas nunc. Nullam ultricies maximus sem sollicitudin mattis. Integer odio ipsum, feugiat ut orci eget, feugiat lacinia libero. Nam justo tortor, gravida nec ultricies vel, ornare in leo.  Sed metus metus, condimentum a sagittis id, dictum sit amet nibh. Phasellus arcu ex, feugiat quis pellentesque congue, consectetur vel erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis congue neque. Suspendisse et velit ac enim commodo vulputate. Pellentesque auctor gravida suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed dignissim, risus at viverra ultrices, erat ipsum vulputate magna, id pharetra arcu arcu et lectus. Nullam viverra ante a urna sagittis vehicula. Morbi id mattis lorem, ac condimentum turpis. Ut consectetur sem diam, sit amet vulputate purus aliquet sed. Phasellus ultricies massa purus, eget rhoncus tortor condimentum vel.";


console.log(`The number of words in the string: ${paragrafo.split(' ').length}`);

let numberEt = paragrafo.match(/ et/g);
console.log(`The number of et words: ${numberEt.length}`);


/*BONUS 2
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

let phraseToCheck = "race home";

function isPoli(str)
{
  let ret = /[\W_]/g;
  str = str.toLowerCase().replace(ret, '');
  let len = str.length;

  for(let i = 0; i < len/2; i++)
  {
    if(str[i] !== str[len-1-i])
    {
      return false;
    }
  }

  return true;
}

isPoli(phraseToCheck);