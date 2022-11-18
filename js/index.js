// Iteration 1: Names and Input
const hacker1 = "Luis"
console.log(`The driver's name is ${hacker1}`)
const hacker2 ="Sonia"
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters`
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length}  character`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${
        hacker1.length && hacker2.length
      } characters!.`
    );
  }
  // Iteration 3: Loops
 // 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let resultado = "";
for (let i = 0; i < hacker1.length; i++) {
  resultado += hacker1[i] + " ";

  console.log(resultado.toUpperCase());
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let resultado3 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  resultado3 += hacker1[i];

  console.log(resultado3);
}

// 3.3 Depending on the lexicographic order of the strings, print:
const order = hacker1.localeCompare(hacker2) //return -1
console.log(`Yo, the navigator ${hacker2} goes first definitely`)