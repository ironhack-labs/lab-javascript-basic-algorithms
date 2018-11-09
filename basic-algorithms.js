/* 
Names and Input
Create a variable hacker1 with the driver's name

Print "The driver's name is XXXX"

Create a variable hacker2 and ask the user for the navigator's name

Print "The navigator's name is YYYY"

Conditionals
Depending on which name is longer, print:
The Driver has the longest name, it has XX characters or
Yo, navigator got the longest name, it has XX characters or
wow, you both got equally long names, XX characters!!

Loops
Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

Depending on the lexicographic order of the strings, print:

The driver's name goes first
Yo, the navigator goes first definitely
What?! You both got the same name?

Bonus Time!
Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".


Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a String
Make your program count the number of words in the string
Make your program count the number of times the latin word 'et' appears


*/

const hacker1 = "AJOC";
const hacker2 = 'Guilherme';

// ES5 style
console.log('The driver\'s name is ' + hacker1);

// ES6 Style
console.log(`The driver's name is ${hacker1} ES6`);



// ES5 style
console.log('The navigator\'s name is ' + hacker2);

// ES6 Style
console.log(`The navigator's name is ${hacker2} ES6`);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${2>1} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characteres!!`);
}

//Loops

// using builtin methods instead of for loops
const driverName = hacker1.split('').join(' ').toUpperCase();
console.log(`The driver's name with caps and separated by spaces is ${driverName}`);

const navigatorName = hacker2.split('').reverse().join('');
console.log(`The inverted navigator's name is ${navigatorName} - using ES6`);

// no use of bulitin methods - charCodeAt to determine values of the letters
// TODO: check size of the longest name.
const lexicalNames = (name1, name2) => {
  if (name1 === name2) console.log('What?! You both got the same name?');

  for (let x = 0; x < name1.length; x++) {
    // console.log(name1.charCodeAt(x),name2.charCodeAt(x))
    if (name1.charCodeAt(x) < name2.charCodeAt(x)) {
      console.log('The driver\'s name goes first');
      break;
    } else if (name1[x].charAt() > name2[x].charAt()) {
      console.log('Yo, the navigator goes first definitely');
      break;
    };
  };
};

lexicalNames(hacker1,hacker2);

// Palindrome

const str = 'madam';

// built in methods
const palindrome = (str) => {
  const cleanStr = str.replace(/[\W_]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
};

console.log(`built in palindrome: ${palindrome(str)}`);

// recursive solution for palindrome
// with some control of spaces and special caracters
const isPalindrome = (str) => {
  const cleanStr = str.replace(/[\W_]/g, '');
  const strLen = cleanStr.length;
  if (strLen === 0 || strLen === 1) {
      return true;
  }
  
  if (cleanStr[0] === cleanStr[strLen - 1]) {
      return isPalindrome( cleanStr.slice(1, strLen - 1) );
  }
  
  return false;
};

console.log(isPalindrome('madam'));
console.log(isPalindrome('stack cats'));
console.log(isPalindrome('taco cat'));

// Lorem Ipsum

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices magna luctus dolor bibendum tristique. Quisque lobortis diam ut est porttitor finibus malesuada eu libero. Integer placerat interdum nisi, vel fermentum nulla fermentum semper. Quisque tortor tortor, placerat eget egestas at, bibendum ut lorem. Nam viverra libero eu eros pellentesque condimentum. Duis luctus dictum pellentesque. Etiam dignissim urna sed neque vestibulum, ut posuere eros lobortis. Phasellus placerat sodales lorem lacinia interdum. Maecenas ultrices tempor risus eu ultrices. Nunc consequat odio fringilla, consectetur risus id, rhoncus sem. Quisque a arcu vitae erat blandit facilisis. Aliquam sit amet neque eros. Pellentesque nec dui feugiat, mattis mauris eget, imperdiet nisl.

 Nullam rutrum libero et est aliquam vulputate. In eget odio convallis ante dignissim feugiat. Nullam dignissim feugiat nisi et lacinia. Cras tincidunt massa a justo varius viverra. Cras id massa efficitur leo malesuada gravida non consequat elit. Vestibulum et augue a leo iaculis gravida. Quisque ex augue, iaculis nec rhoncus vel, elementum nec est. Suspendisse sit amet magna eget nisi tempus gravida.

 Nam mollis neque maximus elit maximus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet iaculis dolor. Suspendisse elementum sit amet ex sit amet placerat. Duis efficitur, neque ut finibus congue, massa felis cursus massa, nec aliquet diam velit id massa. Aliquam et magna fringilla, molestie eros ac, elementum mi. Pellentesque a ligula vestibulum, semper diam nec, euismod felis. Mauris neque elit, maximus eget tortor ac, egestas gravida dolor. Donec sed elementum odio, ut sagittis nibh. Proin malesuada mattis lorem, quis tincidunt leo consequat a. Quisque maximus ut ex a venenatis. Sed quis augue mattis, pulvinar orci vel, eleifend lacus. Phasellus sed volutpat neque, at dapibus magna. Fusce augue ipsum, viverra id purus et, fringilla mollis sapien. Nam efficitur tortor sed quam maximus, nec malesuada lacus maximus. Sed sed convallis tortor, non rutrum nisi.`;

// wordcount
console.log(`the lorem ipsum paragraphs have ${loremIpsum.split(' ').length} words,`);

// wordcount regex approach
// we're looking only for characteres that has one or more ocurrences
// string.match() returns and array, containing the matches, one item for each match, or null if no match is found
console.log(`using regex the lorem ipsum paragraphs have ${loremIpsum.match(/\S+/g).length} words.`);

// 'et' occurrences

let etCount = 0;
let loremArr = loremIpsum.split(' ');
for (let x = 0; x < loremArr.length; x++) {
  if (loremArr[x] === 'et') {
    etCount++;
  }
}

console.log(`and ${etCount} 'et' occurrences.`);

// 'et' occurrences
// regex approach

console.log(`and ${loremIpsum.match(/\set\s/g).length} 'et' occurrences with regex.`);