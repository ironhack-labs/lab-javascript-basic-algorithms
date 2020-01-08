// Iteration 1: Names and Input
var hacker1 = "carlos";
console.log(`The driver's name is ${hacker1}`);
var hacker2 = "carla";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function whoHastheLongestName(name1, name2) {
  if (name1.length === name2.length) {
    console.log(`wow, you both have equally long names,${name1.length}  `);
  } else if (name1.length > name2.length) {
    console.log(
      `The driver has the longest, it has ${name1.length} characters `
    );
  } else {
    console.log(
      `it seems that the navigator has the longest name, it has  ${name2.length} characters `
    );
  }
}
whoHastheLongestName(hacker1, hacker2);

// Iteration 3: Loops
function printInCapital(name) {
  var finalString = "";
  for (let i = 0; i < name.length; i++) {
    finalString += name[i].toUpperCase();
    finalString += " ";
  }
  console.log(finalString);
}
printInCapital(hacker1);

function printInReverse(name) {
  var finalString = "";
  for (let i = name.length - 1; i >= 0; i--) {
    finalString += name[i];
  }
  console.log(finalString);
}
printInReverse(hacker1);

function lexographicOrder(driver, navigator) {
  driver = driver.toLowerCase();
  navigator = navigator.toLowerCase();
  var index;
  if (driver.length === navigator.length) {
    index = navigator.length;
  } else if (driver.length < navigator.length) {
    index = driver.length;
  } else {
    index = navigator.length;
  }

  for (let i = 0; i <= index; i++) {
    if (driver[i] === navigator[i]) {
      if (i === index) {
        console.log("What?! you both the same name?");
      }
    } else if (driver[i] < navigator[i]) {
      console.log("the driver's name goes first ");
      break;
    } else {
      console.log("Yo the navigator goes first definitely");
      break;
    }
  }
}

lexographicOrder(hacker1, hacker2);
