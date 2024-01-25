// Iteration 1: Names and Input
let hacker1 = 'Peter';
console.log("The driver's name is", hacker1);

let hacker2 = 'Lisa';
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has', `${hacker1.length}`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has',
    `${hacker2.length}`
  );
} else {
  console.log('Wow, you both have equally long names', `${hacker1.length}`);
}

// Iteration 3: Loops

//3.1

/* Paso palabras en may, saco cada letra         */
let i = 0;
while (i < hacker1.length) {
  console.log(hacker1.toUpperCase());
  i++;
}
//3.2
let reversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);

//3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first, definitely');
} else {
  console.log('What?! You both have the same name?');
}
