// Names and Input
var hacker1 = 'Peter'
  console.log('The drivers name is Peter');

var hacker2 = prompt('What is your name?');
  console.log('The navigators name is ' + hacker2)


//Conditionals

if (hacker1.length >= hacker2.length) {
  console.log('The Driver has the longesst name, it has ' + hacker1.length + ' characters.');
}else if (hacker1.length <= hacker2.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters.');
}else if (hacker1.length === hacker2.length) {
  console.log('Wow, you both got equally long names, ' + hacker1.length + ' characters');
}


var b = '';

for (var i = 0; i < hacker1.length; i++) {
  b = (b + ' ' + hacker1[i].toUpperCase());
}
console.log(b);

//console.log(hacker1.toUpperCase().split('');

var d = '';

for (var c = hacker1.length-1; c >= 0; c--) {
  d = (d + hacker1[c]);
}

console.log(d);

/* Step 8, no idea, sorry!
var hackers;

for (var order = 0; order < hackers.length; order++) {
  for (var order2 = 0; order2 < hackers.length; order2++) {
  if (hackers[order] < hackers[order2]) {
    console.log('The drivers name go frist');
  } else if (hackers[order] > hackers[order2]){
    console.log('Yo, the navigator goes first definite');
  } else if (hackers[order] === hackers[order2]) {
    console.log('What You both got the same name');
  }
}
} */

// Lorem ipsum generator