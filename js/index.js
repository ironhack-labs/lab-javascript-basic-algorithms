
console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Albert";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Madonna";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
let spaceOutName = "";
for (let i = 0; i < hacker1.length; i++) {
  spaceOutName+=hacker1[i].toUpperCase()+" ";
}
console.log(spaceOutName.trim());

let spaceOutName2 = "";
for (let i = 0; i < hacker2.length; i++) {
  spaceOutName2 += hacker2[i].toUpperCase()+" ";
}
console.log(spaceOutName2.trim());

let reverseName="";
for (let i = hacker2.length-1; i >= 0; i--) {
const Name2 =  hacker2[i];
reverseName += Name2 +" ";
}
console.log(reverseName);

if (hacker1< hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker2 > hacker1) {
 console.log(`Yo, the navigator goes first definitely.`);
} else {
 console.log(`What?! You both have the same name?`) }


