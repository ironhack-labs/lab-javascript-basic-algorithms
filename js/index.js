// Iteration 1: Names and Input
let hacker1 = "Nate";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Fernando";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function longName()  {
    if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }
    else if (hacker2.length > hacker1.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else if (hacker1.length == hacker2.length) {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
  }
    
  longName()

// Iteration 3: Loops

function nameCaps() {
    let name = hacker1;
    let capName = name.split('').join(' ').toUpperCase();
    console.log(capName);
  }
  
  nameCaps()
  
  function reverseName() {
    let name = hacker2;
    let revName = name.split('').reverse().join('');
    console.log(revName);
  }
  
  reverseName()
  
  let arr = [];
  arr.push(hacker1);
  arr.push(hacker2);
  arr = arr.sort((a, b) => a > b);
  console.log(arr);
  if(arr[0] === arr[1]) {
    console.log(`What?! You both have the same name?`)
  }
  else if(arr[0] === hacker1) {
    console.log(`The driver's name goes first.`);
  }
  else if(arr[0] === hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
  }