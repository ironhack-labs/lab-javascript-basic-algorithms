// Names and input

var hacker1 = prompt('Enter hacker1 name: ');
console.log('The driver\'s name is ' + hacker1);

var hacker2 = prompt('Enter hacker2 name: ');
console.log('The navigator\'s name is ' + hacker2);

// Conditionals

if(hacker1.length === hacker2.length) {
     console.log('ow, you both got equally long names, ' + hacker1.length + ' characters!!')
   } else if (hacker1.length > hacker2.length){
     console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
   } else {
     console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters' )
}

// Loops

//Print all the characters of the driver's name, separated by a space and [in capitals] example:  `"J O H N"`
var addition = '';
for (var i = 0; i < hacker1.length; i++) {
  addition += hacker1[i].toUpperCase() + ' ';
}
console.log(addition);

//Print all the characters of the navigator's name, in reverse order. ie. `"nhoJ"`

console.log(hacker2.split('').reverse().join(''));


/*Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print:
  - `The driver's name goes first`
  - `Yo, the navigator goes first definitely`
  - `What?! You both got the same name?`*/
  
  if(hacker1.toLowerCase() < hacker2.toLowerCase()){
    console.log('The driver\'s name goes first');
  } else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log('Yo, the navigator goes first definitely');
  } else {
    console.log('What?! You both got the same name?');
  }

//Bonus time!

// Ask the user for a new string and check if it's a Palindrome.

var newString = prompt('Check if it\'s a Palindrome');

var reverseString = newString.split('').reverse().join('');

if (newString.toLowerCase().replace(' ', '') === reverseString.toLowerCase().replace(' ','')){
  console.log(newString + ' is a Palindrome');
    } else {
        console.log(newString + ' is not a Palindrome');
}

// Go to lorem ipsum generator and:

//Generate 3 parragraphs. Store the text in a String

var parragraphs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed erat ac augue interdum tristique. Donec lobortis blandit quam, a sodales metus scelerisque eget. Donec eu euismod purus. Mauris fringilla tellus vel nunc mattis, quis porttitor magna efficitur. Nam facilisis a massa a accumsan. Cras sodales arcu ac turpis viverra malesuada id nec orci.' 



//Make your program count the number of words in the string

console.log(parragraphs.split(' ').length);


//Make your program count the number of times the latin word et appears

console.log(parragraphs.split('et').length);