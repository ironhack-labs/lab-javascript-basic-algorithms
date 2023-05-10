// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* Iteration1 
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".*/

let hacker1 = 'Mandy';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Ola';
console.log(`The navigator's name is ${hacker2}`);

/*Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log(
    `${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
}

/*Iteration 3: Loops
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?*/

/*Version with an Array*/
console.log('Hello');

//let hacker1 = "Mandy";

/*let newName = [];

for (let i = 0; i < hacker1.length; i++) {
newName.push(hacker1[i].toUpperCase()+' ');
};

console.log(newName);*/

/*let newName = ''

for (let i = 0; i < hacker1.length; i++) {
  newName += (hacker1[i].toUpperCase()+' ');
}

console.log(newName);

console.log("hello")
*/
/*
let newName = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
  newName += hacker1[i];
}
console.log(newName);
*/

const result= hacker1.localeCompare(hacker2);
if (result=== -1){
  console.log ("Mandy's name goes first")

}
else if ( result=== 1){
console.log ("Yo, the Ola's name goes first, definitely.")

}
else {
console.log("What?! You both have the same name?")
}

