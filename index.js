// Iteration 1: Names and Input

let hacker1 = "Amr";

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Tanja";

console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length ) {

  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

}
else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}

else if (hacker1.length === hacker2.length) {

    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)

}

// Iteration 3: Loops

// 3.1
/* const driverSpace = hacker1[0] + " " + hacker1[1].toUpperCase() + " " + hacker1[2].toUpperCase();
console.log(driverSpace); */

let driverSpace = "";

for (let t = 0; t <= hacker1.length -1; t++) {

    driverSpace += hacker1[t].toUpperCase();
    driverSpace += " ";

}
   console.log(driverSpace);

// 3.2
/* const driverRev = hacker1[2] + hacker1[1] + hacker1[0];
console.log(driverRev);  */
let driverRev = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
    driverRev += hacker1[i];
}

console.log(driverRev);

// 3.3

const driver = "Tanja";
const navigator = "Amr";

if (driver.localeCompare(navigator) > 0) {
    console.log(`Yo, the navigator goes first, definitely.`); 

} else if (navigator.localeCompare(driver) < 0) {
    console.log(`The driver's name goes first.`);

} else if (driver.localeCompare(navigator) === 0) {
   console.log(`What?! You both have the same name?`);
}