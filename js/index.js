console.log("I'm ready!");
// Iteration 1: Names and Input

const hacker1 = 'Valerian';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Haroun';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const h1Length = hacker1.length;
const h2Length = hacker2.length;

if (h1Length > h2Length) {
  console.log(`The driver has the longest name, it has ${h1Length} characters.`);
} else if (h1Length < h2Length) {
  console.log(`It seems that the navigator has the longest name, it has ${h2Length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${h1Length} characters.`);
}

// Iteration 3: Loops

let upperCaseH1 = '';
for (let i = 0; i < hacker1.length; i++) {
  upperCaseH1 += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    upperCaseH1 += ' ';
  }
}

console.log(upperCaseH1);

let reverseH2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseH2 += hacker2[i];
}

console.log(reverseH2);

// Bonus Time!
// Bonus 1
const loremIpsum = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lectus tortor. Fusce euismod libero quis viverra tempus. Phasellus a tristique odio, sit amet accumsan metus. Etiam eu pretium est. Fusce consectetur dolor in sem laoreet maximus congue eu risus. Maecenas vitae ullamcorper tortor. Aliquam imperdiet erat et magna sodales, at aliquam nisl fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse eget sollicitudin metus. Vestibulum congue pretium tincidunt. In hac habitasse platea dictumst. Proin et enim diam. Donec vel dapibus lectus. Quisque eu pharetra lorem, varius cursus nisl. Duis sed tellus sem.

Morbi nulla nibh, lobortis in lacus non, iaculis porttitor libero. Cras bibendum accumsan tincidunt. Sed nec placerat tortor. Aliquam lacinia eget ligula ac congue. Sed a varius elit, at semper arcu. Quisque scelerisque, erat nec tincidunt vehicula, nibh sapien auctor metus, rhoncus dapibus tortor quam nec neque. Donec est ex, finibus aliquam leo ut, gravida pharetra orci. Duis finibus, velit non malesuada aliquam, dui leo mollis metus, molestie efficitur ipsum risus a metus. Nam suscipit purus ac ex aliquet tincidunt non eu ante. Pellentesque cursus nisl vel ultricies ultrices. Phasellus eget luctus nunc, sit amet vulputate nisi.

Proin pellentesque leo a diam facilisis ultricies. Pellentesque a dolor nec lectus vehicula porta. Curabitur tincidunt augue vitae elit vehicula, sed cursus magna aliquam. Sed ut varius mauris. Etiam faucibus ipsum felis, vitae hendrerit mi blandit nec. Sed posuere suscipit lorem scelerisque pretium. Fusce blandit velit sit amet velit faucibus viverra. Fusce vel facilisis sem. Nam id nulla odio. Aliquam ac sodales ligula. `;

function countWords(string) {
  return string.split(` `).length;
}

console.log(countWords(loremIpsum));

function countEt(string) {
  let count = 0;

  const words = string.split(` `);

  words.forEach(word => {
    if (word === `et`) {
      count++;
    }
  });

  return count;
}

console.log(countEt(loremIpsum));

// Bonus 2
const palindromeMaybe = `A man, a plan, a canal, Panama!`;

function checkIfPalindrome(string) {
  const punctuation = `,;.?'!-:`;

  let str = string.toLowerCase();

  for (let i = 0; i < punctuation.length; i++) {
    str = str.replaceAll(punctuation[i], ``);
  }
  str = str.replaceAll(` `, ``);

  let reversedStr = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr ? `"${string}" is a palindrome!` : `${string} is not a palindrome :(`;
}

console.log(checkIfPalindrome(palindromeMaybe));