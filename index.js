// Iteration 1: Names and Input

let hacker1 = 'Julia';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Flo';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse().join(''));

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// BONUS 1

let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit libero at ante congue, sit amet posuere risus porta. Etiam sit amet est ut urna elementum fermentum in vitae risus. Nulla cursus eu sapien quis posuere. Morbi gravida tortor augue. Morbi volutpat quis nisl nec suscipit. Proin turpis nisi, molestie et aliquam non, iaculis sit amet tortor. Suspendisse nunc neque, tristique id massa ac, gravida mollis massa. In bibendum odio varius, sollicitudin est vel, faucibus dolor.Vivamus sollicitudin bibendum neque in euismod. Maecenas dictum diam lorem, faucibus maximus dolor facilisis ac. Donec quis facilisis felis. Donec laoreet auctor faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nec leo sit amet nisi placerat commodo vitae eget sem. Fusce ultricies dolor et ex vulputate sodales. Morbi rhoncus, tortor a posuere scelerisque, sem purus malesuada nulla, sed elementum arcu nulla in lacus. Aliquam in gravida odio, vitae volutpat nisl. Morbi at massa rhoncus, ornare nisi eu, euismod odio. In porttitor euismod nulla, a commodo massa posuere sed. Nulla facilisi. Quisque congue ex eget vulputate pretium. Nam bibendum ornare eros, elementum vulputate magna vestibulum quis.Quisque maximus tortor eu sem rhoncus dictum. Ut semper massa vitae massa finibus, eget cursus turpis aliquet. Vivamus ligula elit, congue ut neque at, cursus vehicula est. Sed ac interdum dui, vel efficitur elit. Cras eu justo id lorem dignissim congue. Cras lorem erat, porta ut hendrerit id, feugiat vitae mauris. In tempor justo sit amet nibh egestas lacinia. Nunc faucibus lectus augue, vitae blandit justo fermentum ut. Vivamus lacus ipsum, interdum id ultrices a, bibendum eget tortor. Quisque tincidunt lacus vitae ipsum dignissim cursus. Integer pharetra ut tortor quis rhoncus. Phasellus sit amet dui sed metus lacinia lacinia non tincidunt magna. Aliquam erat volutpat.';

let words = longText.split(' ');
let numWords = words.length;

words.filter(word => word === 'et').length;

// or:

let et = 0;
for(let i = 0; i < words.length; i++) {
  if(words[i] === "et") {
    et++;
  }
}
console.log(et);

// BONUS 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
phraseToCheck = phraseToCheck.toLowerCase().split('').filter(char => /[a-z]/.test(char));

let reversed = phraseToCheck.toReversed();

if (phraseToCheck.join('') === reversed.join('')) {
  console.log('Yes, this is a palindrome!');
} else {
  console.log('No, this is no palindrome!');
}
