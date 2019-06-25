var hacker1 = 'nicolas';
console.log("The driver's name is " + hacker1);
var hacker2 = prompt('Navigator name');
console.log("The navigator's name is " + hacker2);

var hacker1Letters = hacker1.length;
var hacker2Letters = hacker2.length;

//var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

if (hacker1.length === hacker2.length) {
  console.log('wow, you both got equally long names, ' + hacker1Letters + ' characters!!')
} else if (hacker1.length < hacker2.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2Letters + ' characters')
} else if (hacker1.length > hacker2.length) {
  console.log ('The Driver has the longest name, it has ' + hacker1Letters + '  characters');
}

for(var i=0; i<hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase() + " ")
}

for(var i=hacker2.length; i>=0; i--) {
  console.log(hacker2[i])
}

 

 if (hacker1[0] === hacker2[0]) {
    console.log('What?! You both got the same name?')
  } else if (hacker1[0] < hacker2[0]) {
     console.log ("The driver's name goes first");
  }  else if (hacker1[0] > hacker2[0]) {
     console.log ('Yo, the navigator goes first definitely');
  }

// a partir de aqui sin acabar

  var phrase = prompt('Phrase');


  var isPalindrome = '';

 for (var k = phrase.length; k <= 0; k--) {
 isPalindrome = isPalindrome + (phrase[k])
 console.log(isPalindrome)
 }

 if (phrase === isPalindrome) {
   console.log("Palindrome!")
 } else {
   console.log("Not a palindrome!")  
 }
 
