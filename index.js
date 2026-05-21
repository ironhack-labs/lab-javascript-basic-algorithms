// Iteration 1: Names and Input
let hacker1 = "Revan";
let hacker2 = "Asiman";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

const printLongName = (hacker1, hacker2) => {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters`
    );
  } else if (hacker2.length > hacker1.length) {
    console.log(
      `It looks like the navigator has the longest name, it has ${hacker2.length} characters`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  }
};

printLongName(hacker1, hacker2);

let driverName = "";
let upperName = hacker1.toUpperCase();

for (let i = 0; i < hacker1.length; i++) {
  driverName += upperName[i] + " ";
}

console.log(driverName);


let driverNameReverse = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  driverNameReverse += hacker1[i];
}

console.log(driverNameReverse);

if (hacker1 > hacker2) {
  console.log("The driver's name will be first.");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log(" wow You both have the same name?");
}
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor.

Pellentesque eleifend consectetur adipiscing elit. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla.

Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce eleifend neque sit amet erat. Donec nibh dictum, lacinia et, suscipit non, semper a, orci. Cras purus velit, congue a, elementum et, posuere ac, nulla. Fusce elit. Morbi et massa sit amet velit rutrum placerat. Quisque condimentum pede. Donec bibendum pellentesque ipsum. Pellentesque imperdiet pede nec felis. Phasellus at lacus.`;

let word = "";
let arr = [];
let j = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] != " ") {
    word += longText[i];
  } else if (longText[i] == " ") {
    arr[j] = word;
    word = "";
    j++;
  }
}

if (word !== "") {
  arr[j] = word;
}

let etCount = 0;

for (let k = 0; k < arr.length; k++) {
  let currentWord = arr[k];

  if (
    currentWord === "et" ||
    currentWord === "et," ||
    currentWord === "et."
  ) {
    etCount++;
  }
}

console.log(arr.length);
console.log(etCount);

let phraseToCheck = "A man, a plan, a canal, Panama!";
let fullWord = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] != " " &&
    phraseToCheck[i] != "!" &&
    phraseToCheck[i] != "," &&
    phraseToCheck[i] != "."
  ) {
    fullWord += phraseToCheck[i].toLowerCase();
  }
}

let reverseFullWord = "";

for (let i = fullWord.length - 1; i >= 0; i--) {
  reverseFullWord += fullWord[i];
}

if (reverseFullWord === fullWord) {
  console.log("This is a palindrome");
} else {
  console.log("This is not a palindrome");
}