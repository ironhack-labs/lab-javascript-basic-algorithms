// Iteration 1: Names and Input
const hacker1 = "Ryan";
const hacker2 = "John";
console.log(hacker1);
console.log(hacker2);

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} ${hacker2.length} characters!.`
  );
}

// Iteration 3: Loops

// 3.1
let newVers = hacker1.split("").join(" ").toUpperCase();

console.log(newVers);
// 3.1
let spaceArr = "";
for (let i = 0; i <= hacker1.length - 1; i++) {
  spaceArr += `${hacker1[i].toUpperCase()}${" "}`;
}
console.log(spaceArr);

// 3.2
let newVers2 = hacker2.split("").reverse().join("");
console.log(newVers2);
// 3.2
let newString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newString += hacker2[i];
}
console.log(newString);

// 3.3
const firstStr = "The driver's name goes first.";
const secondStr = "Yo, the navigator goes first, definitely.";
const thirdStr = "What?! You both have the same name?";

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(firstStr);
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log(secondStr);
} else {
  console.log(thirdStr);
}

// Bonus 1
const longText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

let count = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i]) {
    count++;
  }
}
console.log(count);

let counter = 0;
for (let i = 0; i <= longText.length; i++) {
  if (longText[i] === " ") {
    if (longText[i + 1] === "e") {
      if (longText[i + 2] === "t") {
        if (longText[i + 3] === " ") {
          counter++;
        }
      }
    }
  }
}

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";

let str = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  str += phraseToCheck[i];
}
console.log(str);
