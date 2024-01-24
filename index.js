// Iteration 1: Names and Input
const hacker1 = "Fran";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Oriol";

console.log(hacker1.length);
console.log(hacker2.length);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest , it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops


// 3.1



    let firstChar = hacker1[0];
    let secondChar = hacker1[1];
    let thirdChar = hacker1[2];
    let forthChar = hacker1[3];

    let spaceName = (`${firstChar} ${secondChar} ${thirdChar} ${forthChar}`);
    let spaceUpName = spaceName.toUpperCase()
    
   // console.log(spaceUpName);
   console.log(spaceUpName)


    // 3.2

    let reverseName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseName += hacker1[i];
    
}
console.log(reverseName)

// 3.3

let firstChar1 = hacker1[0];
let firstChar2 = hacker2[0];

if (firstChar1 < firstChar2) {
    console.log(`The driver's name goes first.`)
}
else if (firstChar1 > firstChar2) {
    console.log(`Yo, the navigator goes first, definitely.`)
}
else if (firstChar1 === firstChar2) {
    console.log(`What?! You both have the same name?`)
}

