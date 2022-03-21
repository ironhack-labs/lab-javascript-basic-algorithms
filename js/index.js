// Iteration 1: Names and Input

// 1.1
const hacker1 = 'Bernardo';

// 1.2
console.log(`The driver's name is ${hacker1}.`);

// 1.3
const hacker2 = 'Vitor';

// 1.4
console.log(`The navigator's name is ${hacker2}.`)

//
// Iteration 2: Conditionals

// 2.1

function hackerName () {
    if (hacker1.length > hacker2.length) {
      return `The driver has the longest name. It has ${hacker1.length} characters.`;
    } else if (hacker1.length < hacker2.length) {
      return `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
    } else if (hacker1.length === hacker2.length) {
      return `Wow, you both have equally long names, ${hacker1.length} characters!`;
    }
  }
  
  hackerName();
  

// Iteration 3: Loops

// 3.1

console.log(hacker1.split(""));

// 3.2

function reverseName () {
    let splitName = hacker2.split("");
    let reversedNameArray = splitName.reverse();
    let joinedNameArray = reversedNameArray.join("");
    return joinedNameArray;
  }
  
  reverseName();

  // 3.3

  function alphabetOrder() {
    const array = [hacker2, hacker1];
    array.sort();
    if (array[0] === hacker1) {
      console.log("The driver's name goes first.");
    } else if (array[0] === hacker2) {
      console.log("Yo, the navigator goes first definitely.")
    } else if (array[0] === array[1]) {
      console.log("What?! You both have the same name?");
    }
  }
  
  alphabetOrder();
  
