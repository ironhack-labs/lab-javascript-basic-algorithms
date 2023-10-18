let hacker1 = "John";
console.log(`The drivers name is ${hacker1}`);
let hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

function nameLength(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else {
    if (hacker2.length > hacker1.length) {
      console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
      );
    } else {
      console.log(
        `Wow, you both have equally long names, both ${hacker2.length} characters!`
      );
    }
  }
}

nameLength(hacker1, hacker2);

function printName(str) {
  let newName = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    newName += char.toUpperCase() + " ";
  }
  return newName;
}

let result = printName(hacker1);
console.log(result);

function printName2(str) {
  let newName = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    newName += char;
  }
  return newName;
}

let result2 = printName2(hacker2);
console.log(result2);

if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`The driver's name goes first.`);
} else {
  if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`Yo, the navigator goes first, definitely.`);
  } else if (hacker1.localeCompare(hacker2) === 0) {
    console.log(`What?! You both have the same name?`);
  }
}
