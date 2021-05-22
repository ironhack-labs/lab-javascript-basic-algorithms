console.log('Iteration 1: Names and Input');

let hacker1 = 'Hebert';
console.log(`The driver´s name is ${hacker1}`);
let hacker2 = 'Debora';
console.log(`The navigator´s name is ${hacker2}`);

console.log('Iteration 2: Conditionals');

if (hacker1.length > hacker2.length) 
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
else if (hacker1.length < hacker2.length)
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
else console.log(`Wow, you both have equally long names, ${hacker2.length}  characters!`);

console.log ('Iteration 3: Loops');

let hacker1Capital = " ";
for ( let i = 0; i < hacker1.length; i++) {
     hacker1Capital += hacker1[i].toUpperCase();
     //adicionar função para separar a String
}

console.log(`hacker1Capital: ${hacker1Capital}`);
let hacker2Reversed = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  if (hacker2Reversed.length !== hacker2.length - 1) hacker2Reversed += hacker2[i];
  else hacker2Reversed += hacker2[i].toUpperCase();
}

console.log(`navigatorReversed: ${hacker2Reversed}`);
if (hacker1 < hacker2)
  console.log('hacker1 goes first');
else if (hacker1 > hacker2) 
  console.log('hacker2 goes first');
else console.log('You have same names');