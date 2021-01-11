// Iteration 1: Names and Input
const hacker1 = 'Aylin';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Hai';
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length < hacker1.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let changedNameHacker1 = '';

for (let i = 0; i < hacker1.length; i++) {
  changedNameHacker1 += hacker1[i].toUpperCase() + ' ';
} console.log(changedNameHacker1.slice(0, changedNameHacker1.length - 1));

let changedNameHacker2 = '';
for (let i = hacker2.length-1; i >= 0; i--) {
  changedNameHacker2 += hacker2[i]
} console.log(changedNameHacker2);

let comparedNames = hacker1.localeCompare(hacker2);
if (comparedNames === -1) {
  console.log(`The driver's name goes first.`);
} else if (comparedNames === 1){
  console.log(`Yo, the navigator goes first definitely.`);
} else { console.log(`What?! You both have the same name?`)
};

// Bonus 1

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue nec magna et finibus. Etiam interdum, nibh id dapibus efficitur, dui diam consectetur ligula, non feugiat ex turpis eu nisi. Integer fermentum vestibulum eros elementum iaculis. Phasellus dictum varius suscipit. Praesent id nulla neque. Proin vehicula laoreet diam, at tempus nibh iaculis non. Ut mattis diam non tellus suscipit porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at vestibulum elit. Pellentesque eu elit elit. Duis vitae turpis in risus tincidunt tincidunt. Duis fermentum mauris sit amet sapien tincidunt rutrum. Nulla laoreet enim at arcu ullamcorper, id eleifend nunc pulvinar. Nulla lacinia urna ut nisl auctor, finibus pretium turpis sollicitudin. Donec vel magna ipsum. Fusce id luctus velit, in ornare ipsum. Aliquam semper eget enim quis volutpat. Vestibulum venenatis tellus massa, id pretium risus consequat sed. Proin quis justo ac tellus tincidunt viverra. Fusce risus nulla, efficitur at fringilla ac, mollis vel neque. Nam odio dui, aliquam vel leo nec, convallis placerat ex. Aliquam molestie justo quis ex posuere maximus. Cras bibendum tristique ante vitae dignissim. In et egestas libero. Quisque purus nisi, tincidunt a bibendum ac, lobortis non mi. Morbi vel augue nisi. Aliquam vestibulum malesuada nisl faucibus venenatis. Cras varius est ornare tortor rhoncus pulvinar. Proin ac faucibus lectus. Suspendisse at arcu id tellus viverra posuere vel eu orci. Integer tempus, est at dapibus dictum, urna ipsum accumsan nisi, sit amet mollis turpis nisi at purus. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sollicitudin, tortor id luctus egestas, urna lorem bibendum nulla, quis tincidunt mi sem id orci. Phasellus in aliquet neque, in efficitur massa. In non sapien iaculis, venenatis sapien nec, aliquet sem. Vivamus finibus ligula non ante porta facilisis. Phasellus commodo sodales nulla in lacinia. Pellentesque vel lacus id mi congue ultricies id quis velit.";

let words = text.split(" ").length;
console.log(words);

let wordEt = text.split("et").length;
console.log(wordEt);

// Bonus 2

let phraseToCheck = 'Never odd or even';

let modifiedPhrase= phraseToCheck.replace(/[^0-9a-z]/gi, '').toLowerCase();

let isPalindrome = true;

for (let i = 0; i < modifiedPhrase.length/2; i++){
  if (modifiedPhrase[i] !== modifiedPhrase[modifiedPhrase.length - 1 - i]){
   isPalindrome = false;
break;
  } 
} console.log(`The phrase is a palindrome: ${isPalindrome}`);