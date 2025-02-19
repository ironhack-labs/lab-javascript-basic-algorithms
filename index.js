// Iteration 1: Names and Input
const hacker1 = "John";
const hacker2 = "Helen";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let capDriverName = "";

for (let i = 0; i < hacker1.length; i++) {
  capDriverName += hacker1[i].toUpperCase();
  capDriverName += " ";
}
capDriverName = capDriverName.trim();
console.log(capDriverName);

let reverseNav = "";

for (let j = 1; j <= hacker2.length; j++) {
  reverseNav += hacker2[hacker2.length - j];
}
console.log(reverseNav);

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1
// Word Count

const longText = `Lorem et ipsum dolor sit amet, consectetur et adipiscing elit. Donec eu leo posuere mi aliquet mollis ac eu nisi. Vivamus dui velit, porta sodales lobortis non, pharetra sed dolor. Fusce sit amet pretium urna. Nam imperdiet, odio fermentum rutrum rutrum, leo ex sagittis purus, vel condimentum arcu orci ac nulla. Duis a arcu nec quam ornare elementum ut ut neque. Maecenas eget dapibus urna. Duis a tortor a risus vehicula mattis non non tortor. Maecenas facilisis turpis sit amet enim feugiat vehicula. Pellentesque id molestie dui. Nullam vehicula pretium lectus, vitae tincidunt enim tristique sed. Duis semper nulla purus, ac molestie magna vulputate a. Praesent in turpis condimentum, ullamcorper elit ut, maximus nisi. Duis at tellus fermentum, sodales tortor ut, lacinia nisi. Donec velit erat, aliquet id lacus ac, aliquam dapibus arcu. Duis tincidunt turpis eget elementum semper. Aliquam imperdiet in augue ut tempor. Sed nec est tellus. Integer ut mi nisi. Mauris sit amet libero elit. Ut accumsan, risus vel facilisis gravida, orci justo vestibulum magna, venenatis lobortis sem orci a odio. Nulla eget feugiat leo. Phasellus dictum viverra scelerisque. Suspendisse potenti. In id rutrum felis, ut tristique tellus. Nulla tempus, lectus nec pharetra finibus, augue odio facilisis felis, a varius velit tellus sed nunc. Nulla sit amet dolor auctor, maximus erat ut, mattis justo. In finibus blandit semper. Proin nec justo justo. In congue venenatis hendrerit. Phasellus libero dui, molestie placerat egestas eu, sodales sed lacus. Maecenas feugiat risus id urna euismod, vel auctor sem luctus.`;

let spaceCount = 0;

for (let i = 0; i <= longText.length; i++) {
  if (longText[i] === " ") {
    spaceCount++;
  }
}
let wordCount = spaceCount + 1;
console.log(wordCount);

// Et count

let etCount = "";

for (let i = 0; i < longText.length; i++) {
  if (
    longText[i - 1] === " " &&
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    longText[i + 2] === " "
  ) {
    etCount++;
  } else if (
    longText[i - 1] === " " &&
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    longText[i + 2] === ","
  ) {
    etCount++;
  } else if (
    longText[i - 1] === " " &&
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    longText[i + 2] === "."
  ) {
    etCount++;
  }
}

console.log(etCount);
