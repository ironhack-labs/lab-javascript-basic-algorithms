// import { loremIpsum } from "lorem-ipsum";

console.log("I'm ready!");

let hacker1 = "Daniela T";
let hacker2 = "Daniela T";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}
let newName = "";
for (i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].slice().toUpperCase() + " ";
}
console.log(newName);
// for (value of hacker1) {
//   console.log(value.toUpperCase().join(" "));
// This aproach Doesnt work. join() has nothing to join.

let secondName = "";
for (i = hacker1.length - 1; i >= 0; i--) {
  secondName += hacker1[i].slice();
}
console.log(secondName);

// let theAnswer = [hacker1, hacker2];
// if (theAnswer.sort() === hacker1 && theAnswer.sort() === hacker2) {
//   console.log(`What?! You both have the same name?`);
// } else if (theAnswer.sort() === hacker2) {
//   console.log(`Yo, the navigator goes first definitely.`);
// } else {
//   console.log(`The driver's name goes first.`);
// }

// I have no clue what I did before, any way doesn't works, returns "The driver name goes first"

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// let lorem1 = loremIpsum(); // generates one sentence
// console.log(lorem1);

let lorem2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let lorem3 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis orci sed metus elementum ultrices. Donec enim magna, hendrerit vel gravida ac, tincidunt et mauris. Donec sapien nisl, commodo in lectus eu, gravida dictum lorem. Praesent at egestas nisi. Nam id pellentesque velit. Aliquam consectetur augue ante, quis tincidunt magna mollis eu. Quisque vulputate luctus turpis. Proin blandit pharetra eros in egestas. Sed at dui iaculis, luctus lorem eleifend, euismod magna. Praesent vitae tristique felis, eu tristique nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.";
let lorem4 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor dolor metus, eget porta massa gravida ut. Proin et ipsum mollis, consequat lorem a, sagittis neque. Fusce gravida commodo tortor ac ultrices. Quisque sapien nunc, iaculis vel lorem nec, facilisis tincidunt magna. In ut porttitor odio. Proin in nunc id ante lacinia sodales. Donec egestas lacus sed odio consectetur, nec iaculis lacus malesuada. Aliquam aliquet elementum tristique. Mauris pellentesque, mauris nec venenatis sodales, ante enim mollis ex, in elementum est eros at turpis. Sed feugiat scelerisque quam, porttitor aliquam orci consectetur id.";

function countWords(lorem) {
  console.log(lorem.split(" ").length);
}
function countEtWord(lorem) {
  console.log(lorem.split(" ").filter((word) => word === "et").length);
}
countWords(lorem2);
countWords(lorem3);
countWords(lorem4);

countEtWord(lorem2);
countEtWord(lorem3);
countEtWord(lorem4);

let phraseToCheck = "ayay yaya";
let phraseToCheck1 = "I love u";

if (
  phraseToCheck.toLowerCase().trim() ===
  phraseToCheck.toLowerCase().trim().split("").reverse().join("")
) {
  console.log("this phrase is palindrome");
} else {
  console.log("is not");
}
