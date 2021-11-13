// Iteration 1: Names and Input

let hacker1 = "Barbara"
console.log ("The driver's name is " + hacker1)

let hacker2 = "Thais"
console.log ("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`
    );
  } else if ((hacker1.length = hacker2.length)) {
    console.log(
      "Wow, you both have equally long names, ${hacker2.length} characters!"
    );
  }

// Iteration 3: Loops

let newHacker1 = hacker1.toUpperCase().split("").join(" ");
console.log(newHacker1);
let newHacker2 = hacker2.split("").reverse().join("");
console.log(newHacker2);
//não conseguimos fazer esse :/
let hackers = [hacker1, hacker2];
for (i = 0; i < hackers.length; i++) {
  if (hackers[0] == hacker2[0]) console.log("The driver's name goes first.");
}