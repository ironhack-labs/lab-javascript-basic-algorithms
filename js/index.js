// Iteration 1: Names and Input
let hacker1 = 'Tom';

console.log("The driver's name is " + hacker1);

let hacker2 = 'Pedro';

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker1.length < hacker2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.'
  );
} else {
  console.log('Wow, you both have equally long names, ' + hacker1.length + 'characters!');
}

// Iteration 3: Loops

//3.1

let sepName = '';

for (let counter = 0; counter < hacker1.length; counter++) {
  sepName += hacker1[counter].toUpperCase() + ' ';
}

console.log(sepName);

// 3.2

let revName = '';

for (let counter = hacker2.length - 1; counter >= 0; counter--) {
  revName += hacker2[counter].toUpperCase() + ' ';
}

console.log(revName);
// 3.3

/*
for (let i = 0; i < hacker1.length && hacker2.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
  } else if (hacker1[i] < hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}
*/

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}
