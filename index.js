// Iteration 1: Names and Input
const hacker1 = "Tesa";
console.log("The driver's name is ${hacker1}");
const hacker2 = "Haripriya";
console.log("The navigator's name is ${hacker2}");

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length)
  {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
else if(hacker2.length > hacker1.length)
  {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
else{
  console.log(`Wow, you both have equally long names,  ${hacker2.length} characters!`)
}


// Iteration 3: Loops
// 3.1
let capitalisedName="";
capitalisedName = hacker1.split('').join(' ');
console.log(capitalisedName.toUpperCase());

//3.2
let reversedName = "";
for(let i = hacker2.length-1; i>=0; i--)
  {
    reversedName += hacker2[i];
  }
console.log(reversedName);

// 3.3
const alphaOrder = hacker1.localeCompare(hacker2);
if(alphaOrder === -1)
  {
    console.log("The driver's name goes first.")
  }
else if(alphaOrder === 1)
  {
    console.log("Yo, the navigator goes first, definitely.")
  }
else
  {
    console.log("What?! You both have the same name?")
  }