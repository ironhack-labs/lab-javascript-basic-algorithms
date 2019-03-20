// Names and Input
//==================== 1 ========================
var hacker1 = 'Daniel';

//==================== 2 ========================
console.log('The dricers name is ' + hacker1);

//==================== 3 ========================
var hacker2 = window.prompt('Please, Introduce your name', '  Ej: Francisco  ');

//==================== 4 ========================
console.log('he navigator`s name is' + hacker2);

//Conditionals
//==================== 5 ========================
if (hacker2.length < hacker1.length) {
	console.log('The Driver (' + hacker1 + ') has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker2.length > hacker1.length) {
	console.log('Yo, ' + hacker2 + ', I`ve got the longest name, it has ' + hacker2.length + ' characters');
} else {
	console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!');
}

//Loops
//==================== 6 ========================
var hacker1_1 = '';
var hacker2_2 = '';
for (i = 0; i < hacker1.length; i += 1) {
	hacker1_1 = hacker1_1 + (hacker1.charAt(i) + ' ');
}
console.log(hacker1_1.toUpperCase());

for (i = 0; i < hacker1.length; i += 1) {
	hacker2_2 = hacker2_2 + (hacker2.charAt(i) + ' ');
}
console.log(hacker2_2.toUpperCase());

//==================== 7 ========================

var reverseHacker2 = '';
reverseHacker2 = hacker2.split('');
reverseHacker2 = reverseHacker2.reverse();
reverseHacker2 = reverseHacker2.join('');

console.log(reverseHacker2);

//==================== 8 ========================
if (hacker1.localeCompare(hacker2) < 0) {
	console.log('The driver`s name goes first');
} else if (hacker1.localeCompare(hacker2) > 0) {
	console.log('Yo, the navigator goes first definitely');
} else {
	console.log('What?! you both got the same name?');
}

//==================== 9 Palindrome ========================
var palindrome = window.prompt('Please, Introduce a string', '  Ej: El papa franciso ');
console.log(palindrome);

var joinPalindrome = '';
var reversePalindrome = '';

for (i = 0; i < palindrome.length; i++) {
	if ((palindrome[i] != ",") && (palindrome[i] != " ") && (palindrome[i] != "!") && (palindrome[i] != "?")) {
		joinPalindrome = joinPalindrome + palindrome[i];
	};
};

console.log(joinPalindrome);

reversePalindrome = joinPalindrome.split('');
reversePalindrome = reversePalindrome.reverse();
reversePalindrome = reversePalindrome.join('');
console.log(reversePalindrome);

if (reversePalindrome.localeCompare(joinPalindrome) == 0) {
	console.log('ey! you have a palindrome!');
} else {
	console.log('Sorry, you have not a palindrome');
};








// Lorem ipsum generator
//==================== 10 ========================