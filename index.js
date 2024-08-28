// Iteration 1: Names and Input
let hacker1 = 'Gemma';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Javier';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker2.length === hacker1.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
hacker1 = hacker1.split('').join(' ');
console.log(hacker1);

let navigator = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigator += hacker2[i];
  console.log(navigator);
}

let nombre1 = 'Javier';
let nombre2 = 'Gemma';
if (nombre1 > nombre2) {
  let nombre2 = 'Gemma';
} else if (nombre2 > nombre1) {
  console.log('Yo, the navigator goes first, definitely.');
} else {
  console.log('What?! You both have the same name?');
}
//bouns;
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque diam, porta non vulputate vel, molestie eu neque. Morbi mollis nulla eu enim interdum, in blandit enim viverra. Morbi imperdiet sapien tortor, id aliquam felis efficitur rutrum. Vestibulum nec tristique justo. Proin pretium lectus et neque consectetur, id viverra urna tempor. Curabitur in efficitur felis. Aliquam imperdiet posuere enim, eget suscipit metus sagittis ut. Quisque vitae sollicitudin ligula. Morbi eget mauris aliquam, volutpat leo vitae, ultrices enim. Duis posuere ex eu venenatis vestibulum. Proin iaculis mi porta augue tincidunt ullamcorper. Duis suscipit congue mauris sit amet luctus. Maecenas feugiat justo quam, at interdum velit accumsan non. Donec in est nec dui suscipit sodales. Sed eu libero vitae augue feugiat sollicitudin eget congue felis. Etiam eget accumsan arcu, vel placerat dui. Maecenas non ultrices risus, finibus tristique erat. Donec justo nisi, malesuada ac porttitor et, gravida in risus. Aliquam luctus efficitur consequat. Sed sollicitudin, orci at faucibus blandit, ipsum enim rhoncus nisi, at sodales sapien lectus sit amet magna. Maecenas lacinia nisl vitae sem tristique, et convallis urna malesuada. Fusce egestas ac justo at scelerisque. Nunc at est urna. Etiam eget molestie sapien. Donec velit ex, sodales in mattis vitae, consectetur a arcu. Praesent ut pretium leo.';

let words = longText.split(' ');
console.log(words.length);
let sum = 0;
for (let j = 0; j < longText.length; j++) {
  let twoChar = longText[j] + longText[j + 1];
  if (twoChar === 'et') {
    sum++;
    console.log(sum);
  }
}

//bonus2
let phraseToCheck = 'apilar gatos';

let palindromo = '';
for (let l = 0; l < phraseToCheck.length; l++) {
  if (phraseToCheck[l] === ',') {
    continue;
  } else if (phraseToCheck[l] === ' ') {
    continue;
  }

  palindromo += phraseToCheck[l];
  console.log(palindromo);
}
let reves = '';
for (let y = palindromo.length - 1; y >= 0; y--) {
  reves += palindromo[y];
  console.log(reves);
}
palindromo = palindromo.toLowerCase();
reves = reves.toLowerCase();

if (palindromo === reves) {
  console.log('es un palindormo');
} else {
  console.log('no es un palindromo');
}
