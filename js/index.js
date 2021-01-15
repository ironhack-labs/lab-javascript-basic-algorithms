// Iteration 1: Names and Input
console.log('Iteration 1: Names and Input');

let hacker1 = 'Paulinha';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Nobody';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

console.log('Iteration 2: Conditionals');

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
    else {
      if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
      }
      else {
        console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
      }
    }


// Iteration 3: Loops

console.log('Iteration 3: Loops');

// Print all the characters of the driver's name, separated by a space and in capitals

console.log(`Driver's name, separated by spaces and in capital letters:`);
console.log(hacker1.toUpperCase().split('').join(' '));

/* Using the loop method 

let hacker1WithSpaces = '';
for (let i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1[i].toUpperCase()+' ';
}

console.log(hacker1WithSpaces.trim());
*/

// Print all the characters of the navigator's name, in reverse order.

console.log(`Navigators's name, reversed:`);
let hacker2Reversed = '';

for (let i = hacker2.length - 1; i>=0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

// Checking the lexicographic order of the strings

if (hacker1.localeCompare(hacker2) === 0) {
    console.log('What?! You both have the same name?');
} else {
  if (hacker1.localeCompare(hacker2) < 0) {
   console.log(`The driver's name goes first.`); 
  } else {
    console.log(`Yo, the navigator goes first definitely.`); 
  }
}

// Bonus 1

console.log('### Bonus 1');

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor purus, posuere nec felis consectetur, rhoncus condimentum erat. Morbi vel ante rutrum libero egestas condimentum. Phasellus tellus turpis, porta a diam eget, aliquet finibus nisi. Vestibulum tempus auctor quam. Etiam nisi justo, vehicula vel placerat eu, faucibus sit amet mi. Curabitur vestibulum mollis viverra. Proin tempor nunc magna, ac pretium massa faucibus vel.
Maecenas a porttitor dui. Mauris id neque sed velit consequat posuere. Duis vel arcu tempor, sagittis diam id, molestie mauris. Donec ac ex congue, rutrum neque sit amet, convallis odio. Pellentesque et massa metus. Nunc eget elementum enim. Pellentesque nisi enim, finibus vitae lectus a, commodo scelerisque arcu. Etiam vehicula nec ex quis semper.
Vivamus a dictum justo. Phasellus quis condimentum ante, non convallis ante. Praesent et viverra massa. Nam eget venenatis neque. Vestibulum euismod tempor velit. Quisque porttitor ultricies lorem pellentesque consequat. Maecenas consequat, dolor non condimentum tincidunt, sapien felis feugiat magna, a luctus magna eros vel dui. Donec egestas lectus eu odio tristique, a dapibus sem rhoncus. Fusce pharetra augue ornare, semper orci vel, congue ex. Mauris pulvinar vehicula leo quis ullamcorper. Nunc non nunc enim. Sed id purus maximus, tincidunt sem in, lacinia metus. Proin gravida velit a odio blandit, sed mollis augue tristique. Suspendisse accumsan mi nec sollicitudin rutrum. Nulla id tellus luctus, rutrum ante at, molestie augue.`

loremIpsum = loremIpsum.replace(/(\r\n|\n|\r)/gm, " ");

console.log(`The number of words in  this string is ${loremIpsum.split(' ').length}`);

const chosenWord = 'et';
let nbOccurrences;

nbOccurrences = loremIpsum.replace(/\./g,'').replace(/\,/g,'').toLowerCase().split(' '+chosenWord+' ').length-1;

console.log(`The number of occurrences of the Latin word ${chosenWord} is ${nbOccurrences}`);