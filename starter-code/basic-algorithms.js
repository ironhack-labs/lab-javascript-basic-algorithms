// Names and Input
let hacker1 = "Romulo";
console.log("The driver's name is " + hacker1);
let hacker2 = process.argv[2];
console.log("The navigator's name is " + hacker2);
let stringInit = process.argv[3];
let isPalindrome = "";
let hacker1Size = hacker1.length;
let hacker2Size = hacker2.length;
let drive = "";
let navigator = "";

//Conditionals
if (hacker1Size > hacker2Size) {
  console.log(
    "The Driver has the longest name, it has " + hacker1Size + " character"
  );
} else if (hacker1Size < hacker2Size) {
  console.log(
    "Yo, navigator got the longest name, it has " + hacker2Size + " character"
  );
} else {
  console.log(
    "wow, you both got equally long names" + hacker1Size + " character!!"
  );
}

for (var i = 0; i < hacker1Size; i++) {
  drive += hacker1[i].toUpperCase();
  drive += " ";
}
console.log(drive);

for (var i = hacker2Size - 1; i >= 0; i--) {
  navigator += hacker2[i];
}
console.log(navigator);

let hackersFirstLetter = [];
hackersFirstLetter[0] = hacker1[0];
hackersFirstLetter[1] = hacker2[0];

let hackerSort = hackersFirstLetter.sort();

if (hacker1[0] === hackerSort[0] && hacker1[0] != hacker2[0]) {
  console.log("The driver's name goes first");
} else if (hacker2[0] === hackerSort[0] && hacker1[0] != hacker2[0]) {
  console.log("Yo, navigators's goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
for (var i = 0; i < stringInit.length; i++) {
  if (stringInit[i].charCodeAt() >= 65 && stringInit[i].charCodeAt() <= 90) {
    isPalindrome += stringInit[i];
  } else if (
    stringInit[i].charCodeAt() >= 97 &&
    stringInit[i].charCodeAt() <= 122
  ) {
    isPalindrome += stringInit[i];
  }
}
var tmp = "";
for (var i = isPalindrome.length - 1; i >= 0; i--) {
  tmp += isPalindrome[i];
}
if (tmp.toLowerCase() == isPalindrome.toLowerCase()) {
  console.log(isPalindrome.toLowerCase());
}
// Lorem ipsum generator
let paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lectus eget quam finibus vehicula. Mauris mollis volutpat elit eu aliquam. Aliquam elementum augue lacus, nec interdum urna luctus non. Suspendisse auctor dolor enim, et placerat justo dapibus a. Praesent mi mi, suscipit in tincidunt ac, auctor sed quam. Nunc ut diam vel dui pharetra commodo ac vel turpis. Nulla vitae metus porttitor, laoreet dui in, vulputate dolor. Nulla ut nisl sed libero pretium volutpat. Nam tincidunt libero ligula, eget euismod elit accumsan at.Nulla facilisi. Quisque varius viverra pulvinar. Integer suscipit volutpat consectetur. Donec dapibus nisi elit, sit amet facilisis lectus feugiat at. Morbi sit amet lobortis turpis. Praesent aliquam sed velit eget consequat. Vivamus et elementum orci. Fusce sed tellus lacinia sapien elementum dapibus nec sit amet leo. Donec posuere ipsum nec ligula porttitor suscipit non quis ex. Cras malesuada sagittis mattis. Integer eleifend orci diam, non hendrerit erat tincidunt non. Mauris at dui sit amet nulla viverra porta in ut magna. Aenean pretium molestie sapien, quis venenatis lacus pellentesque quis. Ut tempor quam justo, a cursus leo accumsan vestibulum. Nulla eget mollis lectus, nec facilisis ante. Donec vestibulum enim sed ipsum accumsan, non rhoncus tellus bibendum. Phasellus non tempor sapien, ac ultrices risus. Phasellus et feugiat massa. Nullam placerat tellus lectus, et viverra turpis aliquet at. Quisque et eleifend velit. Curabitur placerat fermentum velit, quis suscipit metus luctus non. Aliquam accumsan rhoncus odio ultrices fringilla. Nam id feugiat metus.";

console.log("Qt de palavras " + paragraph.split(" ").length);

let count = (paragraph.match(/et/g) || []).length;
console.log("Quantidade de et: "+ count);