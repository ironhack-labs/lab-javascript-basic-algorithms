// Iteration 1: Names and Input
let hacker1 = 'Haitham';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'LeBron';

console.log(`The navigator's is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name and it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `The navigator has the longest name and it has ${hacker2.length} characters`
  );
} else {
  console.log('They have the same name length!!!');
}

// Iteration 3: Loops

let nameArray = [];
for (let i = 0; i < hacker1.length; i++) {
  nameArray.push(hacker1[i] + ' ');
}

let nameUpperCased = nameArray.join('').toUpperCase();

console.log(`My name with spaces and uppercased is ${nameUpperCased}`);

// REVERSING THE NAME

let reverseArray = [];
for (let i = hacker1.length; i >= 0; i--) {
  reverseArray.push(hacker1[i]);
}

let reversedName = reverseArray.join('');

console.log(`My name reversed is ${reversedName}`);

// Lexographical challenge

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What you have the same name!');
}

//BONUS

let str =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum massa auctor diam blandit, id sollicitudin ipsum fringilla. Sed id vulputate lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse egestas elit libero, dapibus malesuada elit mollis at. Ut porta lorem vitae quam iaculis facilisis. Curabitur et a nisl vulputate, aliquam augue sed, venenatis massa. Duis sit amet sem et turpis suscipit consequat a non eros. Aliquam ac magna diam. Nullam id justo tincidunt, efficitur nunc sit amet, auctor turpis. Sed nec fermentum mi, nec viverra enim. Phasellus vehicula leo id rutrum sodales. Nam feugiat tincidunt maximus. Nam elementum sodales quam quis convallis. Etiam facilisis auctor fringilla. Cras vitae dignissim nunc, at tincidunt purus. Vestibulum quis nisl ornare est tempor facilisis nec quis libero. Aliquam erat volutpat. Donec ornare ante sit amet lorem consequat, in commodo dui porta. Duis sollicitudin nisi risus, id hendrerit ante ullamcorper in. Aenean ornare ex sed tellus mollis, a pretium neque sodales. In pellentesque, nisl vel tempus posuere, orci felis accumsan lacus, eu molestie ante leo nec tortor. Aliquam facilisis non mi nec pellentesque. Fusce dignissim a neque vel rutrum. Cras posuere eleifend ornare. Fusce molestie volutpat pretium. Cras sit amet eros sem. Phasellus quis malesuada nisl. In hac habitasse platea dictumst. Nullam eu dui id odio mollis fermentum eu congue nulla.';

let strArray = str.split(' ');

//length of the paragraph

//first way
let lengthOfString = strArray.length;
//second way
let wordCount = 0;

for (word in strArray) {
  wordCount++;
}

console.log('Word count is ' + wordCount);
console.log(lengthOfString);

//thirdway without putting in array
let spaceCount = 1;
for (let i = 0; i < str.length; i++) {
  if (str[i] === ' ') {
    spaceCount++;
  }
}

console.log('The amounf of words in the paragraph is ' + spaceCount);

//count the number of times "et" appears
let frequencyOfEt = 0;
for (let i = 0; i < strArray.length; i++) {
  if (strArray[i] === 'et') {
    frequencyOfEt++;
  }
}
console.log(frequencyOfEt);

// Bonus 2

let phraseToCheck = 'race car';
let phraseInArray = [];

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== ' ') console.log(phraseToCheck[i]);
}
