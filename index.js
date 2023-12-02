// Iteration 1: Names and Input
let hacker1 = "Ivan";
let hacker2 = "Jose";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
     console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
// 3.1

let result = "";
hacker1 = `${hacker1}`;

let j = 0;

for (let i = 0; i <= 3; i++){
  const x = hacker1[i];

  if (j === 4) {
      result = `${result} `
      j = 0
  }

  j++

  result = `${result} ${x}`
}

console.log(result.toUpperCase())

// 3.2

let reverseText = ""

for (let i = hacker2.length - 1 ; i >= 0; i-- ){

  reverseText += hacker2[i];

}
console.log (reverseText)

// 3.3

