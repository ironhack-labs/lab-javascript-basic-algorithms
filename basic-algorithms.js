// Names and Input
// 1.
var hacker1 = 'Alex';

// 2.
console.log("The driver's name is " + hacker1);

// 3.
var hacker2 = prompt("What is the navigator's name?");

// 4.
console.log("The navigator's name is " + hacker2);

//

//Conditionals

// 5.
if (hacker1.length > hacker2.length) {
  console.log(
    'The Driver has the longest name, it has ' + hacker1.length + ' charcters.',
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    'Yo, navigator has the longest name, it has ' +
      hacker2.length +
      ' characters.',
  );
} else if (hacker2.length === hacker1.length) {
  console.log(
    'wow, you both got equally long names, ' + hacker1.length + ' characters!!',
  );
}

//

// Loops
// 6.
var hacker1InCaps = '';

for (var i = 0; i < hacker1.length; i++) {
  hacker1InCaps += hacker1[i].toUpperCase() + ' ';
}

console.log(hacker1InCaps);

// 7.
var hacker2Reversed = '';

for (var i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

// https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin_script

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// 8.
if (hacker1[0].charCodeAt() > hacker2[0].charCodeAt()) {
  console.log(`The driver's name goes first`);
} else if (hacker1[0].charCodeAt() < hacker2[0].charCodeAt()) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`What?! You both got the same name?`);
}

// Palindrome check
// 9.

var string = prompt('Write the string for palindrome check:');

/* Shortcut
    string = string.split(' ');
    string = string.reverse();
    string = sting.join('');
*/
var stringWithoutSpaces = '';

for (var i = 0; i < string.length; i++) {
  if (string[i] === ' ') {
    continue;
  } else {
    stringWithoutSpaces += string[i];
  }
}

console.log('stringWithoutSpaces ->', stringWithoutSpaces);

var stringReversed = '';

for (var i = stringWithoutSpaces.length - 1; i >= 0; i--) {
  stringReversed += stringWithoutSpaces[i];
}

if (stringReversed === stringWithoutSpaces) {
  console.log('String is a palindrome -> ', string);
} else {
  console.log('String is not a palindrome -> ', string);
}

// Lorem ipsum generator
var str =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit et amet metus justo. Fusce ultricies leo quis enim rutrum, non porttitor libero ullamcorper. Phasellus eget odio eget sapien placerat ornare at bibendum neque. Quisque pellentesque lacinia nulla, id hendrerit orci efficitur vitae. Quisque mollis erat ut urna dignissim ullamcorper a vel nibh. Morbi varius ullamcorper mollis. Nam non tempus magna, et faucibus est. Fusce tristique, leo at fermentum hendrerit, arcu nulla aliquet dui, non rhoncus metus justo nec erat. Fusce ut faucibus elit. Donec dignissim eros elit, quis molestie risus rhoncus vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur iaculis nec justo vel convallis. Donec eu hendrerit mi. Maecenas tincidunt massa et ligula mollis, et auctor nunc fringilla. Sed volutpat massa et diam rhoncus hendrerit. Nunc ut risus lacus. Duis viverra sed metus et ultricies. Nam elementum, ante sit amet posuere congue, felis tellus vulputate turpis, vitae malesuada nibh est in urna. Vivamus vulputate nec ante ac feugiat. Donec varius at mauris interdum dapibus. Praesent sagittis nisl eget tellus suscipit gravida. Vivamus augue nulla, ullamcorper eget libero id, lacinia lobortis lectus. Praesent laoreet condimentum ultrices. Vivamus elementum elit sapien, a rutrum ante placerat quis. Aenean placerat fringilla enim ut hendrerit. Donec enim dolor, interdum at feugiat in, porttitor a magna. Suspendisse varius ex vel ipsum vehicula elementum. Nulla sit amet diam ut mi suscipit feugiat. Cras in lacus tempus, gravida mauris ac, feugiat augue. Nunc sollicitudin justo pretium, hendrerit augue ac, cursus lacus. Aenean vitae lacus mollis, facilisis nisi vitae, tristique massa. Donec maximus, libero at molestie hendrerit, sapien libero commodo justo, id malesuada enim urna eget risus. ';
var wordsArr = str.split(' ');
console.log('LOREM IPSUM: The number of words is: ' + wordsArr.length);

var count = 0;
for (i = 0; i <= wordsArr.length; i++) {
  if (wordsArr[i] === 'et') {
    count++;
  }
}
console.log('The number of the latin word "et" is: ' + count);
