/* Mandatory exercises -
- Names and Input
- Conditionals
- Loops
*/

// Iteration 1: Names and Input
let hacker1 = "Frank";
printMessage(`The driver's name is ${hacker1}`);

let hacker2 = "Alex";
printMessage(`The navigator's name is ${hacker2}`);

function printMessage(message) {
  console.log(message);
}

// Iteration 2: Conditionals
function decideLongerName(name1, name2) {
  const lengthOfName1 = name1.length;
  const lengthOfName2 = name2.length;

  if (lengthOfName1 === lengthOfName2) {
    printMessage(
      `Wow, you both have equally long names, ${lengthOfName1} characters!.`
    );
  } else if (lengthOfName1 > lengthOfName2) {
    printMessage(
      `The driver has the longest name, it has ${lengthOfName1} characters.`
    );
  } else {
    printMessage(
      `It seems that the navigator has the longest name, it has ${lengthOfName2} characters`
    );
  }
}

// Iteration 3: Loops
function printNameInCapital(name) {
  let result = "";
  for (let i = 0; i < name.length; i++) {
    result += name[i].toUpperCase() + " ";
  }
  printMessage(`Name in capital is ${result}`);
  return result;
}

function printNameInReverseOrder(name) {
  let result = "";
  for (let i = name.length - 1; i >= 0; i--) {
    result += name[i];
  }
  printMessage(`Name in reversed order of alphabets is ${result}`);
  return result;
}

function decideAlphabeticalOrder(name1, name2) {
  if (name1[0] === name2[0]) {
    printMessage(`What?! You both have the same name?`);
  } else if (name1[0] < name2[0]) {
    printMessage(`The driver's name goes first.`);
  } else {
    printMessage("Yo, the navigator goes first definitely.");
  }
}

/* Test samples */
decideLongerName("Frank", "Alex");
printNameInCapital("Frank");
printNameInReverseOrder("Alex");
decideAlphabeticalOrder("Frank", "Alex");
