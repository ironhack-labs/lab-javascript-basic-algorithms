let hacker = "arara";
let hacker2 = "amanda";
if (hacker.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker.length + " characters!"
  );
} else if (hacker.length < hacker2.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters!"
  );
} else {
  console.log(
    "wow, you both got equally long names, " + hacker.length + " characters!"
  );
}
let space = " ";
let newHacker = "";
for (let i = 0; i < hacker.length; i++) {
  if (i == hacker.length - 1) {
    newHacker += hacker.charAt(i);
  } else {
    newHacker += hacker.charAt(i) + space;
  }
}
console.log(newHacker.toUpperCase());
let palindrome = hacker
  .split("")
  .reverse()
  .join("");
  console.log(palindrome);
if (palindrome === hacker) {
  console.log("the word is palindrome.");
} else {
  console.log("the word is not palindrome!");
}

let order = hacker.localeCompare(hacker2);
if (order < 0) {
  console.log("The drivers name goes first");
} else if (order > 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
let lorenIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget blandit lacus, nec porttitor tortor. Morbi blandit quam vitae orci pretium dapibus. Donec pellentesque lacus eu dui porta, quis feugiat mauris faucibus. Ut euismod mauris id ipsum congue condimentum. Sed ligula eros, pretium vel blandit eget, molestie vel purus. Nam lacinia felis tortor, nec commodo purus mattis a. Proin dapibus elit sapien, in egestas mauris elementum vitae. Mauris risus odio, eleifend at finibus id, hendrerit nec justo. Proin nec risus non enim placerat pellentesque id vel nibh. Quisque at tortor eros. Curabitur auctor pellentesque dui, sed accumsan dui feugiat sed'


function wordCount(str) {
  return str.split(" ").length;
}
console.log(wordCount(lorenIpsum));// chamando funcao com argumento
console.log(hacker.split()); // mostra em array

function specificWordCount(str, word){
  let count = 0;
  let array = str.split(' ')
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if ( element == word ) {
      count += 1;
    }
  }
  return count;
}
console.log(specificWordCount(lorenIpsum, 'id'));

sum = function(a,b) {
  return a+b;
}

console.log(sum(1,2));