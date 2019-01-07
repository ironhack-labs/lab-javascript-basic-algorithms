console.log("I'm Ready!");

// STEP 1

var hacker1 = "Armand";

console.log("The driver's name is ",hacker1);

var hacker2 = prompt("What's the navigator's name?");

console.log("The navigator's name is ",hacker2);

// STEP 2

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has ",hacker1.length," characters");
}
else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has ",hacker2.length," characters");
}
else {
  console.log("wow, you both got equally long names, ",hacker1.length," characters!!");
} 

//STEP 3

var extendedName = "";
for (var i = 0; i < hacker1.length; i++) {
  extendedName += hacker1[i].toUpperCase() + " ";
}
console.log("The driver's name is ",extendedName);

var reversedName = "";
for (var i = hacker2.length-1; i >=0 ; i--) {
  reversedName += hacker2[i];
}
console.log("The navigator's name is ",reversedName);

// version using method .reverse() for arrays

var arr2 = [];
var revArr2 = [];

for (var i = 0; i < hacker2.length; i++) {
  arr2.push(hacker2[i]);
  console.log(arr2);
}
revArr2 = arr2.reverse();
console.log(revArr2);

var reversedName2 = "";
for (var i = 0; i < hacker2.length; i++) {
  reversedName2 += revArr2[i];
}
console.log(reversedName2);

// version NOT using method .reverse()
var reversedName2 = "";
for (var i = hacker2.length-1; i >=0 ; i--) {
  reversedName += hacker2[i];
}
console.log("The navigator's name is ",reversedName);
*/

// STEP 4

var minus1 = hacker1.toLowerCase();
var minus2 = hacker2.toLowerCase();
var n = minus1.localeCompare(minus2);
console.log(n);

if (n === -1) {
  console.log("The driver's name goes first");
}
else if (n === 1) {
  console.log("Yo, the navigator goes first definitely");
}
else if (n === 0) {
  console.log("What?! You both got the same name?");
}


// STEP 5

var normal = prompt("What word do you want to check if is a palindrome?").toLowerCase();

var reverse = "";
for (var i = normal.length-1; i >=0 ; i--) {
  reverse += normal[i];
}

var m = normal.localeCompare(reverse);
if (m === 0) {
  console.log("Palindrome YES!");
}
else {
  console.log("Palindrome NO!");
}
*/

// STEP 6

var text = "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."

console.log(text);

var mots = 0;

for (var i = 0; i < text.length; i++) {
  if ( text[i] === " " && !(text[i-1] === " ") ) {
    mots++;
  }
}
console.log(mots+1);

var nbEt = (text.match(/et/g) || []).length;

console.log();