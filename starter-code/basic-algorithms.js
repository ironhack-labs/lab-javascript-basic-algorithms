// Names and Input
var hacker1 = 'Francesca';
console.log('The driver\'s name is ' + hacker1);

var hacker2 = prompt('What is the navigator\'s name?');
console.log('The navigator\'s name is ' + hacker2);

//Conditionals
var length1 = hacker1.length;
var length2 = hacker2.length;

if(hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + length1 + ' characters');
} else if (hacker1.length < hacker2.length) {
    console.log('Yo, navigator got the longest name, it has ' + length2 + ' characters');
} else {
    console.log('Wow, you both got equally long names, ' + length1 + 'characters!');
}

// Loops
var addSpace = ' ';
console.log(hacker1.split('').join(addSpace));

var newHacker2 = '';
for (var ix = hacker2.length -1; ix >= 0; ix--) {
  newHacker2 += hacker2[ix]  
}

console.log(newHacker2);

var hacker1Order = hacker1[0];
var hacker2Order = hacker2[0];

if (hacker1Order < hacker2Order) {
    console.log('The driver\'s name goes first');
} else if (hacker1Order > hacker2Order) {
    console.log('Yo, the navigator goes first definitely');
} else {
    console.log('What?! You both got the same name?');
}

var newString = prompt('What drives on a race track?');
var newString2 = '';
for (var n = newString2.length -1; n >= 0; n--) {
    newString2 += newString[n]
}
if (newString === newString2) {
    console.log('You got a palindrome');
} else {
    console.log('It\'s not a palindrome');
}



// Lorem ipsum generator
