// Iteration 1: Names and Input

let hacker1 = "Matthäus";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Anastasia";
console.log(`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
//console.log(hacker1.toUpperCase());

hacker1 = hacker1.toUpperCase();

let hacker1leer = "";


for (let i=0; i<hacker1.length; i++) {
    hacker1leer += (hacker1[i]+ " ");
}
console.log(hacker1leer);


let hacker2reverse = "";

for (let i = hacker2.length-1; i >= 0 ; i--) {
    hacker2reverse += hacker2[i];
}
console.log(hacker2reverse);

//let strings = [hacker1, hacker2];

hacker1 = hacker1.toLowerCase;
hacker2 = hacker2.toLowerCase;

if(hacker1 < hacker2) {
    console.log(`The driver's name goes first`);
} else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}