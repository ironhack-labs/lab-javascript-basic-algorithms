// Names and Input
//==================== 1 ========================
var hacker1 = 'Daniel';

//==================== 2 ========================
console.log('The dricers name is ' + hacker1);

//==================== 3 ========================
var hacker2 = window.prompt('Please, Introduce your name', '  Ej: Francisco  ');

//==================== 4 ========================
console.log('The navigator`s name is ' + hacker2);

//Conditionals
//==================== 5 ========================
//To compare the length of both names 
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
//To make a new word with the characters separed
for (i = 0; i < hacker1.length; i += 1) {
	hacker1_1 = hacker1_1 + (hacker1.charAt(i) + ' ');
}

//To log the word in capital letters
console.log(hacker1_1.toUpperCase());

for (i = 0; i < hacker1.length; i += 1) {
	hacker2_2 = hacker2_2 + (hacker2.charAt(i) + ' ');
}
console.log(hacker2_2.toUpperCase());

//==================== 7 ========================

var reverseHacker2 = '';
reverseHacker2 = hacker2.split(''); //make an array
reverseHacker2 = reverseHacker2.reverse(); //Reverse the array
reverseHacker2 = reverseHacker2.join(''); //Join again in a single word

console.log('the reverse of the navigator´s name is ' + reverseHacker2);

//==================== 8 ========================
//To compare the name of the two people
if (hacker1.localeCompare(hacker2) < 0) {
	console.log('The driver`s name goes first');
} else if (hacker1.localeCompare(hacker2) > 0) {
	console.log('Yo, the navigator goes first definitely');
} else {
	console.log('What?! you both got the same name?');
}

//==================== 9 Palindrome ========================
var palindrome = window.prompt('Please, Introduce a string', '  Ej: El papa franciso ');
console.log('You have say this string: ' + palindrome);

var joinPalindrome = '';
var reversePalindrome = '';

//To ignore espaces and symbols
for (i = 0; i < palindrome.length; i++) {
	if ((palindrome[i] != ",") && (palindrome[i] != " ") && (palindrome[i] != "!") && (palindrome[i] != "?")) {
		joinPalindrome = joinPalindrome + palindrome[i];
	};
};


//To make the string an array, reverse it and join it again in a new word
reversePalindrome = joinPalindrome.split('');
reversePalindrome = reversePalindrome.reverse();
reversePalindrome = reversePalindrome.join('');
console.log('The reverse string of your string is ' + reversePalindrome);

//To compare the initial string with the reverse string
if (reversePalindrome.localeCompare(joinPalindrome) == 0) {
	console.log('ey! you said a palindrome!');
} else {
	console.log('Sorry, you did not say a palindrome');
};

// Lorem ipsum generator
//==================== 10 ========================
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod justo sed ligula iaculis facilisis. Vivamus ac euismod justo. Etiam interdum auctor dolor, eu sodales erat mattis et. Donec vel tristique odio, nec lobortis tortor. Aenean porta quis orci eget consectetur. Vestibulum quis placerat nibh, in congue erat. Phasellus finibus orci et interdum pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc at ex efficitur sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ut dolor id massa sagittis elementum. Aliquam ac lectus metus.Integer imperdiet, est non consequat elementum, metus orci feugiat justo, eget varius quam felis eu turpis.Phasellus iaculis laoreet nisl a efficitur.Curabitur nibh orci, lacinia nec felis eu, cursus aliquam ipsum.Vivamus diam metus, porttitor euismod lorem eget, efficitur aliquet urna.Fusce viverra molestie lectus, et vestibulum augue fringilla vitae.Mauris arcu ligula, gravida dignissim dolor a, posuere pretium arcu.Aenean viverra varius eros vitae aliquet.Integer enim diam, cursus volutpat mauris vitae, imperdiet mollis ligula.Phasellus vitae feugiat tortor.Phasellus placerat tellus ac mauris ullamcorper, sit amet efficitur purus scelerisque.Phasellus sapien augue, luctus a bibendum in , ullamcorper a urna.Curabitur tempus eu tortor varius accumsan.Curabitur tincidunt nulla eget orci vehicula hendrerit.Nullam mauris nibh, luctus in consectetur ut, vulputate id urna.Nunc sit amet sodales tortor, vel pulvinar leo.Suspendisse aliquet sodales tortor, eu ultrices orci sagittis sed.Nunc id aliquam nulla, a fringilla magna.Donec tempus diam blandit suscipit vestibulum.Praesent auctor sagittis ipsum, a semper leo pharetra eu.Aliquam aliquam imperdiet ligula sed aliquam.Etiam sit amet lectus sollicitudin, ultricies magna ut, hendrerit velit.Cras sed nulla nibh.Vestibulum molestie facilisis facilisis.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;Integer ac metus mi.";

var wordLorem = lorem.split(' ');
console.log('The tex has ' + wordLorem.length + ' words.');

var numbersEt = 0;
for (i = 0; i < wordLorem.length; i++) {
	if (wordLorem[i] == "et") {
		numbersEt = numbersEt + 1;
	};
};
console.log('The text has ' + numbersEt + ' "et" word.');