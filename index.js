// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops

console.log("Im ready!");

//1.1 && 1.2
const hacker1 = "Joao";

console.log(`The driver's name is ${hacker1}`);

//1.3 && 1.4
const hacker2 = "Pedro";
console.log(`The navigator's name is ${hacker2}`);

//2.1
const lengthHacker1 = hacker1.length;
const lengthHacker2 = hacker2.length;

console.log(lengthHacker1);
console.log(lengthHacker2);

if (lengthHacker1 > lengthHacker2) {
  console.log(
    "The driver has the longest name, it has " + lengthHacker1 + " characters"
  );
} else if (lengthHacker1 < lengthHacker2) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      lengthHacker2 +
      " characters"
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${lengthHacker1} characters!`
  );
}

//3.1
let nameSpaces = "";
for (let i = 0; i < lengthHacker1; i++) {
  if (i === lengthHacker1 - 1) {
    nameSpaces += hacker1[i].toUpperCase();
  } else {
    nameSpaces += hacker1[i].toUpperCase() + " ";
  }
}
console.log(nameSpaces);

//3.2
let nameInverter = "";
for (let i = lengthHacker2 - 1; i >= 0; i--) {
  nameInverter += hacker2[i];
}
console.log(nameInverter);

//3.3
if (hacker1[0] > hacker2[0]) {
  console.log("The driver's name goes first");
} else if (hacker1[0] < hacker2[0]) {
  console.log("Yo, the navigator goes first, definitely");
} else {
  console.log("What?! You both have the same name?");
}
//bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta, sem porta tempus feugiat, mi ex vehicula augue, eu gravida sem nisl vitae dolor. Sed vestibulum venenatis mi eget imperdiet. In condimentum quam ut ex finibus scelerisque. Aenean mi lectus, accumsan a ipsum et, condimentum egestas neque. In ultrices rutrum turpis, non euismod tortor rhoncus ac. Nullam imperdiet varius enim id scelerisque. Nunc vitae nulla vitae dui scelerisque accumsan quis finibus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vestibulum ultrices purus, sed consequat arcu finibus eu. Donec ultricies ligula diam. Duis ut mollis lorem. Integer maximus felis at tristique viverra. Donec eros ante, mattis sit amet accumsan non, rutrum nec leo. Nulla consequat luctus dapibus. Mauris non tortor semper, vestibulum risus vitae, pellentesque orci. Phasellus consequat interdum libero at malesuada. Nunc et dolor nisi. In hendrerit elit eu augue tincidunt, in venenatis ipsum dignissim. Suspendisse egestas neque neque, sed dictum lectus mollis vel. Praesent quis cursus lacus, et cursus turpis. Fusce in suscipit tellus, quis iaculis enim. Maecenas iaculis tempus nunc vitae pharetra. Maecenas fringilla ipsum magna, ut elementum tortor facilisis eget. Fusce ac maximus tellus, at mattis urna. Mauris sit amet interdum justo. Proin fermentum quam varius dapibus interdum. Pellentesque ultrices massa ipsum, vitae faucibus ligula molestie vel. In cursus velit vitae gravida blandit. Nam mattis rhoncus dolor eget euismod. Duis eu tellus risus. Nullam interdum urna nec ornare condimentum. Quisque eleifend magna nec arcu suscipit, at dignissim neque interdum.`;

let wordCount = 1;
for (i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  }
  if (longText[i] === 0) {
    wordCount = 0;
  }
}
console.log(wordCount);
//bonus 1.3

let etCount = 0;
for (i = 0; i < longText.length; i++) {
  if (
    longText[i] === " " &&
    longText[i + 1] === "e" &&
    longText[i + 2] === "t" &&
    (longText[i + 3] === " " || longText[i + 3] === ",")
  ) {
    etCount++;
  }
}
console.log(etCount);
