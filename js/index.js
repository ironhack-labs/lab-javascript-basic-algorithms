// Iteration 1: Names and Input

let hacker1 = "jesus";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "raul";
console.log(`The navigator's's name is ${hacker2}`);

// Iteration 2: Conditionals

let hacker1 = "jesus";
//console.log(`The driver's name is ${hacker1}`);
let hacker2 = "raul";
//console.log(`The The navigator's's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log("Wow, you both have equally long names, XX characters!")
}

// Iteration 3: Loops
let hacker1 = "jesus";

let hacker2 = "raul";

/*for (i = 0 ; i < hacker1.length; i++) {
  console.log(hacker1[i].toLocaleUpperCase())
}*/

/*for (i = hacker1.length - 1; i >= 0; i--) {
  console.log(hacker1[i].toLocaleUpperCase());
}
*/

console.log(hacker1.localeCompare(hacker2));
