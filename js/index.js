// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = `Maxim Coopieters`;

// 1.2 Print `"The driver's name is XXXX"`.
  console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
  const hacker2 = "Esra Ozel";

// 1.4 Print `"The navigator's name is YYYY"`.
  console.log(`The navigator's name is ${hacker2} `);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let newHacker = hacker1.split('').join(' ');
console.log(newHacker.toUpperCase());
  
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
  console.log(hacker2.split("").reverse().join(""));

  if (hacker1.localeCompare(hacker2) === 1){
    console.log(`The driver's name goes first.`);
  } else if (hacker1.localeCompare(hacker2) === 0) {
    console.log(`What?! You both have the same name?`);
  } else {
    console.log(`Yo, the navigator goes first definitely.`);
  }
