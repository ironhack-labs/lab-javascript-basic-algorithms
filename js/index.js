// Iteration 1: Names and Input

let hacker1 = 'Jonathan';
console.log("Driver's name is:" + hacker1);

let hacker2 = 'Ozhan';
console.log('Navigators name is:' + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    'The driver has the longest name, it has' + hacker1.length + 'characters.',
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    'The navigator has the longest name, it has' +
      hacker1.length +
      'characters.',
  );
} else {
  console.log('Wow, you both have equally long names, XX characters! ');
}

// Iteration 3: Loops

// 3.1

let result = '';

for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + ' ';
}

console.log(result);

//3.2

let result1 = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  result1 += hacker2[i];
}

console.log(result1);

//3.3

let test1 = hacker1;
let test2 = hacker2;

if (test1 === test2) {
  console.log('What?! You both have the same name?');
} else if (test1 < test2) {
  console.log("The driver's name goes first.");
} else {
  console.log('Yo, the navigator goes first definitely');
}
