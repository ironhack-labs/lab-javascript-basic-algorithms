// Iteration 1: Names and Input

let hacker1 = 'Pablo';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Vicente';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
}

// Iteration 3: Loops

hacker1 = hacker1.split('');
for(let i = 0; i < hacker1.length; i++){
  hacker1[i] = hacker1[i].toUpperCase();
}
hacker1 = hacker1.join(' ');
console.log(hacker1)


let hacker2Backwards = [];
for(let i = hacker2.length; i >= 0; i--){
  hacker2Backwards.push(hacker2[i]);
}
hacker2 = hacker2Backwards.join('');
console.log(hacker2);

hacker1 = 'Pablo';
hacker2 = 'Vicente';

if(hacker1.localeCompare(hacker2) < 0 ) {
  console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) > 0 ){
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`)
}

//BONUS 1

paragraphs = paragraphs.split(' ');

function countWords(arr) {
  console.log(arr.length);
}

countWords(paragraphs);