// Names and Input
var hacker1 = 'Åsa';
var hacker2 = 'César';
console.log('The drivers name is ' + hacker1);
console.log('The navigator´s name is ' + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker2.length > hacker1.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters.');
} else {
  console.log('Wow, you both got equally long names, ' + hacker1 + ' characters!!');
}

var driversName = '';
for (var i = 0; i < hacker1.length; i++) {
  driversName += hacker1[i].toUpperCase() + ' ';
}
console.log(driversName);

//var navigatorName = hacker2.split('').reverse().join('');
var navigatorsName = '';
for (var i = hacker2.length - 1; i >= 0; i--) {
  navigatorsName += hacker2[i];
}
console.log(navigatorsName);

if (hacker1 < hacker2) {
  console.log('The driver´s name goes first');
} else if (hacker2 < hacker1) {
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What?! You both got the same name?');
}

// Lorem ipsum generator
var inputString = prompt('Insert a string: ').toLowerCase();
var isPalindrome = '';
for (var i = inputString.length-1; i >= 0; i--) {
  var letra = 'abcdefghijklmnopqrstuvwxyzåäö';
  for (var j = 0; j < letra.length; j++) {
    if (inputString[i] === letra[j]) {
      isPalindrome += inputString[i];
    }
  }
}
if (inputString === isPalindrome) {
  console.log('Your string is a Palindrome! Congratulations!!!!');
} else {
  console.log('Your string is not a Palindrome!');
}