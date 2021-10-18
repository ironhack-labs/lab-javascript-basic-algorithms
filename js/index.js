// Iteration 1: Names and Input

let hacker1 = 'Aleksandar Velichkovikj';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Viktorija Kuneviciute';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${
      hacker1.length + hacker2.length
    } characters!`
  );
}

// Iteration 3: Loops

let newName = '';
for (let i = 0; i < hacker1.length; i++) {
  newName = newName + hacker1[i] + ' ';
}
console.log(newName.toUpperCase());

// Name in reverse

let reverseName = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName = reverseName + hacker1[i];
}
console.log(reverseName);

// Lexicographic order

if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// Bonus
