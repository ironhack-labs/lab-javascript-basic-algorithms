// Names and Input
var hacker1 = 'Diana'
console.log('The driver\'s name is ' + hacker1)

var hacker2 = result = window.prompt('What\s the Navigator\s Name?',"");

console.log('The navigator\'s name is ' + hacker2)


//Conditionals


if (hacker1.length>hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' character\'s'
  )
} else if (hacker1.length == hacker2.length) {
  console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!')
} else {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters')
}


// Loops

//6. Print all driver's characters + space  in capitals Method 1
var h1UpperCase = hacker1.toUpperCase();
var addSpace = ' ' ;

/* Method 1 try 
for (var h1spaces = 0; h1spaces<h1UpperCase.length ; h1spaces = h1spaces + 1) {
  var h1spaces = hacker1[0]
  console.log(h1spaces)
}*/

//Method 2
console.log(hacker1.split('').join(' ').toUpperCase());


//  reverse

var h2Reverse = hacker2.split('').reverse().join('');
console.log(h2Reverse);

//lexicographic order

if (hacker1.toLowerCase()<hacker2.toLowerCase()) {
  console.log('The driver\'s name goes first'
  )
} else if (hacker1.toLowerCase()>hacker2.toLowerCase()) {
  console.log('Yo, the navigator goes first definitely')
} else {
  console.log('What?! You both got the same name?')
}

// Palindrome

var newstring = result = window.prompt('Can you tell me a palindrome',"");
if (newstring===result.split('').reverse().join('')) {
  console.log('Nice Palindrome')
} else {
  console.log('What?!? That\' not a Palindrome)
}


// Lorem ipsum generator
