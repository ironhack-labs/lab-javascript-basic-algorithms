// Names and Input
var hacker1 = "Jack";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "You both got equally long names,  " + hacker2.length + " characters."
  );
}

// Loops
function concat(word) {
  var result = "";
  for (var i = 0; i < word.length; i++) {
    result += word.charAt(i) + " ";
  }
  return result;
}

function upper() {
  var up = hacker1.toUpperCase();
  console.log(concat(up));
}
upper();

function reverse(string) {
  var result = "";
  for (var i = string.length - 1; i >= 0; i--) result += string[i];
  console.log(result);
}
reverse(hacker2);

function compare(a, b) {
  return a.localeCompare(b);
}
var driverFirst = "The driver's name goes first";
var navFirst = "Yo, the navigator goes first definitely";
console.log(compare(hacker1, hacker2) == -1 ? driverFirst : navFirst);

//Bonus
function palindrome(phrase) {
  return (
    phrase
      .replace(/\s/g, "")
      .replace(/[^\w\s]/gi, "")
      .toLowerCase() ==
    phrase
      .replace(/\s/g, "")
      .replace(/[^\w\s]/gi, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

console.log(palindrome("A man, a plan, a canal, Panama!") ? "Yes" : "No");
console.log(palindrome("race car") ? "Yes" : "No");
console.log(palindrome("Ironhackers") ? "Yes" : "No");

// Lorem ipsum generator
var lorem =
  "Convallis elit erat vestibulum urna diam potenti nostra sollicitudin. Nullam sed nibh. Velit proin id. Placerat magna arcu. Arcu nibh tempor. Posuere parturient aenean gravida erat et. Viverra ut vivamus. Fermentum neque placerat. Phasellus pellentesque gravida suscipit tempus mattis in pellentesque lectus. Nunc diam eu. Justo amet sed euismod pellentesque pellentesque. Erat tellus nonummy risus nibh vel. Sit aliquam sodales a turpis sit. Eu nec id vel dui fusce sit vestibulum duis cras id mauris. Id velit duis diam dignissim ac nec varius orci tortor taciti nisl leo sed ultrices. Sapien placerat id.";

function countWords(str) {
  return str.split(" ").length;
}

function countEt(str) {
  return (str.match(/et/g) || []).length;
}
console.log(countWords(lorem));
console.log(countEt(lorem));
