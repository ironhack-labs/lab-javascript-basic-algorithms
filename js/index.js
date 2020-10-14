// Iteration 1: Names and Input

let hacker1 = 'Jess';
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Ivan';
console.log(`The navigator's name is ${hacker2}`)
let lettersOnH1 = hacker1.length;
let lettersOnH2 = hacker2.length;
if (lettersOnH1 > lettersOnH2){
  console.log(`The driver AKA ${hacker1} has the longest name, it has ${lettersOnH1} characters`)
} else if (lettersOnH1 == lettersOnH2) {
  console.log(`Wow, you both have equally long names,${lettersOnH1} characters!`)
} else {
  console.log(`It seems that the navigator AKA ${haker2} has the longest name, it has ${lettersOnH2} characters.`)
};
// Iteration 2: Conditionals
let upH1 = hacker1.toUpperCase();
let upH1split = upH1.split("");
let upH1SRJ= upH1.split("").reverse().join();
console.log(upH1split);
console.log(upH1SRJ)
// Iteration 3: Loops
if (hacker1.localeCompare(hacker2) == -1 ){
    console.log(`The driver's name goes first`)
  } else if (hacker2.localeCompare(hacker1) == -1){
    console.log('Yo, the navigator goes first definitely.')
  }else {
    console.log('What?! You both have the same name?');
  }
console.log(hacker1.localeCompare(hacker2));





// Iteration 3: Loops