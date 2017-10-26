// Names and Input
var hacker1 = "Angel";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

// Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length  + " characters");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else {
   console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

// Loops
var hacker1Capital = "";
for(var i = 0; i < hacker1.length; i++) {
  hacker1Capital += hacker1[i].toUpperCase();
  // Para evitar añadir el último espacio
  if (i < hacker1.length - 1) {
    hacker1Capital += " ";
  }
}
console.log(hacker1Capital);

var hacker2Reverse = "";
for(var i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely");
}
else {
   console.log("What?! You both got the same name?");
}

// Bonus Time!
var palindrome = prompt("Enter a string...");
// palindromeFinal será el string sin caracteres extraños
var palindromeFinal = "";
for (var i = 0; i < palindrome.length; i++) {
  switch(palindrome[i]) {
    // Listado de caracteres que no tenemos en cuenta
    case "\\":
    case "!":
    case "|":
    case "\"":
    case "·":
    case "#":
    case "$":
    case "%":
    case "&":
    case "/":
    case "(":
    case ")":
    case "'":
    case "?":
    case " ":
    case ",":
      break;
    default:
      palindromeFinal += palindrome[i].toUpperCase();
  }
}
//console.log(palindromeFinal.length);

// Recorremos el string en ambos sentidos comparando los caracteres
var isPalindrome = false;
for (var i = 0; i <= Math.floor(palindromeFinal.length / 2); i++) {
  // Consideramos que palindromo es a partir de 2 letras.
  if (palindromeFinal.length <= 1) {
    isPalindrome = false;
  } else if (palindromeFinal[i] !== palindromeFinal[palindromeFinal.length - 1 - i]) {
    isPalindrome = false;
  }
  else {
    isPalindrome = true;
  }
}

if (isPalindrome) {
  console.log("Well done \"" + palindrome + "\" It's a Palindrome :)");
}
else {
  console.log("Sorry \"" + palindrome + "\" It's not a Palindrome :(");
}

// Lorem Ipsum

var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
Aenean sed interdum ligula, ac fermentum augue. Duis convallis nisl nisi, ut \
malesuada odio volutpat id. Nam viverra molestie tellus mattis sollicitudin. \
Donec sit amet eros mollis, vulputate metus ut, ullamcorper odio. Donec nisi \
dolor, faucibus eget vestibulum sed, aliquet at ex. Curabitur tempus sit amet \
orci in pretium. Morbi leo ipsum, commodo vel nisi quis, pretium pellentesque tellus. \
Nulla eu finibus turpis, sit amet ultrices velit. Duis posuere vitae enim at luctus. \
In efficitur, felis ut vehicula sagittis, tortor leo egestas nulla, sed aliquam \
turpis turpis tristique sapien. Morbi ac tempor massa.\
\
Ut nec ultricies velit. Maecenas tempus vitae lacus sed sagittis. Donec ornare \
imperdiet malesuada. In quis fringilla libero. Cras iaculis ipsum sit amet \
lorem ultrices, quis sollicitudin felis ullamcorper. Sed vel arcu quis metus \
feugiat feugiat non sed neque. Aliquam quis ligula eu libero cursus bibendum. \
Aenean et risus eget risus tristique volutpat.\
\
Suspendisse a tempus purus. Donec sed erat rhoncus, rhoncus dolor in, placerat \
tortor. Etiam molestie semper tempor. Sed vitae felis pulvinar, auctor lorem \
in, dapibus sapien. Phasellus a scelerisque risus. Nullam scelerisque euismod \
massa id consequat. Morbi in egestas diam. Maecenas enim enim, pretium vitae \
magna vel, ornare finibus orci. Pellentesque non semper leo. Aliquam feugiat a \
dui quis molestie. Cras aliquet tempor quam, nec imperdiet nulla semper quis.";

//console.log(paragraph);

//cuenta el número de palabras
var words = 0;
for (var i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === " ") {
    words += 1;
  }
}
words += 1;
console.log("Words number = " + words);

// Cuenta el número de "et"
var numPattern = (paragraph.match(/( et | et\.| et,)/g)).length;
console.log("et number = " + numPattern);
