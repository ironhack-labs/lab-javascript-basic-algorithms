// Iteration 1: Names and Input

let hacker1 = 'Sara';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Alex'; 
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

const sumNames = hacker1.length + hacker2.length; 

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${sumNames} characters!`);
};

// Iteration 3: Loops

let upperCaseName = '';
for (let letter of hacker1){
  upperCaseName += letter.toUpperCase() + " ";
}
console.log(upperCasedName);


let reverseName = ''; 

for (let i = hacker2.length - 1; i >= 0; i -= 1) {
  reverseName += hacker2[i];
}

console.log(reverseName);


if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
  } else {
    let j = 0;
    let minLength = Math.min(hacker1.length, hacker2.length);
    while (j < minLength && hacker1[j] == hacker2[j]) {
      j++;
    }
    if (hacker1[j] < hacker2[j]) {
      console.log("The driver's name goes first");
    } else {
      console.log("Yo, the navigator goes first definitely");
    } 
  }