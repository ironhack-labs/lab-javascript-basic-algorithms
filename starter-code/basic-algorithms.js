// Names and Input
console.log(`***Names and Input***`);
let hacker1 = "Roberto";
console.log(`The drive's name is ${hacker1}`);

let hacker2 = "Rafael";
console.log(`The navigator's name is ${hacker2}`);
console.log("\n");
//Conditionals
console.log(`***Conditionals***`);
numCaracteresHacker1 = hacker1.length;
numCaracteresHacker2 = hacker2.length;
if (numCaracteresHacker1 > numCaracteresHacker2) {
  console.log(
    `The Driver has the longest name, it has ${numCaracteresHacker1}`
  );
} else if (numCaracteresHacker1 < numCaracteresHacker2) {
  console.log(
    `Yo, navigator got the longest name, it has ${numCaracteresHacker2} characters`
  );
} else {
  console.log(
    `wow, you both got equally long names, ${numCaracteresHacker1} characters!!`
  );
}
console.log("\n");
console.log(`***Loops***`);

let hackerArray = [];
let hackerUpperCase = hacker1.toUpperCase();
for (var i = 0; i < hacker1.length; i++) {
  let hackerLetter = hackerUpperCase[i];
  hackerArray.push(hackerLetter);
}
console.log(hackerArray.join(" "));

let hackerArrayReverse = [];
for (var j = 0; j < hacker1.length; j++) {
  let hackerLyric = hacker1[j];
  hackerArrayReverse.push(hackerLyric);
}
hackerArrayReverse.reverse();
console.log(hackerArrayReverse.join(""));

let hackerArrayReverse2 = [];
for (var m = hacker1.length - 1; m >= 0; m--) {
  let hackerLyric2 = hacker1[m];
  hackerArrayReverse2.push(hackerLyric2);
}
console.log(hackerArrayReverse.join(""));

let comapareName = hacker1.localeCompare(hacker2);
switch (comapareName) {
  case 1:
    console.log(`The driver's name goes first`);
    break;
  case -1:
    console.log(`Yo, the navigator goes first definitely`);
    break;
  default:
    console.log(`What?! You both got the same name?`);
}
console.log("\n");
console.log(`***Bonus Time!***`);

let wordBonus = "Was it a car or a cat I saw?";
let newWordBonus = "";
let reverseWord = "";

for (let p = wordBonus.length - 1; p >= 0; p--) {
  if (
    wordBonus[p] != " " &&
    wordBonus[p] != "," &&
    wordBonus[p] != "!" &&
    wordBonus[p] != `/` &&
    wordBonus[p] != "?"
  ) {
    newWordBonus += wordBonus[p];
  }
}

for (var j = 0; j < wordBonus.length; j++) {
  if (
    wordBonus[j] != " " &&
    wordBonus[j] != "," &&
    wordBonus[j] != "!" &&
    wordBonus[j] != `/` &&
    wordBonus[j] != "?"
  ) {
    reverseWord += wordBonus[j];
  }
}

if (newWordBonus.toLowerCase() === reverseWord.toLowerCase()) {
  console.log("Is a Palindrome");
} else console.log("Not is a Paindrome");

// Lorem ipsum generator

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit nisl eu felis congue blandit. Maecenas eu odio eget turpis sodales iaculis at eu lectus. Fusce a ante quam. Suspendisse fringilla ullamcorper auctor. Quisque et ullamcorper felis, sit amet faucibus leo. Vestibulum id hendrerit velit. Vestibulum nec quam interdum urna posuere consequat sed eget odio. Vestibulum euismod maximus leo at sagittis. Aenean tincidunt nisl vitae sollicitudin pretium. Sed ullamcorper ante interdum velit facilisis, at cursus ipsum hendrerit. Phasellus finibus laoreet augue in vehicula. Proin odio leo, mollis eget odio at, mollis posuere dolor. Nunc scelerisque eros non lacus consequat ullamcorper. Aenean id dolor ornare, mattis mi eget, pretium dolor. Nulla ultrices odio est, vel sagittis nunc blandit at. Cras id ex et leo elementum iaculis. Duis nec ante pellentesque neque semper pretium. Pellentesque eu nibh vitae ante luctus lacinia semper nec quam. Nullam ac purus enim. Cras sit amet tellus sed nunc egestas pulvinar. Nulla sed ligula sit amet nisi lobortis mattis. Suspendisse ultrices diam nec lacus pharetra porttitor eget nec tortor. Pellentesque sit amet vestibulum diam. Sed sit amet purus leo. Fusce laoreet ultrices tincidunt. Morbi at mi rutrum, sollicitudin lectus eget, venenatis lacus. Maecenas vestibulum ultricies augue, nec scelerisque neque aliquam tincidunt. Sed et dui sit amet urna ultrices rhoncus. Sed felis orci, porta a ultrices quis, dapibus vitae velit. Nullam tincidunt nisi sed pretium feugiat. Duis egestas at ipsum tempor congue. Mauris lacus enim, pellentesque id tellus ac, maximus iaculis sapien. Quisque interdum at lacus sit amet pharetra. Praesent justo diam, ornare eget imperdiet eu, ultricies vitae ex.`;

//Generated 3 paragraphs, 261 words, 1750 bytes of Lorem Ipsum

let arrayLoremIpsum = loremIpsum.split(" ");

console.log(`LoremIpsum has ${arrayLoremIpsum.length} words`);

let countEt = 0;
for (var i = 0; i < arrayLoremIpsum.length; i++) {
  if (arrayLoremIpsum[i] === "et") {
    countEt += 1;
  }
}
console.log(`It has 3 words 'et' ${countEt}`);
