// Iteration 1: Names and Input
let hacker1 = "Luis";
let hacker2 = "Roberto"

let capitalName = "";
let reverseName = "";



console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker2.length > hacker1.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}!`)
}


// Iteration 3: Loops

for (i = 0; i < hacker1.length; i++) {

    //if (hacker1.length + 1 != hacker1.length ){

    capitalName = capitalName + hacker1[i] + " ";

    //} else { capitalName = capitalName + hacker1[i]; }
}

console.log(`${capitalName.toLocaleUpperCase()}`);

for (i = hacker2.length - 1; i >= 0; i--) {

    reverseName = reverseName + hacker2[i];


}

console.log(reverseName);

if (hacker1[0] < hacker2[0]) {

    console.log(`The Driver's name goes first.`);

} else if (hacker1[0] > hacker2[0]) {

    console.log(`Yo, the navigator goes first definetely.`);

} else {
    console.log(`What?! You both have the same name?`);
}