var hacker1 = "Jimbo";
console.log("The Driver's name is " + hacker1);


var hacker2 = prompt("What is thy name?");
console.log("The Navigator's name is " + hacker2);

function longestName() {

  if(hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name! It is ' + hacker1.length + ' characters long!');
  } else if (hacker1.length < hacker2.length) {
    console.log('Yo, the Navigator has the longest name! It ss ' + hacker2.length + ' characters long!');
  } else {
    console.log("Wow, you both got equally long names, " + hacker2.length + " characters!")
  }
}

longestName();

var hacker1UpperCase = '';

for(var i = 0; i < hacker1.length; i++) {
  hacker1UpperCase += hacker1[i].toUpperCase() + ' ';
}

console.log(hacker1UpperCase);


function reverse(str) {
  var reversed = '';
  for(var i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
  }
  console.log(reversed)
  return reversed
}

reverse(hacker2);



function compare() {
  if(hacker1.localeCompare(hacker2) < 0) {
    console.log("The Driver's name goes first");

  } else if(hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the Navigator goes first definitely");
  } else {
    console.log("What?! You both got the same name?")
  }
}

compare();

var palindrome = prompt("Please enter a Palindrome").toLocaleLowerCase().replace(/,| |/g, '');

function checkPalindrome(str) {
  var revPal = reverse(palindrome);

    if(palindrome === revPal) {
      console.log("this is a palindrome");
    } else {
      console.log("this is not a palindrome");
    }
}



checkPalindrome(palindrome);

var paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus felis in tortor posuere, sed elementum est consequat. Praesent dui lectus, accumsan non pharetra sed, rutrum eget lectus. Quisque vehicula, nunc ut fermentum porta, mauris metus aliquam turpis, sit amet pellentesque velit magna id elit. Nulla sem quam, posuere id venenatis sit amet, interdum ut lectus. Pellentesque arcu orci, commodo vitae libero ut, aliquet mollis arcu. Donec placerat ante et magna ultricies congue. Aliquam eget urna pharetra, scelerisque ipsum a, consectetur magna. Aenean fermentum ullamcorper libero, bibendum aliquam velit consequat non. Duis in mi erat. Phasellus magna metus, rutrum quis urna in, placerat convallis arcu. Cras vestibulum sit amet velit quis volutpat. Aliquam ultrices, ipsum vitae feugiat condimentum, augue erat convallis velit, scelerisque bibendum urna dui ut nulla. Nulla facilisi. Phasellus sollicitudin elit ante. Quisque ac vestibulum tellus, ac mollis tortor. Aenean sed aliquet quam. Suspendisse potenti. Donec sed orci ut ex convallis euismod non id libero. Fusce dolor nisl, lacinia et vestibulum quis, scelerisque nec elit. In ac sem id turpis efficitur ultricies. Etiam in iaculis erat, id vehicula erat. Sed massa dui, pharetra at orci nec, tristique vestibulum risus. Nullam aliquam lectus vitae porttitor ullamcorper. Suspendisse ultrices rhoncus mauris non volutpat. Nam pellentesque sem et urna hendrerit, quis imperdiet tortor faucibus. Donec sed magna nisi. In hac habitasse platea dictumst. Nam at varius massa, quis pharetra enim. Donec ut gravida tortor. Vivamus sed nunc tortor."


function count() {
  var numWords = 1;
  for(var i = 0; i < paragraphs.length; i++) {
    if(paragraphs[i] == ' ') {
      numWords++
    }
  }
  console.log(numWords);
}

count(paragraphs);

var noCommas = paragraphs.replace(/,/g, " ");


function countEt() {

  var numEt = 0;
  for(var i = 0; i < noCommas.length; i++) {
    if(noCommas[i] + noCommas[i+1] + noCommas[i+2] + noCommas[i+3] == " in " || noCommas[i] + noCommas[i+1] + noCommas[i+2] + noCommas[i+3] == " In ") {
      numEt++
    }
  }
  console.log(numEt);
}

countEt(noCommas);