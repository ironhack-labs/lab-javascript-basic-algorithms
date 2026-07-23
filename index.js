// Iteration 1: Names and Input
const hacker1 = "Bob";
const hacker2 = "Jason";
console.log(`The drivers name is ${hacker1}.`);
console.log(`The navigators name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has${hacker1.length}  characters`)
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops
const name = "John";
let reverseName = "";
let spacedOut = "";

for (let i = 0; i<name.length;i++){
    spacedOut += name[i].toUpperCase()

    if (i < name.length -1){
        spacedOut += " ";
    }
}

console.log(spacedOut);


for (let i = name.length -1; i >=0;i--){
    reverseName += name[i];
}
console.log(reverseName);

if (hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first.")
}
else if (hacker1[0] > hacker2[0]){
    console.log("Yo, the navigator goes first, definitely.");
}
else if (hacker1[0] === hacker2[0]){
    console.log("What?! You both have the same name?");
}