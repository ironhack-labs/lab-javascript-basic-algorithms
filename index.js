// Iteration 1: Names and Input
let hacker1 = 'andre';
console.log('driver one is ' + hacker1);
let hacker2 = 'eric';
console.log('the navigator is ' + hacker2);

// Iteration 2: Conditionals
let driver = hacker1.length;
let navigator = hacker2.length;

if (driver >= navigator) {
  console.log(
    'The driver has the longest name, it has ' + driver + ' characters.'
  );
} else if (driver <= navigator) {
  console.log(
    'The navigator has the longest name, it has ' + navigator + ' characters.'
  );
} else {
  console.log(
    'Wow, you both have equally long names,' + driver + 'characters!'
  );
}

// Iteration 3: Loops
let driverUp = hacker1.toUpperCase();
let driverSpaceUp = driverUp.split('').join(' ');
console.log(driverSpaceUp);

let navigatorReverse = hacker2.split('').reverse().join('');
console.log(navigatorReverse);

let lexDriver = hacker1.localeCompare(hacker2);

if (lexDriver === -1) {
  console.log("The driver's name goes first.");
} else if (lexDriver === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// Iteration 4: Bonus
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui tincidunt, lobortis diam non, fringilla sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque gravida metus quis lorem fringilla fringilla. Aenean aliquet, ex et porttitor blandit, purus purus placerat quam, sed dapibus ex tellus vitae est. Vivamus varius facilisis nisl, id suscipit dui feugiat nec. Nunc sollicitudin varius ultricies. Nullam a dui tincidunt, vehicula magna non, mollis sem. Nulla facilisi. Mauris metus tortor, sagittis eu scelerisque ac, bibendum id dolor. Mauris dictum sapien vel nisl elementum blandit. Integer facilisis consequat ex at tempus. Nam justo ipsum, varius ac tempus quis, convallis vitae nibh. Integer vehicula odio feugiat magna facilisis, sed pulvinar ex molestie. In gravida tempus consectetur. Curabitur ut odio mattis, mollis elit et, consequat sem.

Quisque a aliquet ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut elit libero. Aenean a commodo felis, sit amet varius elit. Donec ut iaculis tortor. Aenean vel vulputate tellus, ac dignissim nunc. Curabitur efficitur tellus id dignissim vulputate. Suspendisse sit amet mauris nulla. Pellentesque a consequat sem. Sed accumsan quam et diam hendrerit, commodo fringilla magna dignissim. Aliquam vel mi varius, efficitur risus eu, sagittis ex. Curabitur vel lacus nibh. Maecenas fringilla, turpis quis pulvinar efficitur, odio neque rutrum libero, et iaculis est mi sit amet ex.

Morbi ipsum risus, molestie vel leo non, eleifend lacinia est. Donec turpis ligula, elementum vitae molestie at, egestas sit amet justo. Vestibulum in nibh tincidunt, feugiat lorem sit amet, gravida ipsum. Fusce luctus malesuada erat eget eleifend. Aenean sed rutrum eros, nec efficitur dui. Duis quis nisi imperdiet, aliquet dui ut, mattis urna. Donec at leo eu augue malesuada molestie nec eu nibh. Nunc accumsan placerat consequat.`;

let txtLength = longText.length;
console.log(txtLength);

let count = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === `e`) {
    if (longText[i + 1] === `t`) {
      count++;
    }
  }
}
console.log(count);

// Iteration 5: Bonus 2
let phraseToCheck = 'some string value';

let phrase2 = phraseToCheck.split('').reverse().join('');
console.log(phrase2);

if (phraseToCheck === phrase2) {
  console.log('its a Palindrome');
} else {
  console.log('its just a sentence');
}