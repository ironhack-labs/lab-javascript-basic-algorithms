// Iteration 1: Names and Input
let hacker1 = "Leonardo";
console.log("Driver´s name: ", hacker1);

let hacker2 = "Alberto";
console.log("The navigator´s name is: ", hacker2);

// Iteration 2: Conditionals
function isLonger(hacker1, hacker2) {
  for (var i = 0; i < hacker1.length; i++) {
    var totalCaracter1 = [i];
  }
  for (var i = 0; i < hacker2.length; i++) {
    var totalCaracter2 = [i];
  }
  if (hacker1.length === hacker2.length) {
    console.log(
      "Wow, you both have equally long names",
      totalCaracter1,
      "characters!"
    );
  } else if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name, it has",
      totalCaracter1,
      "characters."
    );
  } else {
    console.log(
      "It seems that the navigator has the longest name, it has",
      totalCaracter2,
      "characters."
    );
  }
}

isLonger("Leonardo", "Washingnton");
console.log(isLonger);

// Iteration 3: Loops
