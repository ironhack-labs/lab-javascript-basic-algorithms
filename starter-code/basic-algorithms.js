// Names and Input

//1.Create a variable hacker1 with the driver's name
var hacker1 = 'Alvaro';
//2.Print "The driver's name is XXXX"
console.log('The driver´s name is ' + hacker1);
//3.Create a variable hacker2 and ask the user for the navigator's name
var hacker2 = prompt('What´s your name?');
//4.Print "The navigator's name is YYYY"
console.log("The navigator's name is " + hacker2);

//Conditionals

//5.Depending on which name is longer, print:
//The Driver has the longest name, it has XX characters or
if (hacker1.length > hacker2.length) {
  console.log(
    'The Driver has the longest name, it has ' + hacker1.length + 'characters'
  );
  //The navigator got the longest name, it has XX characters or
} else if (hacker1.length < hacker2.length) {
  console.log(
    'The navigator got the longest name, it has ' +
      hacker2.length +
      'characters'
  );
} else {
  //wow, you both got equally long names, XX characters!!
  console.log(
    'wow, you both got equally long names,' + hacker1.length + ' characters!!'
  );
}

//6.Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

var acumulator = '';

for (var i = 0; i < hacker1.length; i++) {
  acumulator += hacker1[i].toUpperCase() + ' ';
}
console.log(acumulator);

//7.Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

var acumulatorReverse = ' ';
for (var i = hacker2.length; i >= 0; i--) {
  acumulatorReverse += hacker2[i];
}
console.log(acumulatorReverse);

//Depending on the lexicographic order of the strings, print:

//The driver's name goes first
//Yo, the navigator goes first definitely
//What?! You both got the same name?

if (hacker1 > hacker2) {
  console.log('The driver`s name goes first');
} else if (hacker1 < hacker2) {
  console.log('The navigator goes first definitely');
} else {
  console.log('What?! You both got the same name?');
}

//Go to lorem ipsum generator and:

//Generate 3 parragraphs. Store the text in a String

var string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa mollitia vero, est consectetur 
voluptatum beatae molestias recusandae fugiat maiores dolor officiis deleniti magni placeat, repudiandae, rem nesciunt. 
Itaque, nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa mollitia vero, est consectetur voluptatum 
beatae molestias recusandae fugiat maiores dolor officiis deleniti magni placeat, repudiandae, rem nesciunt. Itaque, nihil! Lorem, 
ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa mollitia vero, est consectetur voluptatum beatae molestias recusandae 
fugiat maiores dolor officiis deleniti magni placeat, repudiandae, rem nesciunt. Itaque, nihil!`;

//Make your program count the number of words in the string

var wordsString = string.split(' ');
console.log(wordsString.length);

//Make your program count the number of times the latin word et appears

counter = 0;
for (var i = 0; i < wordsString.length; i++) {
  if (wordsString[i] === 'est') {
    counter++;
  }
}
console.log(counter);
//9. Ask the user for a new string and check if it's a [Palindrome]

var str = prompt('Tell me a word and I´ll check if it is a Palindrome');
function checkPalindrom(str) {
  return (
    str ==
    str
      .split('')
      .reverse()
      .join('')
  );
}
checkPalindrom(str);
