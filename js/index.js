// Iteration 1: Names and Input

let hacker1 = 'William';
let hacker2 = 'Pauline';

console.log(`The driver's name is ${hacker1}`);
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters. ${hacker2}`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters. ${hacker1}`
  );
}
console.log(
  `Wow, you both have equally long names, ${hacker1.length} characters!.`
);

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split(''));

console.log(
  hacker2
    .split('')
    .reverse()
    .join('')
);

if (hacker1.charAt(0) < hacker2.charAt(0)) {
  console.log("The driver's name goes first.");
} else if (hacker1.charAt(0) > hacker2.charAt(0)) {
  console.log('Yo, the navigator goes first definitely. ');
} else {
  console.log('What?! You both have the same name?');
}

// bonus 1

let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit faucibus ex, sit amet posuere enim consectetur ut. Etiam eros turpis, dictum id nunc non, ullamcorper pulvinar ex. Mauris viverra quis tortor in lacinia. Vivamus blandit ornare massa sit amet rutrum. Nullam scelerisque a lacus in interdum. Aliquam at dictum dolor. Nunc suscipit volutpat porta. Ut ultrices lorem sed felis efficitur, ut pharetra lectus fermentum. Donec ac condimentum elit. Nulla eget molestie massa. Nam consequat neque tempor ultricies pretium. Quisque ac nisi in tellus venenatis mattis. Phasellus dictum aliquam augue, at accumsan felis facilisis at. Maecenas ac odio bibendum, facilisis justo at, sodales eros. Mauris nisl arcu, egestas vel viverra id, porttitor et purus. Integer id est at nisl convallis mollis porta et lectus. Fusce id est et ex pellentesque tincidunt. Proin vitae dignissim purus, ut malesuada mi. Maecenas non lectus ligula. Sed euismod vitae est lacinia volutpat. Quisque nulla mi, ultricies ac pulvinar vitae, mollis in nulla. Nullam eget nulla sit amet lacus gravida pretium. Vivamus at tempor velit. Proin vel mauris condimentum nulla aliquam convallis ut sed tortor. Aliquam consectetur ornare ante sed pharetra. Morbi tincidunt mattis ligula vitae pulvinar. Suspendisse dignissim eget magna ut lacinia. Aliquam sollicitudin felis lorem, vitae elementum eros scelerisque consequat. Integer et vehicula sem. Vestibulum rhoncus elit et augue congue condimentum. ';

let word = lorem.split(' ');

console.log(word.length);

let count = 0;
for (let i = 0; i < word.length; i++) {
  if (word[i] === 'et') {
    count++;
  }
}

console.log(count);

// bonus 2

let phraseToCheck = 'Amor, Roma';

let array = phraseToCheck.toUpperCase().split(', '); // transforme phrase en tableau

let word1 = array[0];
let word2 = array[1]
  .split('')
  .reverse()
  .join('');

if (word1 === word2) {
  console.log('palindrome!');
} else {
  console.log('Not a palindrome!');
}
