/*1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`*/
const hacker1 = 'Juan';
console.log(`the drivers name is ${hacker1}`);


/*1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`.*/
const hacker2 = 'Kiko';
console.log(`The navigators name is ${hacker2}`);


/*2.1. Depending on which name is longer, print: */
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters!`)

  ;
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);

} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/
let newDriver = hacker1.toUpperCase();
console.log(newDriver.split(''));


/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/
/*const navigator = ['K', 'I', 'K', 'O'];*/
/*let newNavigator = hacker2.split('');
let reversOrder = newNavigator.reverse();
let newOrder = reversOrder.join('');

console.log(newOrder);*/

let newNavigator = hacker2.split('');
let newOrder = '';
for (let i = newNavigator.length - 1; i >= 0; i--) {
  newOrder += newNavigator[i];

}
console.log(newOrder);


/*3.3 Depending on the lexicographic order of the strings, print: */


const alWord = [hacker2,
  hacker1
];
let Nom = alWord.sort();
if (Nom[0] === hacker1) {
  console.log(`The driver's ${hacker1} goes first`);
} else if (Nom[0] === hacker2) {
  Console.log(` ${hacker2}, the navigator goes first definitely.`);
} else {
  console.log('What?! You both have the same name?');
}
