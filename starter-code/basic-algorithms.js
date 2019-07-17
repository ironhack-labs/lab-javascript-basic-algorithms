// Names and Input
// 1
let hacker1 = 'Dave';
// 2
console.log(`The driver's name is ${hacker1}`);
// 3
let hacker2 = prompt(`What's the navigators name?`);
// 4
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
// 5
hacker1Len = hacker1.length;
hacker2Len = hacker2.length;

if(hacker1Len > hacker2Len) {
    console.log(`The Driver has the longest name, it has ${hacker1Len} characters`);
} else if(hacker1Len < hacker2Len) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2Len} characters`);
} else {
    console.log(`wow, you both got equally long names, ${hacker1Len} characters!!`);
}

// Loops
// 6: Driver's name separated by a space and in capitals
var capital = ''
for (let i = 0; i < hacker1.length; i++) {
    if(i == (hacker1.length - 1)){
        capital += hacker1[i];
    }else{
        capital += hacker1[i] + ' ' ;
    }
}
console.log(capital.toUpperCase());

// 7: Navigator's name in reverse order
var reverse = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverse += hacker1[i];
}
console.log(reverse);

// 7: Navigator's name in reverse order (Built-In functions)
console.log(hacker1.split("").reverse().join(""));

// 8: lexicographic order
var sortNames = [hacker1, hacker2];
console.log(sortNames.sort());
if(sortNames[0] == sortNames[1]){
    console.log('What?! You both got the same name?');
} else if(sortNames[0] == hacker1) {
    console.log('The driver\'s name goes first');
} else {
    console.log('Yo, the navigator goes first definitely');
}

// Bonus Time!
// 9: Palindrome
var palindrome = prompt("Insert a palindrome: ");
console.log(palindrome);
palindrome = palindrome.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
var len = palindrome.length;
var isPalindrome = true;
for (var i = 0; i < len / 2; i++) {
  if (palindrome[i] !== palindrome[len - 1 - i]) {
    isPalindrome = false;
  }
  isPalindrome
}

console.log((!isPalindrome) ? 'It\'s not a palindrome' : 'It\'s a palindrome');

// 10: Lorem Ipsum
var lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
var totalWords = 1;
var countEt = 0;
for (var i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") totalWords+=1;
}
var countEt = (lorem.match(/ et/g)).length;
console.log(lorem);
console.log(`Total words: ${totalWords}. 'ET' words: ${countEt}`);
