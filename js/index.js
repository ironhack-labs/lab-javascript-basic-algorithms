let hacker1 = 'Luiz';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Andrea';
console.log(`The navigator's name is ${hacker2}`)


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let newHacker1 = ''

for (i = 0; i < hacker1.length; i++) {
    newHacker1 += hacker1[i].toUpperCase() + ' ';   
}

console.log(newHacker1)

let reverseHacker1 = ''

for (let j= hacker1.length-1; j >= 0; j--) {
  reverseHacker1 += hacker1[j]
}

console.log(reverseHacker1)

if (hacker1.localeCompare(hacker2)=== -1) {
  console.log("The driver's name goes first");
}

else if (hacker1.localeCompare(hacker2)=== 1) {
  console.log("Yo, the navigator goes first definitely.");
}

else {
  console.log("What?! You both have the same name?");
}
