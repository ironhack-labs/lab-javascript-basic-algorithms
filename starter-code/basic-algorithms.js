// Names and Input
let hacker1 = 'David';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Fred';
console.log(`The navigator's name is ${hacker2}.`);

/* let hacker2 = prompt('What is the navigator\'s name?');*/


//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`wow, you both got equally long names, ${hacker2.length} characters.`);
}

//Loops
console.log(hacker1.split('').join(' ').toUpperCase());

let hacker2Reversed = [];
for (let i = hacker2.length; i >= 0 - 1; i -= 1) {
  hacker2Reversed.push(hacker2[i]);
} 
console.log(hacker2Reversed.join(''));

/* let hacker2Reversed = '';
for (let i = hacker2.length - 1; i >= 0; i -= 1) {
  hacker2Reversed += hacker2[i];
} 
console.log(hacker2Reversed); */

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both got the same name?");
}

let palindrome = 'Amor, Roma';

console.log(palindrome.split(',').join('').split(' ').join('').toLowerCase());
let palindromeDone = palindrome.split(',').join('').split(' ').join('').toLowerCase();

let inversedPalindrome = '';

const palindromeMaker = (palindromeDone) => {
  for (let i = palindromeDone.length - 1; i >= 0; i -= 1) {
    inversedPalindrome += palindromeDone[i];
  }
  if (palindromeDone === inversedPalindrome) {
    console.log('É um palindromo!');
  } else {
    console.log('Não é um palindromo!');
  }
}

palindromeMaker(palindromeDone);

// Lorem ipsum generator

let paragraph1 = 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Aenean aliquam molestie leo, vitae iaculis nisl. Interagi no mé, cursus quis, vehicula ac nisi. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor risus magna, a dignissim tellus aliquam sit amet. Donec aliquet, odio vel convallis sodales, est nibh egestas ex, id tincidunt eros turpis et ex. Sed cursus non ipsum at blandit. In tincidunt semper faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec lorem purus. Phasellus ac sodales metus. Phasellus egestas ultrices dolor. Duis aliquet nunc porta neque lobortis posuere. Etiam mattis non lorem ut volutpat. Vivamus fringilla consequat felis at tristique. Nullam felis elit, lacinia quis gravida a, elementum ac sapien. Mauris sit amet interdum elit. Donec eget nunc quis lectus porttitor varius sit amet in elit. Integer a felis mauris. Aenean mi massa, pellentesque non massa sit amet, ultricies eleifend sapien. Etiam auctor eleifend tempor.';

const wordCounter = (paragraph) => {
  console.log(paragraph.split(' ').length);

}
wordCounter(paragraph1);

console.log(paragraph1.split('et').length);
// console.log(cleaner(paragraph1));