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

let cleanPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  // only add characters between "A" and "z"
  if (phraseToCheck[i] >= "A" && phraseToCheck[i] <= "z") {
    cleanPhrase = cleanPhrase + phraseToCheck[i];
  }
}
/* EXAMPLES */

const user = { name: "Nick", id: 7 };
user.name = "Dani";
user.id = 22;
const user2 = { name: "Nick5", id: 98 };
//console.log(user)

const book1 = {
  title: "The Catcher in the Rye",
  author: "J.D Salinger",
  isbn: "0316769487",
  category: "Classic Literature",
};
const book2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "0446310786",
  category: "Classic Literature",
};
const book3 = {
  title: "El Leon",
  author: "Joseph Kessel",
  isbn: "0446310782",
  category: "Classic Literature",
};

user.books = [book1, book2];
//console.log(user)
user2.books = [book3];

const library = [];
let arrayLibraryLength = library.length;

library[arrayLibraryLength] = user;
//console.log(library[0])

arrayLibraryLength = library.length;

library[arrayLibraryLength] = user2;
//console.log(library)

let arrayLength = library[0].books.length;
//console.log(arrayLength);
library[0].books[arrayLength] = book3;
//console.log(library.user)
//console.log(library)

for (let user of library) {
  console.log("\n");
  console.log(`${user.name} books:\n`);
  for (let book of user.books) {
    console.log(`- ${book.title}, ${book.author}`);
  }
}
