// Iteration 1: Names and Input

let hacker1 = "damian";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "heily";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops

let i = 0;
while (i < hacker1.length) {
  console.log(hacker1.charAt(i).toUpperCase());
  i++;
}

let i = hacker2.length - 1;
while (i >= 0) {
  console.log(hacker2.charAt(i));
  i--;
}

let orderAlp = [hacker1, hacker2];
orderAlp.sort(function (a, b) {
  return a.localeCompare(b);
});
if (orderAlp[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (orderAlp[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
