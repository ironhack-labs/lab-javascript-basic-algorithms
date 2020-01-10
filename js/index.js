// Iteration 1: Names and Input
let hacker1 = 'Tom';
console.log(`This driver's name is ${hacker1}.`);
let hacker2 = 'Jerry';
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

// let hacker1Arr =[];
// for (let i=0; i<hacker1.length; i++) {
//   hacker1Arr.push(hacker1[i].toUpperCase());
// }
// console.log(hacker1Arr.join(' '))

let newHacker1 = '';
for (let i = 0; i<hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase()+' ';
}
console.log(newHacker1);



// let hacker2Arr =[];
// for (let i = hacker2.length-1; i>-1; i--) {
//   hacker2Arr.push(hacker2[i]);
// }
// console.log(hacker2Arr.join(''));

let newHacker2 = '';
for (let i = hacker2.length-1; i > -1; i--) {
  newHacker2 += hacker2[i];
}
console.log(newHacker2);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//#### Bonus1 !



