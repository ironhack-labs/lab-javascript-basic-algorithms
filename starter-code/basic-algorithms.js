// Names and Input
var hacker1 = "Tania"
console.log("The driver's name is " + hacker1);
var hacker2 = "Anaiso"
console.log("The navigator's name is " + hacker2);


//Conditionals

if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length);
} else if (hacker1.length < hacker2.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length);
} else if (hacker1.length === hacker2.length) {
  console.log('wow, you both got equally long names, ' + hacker1.length);
}


console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker2.split("").reverse().join(""));

if (hacker1 === hacker2) {
  console.log('Names are identical')
} else if (hacker1 < hacker2) {
  console.log(hacker1 + ' goes first')
} else {
  console.log(hacker2 + ' goes first')
}

var newString = window.prompt();
newString = newString.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
console.log(newString);
var newStringReversed = newString.split("").reverse().join("");

if (newString === newStringReversed) {
  console.log('You just wrote a palindrome!')
} else {
  console.log('Nah');
}
// Lorem ipsum generator
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
var loremIpsumLength = loremIpsum.split(" ").length;
console.log(loremIpsumLength);

var times = loremIpsum.match(/ et[^a-z]/g).length;
console.log(times);







