// Iteration 1: Names and Input

const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has
    ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}
    characters.`);
}

// Iteration 3: Loops let nameInCapital="" ; let nameInReverse="" ; 

let nameInCapital = "";

for (let i = 0; i < hacker1.length; i++) {

    nameInCapital += hacker1[i].toUpperCase();

        if (i !== hacker1.length) {
         nameInCapital += " ";
      }
}
console.log(nameInCapital);

let nameInReverse = "";

for (let i = hacker1.length-1; i >= 0; i--) {
    nameInReverse += hacker1[i];
}
console.log(nameInReverse);

if (hacker1.localeCompare(hacker2)<0) {
    console.log("The driver's name goes first."); 
} else if (hacker1.localeCompare(hacker2)>0) {
    console.log("Yo,the navigator goes definitely first.");
} else {
    console.log("What?! You both have the same name?");
}