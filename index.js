// Iteration 1: Names and Input
// driver
const hacker1 = prompt("Enter the driver's name:");
console.log(`The driver's name is ${hacker1}`);

//navigator
const hacker2 = prompt("Enter the navigator's name:");
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
function wichNameIsLonger(firstName, secondName) {
  const driverNameLength = firstName.length;
  const navigatorNameLength = secondName.length;
  if (driverNameLength > navigatorNameLength) {
    console.log(`The driver has the longest name, it has ${driverNameLength} characters`)
  } else if (driverNameLength < navigatorNameLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${driverNameLength} characters!.`)
  }

}

wichNameIsLonger(hacker1, hacker2)

// Iteration 3: Loops
// driver
console.log(hacker1.split('').join(' ').toUpperCase());
// navigator
console.log(hacker2.split('').reverse().join(''));

// Lexicographic order
function wichNameGoesFirst(firstName, secondName) {
  if (firstName < secondName) {
    console.log(`The driver's name goes first.`);
  } else if (firstName > secondName)
  {
    console.log(`Yo, the navigator goes first, definitely.`)
  } else {
    console.log(`What?! You both have the same name?`)
  }
}

wichNameGoesFirst(hacker1, hacker2)

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac pellentesque dui. Donec tempus dapibus ornare. Proin aliquam mollis quam, sed cursus ligula commodo nec. Nam semper arcu quis eros mattis, eu condimentum diam elementum. Sed nec erat porta leo malesuada faucibus. Ut pretium nisi eu consectetur convallis. Morbi pretium lorem ligula, nec porttitor nibh euismod ut. Nulla scelerisque orci non nisl hendrerit congue.

Aliquam vel leo vitae magna finibus interdum id sed orci. Nullam eu sem at purus pharetra cursus. Integer consequat, eros lobortis fringilla sagittis, mi sapien posuere orci, ac condimentum dui risus at est. Aenean condimentum maximus commodo. Vivamus ex lectus, ultricies a dolor et, sodales tempor metus. Suspendisse ut molestie dolor. Quisque id dapibus tellus. Nullam sed aliquet quam, in dapibus mi. Pellentesque hendrerit posuere nisi, at luctus purus placerat vel.

In id odio mauris. Integer vestibulum venenatis felis eu elementum. Quisque congue turpis id dignissim porttitor. Sed accumsan viverra sapien, et pellentesque enim dapibus eu. Cras convallis dignissim arcu eget aliquam. Nunc maximus dolor ut erat cursus pretium. Donec commodo fringilla diam tempor tristique. Phasellus in lacus a sem dignissim suscipit.`

function countWords(text) {
  console.log(text.split(/\s+/).length);
}

countWords(longText);

function countEt(text) {
  console.log(text.match(/\bet\b/gi)?.length || 0); // '\b' end of a word, flag 'g' tells not to stop after first match, flag 'i' tells to ignore case 
}

countEt(longText);

// Bonus 2
const phraseToCheck = 'A man, a plan, a canal, Panama!'

function checkForPolindrome(phraseToCheck) {
  const cleanString = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, '') // make the same case + filter all extra symbols
  // check
  const reversedString = cleanString.split('').reverse().join('');
  
  if (cleanString === reversedString) {
    console.log(`Yes, phraseToCheck: '${phraseToCheck}' is a polindrome`);
  } else {
    console.log(`No, phraseToCheck: '${phraseToCheck}' is not a polindrome`);
  }
}

checkForPolindrome(phraseToCheck);