console.log("I'm ready");

// Iteration 1: Names and Input

const hacker1 = "Paul";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Michael";

console.log(`The navigator's name is ${hacker2}`);
console.log();

// Iteration 2: Conditionals

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
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
console.log();

// Iteration 3: Loops

// 3.1
let result = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    result += hacker1[i].toUpperCase();
  } else {
    result += hacker1[i].toUpperCase() + " ";
  }
}
console.log("3.1 solution with for loop: ", result);

//  Exercice 3.1 done with methods
console.log(
  "3.1 solution with methods: ",
  hacker1.split("").join(" ").toUpperCase()
);
console.log();

// 3.2
let reverseNameResult = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseNameResult += hacker2[i];
}
console.log("3.2 solution with for loop: ", reverseNameResult);

//  Exercice 3.2 done with methods
console.log(
  "3.2 solution with methods: ",
  hacker2.split("").reverse().join("")
);
console.log();

// 3.3

let shortestName, longestName;
if (hacker1.length < hacker2.length) {
  shortestName = hacker1;
  longestName = hacker2;
} else {
  longestName = hacker1;
  shortestName = hacker2;
}

let message;
for (let i = 0; i < shortestName.length; i++) {
  if (shortestName === hacker1) {
    if (shortestName[i] < longestName[i]) {
      message = "The driver's name goes first.";
      break;
    } else if (shortestName[i] > longestName[i]) {
      message = "The navigator's name goes first.";
      break;
    } else {
      if (shortestName.length !== longestName.length) {
        message = "The driver's name goes first.";
      } else {
        message = "The names are the same.";
      }
    }
  } else {
    if (
      shortestName[i] < longestName[i] ||
      shortestName.length !== longestName.length
    ) {
      message = "The navigator's name goes first.";
      break;
    } else if (shortestName[i] > longestName[i]) {
      message = "The driver's name goes first.";
      break;
    } else {
      if (shortestName.length !== longestName.length) {
        message = "The navigator's name goes first.";
      } else {
        message = "The names are the same.";
      }
    }
  }
}
console.log("3.3 solution with for loop: ", message);

// alternative recursive solution
const compareNames = (name1, name2, i = 0) => {
  if (name1[i] < name2[i] || (!name1[i] && name2[i])) {
    return `${name1} goes first`;
  }
  if (name1[i] > name2[i] || (name1[i] && !name2[i])) {
    return `${name2} goes first`;
  }
  if (!name1[i] && !name2[i]) {
    return "The names are the same.";
  }
  if (name1[i] === name2[i]) {
    return compareNames(name1, name2, i + 1);
  }
};
const newMessage = compareNames(hacker1, hacker2);
console.log("3.3 solution with recursive code: ", newMessage);
console.log();

// Bonus 1
console.log("Bonus 1 exercises:");

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper mi a aliquam feugiat. Donec ultricies facilisis venenatis. Nullam vestibulum, tortor vel viverra ultrices, est nisl efficitur arcu, at lobortis felis magna at nunc. Vestibulum ligula odio, convallis vel diam vulputate, pulvinar interdum arcu. Maecenas feugiat lorem nunc, in imperdiet eros placerat id. Vivamus a urna sit amet arcu condimentum hendrerit. Vestibulum a volutpat massa. Sed egestas, nulla ut volutpat ornare, purus nunc accumsan diam, sed mattis dui est et justo. Etiam malesuada urna at nunc vestibulum fringilla. Integer ut velit id turpis cursus placerat nec nec quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Nulla fringilla condimentum ex. Vivamus velit mi, eleifend ac mi sed, viverra sollicitudin sem. Nam egestas mi non lacus vestibulum varius. Praesent aliquet lacus vel diam fringilla sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse imperdiet maximus mi, sit amet auctor magna congue non. Vestibulum auctor volutpat leo, eu ultrices neque euismod ut. Suspendisse vitae maximus urna. Nam vehicula, nunc eu sagittis lacinia, purus orci cursus nisl, eget scelerisque lacus orci a risus. Nullam et ullamcorper lectus. Vestibulum tempor a dolor nec posuere. Morbi faucibus erat et iaculis congue. Donec et velit sed magna sagittis condimentum id eget erat. Phasellus congue molestie ante, vitae ultrices justo condimentum at. Mauris id purus semper, tempor nisi sed, pretium felis. In fermentum fringilla magna et hendrerit.
Morbi vehicula sed purus id finibus. Suspendisse ultricies sem quam, sed lobortis sem blandit lobortis. Donec eu tortor eu ex consectetur ultricies convallis vitae turpis. Morbi sodales in nulla vel luctus. Donec nulla ex, luctus ornare placerat vel, mollis vestibulum velit. Morbi ornare ipsum eu ex sollicitudin, ut lobortis augue rhoncus. Sed ac pharetra leo. Quisque tempor libero eu felis tincidunt pretium. Aliquam eleifend porta feugiat. Suspendisse dui massa, imperdiet sed pretium sed, ultricies sed erat. Cras consectetur, mauris non laoreet ornare, sapien neque condimentum sem, nec tincidunt felis quam vitae leo. Maecenas mattis faucibus lectus, in pharetra nulla semper ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.`;

const words = [];
let word = "";
for (let i = 0; i < text.length; i++) {
  if (text[i] !== " " && text[i] !== "." && text[i] !== ",") {
    word += text[i];
    if (text[i + 1] === " " || text[i + 1] === "." || text[i + 1] === ",") {
      words.push(word);
      word = "";
    }
  }
}
console.log(`There are ${words.length} words in "text".`);

let etCount = 0;
for (i of words) {
  if (i === "et") {
    etCount++;
  }
}
console.log(`The latin word "et" is used ${etCount} times in "text".`);
console.log();

// Bonus 2
console.log("Bonus 2 exercises:");

const phraseToCheck = "No 'x' in Nixon";
let phraseInOrder = "";
let phraseInReverse = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] !== " " &&
    phraseToCheck[i] !== "." &&
    phraseToCheck[i] !== "," &&
    phraseToCheck[i] !== "!" &&
    phraseToCheck[i] !== "?" &&
    phraseToCheck[i] !== "'"
  ) {
    phraseInOrder += phraseToCheck[i].toLocaleLowerCase();
  }
}
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  if (
    phraseToCheck[i] !== " " &&
    phraseToCheck[i] !== "." &&
    phraseToCheck[i] !== "," &&
    phraseToCheck[i] !== "!" &&
    phraseToCheck[i] !== "?" &&
    phraseToCheck[i] !== "'"
  ) {
    phraseInReverse += phraseToCheck[i].toLowerCase();
  }
}
if (phraseInOrder === phraseInReverse) {
  console.log(`${phraseToCheck} is a Palindrome.`);
} else {
  console.log(`${phraseToCheck} is not a Palindrome.`);
}
