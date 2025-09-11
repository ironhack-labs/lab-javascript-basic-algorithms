// Iteration 1: Names and Input
let hacker1 = "Nidhin";
console.log("The Driver's name is " + hacker1);

let hacker2 = "Stalin";
console.log("The Navigator's name is " + hacker2);

// Iteration 2: Conditionals
function compareNames(driver, navigator) {
  if (driver.length > navigator.length) {
    return driver;
  } else if (driver.length < navigator.length) {
    return navigator;
  } else {
    return driver + " " + navigator;
  }
}

console.log(compareNames("seth", "rollins"));

// Iteration 3: Loops

function printName(driver) {
  let result = "";

  for (let i = 0; i < driver.length; i++) {
    result = result + driver[i].toUpperCase();
    if (i < driver.length) {
      result = result + " ";
    }
  }

  return result;
}
console.log(printName("nidhin"));

function reverseName(lame) {
  let revName = lame.split("").reverse().join("");
  return revName;
}
let lame = "jackie";
console.log(reverseName(lame));

let name1 = "Zayn";
let name2 = "Zayn";

if (name1 < name2) {
  console.log(name1 + " comes first in lexicographic order");
} else if (name1 > name2) {
  console.log(name2 + " comes first in lexicographic order");
} else {
  console.log("Both names are equal");
}
