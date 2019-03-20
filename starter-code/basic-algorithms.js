// // Names and Input
var hacker1 = "Stalone";
var hacker2 = prompt("What's the navigator name?");
console.log("the driver's name is " + hacker1);
console.log("the navigator name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else if (hacker1.length === hacker2.length) {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!")
}

//Solution without loop for the string manipulation

// var capitalize = hacker1.split('').join(' ').toUpperCase();
// console.log(capitalize);

// function reverseString(str) {
//   str = str.split("").reverse().join("");
//   return str;
// }

// console.log(reverseString(hacker2));


//Solution with Loops
var hacker1String = '';
for (var i = 0; i < hacker1.length; i++) {
  hacker1String = hacker1String + ' ' + hacker1[i];
  hacker1String = hacker1String.toUpperCase();
}
console.log(hacker1String);

var hacker1Reverse = '';

for (var j = hacker1.length - 1; j >= 0; j--) {
  hacker1Reverse = hacker1Reverse + hacker1[j];
}
console.log(hacker1Reverse);

//Lexicographic compare

if (hacker1.localeCompare(hacker2) === 1) {
  console.log("driver better than navigator")
} else if (hacker2.localeCompare(hacker1) === 1) {
  console.log("navigator better than driver");
} else if (hacker2.localeCompare(hacker1) === 0 && hacker2.localeCompare(hacker1) === 0) {
  console.log("wow, you both got equally long names, XX characters!!");
}



Palindrome
function isPalindrome() {
  str = prompt("say something ?");
  str = str.replace(/[., \/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
  console.log(str)
  var reversestr = str.split("").reverse().join("");
  console.log(reversestr)
  if (str == reversestr) {
    console.log("yeah")
  } else {
    console.log("hell no");
  }
}

isPalindrome();

// Lorem ipsum generator
var lorem = "Aenean a eros nec felis mollis sollicitudin. Praesent nunc nibh, dictum eu velit in, pretium sodales mauris. Praesent vel felis accumsan, vestibulum lacus efficitur, efficitur lacus. Praesent non ante pellentesque, tincidunt risus vitae, consectetur dolor. Etiam ultricies nulla non mauris placerat tincidunt. Curabitur non orci sed augue varius ultricies quis eget justo. Nunc tincidunt dignissim nisl at pellentesque. In hac habitasse platea dictumst. Vestibulum vehicula libero quis tristique dignissim. Sed vel odio quis leo pharetra placerat. Quisque nec felis in orci mollis lobortis. Morbi convallis elit imperdiet rutrum consectetur. In massa nisi, posuere at odio nec, bibendum lobortis diam. Duis magna libero, varius id justo vel, varius interdum orci. In finibus feugiat risus non feugiat. Aliquam eget libero eu turpis venenatis tempus laoreet a turpis. Pellentesque ultricies nec enim bibendum venenatis. Nam convallis tempus est eget tempus. orem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut sem et sapien fermentum mollis vitae eu massa. Ut laoreet dignissim est, nec tincidunt lorem ornare vel. Mauris quis commodo metus. Ut vel lacus non ligula condimentum auctor et eget ex. Sed semper elit ac libero gravida rutrum. Donec hendrerit pulvinar sapien, in congue velit mollis iaculis. Nulla porta fringilla odio, ac pellentesque elit convallis ac. Nullam et placerat purus. Quisque diam sem, fringilla nec consequat nec, luctus quis nisl. Nulla nec rhoncus mauris. Sed rhoncus nisl quis posuere cursus. Proin at dolor ut turpis aliquam interdum a a nunc. Nunc et mauris eget lacus interdum maximus eu et neque. Donec ac dui tincidunt, dictum justo eget, rhoncus arcu. Vivamus consectetur mollis tincidunt.";
console.log(lorem);
var loremWords = lorem.split(" ");
console.log(loremWords.length)

var count = 0; 
for (var i = 0; i < loremWords.length; i++) {
  if (loremWords[i] === "et") {
    count += 1
  }
}
console.log(count);