// Iteration 1: Names and Input

let hacker1 = "Susan";

console.log(hacker1);

let hacker2 = "Garry";

console.log(hacker2); 



// Iteration 2: Conditionals

let driver = "Andrew";
let navigator = "Susan";

let numberOneLength = Number(driver.length);
let numberTwoLength = Number(navigator.length);

if (driver.length > navigator.length) {
  console.log(
    "The driver has the longest name, it has " + driver.length + " characters. "
  );
} else if (navigator.length > driver.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      navigator.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " +
      (numberOneLength + numberTwoLength) +
      " characters!."
  );
}


// Iteration 3: Loops


finalLetter = "";

for (let i = 0; i < driver.length; i++) {
  let letter = driver[i];
  finalLetter += letter.toUpperCase() + " ";
}

console.log(finalLetter);

let reversedName = "";

for (let i = navigator.length - 1; i >= 0; i--) {
  let letter = navigator[i];

  reversedName += letter;
}

console.log(reversedName);

// Iteration Bonus


const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium tincidunt nisl sed auctor. Curabitur at malesuada diam. Fusce est lorem, vestibulum non vulputate facilisis, tincidunt eget nibh. Sed eu fringilla nisi, sit amet scelerisque libero. Phasellus congue dui vitae aliquam consectetur. Cras sed dui eget nibh accumsan hendrerit non quis quam. Donec tempor fringilla mattis. Nunc luctus risus sit amet elementum maximus. Fusce a cursus leo, in laoreet orci. In tincidunt velit nec scelerisque scelerisque. Duis vel mi id lacus aliquet luctus sit amet non sapien. Aliquam lacinia aliquam eros, vel sollicitudin lorem maximus eu.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi eu dignissim risus. Sed suscipit, lorem at interdum auctor, quam ligula ultricies lectus, eu semper mauris ex sit amet lacus. Curabitur dictum augue eget quam condimentum iaculis. Ut vitae convallis massa. Vestibulum aliquam rhoncus sapien non vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet elementum tortor. Fusce tellus dolor, consectetur sit amet ligula sed, eleifend rutrum tortor. In suscipit imperdiet neque, vel euismod eros posuere sit amet. Etiam ornare orci eget mi semper, vitae imperdiet ex eleifend.

Sed ultricies augue ipsum. Sed id aliquet nisi, quis pulvinar odio. Nunc sagittis, magna id auctor fringilla, erat massa efficitur nulla, in egestas orci arcu at leo. Ut fermentum velit a nisi tempus rhoncus. Morbi vestibulum felis eget ipsum finibus maximus. Suspendisse eu luctus quam, vitae placerat turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam a egestas ligula, a dapibus dolor. Cras lacus velit, euismod ac tellus nec, congue placerat ligula. Fusce blandit odio id auctor efficitur. Vivamus tellus purus, cursus sed pharetra tempus, finibus eleifend mauris. Proin molestie dolor ipsum, sed tincidunt sapien feugiat vel. Duis dictum, nisl at blandit imperdiet, massa nibh accumsan orci, id efficitur leo dui sit amet mi. Aliquam id mollis tellus.`;

count = 0;

for (let i = 0; i < longText.length - 2; i++) {
  let firstLetter = longText[i];
  let secondLetter = longText[i + 1];
  let thirdLetter = longText[i + 2];
  let fourthLetter = longText[i + 3];

  console.log(firstLetter + secondLetter + thirdLetter);

  if (
    firstLetter === " " &&
    secondLetter === "e" &&
    thirdLetter === "t" &&
    fourthLetter === " "
  ) {
    count += 1;
  } else {
    continue;
  }
}

console.log(count);


// Bonus 2



let phraseToCheck = "Amor, Roma";

const halfLenght = Math.floor(phraseToCheck.length / 2);

console.log(halfLenght);

let wordToCheck = "";

for (let i = 0; i <= halfLenght; i++) {
  wordToCheck += phraseToCheck[i];
}

console.log(wordToCheck);

let secondWordToCheck = "";

for (let e = phraseToCheck.length - 1; e > halfLenght; e--) {
  secondWordToCheck += phraseToCheck[e];
}

console.log(secondWordToCheck);

let wordOne = wordToCheck.toUpperCase();
let wordTwo = secondWordToCheck.toUpperCase();

let firstLetters = wordOne.slice(0, 2);
let lastLetters = wordTwo.slice(0, 2);

let secondFirstLetters = wordOne.slice(2, 3);
let secondLastLetters = wordTwo.slice(2, 3);

let ThirdFirstLetters = wordOne.slice(2, 3);
let ThirdLastLetters = wordTwo.slice(2, 3);

if (firstLetters == lastLetters || secondFirstLetters == secondLastLetters) {
  console.log("yes");
} else if (
  firstLetters == lastLetters &&
  ThirdFirstLetters == ThirdLastLetters
) {
  console.log("yes");
} else {
  console.log("no");
}
