var hacker1 = "Cesar";
console.log("The driver's name is " + hacker1);

var hacker2 = "Kash"
console.log("The navigator's name is " + hacker2);

if(hacker1.length > hacker2.length) {
  console.log("The driver has the longest name. It has " + hacker1.length + " characters.");
} else if(hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name. It has " + hacker2.length + " characters.");
} else {
  console.log("Wow! You both got equally long names! They have " + hacker1.length + " characters.");
}

var theName = []
for(var i=0; i < hacker1.length; i++) {
  theName.push(hacker1[i].toUpperCase());
}

var theJoinedName = theName.join(' ');
console.log(theJoinedName);

var hackerReverse = hacker2.split("");
var reversedStr = hackerReverse.reverse().join("");
console.log(reversedStr);

var lowercaseDriverName = hacker1.toLowerCase();
var lowercaseNavName = hacker2.toLowerCase();

if(lowercaseDriverName < lowercaseNavName) {
  console.log("The driver's name goes first.");
} else if (lowercaseNavName < lowercaseDriverName) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log("What?! You both got the same name.");
}

if(checkPalindrome(prompt("Is this a palindrome?").replace(/[^a-zA-Z]/g, ""))) {
  console.log("This is a palindrome");
} else {
  console.log("This is NOT a palindrome");
}
  
function checkPalindrome(str) {
  for(j = 0; j < str.length; j++) {
    if(str[j] !== str[str.length - j - 1]) {
      return false;
    }
  }
  return true;
}

