//Names and Input
console.log("I'm ready");

var hacker1 = "Diane";
console.log("The driver's name is " + hacker1);

//Conditionals
var hacker2 = prompt("what is the name of the navigator?");
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops
var str = "";
for (var i = 0; i < hacker1.length; i++) {
  str +=hacker1[i].toUpperCase() + " ";
}
console.log(str);

var str = hacker2;
var strReverse = str.split("").reverse().join("");
console.log(strReverse);

var strCompare = [hacker1, hacker2];
strCompare.sort();

if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker2 < hacker1) {
  console.log("The navigator's name goes first.");
} else {
  console.log("What?! You both got the same name?");
}

//Bonus Time!
var palindrome = prompt("What is the first expression?");
var strPalindrome = str.split("").reverse().join("");
strCompare.sort()

if (palindrome = strPalindrome) {
  console.log("This is a palindrome.");
} else {
  console.log("This is not a palindrome.");
}

// Lorem ipsum generator
var lorem = ("Nulla porttitor eros in ante sagittis bibendum sed molestie purus. Donec elementum, quam ut euismod suscipit, turpis lorem pretium odio, nec maximus nunc odio eget nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eu sodales diam, sit amet gravida justo. Morbi vitae metus quis nisi ornare rutrum. Aenean vel augue dignissim tortor malesuada scelerisque ut quis dolor. Vivamus posuere commodo egestas. Vestibulum efficitur molestie lorem, ut fringilla ipsum luctus at. Mauris commodo mauris sed iaculis dignissim. Vivamus hendrerit sapien ut tellus lacinia, et molestie ipsum semper. Vivamus tristique ante quis dictum finibus. Vivamus interdum metus magna, quis pellentesque tortor pellentesque id. Suspendisse tristique lorem orci, id efficitur nibh aliquam efficitur.\n Aliquam non convallis turpis. Ut hendrerit lorem sed elit suscipit aliquam. Maecenas tempus mauris at sodales aliquam. Cras metus erat, varius nec leo ut, molestie sollicitudin mi. Sed fringilla cursus magna, ut elementum sem finibus nec. Cras justo turpis, tristique ut ligula eget, imperdiet imperdiet leo. Donec dignissim rhoncus malesuada. Nullam porta turpis nisl, euismod aliquam dui mollis nec.\n Aenean hendrerit interdum consectetur. Nulla at libero auctor leo porta maximus. Morbi efficitur auctor nisl eget eleifend. Nullam ultrices efficitur nunc, vitae elementum ligula tristique et. Duis auctor elementum vestibulum. Fusce lobortis sapien sed dolor varius condimentum. Nullam dapibus diam ut ligula imperdiet scelerisque. Pellentesque cursus rutrum sem nec bibendum. Proin non tellus a lacus efficitur venenatis.");

function wordCount(lorem) {
  return lorem.split(" ").length;
}
console.log(wordCount(lorem));

console.log(lorem.indexOf(" et "));