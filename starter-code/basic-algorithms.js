// Names and Input
console.log("I am ready!");
var hacker1 = "Manuel";
console.log(hacker1);
var hacker2 = "Samuel";
console.log("the navigator's name" + hacker2);

//Conditionals
if (hacker1.length == hacker2.length) {
  console.log("wow, you both got equally long names, XX characters!!");
} else if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has XX characters");
} else { console.log("Yo, navigator got the longest name, it has" + hacker2.length+ " characters"); }

function printSeparatedName(hacker) {
  let name = hacker.toUpperCase();
  var separatedName = "";
  for (var a = 0; a < name.length; a++) {
    separatedName += name[a] + " ";
  }
  return separatedName;
}
function reverse(hacker) {
  var reversed = "";
  for (var a = hacker.length - 1; a >= 0; a--) {
    reversed += hacker[a];
  }
  return reversed;
}
function lexicalOrder(hacker1, hacker2) {
  if (hacker1 > hacker2) {
    console.log("The driver's name goes first");
  } else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely");
  } else { console.log("What?! You both got the same name?"); }
}

function palendrome(word1,word2){
  if(reverse(word1)==word2)console.log("it is a palindrome");
  else if (reverse(word2)==word1)console.log("it is a palindrome");
}

// Lorem ipsum generator
