// Iteration 1: Names and Input
let hacker1 = 'Alex';
console.log("The driver's name is", hacker1);
let hacker2 = 'Paul';
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let driverCapitals = '';
for (i = 0; i < hacker1.length; i++){
  driverCapitals += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1){
    driverCapitals += ' ';
  }
}
console.log(driverCapitals);

let navigatorReverse = '';
for (i = hacker2.length - 1; i >= 0; i--){
  navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);

if (hacker1 < hacker2){
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis varius neque non tristique. Curabitur leo dolor, commodo vitae finibus ac, pellentesque et lacus. Nam nec pharetra turpis, non aliquam ex. Curabitur nec ante velit. Vestibulum ut iaculis dolor, vitae ullamcorper nulla. Phasellus sit amet porta orci. Vivamus id purus feugiat, iaculis urna non, elementum felis. Sed faucibus enim sit amet felis iaculis, in rhoncus dui facilisis. Nam at nibh neque. Nam ante sem, viverra id odio ut, venenatis fermentum mauris. Fusce sem felis, rhoncus at lectus vel, tincidunt efficitur quam. Quisque gravida leo vitae dolor mollis consectetur. Sed cursus fringilla ligula in auctor. Nulla bibendum iaculis faucibus. Donec feugiat turpis quis augue elementum, cursus placerat libero fringilla. Suspendisse nisi sem, gravida ac velit at, placerat posuere nunc. Sed finibus cursus lacus, at tempor odio efficitur non. Donec laoreet justo at magna facilisis pretium. Aliquam dolor dui, auctor sed turpis a, elementum convallis magna. Phasellus vitae varius tellus. Sed nisl felis, dignissim quis accumsan in, feugiat tempus ex. Aliquam in sem risus. Sed sed vestibulum ex. Nam arcu magna, pellentesque sit amet augue vel, sollicitudin maximus mi. Donec quis blandit quam, nec feugiat nunc. Sed blandit bibendum nisl nec bibendum. Duis sagittis ante sed pharetra tristique. Etiam sagittis felis ut sapien faucibus bibendum. Nulla ornare, est vitae sollicitudin gravida, sapien nibh dignissim sem, sit amet porttitor dolor risus a elit. Donec non justo libero. Morbi eget elementum velit. Phasellus ac odio vehicula, cursus orci eu, dictum mi. Sed at leo ac elit feugiat ultricies quis nec justo. Nulla dignissim dolor eu ante dictum dignissim. Cras dictum neque ut diam fermentum semper. Nam ut ipsum vehicula, laoreet mauris sit amet, dictum diam. Etiam porttitor orci odio, ac ullamcorper augue molestie a."

console.log(`The text have ${loremText.split(' ').length} words`);

let etRegExp = /(\Wet\W)/gi;
console.log(`The word 'et' appears ${loremText.match(etRegExp).length} times`);

// Bonus 2
let text = prompt('Write a text to check if it is a palindrome');
let letters = text.match(/\w/gi).join('').toLowerCase();
let part1 = letters.slice(0, Math.ceil(letters.length / 2));
let part2 = letters.slice(Math.floor(letters.length / 2), letters.length);

if (part1 === part2.split('').reverse().join('')){
  console.log("It's a palindrome! 😀");
} else {
  console.log("Sorry, it's NOT a palindrome 🙁");
}