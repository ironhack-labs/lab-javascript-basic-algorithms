// Names and Input
let hacker1 = "Serena";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mat";
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
let h1_len = hacker1.length;
let h2_len = hacker2.length;

if (h1_len > h2_len) {
  console.log(`The Driver has the longest name, it has ${h1_len} characters`);
} else if (h1_len < h2_len) {
  console.log(
    `Yo, navigator got the longest name, it has ${h2_len} characters`
  );
} else {
  console.log(`wow, you both got equally long names, ${h1_len} characters!!`);
}

// LOOPS
let spaceName = "";

for (let i = 0; i < h1_len; i++) {
  if (i === h1_len - 1) {
    spaceName += hacker1[i].toUpperCase();
  } else {
    spaceName += hacker1[i].toUpperCase() + ` `;
  }
}
console.log(spaceName);

function reverse(name) {
  console.log(
    name
      .split("")
      .reverse()
      .join("")
  );
}

reverse(hacker2);

console.log(hacker1.localeCompare(hacker2));
if (!hacker1.localeCompare(hacker2)) {
  console.log(`The driver's name goes first`);
} else if (hacker1.localeCompare(hacker2)) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`What?! You both got the same name?`);
}

// Bonus
/* 
1. Get string
2. Remove anything that's not alphanumeric
3. toLowercase
*/

// Lorem ipsum generator
