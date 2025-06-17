// Iteration 1: Names and Input
const hacker1 = "Oliver";
console.log(`The driver\'s name is ${hacker1}`);
const hacker2 = "Dave";
console.log(`The navigator\'s name is ${hacker2}`);

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

// Iteration 3: Loops
// 3.1
let hacker1WithSpace = "";
for (letter of hacker1.toUpperCase()) {
  hacker1WithSpace += letter + " ";
}

const newHacker1 = hacker1WithSpace.trim();
console.log(newHacker1);
// console.log(newHacker1.length);

// 3.2
let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

// 3.3
// if (hacker1 < hacker2) {
//   console.log("The driver's name goes first.");
// } else if (hacker1 > hacker2) {
//   console.log("Yo, the navigator goes first, definitely.");
// } else console.log("What?! You both have the same name?");

if (hacker1.length < hacker2.length) {
  for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] === hacker2[i]) {
      continue;
    } else {
      if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        break;
      } else {
        console.log("Yo, the navigator goes first, definitely.");
        break;
      }
    }
  }
} else if (hacker1.length > hacker2.length) {
  for (let i = 0; i < hacker2.length; i++) {
    if (hacker1[i] === hacker2[i]) {
      continue;
    } else {
      if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        break;
      } else {
        console.log("Yo, the navigator goes first, definitely.");
        break;
      }
    }
  }
} else {
  for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] === hacker2[i]) {
      continue;
    } else {
      if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        break;
      } else {
        console.log("Yo, the navigator goes first, definitely.");
        break;
      }
    }
  }
  console.log("What?! You both have the same name?");
}

// Bonus 1
const longText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex quam sunt. Minima recusandae ea dolorem consequuntur molestiae, animi officiis, molestias incidunt necessitatibus ad iusto ut? Ad sequi necessitatibus voluptate.";
const newText = longText.split(" ");
let etCount = 0;
newText.forEach((element) => {
  if (element === "et") etCount++;
});
console.log(etCount);

// Bonus 2
function isPalindrome(word) {
  const word2 = word.toLowerCase();
  console.log(word2);
  let word3 = "";

  for (element of word2) {
    if (
      element === " " ||
      element === "," ||
      element === "!" ||
      element === "?"
    ) {
      element = "";
      word3 += element;
    } else word3 += element;
  }

  console.log(word3);

  if (word3.length % 2 !== 0) {
    const middleIndex = (word3.length - 1) / 2;

    for (let i = 1; middleIndex - i >= 0; i++) {
      // console.log(i);
      if (word3[middleIndex - i] === word3[middleIndex + i]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Was it a car or a cat I saw"));
console.log(isPalindrome("taco cat"));
