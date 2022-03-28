// Iteration 1: Names and Input

let hacker1 = "Lucas";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Valentin";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length + 1} characters`)
  }
  else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length + 1 } characters`)
  }
  else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length + 1} characters!`)
  }

  
// Iteration 3: Loops
let hacker1WithSpace = "";
for (let i = 0; i <= hacker1.length; i++) {
hacker1WithSpace += ' ' + hacker1.charAt(i);
}
let hackertoUpperCase = hacker1WithSpace.toUpperCase();
console.log(hackertoUpperCase)

let hacker2Reverse = "";
for (let i = hacker2.length; i >= 0 ; i--) {
hacker2Reverse += hacker2.charAt(i);
}
console.log(hacker2Reverse)


let firstLetterHacker1 = hacker1.charAt(0);
let firstLetterHacker2 = hacker2.charAt(0);

if (firstLetterHacker1.localeCompare(firstLetterHacker2) === -1){
  console.log(`The driver's name goes first.`)
}
else if((firstLetterHacker1.localeCompare(firstLetterHacker2) === 1)){
  console.log(`Yo, the navigator goes first definitely.`)
}
else if((firstLetterHacker1.localeCompare(firstLetterHacker2) === 0)){
  console.log(`What?! You both have the same name?`)
}