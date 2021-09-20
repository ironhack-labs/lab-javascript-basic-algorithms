//Iteration 1
let hacker1 = 'Kati';
console.log(`The drivers name is ${hacker1}`) ;

let hacker2 = 'Bob';
console.log(`The navigators name is ${hacker2}`);

//Iteration 2
console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);

//Iteration 3
let uppercased = hacker1.toUpperCase();
console.log(uppercased[0], uppercased[1], uppercased[2], uppercased[3]);

let str = 'Kati';
let strReverse = str.split('').reverse().join('');  
console.log(`${strReverse}`);

console.log(hacker1);

const hacker = ['Kati', 'Bob'];
console.log(hacker.sort());

if (hacker.sort[0] > hacker.sort[1]) {
  console.log(`Yo, the navigator goes first definitely`);
} else if (hacker.sort[0] < hacker.sort[1]) {
  console.log(` The driver's name goes first.`);
} else {
  console.log(`What?! You both have the same name?`)
}