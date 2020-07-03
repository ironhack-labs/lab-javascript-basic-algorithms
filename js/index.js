// Iteration 1: Names and Input
const hacker1 = "Happy Driver";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Beautiful Navigator";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//Iteration 2: Conditionals. Es6 attempt for practice
const longName = ((hacker1.length === hacker2.length) ? console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) : 
(hacker1.length > hacker2.length ? console.log(`The driver has the longest name, it has ${hacker1.length} characters`) :  
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)))

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
const spaceName = [];
for(let i = 0; i < hacker1.length; i++) {
  spaceName.push(hacker1[i].toUpperCase())
  spaceName.push(' ')
}
console.log(spaceName.join(''))

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
const reverseName = [];
for (let j = hacker1.length; j >= 0; j--) {
  reverseName.push(hacker1[j]);
}
console.log(reverseName.join(' '));

//3.3 Depending on the lexicographic order of the strings, print:
const orderHelp = hacker1.localeCompare(hacker2);
if (orderHelp === (-1)) {
  console.log("The driver's name goes first")
} else if (orderHelp === 1) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?')
}

// Iteration 3: Loops. Es6 practice
const alfOrder = ((orderHelp === 0) ? console.log('What?! You both have the same name?') : 
((orderHelp === 1) ? console.log('Yo, the navigator goes first definitely.') : console.log("The driver's name goes first")));



//Bonus 1:
//Make your program count the number of words in the string.
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel consequat lacus. Integer dapibus, orci eget sodales 
suscipit, erat nisi porta arcu, non lobortis risus enim in purus. Nulla quis dignissim sapien. Donec eget magna accumsan, faucibus 
felis sed, venenatis massa. Curabitur sit amet vestibulum nisi, sed pretium lorem. Phasellus quis libero quis velit cursus efficitur. 
Morbi pellentesque massa at mauris tincidunt scelerisque. Cras in justo vestibulum tellus sodales blandit. Integer quis sem fermentum, 
convallis elit at, congue dolor. Vivamus blandit tempor elit, sit amet rutrum arcu suscipit et. Class aptent taciti sociosqu ad litora 
torquent per conubia nostra, per inceptos himenaeos. Cras nec leo luctus, pulvinar eros vitae, euismod justo. Vestibulum sed lacus mollis, 
fringilla lacus id, vestibulum odio. Ut eget tellus eu elit egestas sollicitudin.\n Orci varius natoque penatibus et magnis dis parturient montes, 
nascetur ridiculus mus. Mauris nec lectus et dolor ultricies lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
himenaeos. Pellentesque sed egestas augue. Cras sem nibh, dapibus sed dui eu, sodales auctor lacus. Ut venenatis commodo quam eget maximus. Fusce 
interdum eu mauris a vehicula. Mauris non nulla at quam vehicula ullamcorper. Phasellus nec volutpat tortor. Vestibulum ante diam, rhoncus et enim ut, 
pretium pharetra ligula. Nam placerat, arcu vel varius hendrerit, erat sem ornare tellus, tincidunt laoreet neque dolor ac metus. Sed quis turpis lacinia, 
faucibus velit vitae, dictum dui. Donec sed consectetur ante. Nunc ullamcorper, est quis sodales efficitur, lectus magna finibus odio, eu fringilla massa orci 
vitae eros. Vestibulum ipsum augue, porta at nunc ut, suscipit consequat tellus. \n Vestibulum hendrerit ut sapien sed gravida. Ut augue sapien, mollis eu bibendum
 in, sollicitudin in justo. Etiam varius dolor vel lobortis semper. Nam dapibus efficitur fermentum. Fusce at tellus pharetra ipsum aliquam dapibus. Aenean
  a mi nec erat mollis cursus sed malesuada felis. Cras bibendum efficitur erat nec imperdiet. Suspendisse imperdiet euismod risus, eget facilisis tellus feugiat a."

//count the spaces
let wordCounter = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === ' ') {
    wordCounter += 1
    }
}
//+1 because the words are more than the spaces
console.log(wordCounter + 1);

//Make your program count the number of times the Latin word et appears.
let etCounter = 0;
for (let i = 0; i < text.length - 1; i++) {
  if (text[i] === 'e' && text [i+1] === 't') {
    etCounter += 1
  }
  
}
console.log(etCounter)

//Bonus 2:
//string which we want to check for palindrome
const str = "A man, a plan, a canal, Panama!";
//remove the punctuation 
const onlyLetters = str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
//make the lower case
const lowerLetters = onlyLetters.toLowerCase();
//remove the spaces
const finalStr = lowerLetters.replace(/\s+/g, '');


function isPalindrome(string) {
  let len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      console.log("No, it is not palindrome")
      return false;
      }
    }
  console.log("YES, it is palindrome! ")
  return true;
}

isPalindrome(finalStr)