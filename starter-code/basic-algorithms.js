// Names and Input
var hacker1 = "Diogo";
console.log(hacker1);
var hacker2 = prompt("What is the navigator name?");
console.log("The navigator´s name is " + hacker2);

//Conditionals
var hacker1Str = hacker1.length;
console.log(hacker1Str);

var hacker2Str = hacker2.length;
console.log(hacker2Str);

if (hacker1Str > hacker2Str) {
  console.log("The Driver has the longest name, it has " +hacker1Str+ " characters");
} else if (hacker2Str > hacker1Str) {
  console.log("Yo, navigator got the longest name, it has " +hacker2Str+ " characters");
} else {
  console.log("wow, you both got equally long names, " +hacker1Str+ " characters!!");
}

// Lorem ipsum generator
var hacker1Cap = hacker1.toLocaleUpperCase();
var hacker1CapSpace = hacker1Cap.split("").join(" ");
console.log(hacker1CapSpace);

function reverse(hacker2) {
  return hacker2.split('').reverse().join('');
}
var result = reverse(hacker2);
console.log(result);

if (hacker1.localeCompare(hacker2)) {
  console.log("The driver's name goes first");
} else if (hacker2.localeCompare(hacker1)) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

//Bonus Time
// Exercise 09
var str = prompt("Please enter a new string");
console.log(str);
function palindrome(str) {
  return true;
}
var palindromeResult = "Is this a palindrome string? (true or false) " + palindrome(str);
console.log(palindromeResult);

// Exercise 10
var threeParragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nec lorem id aliquam. Morbi pretium nisl quis nisl cursus, nec tincidunt tortor convallis. Ut nec eros est. Phasellus vulputate nulla id massa scelerisque tempus. Donec at magna nulla. Donec in pellentesque nisi. Vivamus in justo sed felis aliquam bibendum. In quam tellus, facilisis eu volutpat nec, commodo at dolor. Sed at risus non tortor molestie sagittis quis ac leo. In eget mollis erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur purus nulla, malesuada quis nunc ac, iaculis sagittis urna. Phasellus viverra sapien dolor, sit amet sollicitudin enim gravida et. Donec purus odio, tempor eget elit a, varius tristique mi." + "\n\nSed congue molestie dui nec malesuada. Suspendisse interdum, risus non cursus pharetra, orci dui suscipit ligula, ac posuere velit ipsum in lorem. Sed orci neque, dictum et volutpat non, eleifend eget justo. Integer bibendum mollis ex non semper. Cras id mattis ligula, eget maximus ex. Quisque ullamcorper turpis sem, id dictum lacus mollis rhoncus. Phasellus egestas ex a semper fringilla. Aliquam pulvinar faucibus nisi vel auctor. Vivamus vitae varius felis." + "\n\nVestibulum euismod felis a porta feugiat. Nam a fringilla ipsum. Maecenas urna risus, bibendum vitae molestie egestas, laoreet sed ex. Duis suscipit libero id metus facilisis tincidunt. Cras lobortis pretium sodales. Quisque varius arcu ut magna venenatis porta. Etiam ut tellus massa. Fusce ornare lorem nec justo maximus, et interdum eros feugiat. Nulla faucibus, odio et tempor placerat, metus libero placerat felis, luctus posuere lacus lacus quis lacus.";
console.log(threeParragraphs);

function countWords (threeParragraphs) {
  return threeParragraphs.trim().split(/\s+/).length;
}
var countWordsVar = countWords (threeParragraphs);
console.log(countWordsVar);