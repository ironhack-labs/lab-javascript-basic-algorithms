// Iteration 1 Names and Input

const hacker1 = "Luca";


console.log("The driver's name is " + hacker1);

const hacker2 = "Rico";

console.log(`The navigator's name is ${hacker2}`);

console.log("_________________________________");

// Iteration 2: Conditionals

const checkNameLength = (name1, name2) => {
  if (name1.length === name2.length) {
    console.log(
      `Wow you both have equally long names, ${name1.length} characters.`
    );
    return;
  }
  if (name1.length > name2.length) {
    console.log(
      `The driver has the longest name, it has ${name1.length} characters.`
    );
    return;
  }
  if (name1.length < name2.length) {
    console.log(
      `It seems that he navigator has the longest name, it has ${name2.length} characters.`
    );
    return;
  }
  console.log("there is a mistake somewhere");
};
checkNameLength(hacker1, hacker2);

console.log("_________________________________");

// Iteration 3: Loops

const hackerNameToUppercase = (name) => {
  let capitalizedName = "";
  for (let i = 0; i < name.length; i++) {
    capitalizedName += name[i].toUpperCase() + " ";
  }
  return capitalizedName.trim();
};

console.log(hackerNameToUppercase(hacker1));

console.log(hackerNameToUppercase(hacker2));

const hackerNameReversed = (name) => {
  let reversedName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i];
  }
  return reversedName;
};

console.log(hackerNameReversed(hacker1));

console.log(hackerNameReversed(hacker2));

const lexicography = (name1, name2) => {
  if (name1 === name2) {
    return "What?! You both have the same name?";
  }
  if (name1 > name2) {
    return "Yo, the navigator's goes first, definitely.";
  }
  if (name1 < name2) {
    return "The driver's name goes first.";
  }
};

console.log(lexicography(hacker1, hacker2));

// Bonus

let phraseToCheck = "madam";

let palindromCheck = (string) => {

};
