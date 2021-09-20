console.log("I'm ready!");
// Iteration 1: Names and Input

const hacker1 = "Jeannette"
const hacker2 = "Fatima" //this is my second name

console.log(`The driver's name is ${hacker1}`);
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else  if ((hacker1.length<hacker2.length){
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  consolel.log(`Wow, you both have equally long names, XX characters!`)
}


// Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

for (let item of hacker1){
  console.log(item.toUpperCase())
}
/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/
function reverseString(str) {
  return str;
}
reverseString(hacker2);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

