// Iteration 1: Names and Input

let hacker1;
let hacker2;

hacker1 = "Pepe";
hacker2 = "Maria";

console.log(hacker1);
console.log("The driver's name is", hacker1);

console.log(hacker2);
console.log("The driver's name is", hacker2);

// Iteration 2: Conditionals

let name1;
let name2;

name1 = hacker1.length;
console.log(name1);

name2 = hacker2.length;
console.log(name2);

if (name1 > name2){
  console.log(`The driver has the longest name, it has ${name1} characteres`);
} else if (name1 < name2){
  console.log(`It seems that the navigator has the longest name, it has ${name2} characteres`);
} else {
  console.log(`Wow, you both have equally long name ${name1} characteres`);
}

// Iteration 3: Loops

let myStr = "";

for (const value of hacker1){
  myStr += value.toUpperCase() + " ";
}

console.log(myStr);

let reversed = "";

for (const character of hacker2){
  reversed = character + reversed;
}

console.log(reversed);

if('hacker1' < 'hacker2'){
    'hacker1'.localeCompare('hacker2')
    console.log('Yo, the navigator name goes first directly')
  } else if('hacker1'> 'hacker2') {
    'hacker2'.localeCompare('hacker2')
    console.log('The drivers name goes first')
  } else {
    console.log('What?! You both have the same name?')
  }
  