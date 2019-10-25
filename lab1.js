// //Lab-1

// //Iteration 1: Names and Input
const hacker1 = "Kevin";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Ashraf";
console.log(`The navigator's name is ${hacker2}`);


// //Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, ${hacker1.length} characters`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters`);
  }

  