// Iteration 1: Names and Input

let hacker1 = 'Josafat';
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = 'Wendy';
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

// 3.1
let out1 = '';
for(char of hacker1) {
  out1 += char + " ";
}
console.log(out1.toUpperCase());

// 3.2
let out2 = hacker1.split("").reverse();
console.log(out2.join(""));

// 3.3
let pair = [hacker1, hacker2];
pair = pair.sort();
console.log(pair);

if (hacker1 === hacker2) {
  console.log("What?! Both have the same name?")
} else if(pair[0] === hacker1) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first definitely.");
}

