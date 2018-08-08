console.log("I'm Ready!");
var hacker1 = 'Xenia';
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
	console.log(
		'The Driver has the longest name, it has ' + hacker1.length + ' characters'
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		'Yo, navigator got the longest name, it has ' +
			hacker2.length +
			' characters'
	);
} else {
	console.log(
		'Wow, you both got equally long names, ' + hacker1.length + ' characters'
	);
}

var newName1 = '';
for (var i = 0; i < hacker1.length; i++) {
	if (i != hacker1.length - 1) {
		newName1 += hacker1[i].toUpperCase() + ' ';
	} else {
		newName1 += hacker1[i].toUpperCase();
	}
}
console.log(newName1);

var newName2 = '';
for (var i = hacker2.length - 1; i >= 0; i--) {
	newName2 += hacker2[i];
}
console.log(newName2);

console.log('a' < 'b');

if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
	console.log("The driver's name goes first.");
} else if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
	console.log('Yo, the navigator goes first definitely');
} else {
	console.log('What?! You both got the same name?');
}

var palindrome = prompt('Put a new string in here!');

palindrome.toUpperCase().replace(/[\s,]/g, '');
for (var i = palindrome.length; i < 0; i--) {
  if(palindrome[i] === palindrome…)
}
/[\s,]/g, ''
	
	
	
	
/* solution: 


function checkPalindrome(str) { 
var sanitizedStr = "";
for (var i = 0; i < str.length; i++) {
var char = str[i].toUpperCase();
if ("A" <= char && char <= "Z") 
sanitizedStr += char;
}
for (var i = 0; i < sanitizedStr.length/2; i++) {
if (sanitizedStr[i] !== sanitizedStr[sanitizedStr.length-i-1])
{return false;
}
else {
  return true
}
console.log(checkPalindrome("Amor, Roma"))