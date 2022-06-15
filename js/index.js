console.log("I'm ready");

// Iteration 1: Names and Input

const hacker1 = "Paul";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Michael";

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
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

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
