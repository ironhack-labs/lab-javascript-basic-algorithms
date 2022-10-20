// Iteration 1: Names and Input//
let hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Anna';
console.log(`The navigator's name is  ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has
      ${hacker2.length}
      characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names,  ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let newName = '';
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    newName = newName + hacker1[i].toUpperCase();
  } else {
    newName = newName + hacker1[i].toUpperCase() + ' ';
  }
}
console.log(newName);

let newReverseName = '';

for (let i = 0; i < hacker2.length; i++) {
  newReverseName = newReverseName + hacker2[hacker2.length - 1 - i];
}

console.log(newReverseName);

// BONUS 1
let loremString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus elementum lorem eu commodo. In sit amet feugiat nulla. Duis non rutrum metus. Sed non enim sed turpis feugiat commodo. Nam egestas lobortis odio a tincidunt. Fusce augue tortor, pharetra sit amet odio eu, dapibus volutpat libero. Vestibulum et volutpat nunc. Nulla gravida, risus vitae sollicitudin pellentesque, lacus lorem convallis est, ut bibendum tellus purus vitae leo. Aenean finibus sed sem sit amet placerat. Quisque vel ornare magna. Sed in dui dolor. Quisque sollicitudin bibendum erat, quis pulvinar ipsum ullamcorper in. Maecenas et justo sodales ante imperdiet auctor in vitae elit. Integer quis aliquet diam. Suspendisse ullamcorper est dignissim, laoreet lectus nec, mollis libero. Vestibulum mattis lacinia enim at suscipit. Praesent dolor sem, rhoncus sed turpis ut, tristique pretium velit. In pulvinar arcu a scelerisque rutrum. Aliquam vitae tincidunt purus. Curabitur blandit nibh eu erat pellentesque dignissim sit amet ut justo. In quis augue a metus tempus gravida. Curabitur tincidunt risus et ipsum tincidunt, quis rutrum odio venenatis. Morbi pharetra tempor vestibulum. Etiam tristique mattis interdum. Aenean id orci nibh. Aenean finibus risus nec felis vehicula, venenatis bibendum nulla iaculis. Suspendisse laoreet at orci euismod placerat. Donec sit amet congue nibh. Aliquam facilisis orci et faucibus faucibus. In sit amet ultricies erat. Cras dignissim tempus lorem, ut porta turpis molestie nec. Donec sit amet porta sapien, sit amet pretium quam. Curabitur sed dapibus tortor, in placerat augue. Suspendisse vestibulum vehicula lorem, ullamcorper fringilla leo aliquet ut. Sed tempor, velit quis semper posuere, ante velit vulputate mauris, ac facilisis sem sapien ac nisi. Mauris porttitor iaculis arcu, ultrices dignissim urna suscipit vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin iaculis porttitor enim, vitae sollicitudin mauris efficitur auctor. Nulla enim eros, elementum id purus et, tincidunt finibus nibh. Nulla tincidunt neque nec velit eleifend consectetur. Donec sed ullamcorper nisi.';

let loremArray = loremString.split(' ');
console.log(loremArray.length);

let amount = 0;
loremArray.forEach((word) => {
  if (word === 'et') {
    amount++;
  }
});
console.log(amount);

// BONUS 2
const polindrome = (string) => {
  let splitString = string.replace(/[^A-Za-z]/g, '').toLowerCase();

  let stringReverse = splitString.split('').reverse().join('');

  stringReverse === splitString
    ? console.log('Omg,we got a polindrome here!')
    : console.log('Nope, not this time, bro!');
};

polindrome('A man, a plan, a canal, Panama!');
polindrome('You are such a baby');
polindrome('race car');
polindrome('Liberté, égalité, fraternité');
polindrome('step on no pets');
polindrome('taco cat');
polindrome('get over with it');
polindrome('Was it a car or a cat I saw?');
polindrome("No 'x' in Nixon");
