// Iteration 1: Names and Input
const hacker1 = "Alexis";
const hacker2 = "Reda";
const phrase = "The drivers name is ";
let driver = phrase + hacker1;
let navigator = phrase + hacker2;
console.log(driver);
console.log(navigator);

// console.log(driver)
// console.log("The driver's name is", hacker1)

// const hacker2 = "Reda";
// console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
// For (let i=0; i<drivers.length; i++)

// console.log(name1);
// console.log(name2);

let driverLetter = hacker1.length;
let navigatorLetter = hacker2.length;
console.log(driverLetter);
console.log(navigatorLetter);

let phraseDriver = "The driver has the longest name. It has";
let phraseNavigator =
  "It seems that the navigator has the longest name. It has";
let ch = "characters.";

let result;
if (driverLetter > navigatorLetter) {
  result = phraseDriver + " " + driverLetter + " " + ch;
} else {
  result = phraseNavigator + " " + navigatorLetter + " " + ch;
}

console.log(result);

// Iteration 3: Loops

let driverFormat = hacker1.toUpperCase();
let driverSplit = driverFormat.split("").join(" ");
console.log(driverSplit);

// for (let i; i <hacker1.length; i++) {
// let char=hacker1[i]+ hacker1.slice(i+1)}
// console.log(char);

let reverseName = hacker1.split("").reverse().join("");
console.log(reverseName);
let arr = [
  "The drivers name goes first",
  "Yo, thenavigator goes first, definitely.",
  "What?! You both have the same name",
];
let sortedArr = arr.sort();
console.log(sortedArr);

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, nibh nec vehicula scelerisque, est arcu aliquam ipsum, convallis cursus nibh tortor sit amet neque. Quisque a aliquam orci, quis luctus risus. Nam elementum, lacus vel fringilla lobortis, neque metus congue purus, eget porttitor nunc ligula eu magna. Aenean in mauris placerat tortor facilisis finibus ac fringilla velit. Nullam auctor est ligula, quis ultricies lorem ultrices eget. Duis rutrum non justo quis facilisis. Quisque et vestibulum massa. Morbi consequat, mi a efficitur pellentesque, magna nulla fringilla elit, sed iaculis diam est sed neque. Vivamus placerat augue at feugiat rhoncus. Maecenas tempus consequat sollicitudin. Integer ut condimentum lectus. Vestibulum non elit diam. Mauris vitae porttitor lorem, a ultricies sapien. Aliquam vestibulum nisl vitae turpis commodo eleifend. Donec lobortis iaculis ipsum, nec vehicula justo finibus a. Quisque suscipit magna sit amet nunc interdum, vel dignissim felis tincidunt. Aenean hendrerit accumsan metus, ac efficitur risus auctor sit amet. Mauris vel elit feugiat, euismod sapien ac, interdum augue. Sed sit amet lorem id massa venenatis consequat quis quis urna. Sed rhoncus massa tempor ex sollicitudin, eu malesuada libero luctus. Sed id aliquam risus. Pellentesque scelerisque sed odio a varius. Fusce tristique commodo mi sed fermentum. Curabitur hendrerit luctus nisi, a ultrices eros eleifend eget. Vestibulum posuere accumsan urna id molestie. Suspendisse vel molestie velit, sed maximus orci. Morbi eu maximus eros, id elementum tellus. Nulla facilisi. Etiam quam neque, convallis vitae placerat ac, pulvinar non massa. Vestibulum rutrum iaculis nulla, vitae ornare eros gravida quis. Aenean tempor nulla eget dui ultrices porttitor.";

let words = 1;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") words++;
}
console.log(words);
