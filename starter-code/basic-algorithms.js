//// Names and Input

var hacker1 = 'an';
var hacker2 = 'nna';
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

//// Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//// Loops

//1
let newName = '';
for (var i = 0; i < hacker2.length; i++) {
  newName = newName + hacker2.toUpperCase()[i] + '\t';
}
console.log(newName.concat());

//2
function reverse(str) {
  return str.split('').reverse().join('');
}
var result = reverse(hacker1);
console.log(result);

//3
if (hacker2.localeCompare(hacker1) === 1) {
  console.log('Yo, the navigator goes first definitely');
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log("The driver's name goes first");
} else {
  console.log('What?! You both got the same name?')
}

//// Palindrome

var newStr = prompt('Say something cool');

if (newStr.toLowerCase() === reverse(newStr)) {
  console.log("You've a Palindrome!");
  console.log(reverse(newStr));
} else {
  console.log('Not enough cool!!');
}

//// Lorem ipsum generator

var loremIpsum = 'Ut id mollis ligula. Maecenas ullamcorper mollis orci et ultrices. Mauris sed felis purus. Maecenas sit amet dapibus nulla. Vivamus nisi nibh, viverra faucibus vestibulum in, eleifend sed ante. In accumsan imperdiet felis, sit amet sodales ligula semper sed. Nullam consequat orci ipsum, vitae elementum odio tristique nec. Sed sodales non massa vel dignissim. Pellentesque libero ante, efficitur vel efficitur quis, convallis sed libero. Praesent eleifend tristique neque, vitae egestas nisi. Donec et leo neque. Nulla id pellentesque justo.\n Quisque vitae suscipit magna, sed vestibulum arcu.Sed sed sollicitudin sem.Donec sit amet nunc blandit, luctus velit sit amet, convallis augue.Ut vel ante ac mauris auctor aliquet vel et lectus.Nunc varius ligula et pulvinar facilisis.Cras auctor, dui non porttitor commodo, augue felis varius arcu, sit amet pulvinar odio nibh eget leo.Curabitur vitae purus ac velit egestas vehicula sagittis in est.Vivamus placerat sem vitae commodo sodales.Vivamus eleifend, urna vitae convallis rhoncus, ipsum elit volutpat lectus, sed ultricies ligula ipsum nec mi.Suspendisse eu tellus ac elit varius vestibulum.Aenean eget vestibulum elit.In non nibh pretium, pulvinar massa iaculis, finibus diam.Sed hendrerit fringilla cursus.Cras lacus ligula, vulputate ac efficitur blandit, porttitor sit amet mauris.Nullam pulvinar pellentesque sodales.\n Integer a commodo ligula, eu sagittis orci.Curabitur convallis justo vel risus fermentum, at maximus metus rhoncus.Etiam in iaculis arcu, non dictum urna.In auctor odio quis fermentum bibendum.Proin quis ex ut felis blandit consectetur nec sed lectus.Donec laoreet augue et ex sollicitudin scelerisque.Nunc sagittis est laoreet, convallis nunc non, auctor lectus.Vivamus at tortor lacinia, tempus velit in , ornare elit.Vivamus lobortis quam nec lorem ornare vulputate eget at erat.Quisque elementum sapien euismod, sodales nisi tristique, pulvinar odio.'

var cleaned = loremIpsum.replace(/\s/g, "");
console.log(cleaned.length);
console.log(cleaned);

let matches = 0;
for (i = 0; i < loremIpsum.length; i++) {
  loremIpsum.match(/['et']/gi);
  matches++;
}
console.log(matches);