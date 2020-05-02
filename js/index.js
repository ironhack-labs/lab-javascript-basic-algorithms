// Iteration 1: Names and Input
const hacker1 = 'Jose';

console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Johanna';

console.log(`"The driver's name is ${hacker2}"`);


// Iteration 2: Conditionals
function longestName(){
    if (hacker1.length>hacker2.length){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker2.length>hacker1.length){
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }else{
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }
}

longestName();

// Iteration 3: Loops
// 3.1
let newName = [];
for (let i = 0; hacker1.length>i; i++) {
  newName.push(hacker1[i].toUpperCase());
}
console.log(newName.join(' '));

//3.2
let reverseOrderName ='';
for (let i = hacker2.length-1; i>=0; i--) {
  reverseOrderName += (hacker2[i]);
}
console.log(reverseOrderName);

//3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log('The driver\'s name goes first.');
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}