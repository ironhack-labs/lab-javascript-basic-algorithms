// Iteration 1: Names and Input
const hacker1 = 'Tamas';
console.log(`Driver's name is ${hacker1}`);

const hacker2 = 'Tamas';
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops
// 3.1
// Solution 1
let hackerName = '';
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    hackerName += hacker1[i].toUpperCase();
  } else {
    hackerName += `${hacker1[i].toUpperCase()} `;
  }
}
console.log(hackerName);

// Solution 2
let hackerName2 = '';
for (let letter of hacker1) {
  hackerName2 += `${letter.toUpperCase()} `;
}
console.log(hackerName2.trim());

// 3.2
let text = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  text += hacker2[i];
}
console.log(text);

// 3.3
for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] === hacker2[i]) {
    if (i === hacker1.length - 1) {
      console.log(`What?! You both have the same name?`);
    } else {
      continue;
    }
  } else if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`);
    break;
  } else {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  }
}

// Bonus 1
const lipsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt mauris eu dolor porta, non eleifend sem vestibulum. Duis id dui erat. Sed velit lacus, pellentesque convallis elementum ac, rhoncus ut quam. Mauris placerat ultricies diam, id ultricies felis ultricies eget. Vestibulum tincidunt, justo ut gravida varius, neque urna convallis metus, at blandit orci dui eu lectus. Donec tristique libero vel lacus ullamcorper molestie. Proin cursus rutrum augue quis malesuada. Quisque ut sagittis risus. Maecenas dignissim sed libero sit amet viverra. Proin vestibulum finibus erat id hendrerit. Mauris rhoncus diam vel dolor pharetra posuere. Nulla sit amet erat vel magna vehicula maximus. Maecenas at eleifend libero. Morbi eu ligula aliquet, pulvinar nunc ut, maximus lacus. Mauris ut lorem volutpat, rhoncus enim in, porta lectus. In pellentesque viverra ullamcorper. Nullam a neque hendrerit, consequat massa eget, pretium sem. Suspendisse potenti. Sed non elementum massa. Pellentesque id lacus eget sapien tincidunt dictum. Nullam tempus maximus sem ac molestie. Nunc ac ex enim. Ut sodales at nisl id sollicitudin. Sed pharetra, magna nec sollicitudin tincidunt, lorem ipsum suscipit leo, ac hendrerit augue felis ut urna. Morbi id congue velit. Duis egestas lorem a vestibulum pulvinar. Duis ut turpis pharetra dui molestie egestas. Donec tincidunt elit vel tincidunt luctus. Aliquam accumsan condimentum faucibus. Nunc ipsum mauris, mollis in vehicula a, congue eget ante. Sed blandit aliquam egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ut ante nec eros fermentum vulputate. Vestibulum nec ipsum luctus, rhoncus massa a, rutrum ligula. Sed in velit aliquam, tincidunt sapien dapibus, tristique lectus. Sed congue convallis justo. Etiam erat lectus, lacinia nec massa ac, convallis ultricies leo. Duis sed velit non odio scelerisque vulputate ut vitae mi. Cras rhoncus sollicitudin mattis.';

// Solution 1
console.log(lipsum.split(' ').length);

// Solution 2
let wordCount = 0;
for (let letter of lipsum) {
  if (letter === ' ') {
    wordCount++;
  }
}
// we need to add +1 because after the last word there is no space
console.log(wordCount + 1);

// Bonus 1 - Count of the Latin word et
const lipsumArray = lipsum.split(' ');
let etCount = 0;
for (let word of lipsumArray) {
  if (word === 'et') {
    etCount++;
  }
}
console.log(etCount);

// Bonus 2
const phraseToCheck = 'race car';

const palindromeCheck = (phrase) => {};
