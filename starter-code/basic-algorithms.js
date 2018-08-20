'use strict';

// Names and Input
var hacker1 = 'Jonathan';
console.log('The driver`s name is ' + hacker1);

var hacker2 = window.prompt('what is your name, navigator?');
console.log('The navigator`s name is ' + hacker2);


//Conditionals

if(hacker1.length === hacker2.length) {
  console.log('Wow, you both got equally long names, ' +hacker1.length+' characters!');
} else if(hacker1.length < hacker2.length){
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length +' characters')
} else if(hacker1.length > hacker2.length){
  console.log('The Driver has the longest name, it has ' + hacker1.length +' characters');
}

// TEST-uppercase: console.log(hacker1.toUpperCase());

//Uppercase with space

var outputHacker1 = '';

for(var i=0; i<hacker1.length; i++){
   outputHacker1 += hacker1.charAt(i) + ' ';     
}

console.log(outputHacker1.toUpperCase());

//Reverse order

var outputHacker2 = '';

for(var i=hacker2.length - 1; i>-1; i--){
  outputHacker2 += hacker2.charAt(i);
}

console.log(outputHacker2);

// lexicographical order

// console.log(hacker1.localeCompare(hacker2));

var characterComp = hacker1.localeCompare(hacker2);

if(characterComp == 0){
  console.log('What?! You both got the same name?');
} else if(characterComp < 0){
  console.log('The driver`s name goes first');
} else if(characterComp > 0){
  console.log('Yo, the navigator goes first definitely');
} 


// Parindrome Checker

var palindromeInput = window.prompt('enter text (maybe a palindrome?!)');
console.log('You have entered ' + palindromeInput);


function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        console.log('Nope, not a palindrome');
    } else {
      console.log('Oh dang, this is a palindrome');
    }
 }
}

palindrome(palindromeInput);

// Lorem ipsum generator
