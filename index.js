// Iteration 1: Names and Input
let hacker1 = "Trentone";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Marianna";
console.log(`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals

function whichIsLonger(param1, param2) {
  if (param1.length > param2.length) {
    let res1 = param1.length;
    console.log(`The driver has the longest name, it has ${res1} characters.`);
  } else if (param1.length < param2.length) {
    let res2 = param2.length;
    console.log(
      `It seems that the navigator has the longest name, it has ${res2} characters.`,
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${param1.length} characters!`,
    );
  }
}

whichIsLonger("Mariangela", "Ugo");

// Iteration 3: Loops
//3.1
console.log(
  `${
    hacker1[0]
  } ${hacker1[1].toUpperCase()} ${hacker1[2].toUpperCase()} ${hacker1[3].toUpperCase()} ${hacker1[1].toUpperCase()} `,
);
//3.2

let reversed = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversed += hacker1[i];
}

console.log(reversed);

//3.3
function compare(arg1, arg2) {
  if (arg1.localeCompare(arg2) < 0) {
    console.log("The driver's name goes first.");
  } else if (arg1.localeCompare(arg2) === 0) {
    console.log("What?! You both have the same name?");
  } else {
    console.log("Yo, the navigator goes first, definitely.");
  }
}

compare(hacker1, hacker2);
