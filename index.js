// Iteration 1: Names and Input

const hacker1 = 'Philippe';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Paula';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const driverCount = hacker1.length;
const navigatorCount = hacker2.length;
if (driverCount > navigatorCount) {
  console.log(
    `The driver has the longest name, it has ${driverCount} characters.`
  );
} else if (driverCount < navigatorCount) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorCount} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigatorCount} characters.`
  );
}


// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let capitals = '';
for (let i = 0; i < hacker1.length; i++, capitals += ' ') {
  capitals += hacker1[i].toUpperCase();
}

console.log('drivers capitals:', capitals);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let reverse = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}
console.log('reverse:', reverse);