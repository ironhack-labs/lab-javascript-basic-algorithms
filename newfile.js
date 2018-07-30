// Exercise 30. July Helene & Astrid

var hacker = 'Hans';
console.log("The driver's name is " + hacker);

var hacker2 = prompt("What is the navigator\'s name?");
  console.log("The navigator\'s name is " + hacker2);

  if (hacker.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker.length + " characters.");
  } else if (hacker.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");
  } else {
    console.log("wow, you both got equally long names, " + hacker.length + "characters!!");
  }

  var space = '';

  for (i=0; i < hacker.length; i++) {
    space += hacker.charAt(i) + ' ';


  }  console.log(space.toUpperCase());

  var splitString = hacker.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");
   console.log(joinArray);

   if (hacker > hacker2) {
     console.log("The driver's name goes first");
   } else if (hacker < hacker2) {
     console.log("Yo, the navigator goes first definitely.");
   } else {
     console.log("What?! You both got the same name?");
   }




//Bonus: Palindrome

var pali = prompt ("Gimme a string");

var splitPali = pali.split("")

/*.filter(function(el) {
  if(/[a-z][A-Z]/.test(el)) return true
  return false
}); */

var reversePali = splitPali.reverse();
var ipal = reversePali.join("");

if (pali === ipal) {
  console.log("It\'s a palindrome, biatches");
} else {
  console.log("It\'s not a palindrome")
}