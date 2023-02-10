// Iteration 1: Names and Input
// 1.1, 1.2
let hacker1 = 'Tim';
console.log (`The driver's name is ${hacker1}`);

// 1.3, 1.4
let hacker2 = "Simon";
console.log (`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals 
if (hacker1.length > hacker2.length) {
  console.log(`the driver's has the longer name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
}else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// 3.1
let hacker1UpperCase = "";

for (let i=0; i < hacker1.length; i++) {
  hacker1UpperCase += `${hacker1[i].toUpperCase()} `
}
console.log(hacker1UpperCase)

// 3.2
let hacker2Reverse = "";
for (let i= hacker2.length -1; i >=0; i--) {
  hacker2Reverse += hacker2[i]
}
console.log(hacker2Reverse)

// 3.3
const hackerSorted = [
  hacker1, hacker2
];

function mySort(a, b) {
  if (a > b)  {
      console.log("The driver's name goes first");
  } else if (a < b) {
      console.log("Yo, the navigator goes first definitely.")
  } else {
      console.log("What?! You both have the same name?")
  }
}

hackerSorted.sort(mySort)


