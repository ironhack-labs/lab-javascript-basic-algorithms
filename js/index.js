// Iteration 1: Names and Input
let hacker1 = 'RODRIGOO'
console.log (`The driver's name is ${hacker1}`)
let hacker2 = 'ALUIZIO'
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length == hacker2.length) {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1 with JOIN
console.log(hacker1.split('').join(' '));

//3.1 with FOR

let separatedName = '';

for (let i = 0; i<hacker2.length; i+=1) {

    separatedName += hacker2[i].toUpperCase() + ' ';
}
console.log(separatedName);

//3.2 with FOR

let nameInverted ='';
for (let i = hacker1.length - 1; i>=0; i-=1) {
    nameInverted += hacker1[i];
}
console.log(nameInverted);

//3.3 with IF ELSE

if(hacker1.length > hacker2.length) {
  console.log(`The ${hacker1} goes first.`);
} else if(hacker1.length < hacker2.length) {
  console.log(`Yo,the ${hacker2} goes first definitely.`);
} else if(hacker1.length === hacker2.length) {
  console.log(`What?! You both have the same name?`)
}