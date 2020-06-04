// // Iteration 1: Names and Input
let hacker1 = 'Manolo'
let hacker2 = 'Andrea'
console.log(`The driver´s name is  ${hacker1}`);
console.log(`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log (`Tienen la misma longitud con el numero de letras ${hacker1.length}`);
} else {
  if (hacker1.length > hacker2.length) {
     console.log(`${hacker1} tiene mayor numero de letras, y tiene ${hacker1.length}`);
   } else {
     console.log(`${hacker2} tiene mayor numero de letrasy tiene ${hacker2.length}`);
  }
 }
// Iteration 3: Loops
let space = ' '; 
alert(hacker1.split('').join(space).toUpperCase());
hacker1.split('').join(' ').toUpperCase();

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString(hacker2);

console.log(hacker1.localeCompare(hacker2));