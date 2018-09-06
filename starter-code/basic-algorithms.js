console.log("I'm Ready!");

// Naming the driver
var hacker1 = "Scully";
console.log("The driver's name is " + hacker1);

// Naming the navigator
var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

// Comparing lengths
if (hacker1.length > hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("The Driver has the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names," + hacker1.length + " characters!!");
}

// Printing driver's name in capital letters
for (var i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

// Printing navigator name backwards
for (var i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

// Sorting by lexicographical order
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both got the same name?")
}

// Is it a palindrome?
var notALetter = /[\W_]/g; // regular expresion for any non-word character
// notALetter explanation = []: match any character; \W: not a word character; g: global search

var palindrome = prompt("Checking palindromes, enter something to test :D");
var newPalindrome = palindrome.toLowerCase().replace(notALetter, '');
//console.log(newPalindrome);
var reversePalindrome = newPalindrome.split('').reverse().join('');
//console.log(reversePalindrome);

if (newPalindrome === reversePalindrome) {
  console.log(palindrome + " is a palindrome!");
} else {
  console.log(palindrome + " is not a palindrome!");
}

//Lorem Ipsum counting
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae cursus ante. Nullam nunc enim, blandit eget quam ac, pharetra fringilla eros. Sed porta, tortor eu tempor ornare, dolor augue viverra elit, non ultrices diam est eget erat. Duis dapibus sapien vel interdum egestas. In tempus justo arcu, vel posuere sem laoreet ac. In vel finibus metus. Nulla laoreet tempus nulla, nec hendrerit purus cursus quis. In ac mollis nisl, ut ultrices tortor. In varius vehicula sem, ac sodales nisi tincidunt vitae. Vestibulum sed nulla ligula. Sed id luctus diam. Ut aliquet risus justo, condimentum vulputate leo aliquet et. In eleifend augue leo. \nPellentesque facilisis massa sit amet nulla commodo tincidunt. Duis accumsan laoreet dui, in fringilla dui. Cras lacus elit, cursus et ante tincidunt, molestie fringilla metus. Duis ac maximus metus, et laoreet velit. Nunc sit amet aliquam nunc. Pellentesque finibus condimentum neque et scelerisque. Phasellus vel maximus diam. Vivamus augue nibh, molestie in est at, varius fringilla purus. Cras scelerisque metus sit amet nibh mollis, eu ornare metus pretium. Nunc vitae placerat nisl. Nullam varius ultrices metus non condimentum. Duis eu metus vehicula, lacinia neque sit amet, molestie odio. Proin pharetra feugiat eros, non rhoncus sem placerat nec. Fusce a ligula ullamcorper, vulputate dui id, tempor nunc. Cras mollis, dui id faucibus pellentesque, enim dolor faucibus turpis, eget hendrerit metus justo eget tortor. Integer aliquam, enim ut dignissim facilisis, dolor urna aliquam ante, vel hendrerit enim risus vitae dolor. \nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse non interdum tortor. Pellentesque at quam in urna sagittis euismod sit amet vel enim. Phasellus cursus, ipsum sed lobortis imperdiet, lectus purus dictum mauris, at imperdiet lectus nisi nec libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean consectetur, magna vitae accumsan egestas, arcu est fermentum arcu, a ultrices ligula neque et libero. In hac habitasse platea dictumst. Etiam auctor efficitur libero fringilla mattis. Sed vitae nunc laoreet tortor varius lobortis a ac lorem. In id velit tincidunt, pulvinar ante vitae, varius mi. Etiam commodo lacus quis sapien sagittis ornare. Maecenas eget ultricies nisl. Curabitur nec felis orci. Praesent ac fringilla massa. Pellentesque eu ultricies augue, sed gravida tellus. Praesent eu lacus et lorem vehicula volutpat sit amet et diam.";

var words = lorem.split(' ').length;
console.log("The lorem has " + words + " words in it.");

var reEt = /\b(et)\b/gi; // regular expresion to find any individual word, in this case: et
// reEt explanation = \b: word boundary; (et): group of characters; g: global search; i: case insensitive

var et = lorem.match(reEt).length;
console.log("The number of times the word et is included in the text is: " + et);
