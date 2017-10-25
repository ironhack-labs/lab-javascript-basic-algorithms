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
   console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")
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
   console.log("What?! You both got the same name?")
}

// Bonus Time!
var palindrome = prompt("Enter a string...");
// palindromeFinal será el string sin caracteres extraños
var palindromeFinal = "";
for (var i = 0; i < palindrome.length; i++) {
  switch(palindrome[i]) {
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
//console.log(palindromeFinal);

// Recorremos el string en ambos sentidos comparando los caracteres
var isPalindrome = false;
for (var i = 0; i <= Math.floor(palindromeFinal.length / 2); i++) {
  if (palindromeFinal[i] !== palindromeFinal[palindromeFinal.length - 1 - i]) {
    isPalindrome = false;
    console.log("EEEE " +palindromeFinal[i] );
    break;
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
