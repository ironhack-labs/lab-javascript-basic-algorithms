// Iteration 1: Names and Input
let hacker1 = 'Vidisha';
let hacker2 = 'Marat';

console.log(hacker1);
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
      `Driver has the longest name it has ${hacker1.length} characters`
    );
  } else if (hacker1.length === hacker2.length) {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  } else {
    console.log(
      `Navigator has the longest name it has ${hacker2.length} characters`
    );
  }
  

// Iteration 3: Loops
let driverName = '';
let navigatorName = '';
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + ' ';
}

console.log(driverName);

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorName += hacker2[i];
}
console.log(navigatorName);

if (hacker1.localeCompare(hacker2)) {
  console.log(`${hacker1} goes first`);
} else if (hacker2.localeCompare(hacker1)) {
  console.log(`${hacker2} goes first`);
} else {
  console.log('You both have the same name');
}