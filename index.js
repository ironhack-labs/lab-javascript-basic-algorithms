// Iteration 1: Names and Input
let hacker1 = "Joe";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Joe Bonney";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;


if(hacker1Length > hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`)
}else if(hacker2Length > hacker1Length){
    console.log(`It seems the navigator has the longest name, it has ${hacker2Length} characters`)
}else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters! characters`)
}

// Iteration 3: Loops
let output = ""
for(let i = 0; i < hacker1.length; i++){
  output += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    output += " ";
}
}
console.log(output)

let reversedString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedString += hacker2[i];
}
console.log(reversedString)

// Bonus
if (hacker1 < hacker2) {
    console.log(`${hacker1} comes before ${hacker2}`);
} else if (hacker1 > hacker2) {
    console.log(`${hacker1} comes after ${hacker2}`);
} else {
    console.log(`${hacker1} is the same as ${hacker2}`);
}
