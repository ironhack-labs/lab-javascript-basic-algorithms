// Iteration 1: Names and Input
const hacker1 = "John";
const hacker2 = "Mathias";
console.log(`The drivers's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function compareNameLengths(name1, name2) {
  let nameOneLength = name1.length;
  let nameTwoLength = name2.length;

  if (nameOneLength > nameTwoLength) {
    return `The driver has the longest name, it has ${nameOneLength} characters.`;
  } else if (nameTwoLength > nameOneLength) {
    return `It seems that the navigator has the longest name, it has ${nameTwoLength} characters.`;
  } else
    return `Wow, you both have equally long names, ${nameOneLength} characters!`;
}

console.log(compareNameLengths(hacker1, hacker2));

// Iteration 3: Loops

function convertNameInUpperCase(name) {
  let adjustedName = "";
  for (let i = 0; i < name.length; i++) {
    let item = name[i];
    adjustedName += " " + item.toUpperCase();
  }
  return adjustedName.substring(1);
}

console.log(convertNameInUpperCase(hacker1));

function reverseName(name) {
  let reversedName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    let letter = name[i];
    reversedName += letter;
  }
  return reversedName;
}

console.log(reverseName(hacker2));

function compareNames(name1, name2) {
  let compareStringsResult = hacker1.localeCompare(hacker2);

  if (compareStringsResult === -1) {
    return `The driver's name goes first`;
  } else if (compareStringsResult === 1) {
    return `Yo, the navigator goes first, definitely.`;
  } else {
    return `What?! You both have the same name?`;
  }
}

console.log(compareNames(hacker1, hacker2));
