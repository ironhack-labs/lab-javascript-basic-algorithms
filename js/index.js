// Iteration 1: Names and Input
var hacker1 = "Manon";
console.log(`The driver's name is ${hacker1}`);
var hacker2 = "Malamine";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
var driversNameCapital="";

for(let i=0; i<hacker1.length; i++) {
    var nameLetter = hacker1[i];
    var nameUpperCase=nameLetter.toUpperCase();
    driversNameCapital= driversNameCapital + nameUpperCase + " ";
}
console.log(driversNameCapital);

var reverseName="";
for(let i=hacker1.length-1; i>=0; i--) {
    var nameLetter = hacker1[i];
    reverseName=reverseName+nameLetter;
}

console.log(reverseName)

var hacker = [hacker1, hacker2];
hacker.sort();
console.log(hacker);

if (hacker[0]===hacker1) {
    console.log("The driver's names goes first");
}
else if (hacker[0]===hacker2) {
    console.log("Yo, the navigator goes first definitely!");
}
else {console.log("What?! You both have the same name!")};

let LoremIpsum= "blabla blbla blabla blabla blabla blablablablablabla"

let i=0; 
while (i<LoremIpsum.length) {
    i++;
}

console.log(i);

// Bonus

var countOccurences=0;

for (let j=0; j<LoremIpsum.length; j++) {
    if (LoremIpsum[j]+ LoremIpsum[j+1]==="bl") {
        countOccurences++;
    }
}

console.log(`This string has ${countOccurences} times "bl"`)

