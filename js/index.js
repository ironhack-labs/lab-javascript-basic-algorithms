// Iteration 1: Names and Input
let hacker1 = "jinjoo";
console.log("The driver's name is " + hacker1);

let hacker2 ="jessie";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let driver = "jinjoo";
let navigator = "jessie";
let both = driver || navigator
if (driver.length > navigator.length){
  console.log("The driver has the longest name, it has"+driver.length+"characters.")
} else if (driver.length < navigator.length) {
  console.log("It seems that the navigator has the longest name, it has"+navigator.length+"characters.")
} else (driver.length===navigator.length)
    console.log("WOW, you both have equally long name,"+both.length+"characters.")

// Iteration 3: Loops

let driver = "jinjoo";
let uppercased = driver.toUpperCase();
uppercased.split('').join(' ');

let driver = "jinjoo";
driver.split("").reverse().join("");


// #### Bonus 1:

let str= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac nisi imperdiet, pulvinar erat nec, mattis sem. Vestibulum et justo ornare, pretium ante at, egestas lectus. Phasellus eu justo luctus, gravida nisl ut, feugiat magna. Duis at malesuada turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque et risus varius, gravida est non, efficitur mauris. In nec mi sed elit varius iaculis. Morbi interdum sit amet turpis in vulputate. In sem tellus, vehicula a erat id, sollicitudin lobortis augue.Phasellus sed interdum eros. Morbi non nulla lectus. Aenean eget molestie nunc, non eleifend urna. Proin imperdiet pellentesque lacus, quis efficitur ex ultrices et. Curabitur fermentum vel dui sed consequat. Donec diam est, rhoncus a risus sed, consectetur viverra neque. Aliquam sed lorem ex. Pellentesque ac nibh lacus. Vivamus blandit lacus ac convallis euismod.Nullam odio nunc, maximus at neque nec, facilisis interdum sem. Duis posuere vitae nisl eu consectetur. Sed quis nisi ipsum. Praesent ante odio, laoreet ac quam et, tincidunt accumsan odio. Etiam egestas dictum urna, vitae rhoncus velit vestibulum sit amet. Pellentesque dignissim rhoncus purus, vel aliquet ligula dictum vel. Nullam imperdiet at massa sit amet blandit. Sed ac justo facilisis, sodales turpis eu, sollicitudin sapien. Vivamus dignissim vehicula mauris, nec accumsan nisi eleifend eu. In finibus massa metus, sit amet pharetra libero scelerisque ut. Donec aliquet lectus ullamcorper aliquam cursus. Donec non tellus nisl.";
var wordCount = str.match(/(\w+)/g).length;
alert(wordCount);

let str= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac nisi imperdiet, pulvinar erat nec, mattis sem. Vestibulum et justo ornare, pretium ante at, egestas lectus. Phasellus eu justo luctus, gravida nisl ut, feugiat magna. Duis at malesuada turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque et risus varius, gravida est non, efficitur mauris. In nec mi sed elit varius iaculis. Morbi interdum sit amet turpis in vulputate. In sem tellus, vehicula a erat id, sollicitudin lobortis augue.Phasellus sed interdum eros. Morbi non nulla lectus. Aenean eget molestie nunc, non eleifend urna. Proin imperdiet pellentesque lacus, quis efficitur ex ultrices et. Curabitur fermentum vel dui sed consequat. Donec diam est, rhoncus a risus sed, consectetur viverra neque. Aliquam sed lorem ex. Pellentesque ac nibh lacus. Vivamus blandit lacus ac convallis euismod.Nullam odio nunc, maximus at neque nec, facilisis interdum sem. Duis posuere vitae nisl eu consectetur. Sed quis nisi ipsum. Praesent ante odio, laoreet ac quam et, tincidunt accumsan odio. Etiam egestas dictum urna, vitae rhoncus velit vestibulum sit amet. Pellentesque dignissim rhoncus purus, vel aliquet ligula dictum vel. Nullam imperdiet at massa sit amet blandit. Sed ac justo facilisis, sodales turpis eu, sollicitudin sapien. Vivamus dignissim vehicula mauris, nec accumsan nisi eleifend eu. In finibus massa metus, sit amet pharetra libero scelerisque ut. Donec aliquet lectus ullamcorper aliquam cursus. Donec non tellus nisl.";
var count = (str.match(/et/g) || []).length;
console.log(count);


// #### Bonus 2:

let phrasetocheck = "cat"
function checkPalindrome(str) {
    const length = phrasetocheck.length;
    for (let i = 0; i < length / 2; i++) {
        if (phrasetocheck[i] !== phrasetocheck[length - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const value = checkPalindrome(phrasetocheck);
console.log(value);
