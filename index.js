// Iteration 1: Names and Input
const hacker1 = "Vera";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Yanqing";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverNameLen = hacker1.length;
const navigatorNameLen = hacker2.length;

if (driverNameLen > navigatorNameLen) {
  console.log(
    `The driver has the longest name, it has ${driverNameLen} characters.`
  );
} else if (navigatorNameLen > driverNameLen) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorNameLen} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driverNameLen} characters!.`
  );
}

// Iteration 3: Loops
let driverNameCaps = "";
let navigatorReverse = "";

for (let i = 0; i < driverNameLen; i++) {
  driverNameCaps += hacker1[i].toUpperCase();
  if (i < driverNameLen - 1) {
    driverNameCaps += " ";
  }
}

console.log(driverNameCaps);

for (let i = navigatorNameLen - 1; i >= 0; i--) {
  navigatorReverse += hacker2[i];
}

console.log(navigatorReverse);

/*lexicographic order*/
//looking for the longest name to create a loop for the longest name
const maxLenth = Math.max(driverNameLen, navigatorNameLen);

const driverNameLowCase = hacker1.toLowerCase();
const navigatorNameLowCase = hacker2.toLowerCase();

let isDriverNameFirst = true;
let isSameNames = true;

for (let i = 0; i < maxLenth; i++) {
  if (driverNameLowCase[i] < navigatorNameLowCase[i] || !driverNameLowCase[i]) {
    isDriverNameFirst = true;
    isSameNames = false;
    break;
  }

  if (
    driverNameLowCase[i] > navigatorNameLowCase[i] ||
    !navigatorNameLowCase[i]
  ) {
    isDriverNameFirst = false;
    isSameNames = false;
    break;
  }
}

if (isSameNames) {
  console.log("What?! You both have the same name?");
} else if (isDriverNameFirst) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first, definitely.");
}

/******BONUS******/
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius lectus et ligula pharetra, quis pellentesque magna mattis. Morbi eu dictum urna. Vivamus porttitor, leo et tincidunt fringilla, diam sapien blandit erat, sit amet auctor felis felis sit amet leo. Cras auctor dictum orci, quis iaculis nibh mollis eget. Nulla iaculis tortor vel ligula elementum, ac efficitur turpis interdum. Donec vulputate mi eros, eu luctus nibh ullamcorper eu. Nulla ultrices eget ligula eget congue. Nam scelerisque elementum felis, ac rutrum risus aliquam ac. Vivamus elit massa, elementum eu felis in, vestibulum ullamcorper nibh. Phasellus pretium lectus id dui feugiat, ac lobortis turpis mattis. Nulla facilisi. Nunc volutpat, lectus vitae facilisis tempus, mauris neque pharetra risus, sed sollicitudin ipsum est vitae justo. Nulla et lorem velit. Phasellus nulla nibh, laoreet rutrum enim id, tristique scelerisque felis. Ut id nibh at ipsum laoreet tristique vitae non nisl. Morbi iaculis eu sapien non accumsan.

Nullam arcu turpis, tincidunt nec sollicitudin at, elementum eu purus. Aliquam auctor orci ac aliquet commodo. Nam neque quam, viverra sit amet accumsan eu, laoreet a felis. Donec tristique lacinia dolor. Integer luctus urna nec orci pulvinar congue. Proin tempus orci vehicula, vulputate tellus nec, mollis ante. Phasellus venenatis malesuada nibh id cursus. Vestibulum cursus lacus vitae sapien pellentesque gravida. Maecenas porttitor faucibus sem, nec porta ligula tristique a. Etiam cursus odio dolor. Duis non urna a lectus feugiat fermentum. Maecenas sit amet ex at odio molestie tempor nec eu odio.

Nunc semper tincidunt mi sed rhoncus. Vivamus laoreet, odio a congue gravida, dui augue dictum nulla, id laoreet massa nisi nec magna. Aliquam nec tristique lacus. Quisque dui justo, rhoncus vel sollicitudin in, congue in quam. Sed vehicula elit imperdiet commodo ultrices. Vestibulum ullamcorper venenatis enim non efficitur. Vivamus a ante condimentum, dictum libero nec, hendrerit arcu. Praesent nisl libero, volutpat nec eleifend non, mattis sed metus.`;

let wordCountNum = 0;
let word = "";

const et = "et";
let etNum = 0;

const str = longText.toLowerCase();

const notAWord = ` ,.;:?!~#$%^&*-+=_'"[]{}<>|\/()\n`;
const alphabet = `abcdefghijklmnopqrstuvwxyz`;

let i = 0;

while (i < str.length) {
  //assuming the text starts with a word
  while (alphabet.indexOf(str[i]) >= 0) {
    word += str[i];
    i++;
    continue;
  }
  wordCountNum++; //the word finished

  if (word === et) etNum++;

  word = ""; //clear the word for the next one

  //now moving by not-a-word-symbols
  while (notAWord.indexOf(str[i]) >= 0) {
    i++;
    continue;
  }
}

console.log(`wordCountNum: ${wordCountNum}`);
console.log(`I saw ${etNum} ET in the text!`);
