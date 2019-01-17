//Names and Input
var hacker1 = "Tomas";

console.log('The driver\'s name is', hacker1);

var hacker2 = prompt('What\'s the navigator\'s name?');

console.log('The navigator\'s name is', hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has', hacker1.length, 'characters');
} else if (hacker1.length < hacker2.length) {
  console.log('Yo, navigator got the longest name, it has', hacker2.length, 'characters');
} else {
  console.log('wow, you both got equally long names,', hacker1.length, 'characters!!');
}
//Loops
var s = "";
for (var i = 0; i < hacker1.length; i++) {
  s += hacker1[i] + " ";
}
console.log(s.toUpperCase());

var z = "";
for (var v = hacker2.length-1; v <= hacker2.length && v >= 0; v--) {
  z += hacker2[v] + " ";
}
console.log(z);

// Lorem ipsum generator
