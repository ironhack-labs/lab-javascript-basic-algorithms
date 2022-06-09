// Iteration 1: Names and Input
let hacker1 = "Carlos";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = `Tim`;
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
  console.log(`wow you both have long names, ${hacker2.length}`);
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}
// Iteration 3: Loops
//  Printing Capitals and with space between
let loop = "";
for (let i = 0; i < hacker1.length; i++) {
  loop += hacker1[i].toUpperCase() + " ";
}
console.log(loop);
// Printing backwards
let reverse = "";
for (let i = hacker1.length; i > 0; i -= 1) {
  reverse += hacker1[i - 1];
}
console.log(reverse);
// Lexicographic Order compare
let compare = hacker1.localeCompare(hacker2);
// console.log(compare)
switch (compare) {
  case -1:
    console.log(`The driver's name goes first.`);
    break;
  case 1:
    console.log(`Yo, the navigator goes first definitely.`);
  default:
    console.log(`What?! You both have the same name?`);
}
// BONUS 1
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo quis quam congue feugiat a sit amet nunc. Sed fermentum hendrerit felis, quis cursus erat semper a. Curabitur non sapien euismod, fringilla mauris at, aliquet nunc. Curabitur in tempus lorem, sed pellentesque lorem. Nullam finibus metus nec rutrum consequat. Etiam sit amet nisl nec velit condimentum ullamcorper. Aliquam maximus pellentesque urna vehicula pretium. Nulla facilisi. Curabitur quis tempus lacus, ac lacinia arcu. Cras dui dui, vehicula ac consequat eu, feugiat eu diam. Aenean urna arcu, euismod sit amet pretium vitae, placerat eget elit. Ut ut ex a justo vehicula fermentum condimentum non diam. Curabitur tristique, purus vel hendrerit feugiat, nulla nisl gravida lectus, ut accumsan ligula quam ut tortor. Duis quis varius diam. Donec ullamcorper elit in dolor consectetur, sed commodo erat placerat.
 Maecenas sodales sed mauris vel sodales. Sed quis nisl a nisl euismod accumsan vitae sed nisl. Praesent mi mauris, efficitur eget condimentum a, fringilla at urna. Praesent elementum eleifend lobortis. Maecenas sed felis laoreet, facilisis velit ut, rutrum purus. Fusce rutrum tincidunt urna, eu pellentesque tellus feugiat in. Phasellus a hendrerit magna. Maecenas eu interdum enim, at ullamcorper orci. Etiam a faucibus leo, vitae efficitur justo. Mauris id viverra felis. In faucibus porta nibh sed aliquet. Praesent hendrerit consectetur lorem ac faucibus. Ut tempor lectus eu massa interdum, vel pharetra purus scelerisque.
 Suspendisse mattis mi non est pulvinar, nec rutrum ante ornare. Phasellus elementum semper erat nec bibendum. Mauris sit amet metus urna. Suspendisse at metus nisl. Nulla sed ante non nibh eleifend tempor. Nunc consectetur justo ac dui congue varius. Vivamus orci nisl, dignissim id iaculis quis, consectetur quis neque. Suspendisse sit amet ante nibh. Ut rhoncus mauris eu ex efficitur egestas. Sed ac ipsum maximus, tempus enim non, tempus metus. Nunc convallis metus purus, eu pretium nibh eleifend eget. Suspendisse sed nisi feugiat, ullamcorper massa sed, feugiat leo. In lacinia ante in lectus placerat consectetur.`;
// let threewords = `Hello Hello Hello Hello`
let words = 1;
let latin = 0;
for (let i = 0; i <= paragraph.length; i++) {
  if (paragraph[i] == " ") {
    words++;
  } else if (paragraph[i] === "e" && paragraph[i + 1] === "t") {
    latin++;
  }
}
console.log(words, latin);
// BONUS 3
let phraseToCheck = "stack cats";
// Creating two variables with the Initial phrase with no spaces ' ' forwards and backwards respectively
let checknospace = "";
let reverse2 = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] != " ") {
    checknospace += phraseToCheck[i];
  }
}
for (let i = phraseToCheck.length; i > 0; i -= 1) {
  if (phraseToCheck[i - 1] != " ") {
    reverse2 += phraseToCheck[i - 1];
  }
}
console.log(phraseToCheck, checknospace, reverse2);
// Checking to see if the two phrases are idential with a strict equality which will return a console.log based on the boolean value in the if statement
if (checknospace === reverse2) {
  console.log(`The phrase ${phraseToCheck} is a Palindrome!`);
} else {
  console.log(`The phrase ${phraseToCheck} is not a Palindrome!`);
}
