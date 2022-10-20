// Iteration 1: Names and Input
const hacker1 = "Danna";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Pablo";
console.log(`The navigation's name is ${hacker2}`);
// Iteration 2: Conditionals
const driverName = "Rex";
const navigatorName = "Robert";
if (driverName.length > navigatorName.length) {
  console.log(
    `The driver has the longest name, it has ${driverName.length} characters.`
  );
} else if (driverName.length < navigatorName.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigatorName.length} characters!`
  );
}
// Iteration 3: Loops
for (let i = 0; i < driverName.length; i++) {
  console.log(driverName.charAt(i));
}
for (let i = navigatorName.length; i > 0; i--) {
  console.log(navigatorName.charAt(i - 1));
}
let alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
/* Driver */
let driverCount = 0;
for (let i = 0; i < alpha.length; i++) {
  if (alpha[i] === driverName[0]) {
    break;
  }
  driverCount++;
}
console.log(`Driver : ${driverCount}`);
/* Navigator */
let navigatorCount = 0;
for (let i = 0; i < alpha.length; i++) {
  if (alpha[i] === navigatorName[0]) {
    break;
  }
  navigatorCount++;
}
console.log(`Navigator : ${navigatorCount}`);
if (navigatorCount > driverCount) {
  console.log("The driver's name goes first.");
} else if (navigatorCount < driverCount) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
const lorem3 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla odio elit, vel scelerisque ipsum pharetra sed. Duis porta felis lectus, eget malesuada velit tristique vel. Praesent sit amet purus quis lectus scelerisque laoreet. Quisque fringilla, diam eu ultrices feugiat, massa tellus eleifend ante, eu gravida erat diam at metus. Aliquam suscipit eleifend justo vitae sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin lacinia tempus risus. Duis eget convallis orci. Donec a blandit enim, sagittis sollicitudin risus. Fusce ligula neque, posuere ultricies dignissim a, volutpat non erat. Pellentesque in ultricies sapien. Proin nisi enim, aliquam sit amet lorem vel, ultrices lacinia massa. Morbi congue orci neque. Quisque eget dolor fringilla, venenatis urna at, mollis mi. Aenean sem justo, blandit id bibendum sit amet, pharetra et orci. Praesent a urna a erat interdum venenatis vitae sit amet risus. Proin vitae risus ac elit malesuada pretium at vitae urna. Nullam consectetur accumsan elementum. Integer nec tempor lacus. Fusce accumsan, nunc vitae viverra varius, erat nibh finibus mauris, a congue est mi blandit lorem. Donec aliquet dolor tincidunt nibh placerat, ac aliquam velit semper. Morbi nec elit egestas, accumsan quam non, consectetur ante. Pellentesque sodales eleifend odio a commodo. Aliquam posuere dolor diam, at tristique leo congue a. Duis non egestas nibh. Donec volutpat lacus et quam pulvinar blandit. Etiam auctor convallis nibh, et posuere lorem volutpat in. Maecenas eget finibus nibh, non porta eros. Pellentesque sagittis molestie odio a lacinia. Praesent dapibus eu ipsum quis interdum. Quisque ornare nisl gravida mauris tincidunt, vel tempor nisi auctor. Fusce vel mi laoreet, auctor dui sit amet, vestibulum dui. Donec fringilla eu justo eu consectetur. Ut augue enim, tempor ac tortor quis, faucibus accumsan diam. Ut eu ex id dolor luctus interdum. Sed et metus eget lorem ultrices vulputate in eu ipsum. Curabitur in tellus hendrerit leo cursus lobortis a non tortor. Aenean sapien libero, gravida a pulvinar quis, mattis quis neque.";
console.log(lorem3.length);

let wordCount = 1;
for (let let i = 0; i < lorem3.length; i++) {
  if(lorem3 [i] === '') {
    wordCount++;
  }
}

let count = 0;
for (let i = 0; i < lorem3.length; i++) {
  const twoChars = lorem3[i] + lorem3[i + 1];
  if (twoChars === "em") {
    count++;
  }
}
console.log(count);
function palindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("Amor, Roma"));
console.log(palindrome("race car"));
console.log(palindrome("stack cats"));
console.log(palindrome("step on no pets"));
console.log(palindrome("taco cat"));
console.log(palindrome("put it up"));
console.log(palindrome("Was it a car or a cat I saw? and No 'x' in Nixon."));
